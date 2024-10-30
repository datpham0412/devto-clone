import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import type { Profile } from "next-auth";

interface OAuthProfile extends Profile {
  login?: string;
  avatar_url?: string;
}

// Cast prisma to any to avoid type errors with model access
const db = prisma as any;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma), // Connects NextAuth to database
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account || !profile) return true;

      try {
        if (account.provider === "github") {
          // First check if there's an existing GitHub account
          const existingGithubAccount = await db.account.findFirst({
            where: {
              provider: "github",
              providerAccountId: account.providerAccountId,
            },
            include: {
              user: true,
            },
          });

          // If we found a GitHub account, use that user
          if (existingGithubAccount) {
            user.id = existingGithubAccount.user.id;
            return true;
          }

          // If no GitHub account exists, create a new user
          const newUser = await db.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image!,
              username: (profile as any).login,
              accounts: {
                create: {
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  token_type: account.token_type,
                  scope: account.scope,
                },
              },
            },
          });

          user.id = newUser.id;
          return true;
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.username = token.username as string;
        session.user.image = token.picture as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.username = (user as any).username;
        token.picture = user.image;
        token.name = user.name;
      }
      if (account && profile) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

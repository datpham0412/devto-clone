import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

// Cast prisma to any to avoid type errors with model access
const db = prisma as any;

// Add debug logging for environment variables
console.log("Auth Options Environment Variables:", {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NODE_ENV: process.env.NODE_ENV,
});

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma), // Connects NextAuth to database
  debug: true, // Enable NextAuth debug mode
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
      authorization: {
        params: {
          scope: "user",
        },
      },
      profile(profile) {
        console.log("GitHub Profile Raw Data:", profile);
        if (!profile.email) {
          console.error("No email in GitHub profile");
          throw new Error("No email provided by GitHub");
        }
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn Callback Details:", { user, account, profile });

      // For credentials login, just return true
      if (account?.provider === "credentials") {
        return true;
      }

      // For GitHub login, handle account creation/linking
      if (account?.provider === "github") {
        if (!account || !profile) {
          console.error("Missing account or profile for GitHub sign in");
          return false;
        }

        try {
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

          if (existingGithubAccount) {
            console.log("Found existing GitHub account");
            user.id = existingGithubAccount.user.id;
            return true;
          }

          // Check if user exists with same email
          const existingUser = await db.user.findUnique({
            where: {
              email: user.email!,
            },
          });

          if (existingUser) {
            console.log("Found existing user with same email");
            user.id = existingUser.id;
            // Link the GitHub account to existing user
            await db.account.create({
              data: {
                userId: existingUser.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                token_type: account.token_type,
                scope: account.scope,
              },
            });
            return true;
          }

          // Generate unique username if needed
          const baseUsername = (profile as any).login;
          let username = baseUsername;
          let counter = 1;

          while (true) {
            const exists = await db.user.findUnique({
              where: { username },
            });
            if (!exists) break;
            username = `${baseUsername}${counter}`;
            counter++;
          }

          console.log("Creating new user with username:", username);
          const newUser = await db.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image!,
              username: username,
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
        } catch (error) {
          console.error("Error in GitHub signIn:", error);
          return false;
        }
      }

      // For any other provider
      return true;
    },
    async session({ session, token }) {
      console.log("Session Callback:", { session, token });
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.username = token.username as string;
        session.user.image = token.picture as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("JWT Callback:", { token, user, account, profile });
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
  events: {
    async signIn(message) {
      console.log("SignIn Event:", message);
    },
    async signOut(message) {
      console.log("SignOut Event:", message);
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

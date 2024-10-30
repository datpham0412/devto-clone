import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerSession } from "next-auth";
import { prisma } from "~/lib/prisma";
import { authOptions } from "~/lib/auth";

export async function createTRPCContext(opts: {
  req: Request;
  resHeaders: Headers;
}) {
  const session = await getServerSession(authOptions);

  return {
    session,
    prisma,
    req: opts.req,
    resHeaders: opts.resHeaders,
  };
}

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;

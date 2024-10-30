import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const adminRouter = createTRPCRouter({
  getUsers: protectedProcedure
    .input(
      z.object({
        limit: z.number().optional(),
        cursor: z.string().nullish(), 
      }),
    )
    .query(async ({ ctx }) => {
      // Check if user is admin
      if (ctx.session.user.email !== "tiendat041202@gmail.com") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Only admin can access this resource",
        });
      }

      // This part queries data from the database server
      const db = ctx.prisma as any;
      const users = await db.user.findMany({
        include: {
          accounts: {
            select: {
              provider: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return users;
    }),
});

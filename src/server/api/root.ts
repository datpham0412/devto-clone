import { createTRPCRouter } from "./trpc";
import { adminRouter } from "./routers/admin";
import { articlesRouter } from "./routers/articles";

export const appRouter = createTRPCRouter({
  admin: adminRouter,
  articles: articlesRouter,
});

export type AppRouter = typeof appRouter;

import { router } from '../trpc';
import { authRouter } from './auth';
import { articlesRouter } from './articles';

export const appRouter = router({
  auth: authRouter,
  articles: articlesRouter,
});

export type AppRouter = typeof appRouter; 
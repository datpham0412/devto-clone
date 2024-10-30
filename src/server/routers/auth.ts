import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const authRouter = router({
  callback: publicProcedure
    .input(z.object({ 
      code: z.string(),
      next: z.string().default('/')
    }))
    .mutation(async ({ input, ctx }) => {
      const { code, next } = input;
      
      if (code) {
        await ctx.supabase.auth.exchangeCodeForSession(code);
      }
      
      return { next };
    }),
}); 
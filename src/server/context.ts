import type { inferAsyncReturnType } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function createContext({ req, resHeaders }: FetchCreateContextFnOptions) {
  const supabase = createRouteHandlerClient({ cookies });
  
  return {
    req,
    resHeaders,
    supabase,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>; 
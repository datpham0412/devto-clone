import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '~/server/routers/_app';
import { createContext } from '~/server/context';

// The [trpc] in brackets means it's a dynamic route in Next.js
// This file handles all tRPC API requests
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext({ req, resHeaders: new Headers() }),
  });

export { handler as GET, handler as POST }; 
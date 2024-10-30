import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "~/server/routers/_app";

// This creates the client-side tRPC hooks
export const trpc = createTRPCReact<AppRouter>();  // For use in React components

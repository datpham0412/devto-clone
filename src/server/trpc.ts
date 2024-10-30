// This is the core server-side tRPC configuration
import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import superjson from "superjson";

const t = initTRPC.context<Context>().create({
  transformer: superjson, // Handles data serialization
});

// These are the building blocks for creating type-safe procedures
export const router = t.router; // Creates API routers
export const publicProcedure = t.procedure; // Creates public endpoints
export const middleware = t.middleware; // For adding middleware

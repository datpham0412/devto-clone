// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Use a global variable to store the Prisma client instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Initialize the Prisma client, reusing the global instance if available
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Log all queries for debugging
  });

// In development, store the Prisma client instance globally to avoid re-instantiation
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

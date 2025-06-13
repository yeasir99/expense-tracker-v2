import { PrismaClient } from '@prisma/client';
// This file is used to create a singleton instance of PrismaClient

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
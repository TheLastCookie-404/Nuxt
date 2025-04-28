import { createTRPCRouter } from "~/server/trpc/trpc";
import helloRouter from "./hello";
import testRouter from "./test";

export const appRouter = createTRPCRouter({
  helloRouter,
  testRouter,
});

export type AppRouter = typeof appRouter;

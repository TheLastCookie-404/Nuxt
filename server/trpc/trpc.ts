import { initTRPC } from "@trpc/server";
import type { H3Event } from "h3";

export const createTRPCContext = async (event: H3Event) => {
  return { auth: event.context.auth };
};

const trpc = initTRPC.context().create();

export const createTRPCRouter = trpc.router;
export const createCallerFactory = trpc.createCallerFactory;
export const baseProcedure = trpc.procedure;

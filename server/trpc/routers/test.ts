import { baseProcedure, createTRPCRouter } from "~/server/trpc/trpc";
import { z } from "zod";

export const testRouter = createTRPCRouter({
  test: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `test ${opts.input.text}`,
      };
    }),
});

import { baseProcedure, createTRPCRouter } from "~/server/trpc/trpc";
import { z } from "zod";

const helloRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

export default helloRouter;

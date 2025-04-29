import { defineMongooseModel } from "#nuxt/mongoose";
import type { SchemaDefinition } from "nuxt/schema";

export const MessageSchema = defineMongooseModel<SchemaDefinition>({
  name: "Message",
  schema: {
    message: {
      type: "string",
      required: true,
      default: "lol",
    },
    slug: {
      type: "string",
      unique: true,
    },
  },
});

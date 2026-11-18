import { z } from "zod";

// Keep in sync with src/frontend/src/types/article.ts and docs/article-data.md.

export const articleBlockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("header"), header: z.string() }),
  z.object({ type: z.literal("sub-header"), header: z.string() }),
  z.object({ type: z.literal("text"), text: z.string() }),
  z.object({ type: z.literal("text-bold"), text: z.string() }),
  z.object({
    type: z.literal("image"),
    image_src: z.string(),
    image_description: z.string().optional(),
  }),
  z.object({ type: z.literal("video"), video_src: z.string() }),
  z.object({ type: z.literal("link"), link_title: z.string(), link: z.string() }),
  z.object({
    type: z.literal("table"),
    table: z.object({
      headers: z.array(z.string()).optional(),
      rows: z.array(z.array(z.string())),
    }),
    table_description: z.string().optional(),
  }),
  z.object({ type: z.literal("ordered-list"), items: z.array(z.string()) }),
  z.object({ type: z.literal("unordered-list"), items: z.array(z.string()) }),
]);

export const articleDataSchema = z.array(articleBlockSchema);

export type ArticleBlock = z.infer<typeof articleBlockSchema>;
export type ArticleData = z.infer<typeof articleDataSchema>;

import { boolean, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import type { ArticleData } from "../schemas/article.js";

// Shared with the live site. Describes existing tables only; never push or migrate.

export const research = pgTable("research", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title"),
  subtitle: text("subtitle"),
  previewImgSrc: text("preview_img_src"),
  articleData: jsonb("article_data").$type<ArticleData>(),
  publishedDate: timestamp("published_date", { withTimezone: true }),
  lastUpdatedDate: timestamp("last_updated_date", { withTimezone: true }),
  published: boolean("published"),
  category: text("category").$type<"tech" | "life">(),
});

export type Research = typeof research.$inferSelect;
export type NewResearch = typeof research.$inferInsert;

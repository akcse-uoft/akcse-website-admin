// Keep in sync with src/backend/src/schemas/article.ts and docs/article-data.md.

export type ArticleBlock =
  | { type: "header"; header: string }
  | { type: "sub-header"; header: string }
  | { type: "text"; text: string }
  | { type: "text-bold"; text: string }
  | { type: "image"; image_src: string; image_description?: string }
  | { type: "video"; video_src: string }
  | { type: "link"; link_title: string; link: string }
  | {
      type: "table";
      table: { headers?: string[]; rows: string[][] };
      table_description?: string;
    }
  | { type: "ordered-list"; items: string[] }
  | { type: "unordered-list"; items: string[] };

export type ArticleBlockType = ArticleBlock["type"];

export type ArticleData = ArticleBlock[];

export type ArticleCategory = "tech" | "life";

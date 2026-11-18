# article_data

`research.article_data` is an array of blocks rendered by the main site. Mirrored in
`src/frontend/src/types/article.ts` and `src/backend/src/schemas/article.ts`.

```ts
type ArticleBlock =
  | { type: "header"; header: string }
  | { type: "sub-header"; header: string }
  | { type: "text"; text: string }
  | { type: "text-bold"; text: string }
  | { type: "image"; image_src: string; image_description?: string }
  | { type: "video"; video_src: string }
  | { type: "link"; link_title: string; link: string }
  | { type: "table"; table: { headers?: string[]; rows: string[][] }; table_description?: string }
  | { type: "ordered-list"; items: string[] }
  | { type: "unordered-list"; items: string[] };
```

```json
[
  { "type": "header", "header": "Introduction" },
  { "type": "text", "text": "CRISPR<sup>1</sup> is ..." },
  { "type": "image", "image_src": "https://.../2605t-1.jpg", "image_description": "Figure 1" }
]
```

## Existing data

19 articles. `ordered-list` and `unordered-list` aren't used yet. The editor should tolerate:

- An extra `image_description` on one `video` block
- HTML tags in some `image_description` values
- Image URLs with trailing whitespace
- One file named with `l` instead of `ls` (`2604l-1.png`)

# Agent Guide

Follow [CONTRIBUTING.md](CONTRIBUTING.md). Context is in [docs/](docs/).

## Layout

```
src/frontend   Next.js 16 + React 19 + Tailwind 4 (see src/frontend/AGENTS.md)
src/backend    Express 5 + zod + Drizzle
```

Two independent npm apps. Run commands inside each app folder.

## Rules

- The database is shared with the live main site. No DDL or destructive SQL, and no
  `drizzle-kit push`/`migrate`.
- `article_data` must match [docs/article-data.md](docs/article-data.md). Keep
  `src/frontend/src/types/article.ts` and `src/backend/src/schemas/article.ts` in sync with it.
- Sanitize HTML in `text` blocks and `subtitle` before saving.
- Service-role and R2 keys are backend only. The frontend uses only `NEXT_PUBLIC_*` vars.
- Never commit or log secrets.
- Run `npm run check` in each app you changed.
- If `../akcse-website` exists, its renderer in `app/research/[id]/` shows how saved data is
  displayed. Read it but don't modify it.

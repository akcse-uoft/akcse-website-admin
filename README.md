# AKCSE Website Admin

Admin panel for writing and publishing research articles on [akcseuoft.ca](https://akcseuoft.ca).
Shares the Supabase database with [akcse-website](https://github.com/yujinkim0206/akcse-website).

| Path | Stack | Deploy |
|---|---|---|
| `src/frontend` | Next.js 16, React 19, TypeScript, Tailwind 4 | Vercel |
| `src/backend` | Express 5, TypeScript, zod, Drizzle | Render |

## Setup

Node 22 and npm.

```bash
cd src/backend
npm install
cp .env.example .env
npm run dev          # http://localhost:4000
```

```bash
cd src/frontend
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
```

## Commands

| Command | |
|---|---|
| `npm run dev` | Dev server |
| `npm run check` | Lint, typecheck, format check |
| `npm run format` | Format |
| `npm run build` | Production build |
| `npm run db:pull` | Backend only. Introspect the DB schema (read-only) |

## Docs

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [docs/project-context.md](docs/project-context.md)
- [docs/article-data.md](docs/article-data.md)
- [docs/deployment.md](docs/deployment.md)

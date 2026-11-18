# Deployment

| | Service | Root |
|---|---|---|
| Frontend | Vercel | `src/frontend` |
| Backend | Render | `src/backend` |
| Database, Auth | Supabase | |
| Images | Cloudflare R2 | |

Render: build `npm ci && npm run build`, start `npm start`, health check `/health`.

## Environment variables

Frontend:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_API_BASE_URL`

Backend:

- `PORT`
- `CORS_ORIGIN`: comma-separated origins
- `DATABASE_URL`: Supabase pooler connection string
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `R2_ACCOUNT_ID`, `R2_ACCESS_KEY`, `R2_SECRET_KEY`

## Vercel previews

Preview URLs differ per PR. For previews to work, the backend CORS and the Supabase Auth
redirect URLs must allow the project's `*.vercel.app` preview domain.

## Setup checklist

- [x] Repo scaffolded
- [ ] Invite collaborators
- [ ] Branch protection on `main`: PR required, 1 approval, CI passing, squash merge only, auto-delete branches
- [ ] Vercel project, env vars, custom domain (Cloudflare DNS, DNS only)
- [ ] Render service, env vars
- [ ] R2 CORS allowing PUT from the admin domain and localhost
- [ ] CMS-only R2 API token
- [ ] Supabase Auth redirect URLs

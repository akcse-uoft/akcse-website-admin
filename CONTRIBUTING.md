# Contributing

## Workflow

- Don't push to `main`.
- One branch per feature, created from the latest `main` (`auth`, `block-editor`, `image-upload`).
  Branches are deleted after merge.
- PRs are squash merged, so only the PR title ends up in `main`. Commit messages are up to you.
- One approval and passing CI to merge.
- Share a short plan in the team chat before starting.

```bash
git checkout main && git pull
git checkout -b block-editor
git push -u origin block-editor
```

## Shared database

The database is shared with the live site.

- Discuss any schema change (tables, columns, constraints, RLS, RPCs) with the team first.
- Never run `drizzle-kit push`, `migrate`, `drop`, or destructive SQL.
- `article_data` must follow [docs/article-data.md](docs/article-data.md). A new block type also needs
  a change in the main site repo.

## Secrets

- Only `.env.example` files are committed.
- If a secret is committed, tell the team so it can be rotated. The repo is public.
- New env vars go in the right `.env.example`.

## Before opening a PR

- `npm run check` passes in each app you changed.
- Docs are updated if setup or the API changed.
- New dependencies are explained in the PR.

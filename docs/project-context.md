# Project Context

## Overview

A content management system for the AKCSE UofT website. Authorized users can create, edit, and
publish research articles and manage images.

It shares the database and image storage with the main site, so all content must stay in the
formats the main site already reads.

- Scope: research articles, image upload, preview
- Possible additions: other site content such as members and events, subscriber notifications

## Team

| Area | Owner | GitHub |
|---|---|---|
| Repo, deployment, reviews | Yujin | yujinkim0206 |
| Backend API, DB | Daechan | daechan0615 |
| Auth | Mibae | LillyKim06 |
| Frontend | Yuntae | hyt007v |

## Requirements

- Supabase Auth login, limited to an email allowlist.
- Block editor: add, edit, reorder, delete blocks. Saved as `article_data`.
- Article form: title, subtitle, category, thumbnail, published.
- Image upload through R2 presigned URLs, with automatic file names. External URLs are allowed.
- Preview that matches the main site.

## Database

Tables: `research`, `events`, `members`, `carousel`. All `id`s are uuid with `gen_random_uuid()`.

`research`:

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | |
| `title` | text | |
| `subtitle` | text | Nullable |
| `preview_img_src` | text | Thumbnail URL |
| `article_data` | jsonb | [Format](article-data.md) |
| `published_date` | timestamptz | |
| `last_updated_date` | timestamptz | Currently null for every row |
| `published` | bool | Only `true` is shown on the site |
| `category` | text | `tech` or `life` |

`view_count` doesn't exist yet. It's being added in the main repo.

Other tables:

- `events`: `title`, `description`, `img_src`, `video_src`, `date`, `public`
- `members`: `name`, `role`, `grade`, `major`, `image`, `title`
- `carousel`: `src`, `alt`, `order`

The anon key can read all four tables.

## R2

Buckets: `research`, `members`, `events`, `hallasan`.
`research` is served from `https://pub-a9bab015c66840998c4582a543c15b88.r2.dev`.

| Bucket | Naming | Example |
|---|---|---|
| research | `YYMM` + dept code + `-` + order | `2605t-1.png`, `2606ls-1.png` |
| members | `First_Last` | `Yujin_Kim.jpg` |
| events | `YYMMDD` | `261024.jpg` |

Dept codes: `tech` → `t`, `life` → `ls`. Order is the image's position in the article. Thumbnails
use the same naming as body images. Most existing images are external URLs.

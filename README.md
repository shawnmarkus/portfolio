# Shivam Sharma — Portfolio

React + Vite portfolio driven by a single JSON file.

## Quick start

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/   Navbar, Hero, Skills, Projects, Experience, Blogs, Contact
  hooks/        useInView.js  usePortfolioData.js
  data/         portfolio.json   ← all your content lives here
  index.css     global design tokens
```

## Update content without redeploying

1. Host `src/data/portfolio.json` in a public GitHub repo
2. Get the raw URL: `https://raw.githubusercontent.com/USER/REPO/main/portfolio.json`
3. Copy `.env.example` → `.env` and set `VITE_DATA_URL=<your url>`
4. Deploy once — future updates = push new JSON, done.

## Fill in before going live

| Field              | What to add                       |
| ------------------ | --------------------------------- |
| `meta.avatar`      | URL to your headshot              |
| `meta.resume_url`  | Hosted PDF URL (Drive / S3 / any) |
| `contact.github`   | Your GitHub URL                   |
| `contact.linkedin` | Your LinkedIn URL                 |
| `projects[*].link` | Repo or live URL per project      |

## Add a blog post

```json
{
  "tag": "DevOps",
  "title": "How I cut CI build times by 40%",
  "excerpt": "A walkthrough of the caching strategy...",
  "date": "Apr 2026",
  "link": "https://dev.to/your-post"
}
```

# UP — Digital Marketing Agency Website

A React + Tailwind CSS site for **UP**, a Chennai digital marketing agency
offering shoots, reels, ads and website builds for local businesses.
Scroll animations and the hero's self-drawing growth line are built with
**Framer Motion**.

## Project structure

```
up-agency-project/
├── index.html            entry HTML, loads fonts (Sora / Inter / IBM Plex Mono)
├── package.json
├── vite.config.js
├── vercel.json            client-side routing rewrite (needed for /blog, /blog/:slug on Vercel)
├── tailwind.config.js    brand colors (cream / ink / yellow / teal) + fonts
├── postcss.config.js
├── public/
│   └── images/           drop your photos & logo here — see images/README.md
└── src/
    ├── main.jsx           React root, wraps the app in BrowserRouter
    ├── index.css          Tailwind directives + base styles
    ├── App.jsx             app shell — header, footer, and page routing
    ├── components/
    │   ├── Header.jsx      nav — shared across every page
    │   ├── Footer.jsx      shared across every page
    │   ├── Reveal.jsx       scroll-in animation wrapper
    │   ├── Pill.jsx          small rounded badge used in section labels
    │   ├── LogoMark.jsx      logo image, used in Header + Footer
    │   └── ImagePlaceholder.jsx   dashed photo-slot placeholder
    ├── data/
    │   └── blogPosts.js     all blog post content — add a post by adding an entry here
    └── pages/
        ├── Home.jsx          the homepage (hero, services, blog preview, pricing, etc.)
        ├── BlogList.jsx       full blog listing at /blog
        └── BlogPost.jsx        individual post at /blog/:slug
```

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

The `dist/` folder is a plain static site — deploy it anywhere that serves
static files (Netlify, Vercel, GitHub Pages, cPanel, etc.). If you're on
Vercel, `vercel.json` is already set up so refreshing `/blog` or any post
URL doesn't 404 — other static hosts may need an equivalent "rewrite
everything to index.html" rule for client-side routing to work.

## Adding real photos

Every placeholder tile (dashed border, camera icon) marks a spot for a
real photo. Put your files in `public/images/` and follow the swap
instructions in `public/images/README.md`.

## Adding or editing blog posts

Open `src/data/blogPosts.js` — each post is one object in the `BLOG_POSTS`
array with a `slug`, `icon`, `title`, `excerpt`, `date`, `readTime`, and
`content` (an array of paragraphs). Add a new object to add a new post —
both the homepage preview (latest 3) and the full `/blog` list pull from
this same array automatically. The `icon` field must match one of the
Lucide icon names already imported at the top of `BlogList.jsx` and
`BlogPost.jsx` (`Search`, `Video`, `TrendingUp`) — import more from
[lucide.dev/icons](https://lucide.dev/icons) if you want a wider variety.

## Editing content

- **Services & rate card** — `SERVICES` array in `src/pages/Home.jsx`
- **Client names** — `CLIENTS` array in `src/pages/Home.jsx`
- **Process steps** — `STEPS` array in `src/pages/Home.jsx`
- **WhatsApp numbers** — `WHATSAPP_NUMBERS` array in `src/components/Header.jsx`
- **Colors** — `tailwind.config.js` (`cream`, `ink`, `yellow`, `teal`)

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
├── tailwind.config.js    brand colors (cream / ink / yellow / teal) + fonts
├── postcss.config.js
├── public/
│   └── images/           drop your photos here — see images/README.md
└── src/
    ├── main.jsx           React root
    ├── index.css          Tailwind directives + base styles
    └── App.jsx             the whole site (nav, hero, services, pricing, footer)
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
static files (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Adding real photos

Every placeholder tile (dashed border, camera icon) marks a spot for a
real photo. Put your files in `public/images/` and follow the swap
instructions in `public/images/README.md`.

## Editing content

- **Services & rate card** — `SERVICES` array near the top of `src/App.jsx`
- **Client names** — `CLIENTS` array
- **Process steps** — `STEPS` array
- **WhatsApp numbers** — `WHATSAPP_NUMBERS` array
- **Colors** — `tailwind.config.js` (`cream`, `ink`, `yellow`, `teal`)

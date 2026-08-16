/* ---------------------------------------------------------
   BLOG POSTS
   Each post needs a unique `slug` (used in the URL, e.g.
   /blog/seo-checklist-chennai-small-business). To add a new
   post, copy an existing object and change every field — the
   blog list page and individual post pages both read from
   this file automatically, nothing else needs editing.

   `icon` must be a Lucide icon name (see lucide.dev/icons) —
   import it in BlogList.jsx / BlogPost.jsx the same way the
   existing ones are imported.

   `content` is an array of paragraphs, rendered in order.
--------------------------------------------------------- */

export const BLOG_POSTS = [
  {
    slug: "seo-checklist-chennai-small-business",
    icon: "Search",
    title: "A simple SEO checklist for Chennai shops and clinics",
    excerpt:
      "Ten things worth doing before you pay for a single ad — most of them free.",
    date: "August 2026",
    readTime: "5 min read",
    content: [
      "Most small businesses assume SEO means hiring someone expensive, or waiting six months for results. For a local clinic, studio or shop, the highest-leverage moves are simpler than that — and several of them cost nothing but time.",
      "Start with your Google Business Profile. For searches like \"skin clinic near me\" or \"hair studio Chennai\", this listing matters more than almost anything on your website. Claim it, pick accurate categories, add real photos, and ask happy customers for reviews. This is what shows up in the map pack — where most local searches actually convert.",
      "Next, make sure your business name, phone number and address are written identically everywhere — your website, your Google listing, JustDial, your Instagram bio. Small mismatches quietly hurt how much Google trusts your listing.",
      "On the website itself: a clear page title, a one-line description of what you do and where, and alt text on every photo written like a person would search — not \"photo1.jpg\" but \"skin clinic reception in Adyar, Chennai\".",
      "Finally, page speed. A single unoptimised photo can slow a whole page down. Compress images before uploading, and keep anything above the fold light.",
      "None of this requires a developer or a monthly SEO retainer to start. It requires about an hour and a working Google account — the kind of thing we help clients knock out in the first week of working together.",
    ],
  },
  {
    slug: "vertical-video-local-business",
    icon: "Video",
    title: "Why vertical video wins for local businesses right now",
    excerpt:
      "Reels outperform static posts for clinics and studios — here's the format that actually gets watched.",
    date: "July 2026",
    readTime: "4 min read",
    content: [
      "If you're only posting photos to Instagram, you're leaving reach on the table. Reels are shown to a much wider audience than static posts, including people who don't already follow you — which is exactly the audience a local business needs to reach.",
      "The format doesn't need to be complicated. A 15-second clip of a treatment in progress, a client walking out happy, or a product being packed for delivery does more than a polished, over-produced ad. People trust what looks real.",
      "The first second matters most. Whatever makes someone stop scrolling — a face, a transformation, a bold line of text — needs to happen immediately, not after a slow intro.",
      "Consistency beats perfection. Three simple reels a week, filmed on a phone, will outperform one perfectly lit shoot posted once a month. Momentum is what the algorithm — and your following — responds to.",
      "This is the format we lean on hardest for our clinic and studio clients, because it's the cheapest way to reach new people without paying for ads.",
    ],
  },
  {
    slug: "replica-xi-growth-case-study",
    icon: "TrendingUp",
    title: "What we learned growing Replica XI's Instagram from zero",
    excerpt:
      "A behind-the-scenes look at the first three months running ads and reels for our own store.",
    date: "June 2026",
    readTime: "6 min read",
    content: [
      "Replica XI is our own store, so it's the one account where we could try things without worrying about a client's patience. That made it a useful testing ground for what actually moves the needle for a small e-commerce brand.",
      "The first month was mostly noise — trying different content styles to see what got saved and shared, rather than just liked. Product-in-hand shots outperformed flat-lay photography by a wide margin, which surprised us.",
      "By month two, we narrowed down to two content types: quick unboxing-style reels, and short clips answering questions we kept getting in DMs (sizing, delivery time, authenticity). Both became repeatable formats we could shoot in batches.",
      "Paid ads only started working once the organic content had already built some trust — running ads to a page with no proof points was expensive and slow. Once there was a visible track record, cost per result dropped noticeably.",
      "The biggest lesson: consistency in posting mattered more than production quality. A rougher reel posted on schedule beat a polished one posted late, every time.",
    ],
  },
];

import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Search, Video, TrendingUp, ArrowLeft, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { BLOG_POSTS } from "../data/blogPosts.js";

const ICONS = { Search, Video, TrendingUp };

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // unknown slug — send back to the blog list rather than a blank page
  if (!post) return <Navigate to="/blog" replace />;

  const Icon = ICONS[post.icon] ?? Search;
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-ink/50 transition-colors hover:text-teal"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all posts
        </Link>

        <div className="mt-6 grid h-12 w-12 place-items-center rounded-xl bg-yellow/70 text-ink">
          <Icon className="h-6 w-6" />
        </div>

        <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 font-mono text-[12.5px] text-ink/45">
          {post.date} · {post.readTime}
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10 space-y-5">
        {post.content.map((para, i) => (
          <p key={i} className="text-[15.5px] leading-relaxed text-ink/80">
            {para}
          </p>
        ))}
      </Reveal>

      <Reveal delay={160} className="mt-14 rounded-2xl bg-ink p-8 text-cream sm:p-10">
        <p className="font-display text-xl font-semibold leading-snug">
          Want this kind of result for your business?
        </p>
        <p className="mt-2 text-[14px] text-cream/70">
          A short WhatsApp chat is all it takes to start.
        </p>
        <a
          href="https://wa.me/919094175705"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-3 text-[14px] font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp us
        </a>
      </Reveal>

      {more.length > 0 && (
        <Reveal delay={220} className="mt-16">
          <p className="font-mono text-[11px] font-medium tracking-widest text-teal">
            READ NEXT
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="rounded-2xl border border-ink/10 bg-white/50 p-5 transition-colors hover:border-ink/25"
              >
                <h3 className="font-display text-[15px] font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 font-mono text-[11.5px] text-ink/45">
                  {p.date} · {p.readTime}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      )}
    </article>
  );
}

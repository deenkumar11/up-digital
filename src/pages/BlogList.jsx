import React from "react";
import { Link } from "react-router-dom";
import { Search, Video, TrendingUp, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Pill from "../components/Pill.jsx";
import { BLOG_POSTS } from "../data/blogPosts.js";

const ICONS = { Search, Video, TrendingUp };

export default function BlogList() {
  return (
    <>
      {/* header strip, matches the tone of the hero on other pages */}
      <section className="border-b border-ink/10 bg-yellow/40 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Pill className="border-transparent bg-cream">FROM UP</Pill>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Notes on growing a small business online.
            </h1>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/70">
              Short, practical write-ups from the shoots, ads and sites we
              run — no jargon, nothing you need an agency to translate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* post grid — same card language as the services section */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => {
            const Icon = ICONS[post.icon] ?? Search;
            return (
              <Reveal key={post.slug} delay={i * 70}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/25 hover:shadow-[0_20px_40px_-24px_rgba(28,27,24,0.4)]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-yellow/70 text-ink">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-display text-[17px] font-bold leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink/65">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[11.5px] text-ink/45">
                      {post.date} · {post.readTime}
                    </span>
                    <ArrowRight className="h-4 w-4 text-teal opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

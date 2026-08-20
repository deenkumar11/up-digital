import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Film,
  Instagram,
  Globe2,
  RefreshCw,
  Sparkles,
  MessageCircle,
  Check,
  Play,
  Target,
  Users,
  Search,
  Video,
  TrendingUp,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Pill from "../components/Pill.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import { WHATSAPP_NUMBERS } from "../components/Header.jsx";
import { BLOG_POSTS } from "../data/blogPosts.js";
import { a } from "framer-motion/client";

const BLOG_ICONS = { Search, Video, TrendingUp };

/* ---------- data drawn from UP's real service list ---------- */
const SERVICES = [
  {
    icon: Film,
    name: "Brand films & product shoots",
    desc: "On-location shoots that make the product the hero — cut for reels, ads and your feed in one session.",
    price: "₹6,000 – ₹10,000 / shoot",
  },
  {
    icon: Camera,
    name: "Reels & short-form cuts",
    desc: "Fast-turnaround edits built for retention: hooks in the first second, captions baked in.",
    price: "₹1,500 – ₹3,000 / reel",
  },
  {
    icon: Instagram,
    name: "Instagram & Meta ads",
    desc: "Targeting, creative and weekly optimisation. Ad spend is billed separately, straight to your account.",
    price: "₹6,000 – ₹12,000 / month",
  },
  {
    icon: Globe2,
    name: "Website builds",
    desc: "A fast, mobile-first site that turns visits into calls — built once, yours forever.",
    price: "₹12,000 – ₹25,000 one-time",
  },
  {
    icon: RefreshCw,
    name: "Always-on management",
    desc: "Posting, replies and reporting handled every week, so the page never goes quiet.",
    price: "₹7,000 – ₹10,000 / month",
  },
  {
    icon: Sparkles,
    name: "UP Growth Package",
    desc: "Shoot, ads and maintenance under one retainer — our most-booked plan for businesses ready to compound.",
    price: "₹15,000 – ₹20,000 / month",
  },
];

const CLIENTS = [
  { name: "Replica XI", url: "https://replicaxi.in" },
  { name: "Kitchen Herald", url: null },
];

const RECENT_WORK = [
  { label: "Replica XI — product shoot", hint: "1080×1080 · square" },
  { label: "Kitchen Herald — LinkedIn campaign", hint: "1080×1080 · square" },
];

const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    desc: "15 minutes on what your business needs right now — no deck, just questions.",
  },
  {
    n: "02",
    title: "Shoot or build",
    desc: "Our photographer and web team get to work while you keep running the business.",
  },
  {
    n: "03",
    title: "Launch & advertise",
    desc: "Content goes live, ads go up, and we watch the first week of numbers closely.",
  },
  {
    n: "04",
    title: "Grow, monthly",
    desc: "Every month after is reporting, refining and pushing the number further up.",
  },
];

export default function Home() {
  const waLink = `https://wa.me/91${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(
    "Hi UP! I'd like to talk about growing my business."
  )}`;

  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-yellow">
        <div className="pointer-events-none absolute -right-10 top-16 hidden text-ink/10 sm:block">
          <Sparkles className="h-16 w-16" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-28 pt-14 sm:px-8 sm:pt-20">
          <Reveal>
            <Pill className="border-transparent bg-cream">
              <Target className="h-3 w-3" /> CHENNAI · DIGITAL MARKETING AGENCY
            </Pill>
          </Reveal>

          <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <Reveal delay={80}>
              <h1 className="font-display text-[13.5vw] font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                We take small
                <br />
                businesses{" "}
                <span className="relative inline-block">
                  up.
                  <ArrowUpRight
                    className="absolute -right-9 -top-3 h-7 w-7 text-teal sm:-right-11 sm:-top-4 sm:h-9 sm:w-9"
                    strokeWidth={3}
                  />
                </span>
              </h1>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink/75">
                Shoots, reels, ads and websites for clinics, studios and
                shops around the city — run by a small team that answers
                its own WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-cream transition-transform hover:scale-[1.03] active:scale-95"
                >
                  Book a free discovery call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-cream/70 px-5 py-3 text-[14px] font-semibold transition-colors hover:bg-cream"
                >
                  See rate card
                </a>
              </div>

              <p className="mt-4 font-mono text-[12.5px] text-ink/60">
                First client this quarter gets one service on us.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <img
                src="/images/hero-right.svg"
                alt=""
                className="mx-auto w-full max-w-md"
              />
            </Reveal>
          </div>

          {/* photo collage — swap each tile for a real shoot photo */}
          <Reveal delay={260} className="mt-14">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <img
                src="/images/team-at-work.webp"
                alt="UP team at work"
                className="aspect-[4/5] w-full rounded-2xl object-cover rotate-[-1.5deg]"
              />
              <img
                src="/images/on-location-shoot.webp"
                alt="UP on-location shoot"
                className="aspect-[4/5] w-full rounded-2xl object-cover rotate-[1deg] sm:mt-4"
              />
              <img
                src="/images/client-meeting.webp"
                alt="UP client meeting"
                className="aspect-[4/5] w-full rounded-2xl object-cover rotate-[1.5deg]"
              />
              <img
                src="/images/editing-session.webp"
                alt="UP editing session"
                className="aspect-[4/5] w-full rounded-2xl object-cover rotate-[-1deg] sm:mt-4"
              />
            </div>
          </Reveal>
        </div>

        {/* wave divider, echoing the reference layout */}
        <svg className="absolute -bottom-px left-0 w-full text-cream" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,64 C240,10 480,90 720,58 C960,26 1200,84 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
      </section>

      {/* CLIENT MARQUEE + RECENT WORK */}
      <section id="work" className="border-b border-ink/10 bg-cream py-16">
        <Reveal>
          <p className="mb-5 text-center font-mono text-[11px] font-medium tracking-widest text-ink/45">
            BUSINESSES WE'RE GROWING RIGHT NOW
          </p>
        </Reveal>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
              {[...CLIENTS, ...CLIENTS].map((c, i) =>
                c.url ? (
                  <a
                    key={i}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl font-bold text-ink/20 transition-colors hover:text-ink/60 sm:text-3xl"
                  >
                    {c.name}
                  </a>
                ) : (
                  <span key={i} className="font-display text-2xl font-bold text-ink/20 sm:text-3xl">
                    {c.name}
                  </span>
                )
              )}
          </div>
        </div>

        {/* recent-work samples — swap for real before/after or shoot stills */}
        <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {RECENT_WORK.map((item) =>
              item.image ? (
                <img
                  key={item.label}
                  src={item.image}
                  alt={item.label}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              ) : (
                <ImagePlaceholder key={item.label} label={item.label} hint={item.hint} aspect="aspect-square" />
              )
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-lg">
          <span className="font-mono text-[11px] font-medium tracking-widest text-teal">WHAT WE DO</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Everything a local business needs online, none of the agency bloat.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isFeatured = i === SERVICES.length - 1;
            return (
              <Reveal key={s.name} delay={i * 70}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`h-full rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(28,27,24,0.4)] ${
                    isFeatured
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/10 bg-white/50 hover:border-ink/25"
                  }`}
                >
                  <div className={`grid h-11 w-11 place-items-center rounded-xl ${isFeatured ? "bg-yellow text-ink" : "bg-yellow/70 text-ink"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-[17px] font-bold">{s.name}</h3>
                  <p className={`mt-2 text-[13.5px] leading-relaxed ${isFeatured ? "text-cream/75" : "text-ink/65"}`}>
                    {s.desc}
                  </p>
                  <p className={`mt-4 font-mono text-[12.5px] font-medium ${isFeatured ? "text-yellow" : "text-teal"}`}>
                    {s.price}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BLOG PREVIEW — same card language as Services, links out to full posts */}
      <section id="blog" className="bg-white/40 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-lg">
              <span className="font-mono text-[11px] font-medium tracking-widest text-teal">FROM THE BLOG</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Notes on growing a small business online.
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-medium text-teal hover:underline"
            >
              View all posts <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, i) => {
              const Icon = BLOG_ICONS[post.icon] ?? Search;
              return (
                <Reveal key={post.slug} delay={i * 70}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/25 hover:shadow-[0_20px_40px_-24px_rgba(28,27,24,0.4)]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-yellow/70 text-ink">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-[17px] font-bold leading-snug">
                      {post.title}
                    </h3>
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
        </div>
      </section>

      {/* FOUNDER / STORY BLOCK */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <ImagePlaceholder
                label="Founder portrait"
                hint="1080×1350 · portrait"
                aspect="aspect-[4/5]"
                className="hidden sm:flex"
              />
              <div className="relative overflow-hidden rounded-2xl bg-ink p-10 text-cream sm:p-12">
                <Users className="h-8 w-8 text-yellow" />
                <p className="mt-6 font-display text-xl font-semibold leading-snug sm:text-2xl">
                  "We keep the team small on purpose — a photographer, a
                  marketer and me on every account, so nothing gets handed
                  off and forgotten."
                </p>
                <p className="mt-5 font-mono text-[13px] text-cream/60">— UP, Founder</p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow px-4 py-2.5 text-[13px] font-semibold text-ink transition-transform hover:scale-[1.03]">
                  <Play className="h-3.5 w-3.5" /> Watch how we shoot
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="font-mono text-[11px] font-medium tracking-widest text-teal">WHY UP</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Built for the businesses everyone else skips.
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/70">
              Clinics, studios and neighbourhood shops don't need a national
              campaign — they need a page that looks trustworthy, a feed
              that doesn't go quiet, and someone who picks up the phone.
              That's the whole brief, every time.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "One point of contact from shoot to ad report",
                "Rates built for local budgets, not enterprise retainers",
                "Everything — shoot, reel, ad, site — under one roof",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-yellow">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-lg">
          <span className="font-mono text-[11px] font-medium tracking-widest text-teal">HOW IT RUNS</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Four steps, repeated every month.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="bg-cream">
              <div className="h-full p-7">
                <span className="font-mono text-[13px] font-medium text-ink/35">{s.n}</span>
                <h3 className="mt-3 font-display text-[16px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-ink py-24 text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-lg">
            <span className="font-mono text-[11px] font-medium tracking-widest text-yellow">RATE CARD</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Straightforward pricing, no proposal deck required.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10 overflow-hidden rounded-2xl border border-cream/15">
            <table className="w-full border-collapse text-left text-[13.5px]">
              <thead>
                <tr className="border-b border-cream/15 font-mono text-cream/50">
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Rate</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((s, i) => (
                  <tr key={s.name} className={i !== SERVICES.length - 1 ? "border-b border-cream/10" : ""}>
                    <td className="px-6 py-4 font-medium">{s.name}</td>
                    <td className="px-6 py-4 font-mono text-yellow">{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 font-mono text-[12.5px] text-cream/45">
              Ad spend for Instagram &amp; Meta campaigns is billed directly to your ad account, separate from the management fee.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-yellow py-24">
        <div className="pointer-events-none absolute -left-8 bottom-8 hidden text-ink/10 sm:block">
          <Sparkles className="h-20 w-20" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Tell us about your business. We'll tell you what's next.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] text-ink/75">
              A short call, no pressure — and the first service is free for
              our next new client.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {WHATSAPP_NUMBERS.map((n) => (
                <a
                  key={n}
                  href={`https://wa.me/91${n}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-cream transition-transform hover:scale-[1.03] active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  +91 {n}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

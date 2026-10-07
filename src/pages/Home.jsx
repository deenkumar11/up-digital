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
  Send,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Pill from "../components/Pill.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import { WHATSAPP_NUMBERS } from "../components/Header.jsx";
import { BLOG_POSTS } from "../data/blogPosts.js";

const BLOG_ICONS = { Search, Video, TrendingUp };

/* ---------- data drawn from UP's real service list ---------- */
export const SERVICES = [
  {
    slug: "brand-films-product-shoots",
    icon: Film,
    name: "Brand films & product shoots",
    desc: "On-location shoots that make the product the hero — cut for reels, ads and your feed in one session.",
    includes: "A pre-shoot brief, shot planning, on-location photography or video, and edited assets sized for your channels.",
    outcome: "A reusable library of polished product and brand visuals for launches, ads, and everyday posts.",
    bestFor: "Product launches, menus, catalogues, and brands that need fresh visuals.",
  },
  {
    slug: "reels-short-form-cuts",
    icon: Camera,
    name: "Reels & short-form cuts",
    desc: "Fast-turnaround edits built for retention: hooks in the first second, captions baked in.",
    includes: "A strong opening hook, pacing and cuts, on-screen captions, music selection, and vertical exports.",
    outcome: "Ready-to-publish short videos that make your offer easy to understand and keep viewers watching.",
    bestFor: "Teams with existing footage or brands that want a consistent short-form presence.",
  },
  {
    slug: "instagram-meta-ads",
    icon: Instagram,
    name: "Instagram & Meta ads",
    desc: "Targeting, creative and weekly optimisation. Ad spend is billed separately, straight to your account.",
    includes: "Campaign setup, audience and placement planning, creative guidance, and regular performance reviews.",
    outcome: "A measured path from local reach to enquiries, with ad spend kept in your own account.",
    bestFor: "Businesses ready to promote a service, offer, launch, or location to a defined audience.",
  },
  {
    slug: "website-builds",
    icon: Globe2,
    name: "Website builds",
    desc: "A fast, mobile-first site that turns visits into calls — built once, yours forever.",
    includes: "Page and content planning, responsive design, core on-page SEO, contact calls to action, and launch support.",
    outcome: "A clear, mobile-friendly home for your business that helps visitors understand your offer and take action.",
    bestFor: "Businesses that need a first website or want to replace an outdated one.",
  },
  {
    slug: "always-on-management",
    icon: RefreshCw,
    name: "Always-on management",
    desc: "Posting, replies and reporting handled every week, so the page never goes quiet.",
    includes: "A practical content calendar, post scheduling, routine community replies, and a monthly performance summary.",
    outcome: "A reliably active social presence and a clearer view of which content connects with customers.",
    bestFor: "Busy owners who want consistent social channels without managing every post themselves.",
  },
  {
    slug: "up-growth-package",
    icon: Sparkles,
    name: "UP Growth Package",
    desc: "Shoot, ads and maintenance under one retainer — our most-booked plan for businesses ready to compound.",
    includes: "A tailored mix of content shoots, short-form edits, campaign management, and ongoing channel support.",
    outcome: "One joined-up monthly plan where creative, distribution, and upkeep work toward the same goals.",
    bestFor: "Businesses ready to combine several services and build momentum month over month.",
  },
];

const CLIENTS = [
  { name: "Replica XI", url: "https://replicaxi.in" },
  { name: "Kitchen Herald", url: null },
];

const RECENT_WORK = [
  {
    client: "Replica XI",
    service: "Product photography",
    title: "A closer look at the product.",
    description: "A product shoot for Replica XI, with the Mexico shirt photographed on location.",
    image: "/images/replica.png",
    alt: "Mexico football shirt photographed outdoors for Replica XI",
    url: "https://replicaxi.in",
  },
  {
    client: "Kitchen Herald",
    service: "LinkedIn campaign",
    title: "A stronger presence for food industry media.",
    description: "A LinkedIn campaign creative featuring Kitchen Herald’s B2B culinary media positioning.",
    image: "/images/herald-linkedin.png",
    alt: "Kitchen Herald LinkedIn company page and culinary media branding",
    url: null,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Talk through your goals",
    desc: "We learn about your business, priorities, audience, and what you want to improve.",
  },
  {
    n: "02",
    title: "Get a clear scope",
    desc: "We recommend the right service mix, deliverables, timing, and a tailored quote before work begins.",
  },
  {
    n: "03",
    title: "Create and launch",
    desc: "We produce the agreed work, share it with you, and prepare it for publishing or launch.",
  },
  {
    n: "04",
    title: "Review what’s next",
    desc: "For ongoing work, we review progress together and shape the next set of priorities.",
  },
];

const FAQS = [
  {
    question: "How do you decide what a project will cost?",
    answer: "We price around the scope: the services, deliverables, schedule, and support you need. Tell us about the project through the quote form and we’ll recommend a scope before you commit.",
  },
  {
    question: "Is advertising spend included in your fee?",
    answer: "No. Meta advertising spend is separate from the service fee and is paid directly from your own ad account.",
  },
  {
    question: "How long will my project take?",
    answer: "Timing depends on the work and how quickly we can receive feedback and materials. We’ll agree on the schedule with you as part of the project scope.",
  },
  {
    question: "What should I prepare before we talk?",
    answer: "A rough idea of your goals, audience, services, and any existing photos, brand materials, or website is helpful. You don’t need a polished brief to get started.",
  },
  {
    question: "Can I start with just one service?",
    answer: "Yes. You can enquire about a single shoot, a reel batch, a website, or another focused project. Ongoing support is also available if it fits your needs.",
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
                  Explore packages
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
            SELECTED CLIENT WORK
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

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          {RECENT_WORK.map((item, i) => (
            <Reveal key={item.client} delay={i * 80}>
              <article className="h-full overflow-hidden rounded-2xl border border-ink/10 bg-white/60">
                <img src={item.image} alt={item.alt} className="aspect-[16/10] w-full object-cover object-top" />
                <div className="p-6">
                  <p className="font-mono text-[11px] font-medium tracking-widest text-teal">{item.client} · {item.service}</p>
                  <h2 className="mt-2 font-display text-xl font-bold">{item.title}</h2>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/65">{item.description}</p>
                  {item.url && <a href={item.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-teal hover:underline">Visit Replica XI <ArrowRight className="h-3.5 w-3.5" /></a>}
                </div>
              </article>
            </Reveal>
          ))}
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
                  className={`flex h-full flex-col rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(28,27,24,0.4)] ${
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
                  <div className={`mt-5 flex-1 space-y-3 border-t pt-4 text-[13px] leading-relaxed ${isFeatured ? "border-cream/15 text-cream/75" : "border-ink/10 text-ink/70"}`}>
                    <p><strong className={isFeatured ? "text-cream" : "text-ink"}>What’s included:</strong> {s.includes}</p>
                    <p><strong className={isFeatured ? "text-cream" : "text-ink"}>What you get:</strong> {s.outcome}</p>
                    <p><strong className={isFeatured ? "text-cream" : "text-ink"}>A good fit for:</strong> {s.bestFor}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-5">
                    <a href="#quote" className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold ${isFeatured ? "bg-yellow text-ink" : "bg-ink text-cream"}`}>
                      Get a quote <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <Link to={`/services/${s.slug}`} className={`inline-flex w-fit items-center gap-1 text-[12.5px] font-medium ${isFeatured ? "text-cream/75 hover:text-yellow" : "text-teal hover:underline"}`}>
                      Explore service <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
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

      {/* FAQ */}
      <section id="faq" className="bg-white/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="font-mono text-[11px] font-medium tracking-widest text-teal">GOOD TO KNOW</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">A few things people ask before getting started.</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-ink/65">Still have a question? Send us a message and we’ll talk it through.</p>
            <a href={waLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13.5px] font-semibold text-cream"><MessageCircle className="h-4 w-4" /> Ask us on WhatsApp</a>
          </Reveal>
          <Reveal delay={100} className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-ink/10 bg-cream p-5 open:border-ink/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[15px] font-bold marker:hidden">{faq.question}<span aria-hidden="true" className="text-xl text-teal transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-ink/65">{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

{/* PACKAGE PREVIEW */}
<section id="pricing" className="bg-ink py-24 text-cream">
  <div className="mx-auto max-w-6xl px-5 sm:px-8">
    <Reveal className="mx-auto max-w-xl text-center">
      <span className="font-mono text-[11px] font-medium tracking-widest text-yellow">WAYS TO WORK TOGETHER</span>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
        The right scope, shaped around your business.
      </h2>
      <p className="mt-4 text-[14.5px] leading-relaxed text-cream/65">
        Start with one focused project or combine services into ongoing support. We’ll recommend a scope after learning about your goals; ad spend is always separate.
      </p>
    </Reveal>

    <Reveal delay={100}>
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {[
          ["One-off projects", "A shoot, a reel batch, or a website launch."],
          ["Monthly support", "Consistent content, campaign management, or both."],
          ["Growth plans", "A joined-up mix of creative, ads, and upkeep."],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-6">
            <h3 className="font-display text-lg font-bold">{title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-cream/65">{detail}</p>
            <p className="mt-4 font-mono text-[12px] text-yellow">Custom quote · scope first</p>
          </div>
        ))}
      </div>
      <div className="mt-9 text-center">
        <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-3 text-[14px] font-semibold text-ink">Get a quote <ArrowRight className="h-4 w-4" /></a>
      </div>
    </Reveal>
  </div>
</section>

      {/* QUOTE FORM */}
      <section id="quote" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <span className="font-mono text-[11px] font-medium tracking-widest text-teal">LET’S TALK</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Tell us what you’re working on.</h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-ink/65">Share a few details and we’ll follow up with questions, a recommended scope, and a quote tailored to your needs.</p>
            <p className="mt-6 text-[13px] text-ink/55">No commitment. Ad spend is separate from service fees.</p>
            <div className="mt-5 flex flex-wrap gap-3 text-[13px] font-medium">
              {WHATSAPP_NUMBERS.map((number) => <a key={number} href={`tel:+91${number}`} className="text-teal hover:underline">Call +91 {number}</a>)}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <form className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-sm sm:p-8" onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const message = [
                "Hi UP! I'd like a quote.",
                `Name: ${data.get("name")}`,
                `Email: ${data.get("email")}`,
                `Phone: ${data.get("phone") || "Not provided"}`,
                `Service: ${data.get("service")}`,
                `Project details: ${data.get("message") || "Not provided"}`,
              ].join("\n");
              window.open(`https://wa.me/91${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
            }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-[13px] font-semibold">Name <span className="text-red-600">*</span><input name="name" required autoComplete="name" className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none focus:border-teal" placeholder="Your name" /></label>
                <label className="text-[13px] font-semibold">Email <span className="text-red-600">*</span><input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none focus:border-teal" placeholder="you@example.com" /></label>
                <label className="text-[13px] font-semibold">Phone<input name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none focus:border-teal" placeholder="Your number (optional)" /></label>
                <label className="text-[13px] font-semibold">Service <span className="text-red-600">*</span><select name="service" required defaultValue="" className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none focus:border-teal"><option value="" disabled>Select a service</option>{SERVICES.map((service) => <option key={service.name}>{service.name}</option>)}<option>Not sure yet — help me choose</option></select></label>
                <label className="text-[13px] font-semibold sm:col-span-2">Project details<textarea name="message" rows="4" className="mt-2 w-full resize-y rounded-xl border border-ink/15 bg-cream px-4 py-3 font-normal outline-none focus:border-teal" placeholder="What are you hoping to achieve? (optional)" /></label>
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-cream transition-transform hover:scale-[1.03]"><Send className="h-4 w-4" /> Continue on WhatsApp</button>
              <p className="mt-3 text-[11.5px] leading-relaxed text-ink/45">Your details are added to a message for UP in WhatsApp. Review and send it there to request your quote.</p>
            </form>
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

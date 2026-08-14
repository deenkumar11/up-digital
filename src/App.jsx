import React, { useState } from "react";
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
  Menu,
  X,
  Play,
  Target,
  Users,
  ImageIcon,
} from "lucide-react";

/* ---------------------------------------------------------
   UP — Chennai digital marketing agency
   Palette:  cream #FBF6EC · ink #1C1B18 · yellow #F6C445
             deep-yellow #E8AC1E · teal #2A6F5E
   Display face: Sora  ·  Body: Inter  ·  Mono/labels: IBM Plex Mono
   Animation: Framer Motion — scroll reveals via whileInView,
   hover lifts on cards, a looping float on small accents.
--------------------------------------------------------- */

/* ---------- reusable scroll-reveal wrapper ---------- */
function Reveal({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

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

const CLIENTS = ["Studio Madrasi", "Replica XI", "Kitchen Herald"];

const RECENT_WORK = [
  { label: "Studio Madrasi — reel", hint: "1080×1080 · square" },
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

const WHATSAPP_NUMBERS = ["9094175705", "9791102381"];

/* ---------- small building blocks ---------- */

function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-ink/70 ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------------------------------------------------------
   LOGO MARK
   Swap for the real logo by replacing this component's contents
   with:  <img src="/images/logo.png" alt="UP logo" className="h-full
   w-full object-contain" />  — used in the nav and the footer.
--------------------------------------------------------- */
function LogoMark({ className = "h-9 w-9" }) {
  return (
    <img src="/images/logo (1).svg" alt="UP logo" className={`${className} object-contain`} />
  );
}

/* ---------------------------------------------------------
   IMAGE PLACEHOLDER
   Drop a real photo in by replacing this component's usage
   with:  <img src="/images/your-photo.jpg" alt="..."
   className="h-full w-full object-cover rounded-2xl" />
   The dashed border, icon and label are just guides for where
   photography goes and can be deleted once a real image is in
   place. Suggested location for source files: /public/images.
--------------------------------------------------------- */
function ImagePlaceholder({ label, hint, aspect = "aspect-[4/5]", className = "" }) {
  return (
    <div
      className={`group relative flex ${aspect} w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed border-ink/20 bg-ink/[0.04] px-4 text-center transition-colors hover:border-teal/50 hover:bg-teal/[0.06] ${className}`}
    >
      <ImageIcon className="h-6 w-6 text-ink/30" strokeWidth={1.5} />
      <span className="text-[12.5px] font-semibold leading-tight text-ink/55">{label}</span>
      {hint && <span className="font-mono text-[10.5px] text-ink/35">{hint}</span>}
    </div>
  );
}

/* ---------------- page ---------------- */

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const waLink = `https://wa.me/91${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(
    "Hi UP! I'd like to talk about growing my business."
  )}`;

  return (
    <div className="min-h-screen w-full bg-cream font-body text-ink antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <LogoMark />
            {/* <span className="font-display text-lg font-bold tracking-tight">UP</span>
            <span className="hidden font-mono text-[11px] text-ink/50 sm:inline">/ Chennai</span> */}
          </a>

          <nav className="hidden items-center gap-8 text-[14.5px] font-medium md:flex">
            <a href="#work" className="transition-colors hover:text-teal">Work</a>
            <a href="#services" className="transition-colors hover:text-teal">Services</a>
            <a href="#pricing" className="transition-colors hover:text-teal">Pricing</a>
            <a href="#process" className="transition-colors hover:text-teal">Process</a>
          </nav>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13.5px] font-semibold text-cream transition-transform hover:scale-[1.04] active:scale-95 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>

          <button
            onClick={() => setNavOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 md:hidden"
            aria-label="Toggle menu"
          >
            {navOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {navOpen && (
          <div className="border-t border-ink/10 bg-cream px-5 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-4 text-[15px] font-medium">
              <a href="#work" onClick={() => setNavOpen(false)}>Work</a>
              <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
              <a href="#pricing" onClick={() => setNavOpen(false)}>Pricing</a>
              <a href="#process" onClick={() => setNavOpen(false)}>Process</a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13.5px] font-semibold text-cream"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </div>
        )}
      </header>

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

          {/* Grid container holding both text (left) and illustration (right) */}
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

            {/* Illustration moved inside the grid column on the right */}
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
              <ImagePlaceholder
                label="Team at work"
                hint="1080×1350 · portrait"
                aspect="aspect-[4/5]"
                className="rotate-[-1.5deg]"
              />
              <ImagePlaceholder
                label="On-location shoot"
                hint="1080×1350 · portrait"
                aspect="aspect-[4/5]"
                className="rotate-[1deg] sm:mt-4"
              />
              <ImagePlaceholder
                label="Client meeting"
                hint="1080×1350 · portrait"
                aspect="aspect-[4/5]"
                className="rotate-[1.5deg]"
              />
              <ImagePlaceholder
                label="Editing session"
                hint="1080×1350 · portrait"
                aspect="aspect-[4/5]"
                className="rotate-[-1deg] sm:mt-4"
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
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="font-display text-2xl font-bold text-ink/20 sm:text-3xl">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* recent-work samples — swap for real before/after or shoot stills */}
        <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {RECENT_WORK.map((item) => (
              <ImagePlaceholder key={item.label} label={item.label} hint={item.hint} aspect="aspect-square" />
            ))}
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

      {/* FOUNDER / STORY BLOCK */}
      <section className="bg-white/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
          <img
            src="images/Sasi.jpeg"
            alt="UP founder"
            className="hidden aspect-[4/5] w-full rounded-2xl object-cover sm:flex"
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
            <p className="mt-4 font-mono text-[14px] text-cream/45">
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

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-cream py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8" />
            <span className="text-[13px] text-ink/60">UP Digital · Chennai, India</span>
          </div>
          <p className="font-mono text-[12.5px] text-ink/45">Shoots · Ads · Websites · Growth</p>
        </div>
      </footer>
    </div>
  );
}

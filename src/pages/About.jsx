import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Check, HeartHandshake, Megaphone, Monitor } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Work with people, not a process",
    description: "You speak directly with the small team doing the work. We listen first, explain our recommendations, and keep communication clear as a project moves forward.",
  },
  {
    icon: Camera,
    title: "Make the work useful",
    description: "Good creative should do more than look polished. We plan content around what your customers need to see, understand, and do next.",
  },
  {
    icon: Megaphone,
    title: "Keep growth connected",
    description: "Photography, short-form video, ads, and websites work harder when they support the same business goal. We help bring those pieces together.",
  },
];

const SERVICES = [
  { icon: Camera, title: "Content that feels like you", detail: "On-location brand shoots and short-form video made for the way your customers discover businesses today." },
  { icon: Megaphone, title: "Marketing with a purpose", detail: "Social channel support and Meta campaigns shaped around your audience, offer, and next business goal." },
  { icon: Monitor, title: "A clearer place to land", detail: "Mobile-first websites that help people understand what you do and make it easy to get in touch." },
];

export default function About() {
  return (
    <main className="bg-cream text-ink">
      <section className="relative overflow-hidden border-b border-cream/10 bg-ink py-20 text-cream sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl">A small team to help your business move up.</h1>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-cream/75">UP Digital is a Chennai-based creative and marketing team helping clinics, studios, shops, and growing businesses show up online with confidence.</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/75">We bring content, campaigns, and websites together with a practical approach: understand the business, focus on what will help, and make the work count.</p>
            <Link to="/#quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-3 text-[14px] font-semibold text-ink transition-transform hover:scale-[1.03]">Tell us about your business <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <Reveal delay={120}>
            <img src="/images/team-at-work.webp" alt="The UP Digital team working together" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[11px] font-medium tracking-widest text-teal">WHY WE’RE HERE</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Good digital work should feel within reach.</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70">Smaller businesses need the same thoughtful creative and clear marketing as bigger brands, without unnecessary complexity. We keep the team close, the conversations direct, and the plan tied to what you’re trying to achieve.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 70}>
              <article className="h-full rounded-2xl border border-ink/10 bg-white/50 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-yellow/70"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink/65">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-xl">
            <span className="font-mono text-[11px] font-medium tracking-widest text-yellow">WHAT WE BRING TO THE TABLE</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">One small team. The pieces to show up well.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, detail }, index) => (
              <Reveal key={title} delay={index * 70}>
                <article className="h-full rounded-2xl border border-cream/15 bg-cream/[0.04] p-6">
                  <Icon className="h-6 w-6 text-yellow" />
                  <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-cream/65">{detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <img src="/images/on-location-shoot.webp" alt="An on-location content shoot" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </Reveal>
        <Reveal delay={100}>
          <span className="font-mono text-[11px] font-medium tracking-widest text-teal">A STRAIGHTFORWARD WAY TO WORK</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Start with a conversation.</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink/70">We’ll learn about your business, what you want to improve, and what you already have in place. Then we’ll suggest a sensible next step and a scope that fits.</p>
          <ul className="mt-6 space-y-3">
            {["A direct conversation with our team", "A clear recommendation based on your goals", "A tailored quote before work begins"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-ink/75"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-yellow"><Check className="h-3 w-3" strokeWidth={3} /></span>{item}</li>
            ))}
          </ul>
          <Link to="/#quote" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-cream transition-transform hover:scale-[1.03]">Get a quote <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
    </main>
  );
}

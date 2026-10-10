import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { SERVICES } from "./Home.jsx";

const SERVICE_FAQS = {
  "brand-films-product-shoots": [
    ["What should we shoot?", "We’ll plan a shot list with you around the products, people, and details your customers need to see."],
    ["Where does the shoot happen?", "We can plan around your location or another suitable setting. Location and access are discussed before the quote is finalised."],
  ],
  "reels-short-form-cuts": [
    ["Can you edit footage we already have?", "Yes. Share what footage you have and the style you’re aiming for; we’ll confirm whether it fits the scope."],
    ["Will the videos be ready for social platforms?", "We prepare vertical exports with captions and pacing suited to short-form feeds. The exact deliverables are agreed in the project scope."],
  ],
  "instagram-meta-ads": [
    ["Is the advertising budget part of your fee?", "No. The ad budget is paid from your own Meta account and is separate from the service fee."],
    ["Do I keep ownership of my ad account?", "Yes. Campaigns should run through your business account, so you retain access and control."],
  ],
  "website-builds": [
    ["Will the website work on phones?", "Yes. Responsive layouts are part of the build so the site adapts to mobile, tablet, and desktop screens."],
    ["Are domain and hosting included?", "Those needs depend on your current setup and project scope. We’ll clarify any third-party costs in the proposal."],
  ],
  "always-on-management": [
    ["Do I approve posts before they go live?", "We can agree on a review and approval routine during onboarding, based on the content plan and your preferences."],
    ["What does ongoing support include?", "The scope can include planning, scheduling, routine replies, and reporting. We’ll define channels and deliverables with you first."],
  ],
  "up-growth-package": [
    ["What services are included in the growth package?", "The mix is tailored to your priorities and may combine content, short-form edits, campaign management, and channel support."],
    ["Can the plan change over time?", "For ongoing work, we review priorities together and can discuss adjustments to the scope as your needs change."],
  ],
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((item) => item.slug === slug);
  const Icon = service?.icon;

  useEffect(() => {
    if (!service) return;
    const previousTitle = document.title;
    document.title = `${service.name} | UP Digital, Chennai`;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    if (description) description.setAttribute("content", `${service.desc} UP Digital helps local businesses in Chennai plan and deliver this service.`);
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute("content", previousDescription);
    };
  }, [service]);

  if (!service) {
    return <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8"><h1 className="font-display text-3xl font-extrabold">Service not found</h1><Link to="/#services" className="mt-5 inline-flex items-center gap-2 text-teal hover:underline"><ArrowLeft className="h-4 w-4" /> Browse services</Link></section>;
  }

  return (
    <>
      <section className="border-b border-ink/10 bg-yellow py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-start gap-4">
              <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cream"><Icon className="h-6 w-6" /></div>
              <div>
                <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">{service.name}</h1>
                <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink/75">{service.desc}</p>
              </div>
            </div>
            <Link to="/#quote" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-cream">Get a tailored quote <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-2xl border border-ink/10 bg-white/50 p-7">
            <h2 className="font-display text-2xl font-bold">What’s included</h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/70">{service.includes}</p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="h-full rounded-2xl border border-ink/10 bg-white/50 p-7">
            <h2 className="font-display text-2xl font-bold">What you can expect</h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/70">{service.outcome}</p>
            <div className="mt-6 border-t border-ink/10 pt-5">
              <h3 className="font-semibold">A good fit for</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{service.bestFor}</p>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="bg-ink py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <span className="font-mono text-[11px] font-medium tracking-widest text-yellow">HOW WE GET STARTED</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold">Clear scope before work begins.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Tell us about your goals and audience.", "We recommend deliverables, timing, and scope.", "Review the quote, then decide whether to begin."].map((step, i) => (
              <Reveal key={step} delay={i * 70}>
                <div className="flex h-full gap-3 rounded-2xl border border-cream/15 bg-cream/[0.04] p-5"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow text-[12px] font-bold text-ink">{i + 1}</span><p className="text-[13.5px] leading-relaxed text-cream/75">{step}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold">Questions about {service.name.toLowerCase()}?</h2>
          <div className="mt-8 space-y-3">
            {(SERVICE_FAQS[slug] || []).map(([question, answer]) => <details key={question} className="group rounded-2xl border border-ink/10 bg-white/50 p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">{question}<span aria-hidden="true" className="text-xl text-teal transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-[13.5px] leading-relaxed text-ink/65">{answer}</p></details>)}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/#quote" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-cream">Get a quote <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-teal hover:underline"><ArrowLeft className="h-4 w-4" /> All services</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

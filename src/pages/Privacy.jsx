import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

export default function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-teal hover:underline"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        <p className="mt-10 font-mono text-[11px] font-medium tracking-widest text-teal">UP DIGITAL · PRIVACY</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Your enquiry, your choice.</h1>
        <p className="mt-5 text-[14.5px] leading-relaxed text-ink/70">This page explains what happens when you use the quote form on this website.</p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-display text-xl font-bold">Quote form</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">When you submit the form, this website prepares a message containing the details you entered and opens WhatsApp. The message is not sent automatically. Review it in WhatsApp and press Send if you want to share it with UP Digital. If you close the WhatsApp window without sending, the form does not send your enquiry to us.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold">Information you choose to share</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">The form asks for your name, email address, selected service, and optional phone number and project details. If you send the message, UP Digital can use those details to respond to your enquiry and discuss the requested work. WhatsApp handles messages according to its own privacy terms.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold">Other ways to contact us</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">You can contact UP Digital by phone or WhatsApp using the numbers on the <Link to="/" className="text-teal underline">homepage</Link>. Information you share in those conversations is handled through the relevant service.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold">Questions about your enquiry</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">For questions about an enquiry you’ve sent, contact us using one of the phone or WhatsApp numbers shown on the website.</p>
          </section>
        </div>
      </Reveal>
    </section>
  );
}

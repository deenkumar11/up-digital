import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import LogoMark from "./LogoMark.jsx";

const WHATSAPP_NUMBERS = ["9094175705", "9791102381"];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const waLink = `https://wa.me/91${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(
    "Hi UP! I'd like to talk about growing my business."
  )}`;

  const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Process", href: "/#process" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-8 text-[14.5px] font-medium md:flex">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-teal">
              {l.label}
            </a>
          ))}
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
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setNavOpen(false)}>
                {l.label}
              </a>
            ))}
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
  );
}

export { WHATSAPP_NUMBERS };

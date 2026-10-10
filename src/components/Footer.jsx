import React from "react";
import LogoMark from "./LogoMark.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-[13px] text-ink/60">UP Digital · Chennai, India</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-[12px] text-ink/55 sm:justify-end">
          <Link to="/about" className="transition-colors hover:text-teal">About</Link>
          <Link to="/blog" className="transition-colors hover:text-teal">Blog</Link>
          <Link to="/privacy" className="transition-colors hover:text-teal">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

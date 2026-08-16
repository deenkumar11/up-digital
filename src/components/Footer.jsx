import React from "react";
import LogoMark from "./LogoMark.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8" />
          <span className="text-[13px] text-ink/60">UP Digital · Chennai, India</span>
        </div>
        <p className="font-mono text-[12.5px] text-ink/45">Shoots · Ads · Websites · Growth</p>
      </div>
    </footer>
  );
}

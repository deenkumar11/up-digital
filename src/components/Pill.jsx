import React from "react";

export default function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-ink/70 ${className}`}
    >
      {children}
    </span>
  );
}

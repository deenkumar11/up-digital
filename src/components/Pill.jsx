import React from "react";

export default function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-widest text-ink/65 ${className}`}
    >
      {children}
    </span>
  );
}

import React from "react";
import { ImageIcon } from "lucide-react";

/* Drop a real photo in by replacing this component's usage with:
   <img src="/images/your-photo.jpg" alt="..."
   className="h-full w-full object-cover rounded-2xl" />
   The dashed border, icon and label are just guides for where
   photography goes. Suggested location for source files: /public/images. */
export default function ImagePlaceholder({ label, hint, aspect = "aspect-[4/5]", className = "" }) {
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

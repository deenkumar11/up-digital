import React from "react";

/* Swap the file at /public/images/logo.svg to change the logo —
   every place LogoMark is used (nav + footer, every page) will
   pick up the new file automatically. */
export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <img
      src="/images/logo (1).svg"
      alt="UP logo"
      className={`${className} object-contain`}
    />
  );
}

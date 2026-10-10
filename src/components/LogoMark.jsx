import React from "react";

export default function LogoMark({ className = "h-16 w-16" }) {
  return (
    <img
      src="/images/up-digital-logo.png"
      alt="UP Digital Marketing"
      className={`${className} object-contain`}
    />
  );
}

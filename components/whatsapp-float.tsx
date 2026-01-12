"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppFloat() {
  const phoneNumber = "918977909840";
  const message =
    "Hi VAMA Living, I'd like to discuss custom furniture for my space.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // ✅ Use a PNG/WebP/SVG with transparent background (JPEG won't work)
  const iconImageSrc = "/images/wacons.svg";

  return (
    <div className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-[80]">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VAMA Living on WhatsApp"
        className="inline-flex"
      >
        <span
          className="
            relative
            h-14 w-14 md:h-16 md:w-16
            rounded-full
            bg-transparent
            p-0
            overflow-visible
            transition-transform duration-300
            hover:scale-110
            active:scale-95
          "
          style={{ backgroundColor: "transparent" }}
        >
          <Image
            src={iconImageSrc}
            alt="WhatsApp"
            fill
            priority
            className="object-contain bg-transparent"
          />

          {/* Pulse dot */}
          <span className="pointer-events-none absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300/70 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
          </span>
        </span>
      </Link>
    </div>
  );
}

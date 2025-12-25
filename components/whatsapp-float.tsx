"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppFloat() {
  // ✅ VAMA Living WhatsApp number (India)
  const phoneNumber = "918977909840";

  const message =
    "Hi VAMA Living, I'd like to discuss custom furniture for my space.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // WhatsApp icon image (must be the green logo)
  const iconImageSrc = "/images/iconwa.jpg";

  return (
    <div className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-[80]">
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button
          aria-label="Chat with VAMA Living on WhatsApp"
          className="
            relative
            h-14 w-14 md:h-16 md:w-16
            rounded-full
            overflow-hidden
            shadow-[0_14px_35px_rgba(0,0,0,0.45)]
            transition-all duration-300
            hover:scale-110
            hover:shadow-[0_22px_55px_rgba(0,0,0,0.55)]
            active:scale-95
          "
        >
          {/* Zoomed-in WhatsApp icon */}
          <Image
            src={iconImageSrc}
            alt="WhatsApp"
            fill
            priority
            className="
              object-cover
              scale-[1.35]   /* 🔥 THIS removes the grey frame */
            "
          />

          {/* Subtle pulse */}
          <span className="pointer-events-none absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300/70 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
          </span>
        </button>
      </Link>
    </div>
  );
}

// components/header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 pointer-events-none">
      <div
        className="
          pointer-events-auto
          mx-auto max-w-4xl
          flex items-center justify-between gap-6
          rounded-full border border-black/5
          bg-white/85 backdrop-blur-md
          shadow-lg
          px-5 md:px-8 py-2
        "
      >
        {/* Logo / Brand – BIG logo filling the header height */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center">
            <Image
              src="/images/logo12.png"
              alt="VAMA Living logo"
              width={220}
              height={60}
              className="
                h-12 md:h-14
                w-auto
                object-contain
              "
            />
          </div>
        </Link>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-6 mx-auto justify-center">
          <Link
            href="/work"
            className="
              text-sm font-medium text-gray-800/80
              transition-all duration-200
              hover:text-[#5d3807]
              hover:-translate-y-0.5
            "
          >
            Our Products
          </Link>
          <Link
            href="/about"
            className="
              text-sm font-medium text-gray-800/80
              transition-all duration-200
              hover:text-[#432702]
              hover:-translate-y-0.5
            "
          >
            Our Story
          </Link>
        </nav>

        {/* Right CTA */}
        <Link href="/contact">
          <button
            className="
              hidden md:inline-flex items-center justify-center
              rounded-full px-5 py-2 text-sm font-semibold
              bg-black text-white
              shadow-[0_10px_25px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:bg-[#c08737]
              hover:text-[#0b1901]
              hover:shadow-[0_0_30px_rgba(216,182,138,0.75)]
              hover:-translate-y-0.5 hover:scale-[1.03]
              active:translate-y-0 active:scale-100
            "
          >
            Reach Out
          </button>
        </Link>
      </div>
    </header>
  );
}

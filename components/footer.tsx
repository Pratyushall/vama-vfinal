"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white border-t border-white/10">
      {/* ✅ Background Image (instead of video) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/footerr.jpeg')", // 🔁 change this path
          }}
        />
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* ✅ Footer top button */}
          <Link href="/work" className="w-full flex justify-center">
            <button
              type="button"
              className="
                group relative
                inline-flex items-center justify-center
                rounded-full
                px-6 py-3 md:px-8 md:py-4
                bg-[#0D4341] text-white
                font-semibold tracking-wide
                border border-white/15
                shadow-[0_16px_60px_rgba(0,0,0,0.35)]
                transition-all duration-500
                hover:shadow-[0_0_26px_rgba(255,255,255,0.22),0_16px_70px_rgba(0,0,0,0.45)]
                hover:border-white/25
                hover:-translate-y-0.5
                active:translate-y-0
                active:scale-[0.98]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40
              "
              aria-label="Our products"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Products
                <span className="transition-transform duration-500 group-hover:translate-x-0.5"></span>
              </span>

              {/* subtle white glow / sheen */}
              <span
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700
                  bg-[radial-gradient(900px_circle_at_20%_-30%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(700px_circle_at_80%_130%,rgba(255,255,255,0.10),transparent_45%)]
                "
              />
            </button>
          </Link>

          <h2
            className="text-2xl md:text-3xl font-serif font-semibold tracking-tight"
            style={{
              textShadow: "0 6px 30px rgba(0,0,0,0.65)",
            }}
          >
            VAMA Living
          </h2>

          {/* Social Icons */}
          <div className="flex items-center gap-5 md:gap-6">
            <a
              href="#"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.564v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
              </svg>
            </a>
          </div>

          {/* Contact */}
          <div
            className="space-y-1.5 text-sm md:text-base text-white/90"
            style={{
              textShadow: "0 4px 24px rgba(0,0,0,0.6)",
            }}
          >
            <p>contactvamaliving@gmail.com</p>
            <p>+91 89779 09840</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

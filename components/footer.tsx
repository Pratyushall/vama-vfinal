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
            backgroundImage: "url('/images/footer11.jpeg')", // 🔁 change this path
          }}
        />
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* ✅ Footer title (requested) */}
          <h2
            className="text-[1.25rem] md:text-3xl font-serif font-semibold tracking-tight max-w-3xl"
            style={{
              textShadow: "0 6px 30px rgba(0,0,0,0.65)",
            }}
          >
            Custom Furniture for Residential and Corporate Spaces.
          </h2>

          {/* ✅ Added lines (requested) */}
          <div
            className="space-y-2 text-white/90"
            style={{
              textShadow: "0 4px 24px rgba(0,0,0,0.6)",
            }}
          >
            <p>Have a project in mind? We’d love to hear from you.</p>
            <p>Available on WhatsApp for quick queries.</p>
          </div>

          {/* ✅ Footer top buttons */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
              {/* Our Products */}
              <Link href="/work" className="flex justify-center">
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

              {/* ✅ Buy from Vama */}
              <Link href="/contact" className="flex justify-center">
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
                  aria-label="Buy from Vama"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Buy from Vama
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
            </div>
          </div>

          {/* ✅ Brand name */}
          <div
            className="text-2xl md:text-3xl font-serif font-semibold tracking-tight"
            style={{
              textShadow: "0 6px 30px rgba(0,0,0,0.65)",
            }}
          >
            VAMA Living
          </div>

          {/* ✅ Social Icons (only Instagram + YouTube) */}
          <div className="flex items-center gap-5 md:gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/vama_living/"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-10.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@VamaLivingOfficial"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.012 3.012 0 0 0-2.12-2.13C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.378.511a3.012 3.012 0 0 0-2.12 2.13A31.31 31.31 0 0 0 0 12a31.31 31.31 0 0 0 .502 5.814 3.012 3.012 0 0 0 2.12 2.13c1.873.511 9.378.511 9.378.511s7.505 0 9.378-.511a3.012 3.012 0 0 0 2.12-2.13A31.31 31.31 0 0 0 24 12a31.31 31.31 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* ✅ Contact + copyright (pushed upward + right aligned) */}
          <div
            className="w-full flex flex-col items-end text-sm md:text-base text-white/90 mb-12"
            style={{
              textShadow: "0 4px 24px rgba(0,0,0,0.6)",
            }}
          >
            <div className="text-right space-y-2">
              <p>contactvamaliving@gmail.com</p>
              <p>+91 89779 09840</p>
            </div>

            <p className="pt-3 text-[0.7rem] md:text-xs text-white/70">
              © VAMA Living. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

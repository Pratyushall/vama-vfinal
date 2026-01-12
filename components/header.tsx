"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { href: "/work", label: "Our Products" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Buy from Vama" },
  ];

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on outside click / ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    function onMouseDown(e: MouseEvent) {
      if (!mobileOpen) return;
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(e.target as Node)) setMobileOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 pointer-events-none">
      <div
        className="
          pointer-events-auto
          mx-auto max-w-4xl
          flex items-center justify-between gap-4
          rounded-full border border-teal-900/5
          bg-white/90 backdrop-blur-md
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          px-5 md:px-8 py-2
          relative
        "
        ref={panelRef}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center">
            <Image
              src="/images/logo12.png"
              alt="VAMA Living logo"
              width={220}
              height={60}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex items-center gap-6 mx-auto justify-center">
          {navItems.slice(0, 2).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "text-teal-900"
                      : "text-teal-900/70 hover:text-teal-900"
                  }
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full bg-teal-700" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA (desktop) */}
        <Link href="/contact" className="hidden md:block">
          <button
            className="
              inline-flex items-center justify-center
              rounded-full px-5 py-2 text-sm font-semibold
              bg-[#0B7A78] text-white
              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
              transition-all duration-300
              hover:bg-[#064746]
              hover:shadow-[0_16px_35px_rgba(0,0,0,0.35)]
              hover:-translate-y-0.5 hover:scale-[1.03]
              active:translate-y-0 active:scale-100
            "
          >
            Buy from Vama
          </button>
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="
            md:hidden
            inline-flex items-center justify-center
            h-11 w-11 rounded-full
            border border-teal-900/10
            bg-white/70
            transition-all duration-300
            hover:bg-white
            active:scale-95
          "
        >
          {/* Icon */}
          <span className="relative block h-4 w-5">
            <span
              className={`
                absolute left-0 top-0 h-[2px] w-5 rounded-full bg-teal-900
                transition-all duration-300
                ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}
              `}
            />
            <span
              className={`
                absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-teal-900
                transition-all duration-300
                ${mobileOpen ? "opacity-0" : "opacity-100"}
              `}
            />
            <span
              className={`
                absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-teal-900
                transition-all duration-300
                ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            />
          </span>
        </button>

        {/* Mobile dropdown */}
        <div
          className={`
            md:hidden
            absolute left-4 right-4 top-[calc(100%+10px)]
            rounded-2xl
            border border-teal-900/10
            bg-white/95 backdrop-blur-md
            shadow-[0_22px_70px_rgba(0,0,0,0.22)]
            overflow-hidden
            transition-all duration-300
            ${
              mobileOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <nav className="p-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center justify-between
                    px-4 py-3 rounded-xl
                    text-sm font-medium
                    transition-colors
                    ${
                      isActive
                        ? "bg-teal-900/5 text-teal-900"
                        : "text-teal-900/80 hover:bg-teal-900/5 hover:text-teal-900"
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  <span className="text-teal-900/40">→</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile backdrop (tap to close) */}
      <div
        className={`
          md:hidden
          fixed inset-0 z-40
          transition-opacity duration-300
          ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/25" />
      </div>
    </header>
  );
}

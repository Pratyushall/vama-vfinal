"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/work", label: "Our Work" },
    { href: "/about", label: "Our Story" },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 pointer-events-none">
      <div
        className="
          pointer-events-auto
          mx-auto max-w-4xl
          flex items-center justify-between gap-6
          rounded-full border border-teal-900/5
          bg-white/90 backdrop-blur-md
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          px-5 md:px-8 py-2
        "
      >
        {/* Logo */}
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

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-6 mx-auto justify-center">
          {navItems.map((item) => {
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

        {/* Right CTA */}
        <Link href="/contact">
          <button
            className="
              hidden md:inline-flex items-center justify-center
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
            Start a Project
          </button>
        </Link>
      </div>
    </header>
  );
}

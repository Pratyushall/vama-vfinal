"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Srikanth & Sravanthi",
    role: "Kollur",
    quote:
      "VAMA transformed our entire living space. The attention to detail and craftsmanship exceeded all expectations. Every piece feels like it was made just for us.",
    image: "/images/sriknsrav.jpeg",
  },
  {
    id: 2,
    name: "Kumar",
    role: "Gachibowli",
    quote:
      "Our new office furniture from VAMA has completely changed how our team works. The custom workstations are both functional and stunning.",
    image: "/images/tes22.jpeg",
  },
  {
    id: 3,
    name: "Sruthi",
    role: "Gachibowli",
    quote:
      "The kids' room solution was genius. Two children, one room, and somehow VAMA made it feel spacious and organized. Pure magic!",
    image: "/images/sru.jpeg",
  },
  {
    id: 4,
    name: "Sirisha",
    role: "Jubilee Hills",
    quote:
      "As a designer, I'm very particular about quality. VAMA delivers consistently. I recommend them to all my clients without hesitation.",
    image: "/images/tes11.jpeg",
  },
];

export default function Page() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B3B38]">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden bg-black">
          {/* ✅ MOBILE HERO VIDEO */}
          <div className="absolute inset-0 md:hidden">
            <video
              src="/videos/sale.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            {/* ✅ Transparent dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* ✅ DESKTOP HERO VIDEO */}
          <div className="absolute inset-0 hidden md:block">
            <video
              src="/videos/heroo.mp4" // 🔁 your DESKTOP hero video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* ✅ Text overlay
              - MOBILE: hidden
              - DESKTOP: visible
          */}
          <div className="relative z-10 h-full hidden md:flex items-center justify-center px-6 text-center">
            <h1 className="font-serif text-white leading-tight tracking-tight text-[clamp(2rem,4.5vw,4rem)] drop-shadow-[0_14px_44px_rgba(0,0,0,0.7)]">
              Custom Furniture
              <br />
              <span className="block mt-2 text-white/80">
                Made to Fit Your Life.
              </span>
            </h1>
          </div>

          {/* ✅ Step Inside VAMA button -> /work (work/page.tsx)
              - Keep on BOTH mobile + desktop
          */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20">
            <Link href="/work" aria-label="Step inside VAMA">
              <button
                type="button"
                className="
                  group relative
                  inline-flex items-center justify-center
                  rounded-full
                  px-6 py-3 md:px-8 md:py-4
                  bg-[#0D4341] text-white
                  font-medium tracking-wide
                  shadow-[0_18px_60px_rgba(0,0,0,0.35)]
                  border border-white/10
                  backdrop-blur-sm
                  transition-all duration-500
                  hover:shadow-[0_0_28px_rgba(255,255,255,0.28),0_18px_70px_rgba(0,0,0,0.45)]
                  hover:border-white/20
                  hover:-translate-y-0.5
                  active:translate-y-0
                  active:scale-[0.98]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Step Inside VAMA{" "}
                </span>

                {/* subtle sheen */}
                <span
                  className="
                    pointer-events-none absolute inset-0 rounded-full
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-700
                    bg-[radial-gradient(1200px_circle_at_20%_-20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(900px_circle_at_80%_120%,rgba(255,255,255,0.10),transparent_45%)]
                  "
                />
              </button>
            </Link>
          </div>
        </section>

        {/* Corporate section – WHITE */}
        <section className="relative overflow-hidden bg-white">
          <div className="container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-[#0B7A78] font-medium">
                  Corporate
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance text-[#0B3B38]">
                  We design and manufacture
                </h2>
                <p className="text-base md:text-lg text-teal-900/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  functional, elegant furniture for offices and workspaces. Our
                  solutions are tailored to improve efficiency, comfort, and
                  visual harmony.
                </p>
              </div>

              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-teal-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(0,0,0,0.35)] border border-teal-950/20 bg-black/40">
                  <video
                    src="/videos/com21.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Residential section – DEEP TEAL */}
        <section className="relative overflow-hidden bg-[#0B3B38] text-white">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-400/20 blur-[90px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-black/50 blur-[100px]" />
          </div>

          <div className="relative container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video */}
              <div className="relative order-2 lg:order-1 group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-teal-200/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(0,0,0,0.5)] border border-white/20 bg-black/40">
                  <video
                    src="/videos/ressec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left">
                <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-teal-100 font-medium">
                  Residential
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance text-white">
                  From living rooms to bedrooms and dining spaces,
                </h2>
                <p className="text-base md:text-lg text-teal-50/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  we craft furniture that feels personal and purposeful. Each
                  piece is custom-built to complement your home’s layout, style,
                  and daily rhythm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kids section – WHITE */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-60 pointer-events-none">
            <div className="absolute top-1/2 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-teal-500/15 blur-[90px]" />
            <div className="absolute top-0 left-1/4 w-40 h-40 md:w-52 md:h-52 rounded-full bg-teal-200/20 blur-[60px]" />
          </div>

          <div className="container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-[#0B7A78]">
                  Kids
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance text-[#0B3B38]">
                  Our kids furniture is designed
                </h2>
                <p className="text-base md:text-lg text-teal-900/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  with safety, durability, and imagination in mind. Built to
                  adapt as children grow, each piece balances playful design
                  with long-lasting quality.
                </p>
              </div>

              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-teal-400/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(0,0,0,0.4)] border border-teal-950/20 bg-black/35">
                  <video
                    src="/videos/kidssec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials – DEEP TEAL */}
        <section className="relative min-h-screen overflow-hidden bg-[#062E2D] text-white">
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-teal-500/18 blur-[100px]" />
            <div className="absolute bottom-[10%] right-[5%] w-[320px] h-80 md:w-[480px] md:h-[480px] rounded-full bg-teal-900/35 blur-[120px]" />
          </div>

          <div className="relative z-10 container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32 min-h-screen flex flex-col justify-center">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <span className="inline-block text-[0.65rem] md:text-xs tracking-[0.4em] uppercase text-teal-100 font-medium mb-4 md:mb-6 px-4 py-2 border border-teal-100/30 rounded-full backdrop-blur-sm bg-white/5">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-3xl font-serif leading-tight text-balance">
                Our clients value the attention to detail, craftsmanship, and
                personalized experience we bring to every project.
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Avatars */}
              <div className="lg:col-span-2 flex lg:flex-col gap-4 md:gap-5 justify-center lg:justify-start">
                {testimonials.map((t, index) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonial(index)}
                    className={`group relative transition-all duration-500 ease-out ${
                      activeTestimonial === index
                        ? "scale-100 z-10"
                        : "scale-90 opacity-55 hover:opacity-90 hover:scale-95"
                    }`}
                    aria-label={`Select testimonial by ${t.name}`}
                  >
                    <div
                      className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden transition-all duration-500 ${
                        activeTestimonial === index
                          ? "ring-2 ring-teal-300 ring-offset-2 ring-offset-[#062E2D] shadow-[0_0_40px_rgba(45,212,191,0.4)]"
                          : "ring-1 ring-white/30 hover:ring-white/50"
                      }`}
                    >
                      <img
                        src={t.image || "/placeholder.svg"}
                        alt={t.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          activeTestimonial === index
                            ? "bg-transparent"
                            : "bg-black/30 group-hover:bg-black/15"
                        }`}
                      />
                    </div>

                    {activeTestimonial === index && (
                      <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-teal-300 to-transparent ml-2" />
                    )}
                  </button>
                ))}
              </div>

              {/* Main quote */}
              <div className="lg:col-span-7">
                <div className="relative">
                  <svg
                    className="absolute -top-6 -left-2 lg:-top-8 lg:-left-6 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-teal-200/25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                  </svg>

                  <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-12 border border-white/15 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-700 hover:bg-white/8 hover:border-teal-100/50">
                    <p className="relative text-lg md:text-xl lg:text-[1.6rem] font-serif text-white leading-relaxed mb-8 md:mb-10 text-balance">
                      “{testimonials[activeTestimonial].quote}”
                    </p>

                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-teal-300/50 transition-all duration-500 group-hover:ring-teal-200">
                        <img
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-10 w-px bg-gradient-to-b from-transparent via-teal-200/60 to-transparent hidden md:block" />
                      <div>
                        <h4 className="text-base md:text-lg font-medium text-white tracking-wide">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-white/65 text-xs md:text-sm mt-0.5">
                          {testimonials[activeTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <svg
                    className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-teal-200/25 rotate-180"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                </div>
              </div>

              {/* Controls & stat */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-8 md:gap-10">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="group w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white hover:scale-110 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)] active:scale-95 backdrop-blur-sm"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#062E2D] transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === testimonials.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="group w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white hover:scale-110 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)] active:scale-95 backdrop-blur-sm"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#062E2D] transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`rounded-full transition-all duration-300 ${
                        activeTestimonial === index
                          ? "w-7 md:w-8 h-2 bg-teal-200 shadow-[0_0_14px_rgba(45,212,191,0.7)]"
                          : "w-2 h-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="text-center lg:text-right">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-1 md:mb-2 tracking-tight">
                    500+
                  </div>
                  <div className="text-teal-100 text-[0.65rem] md:text-xs tracking-[0.25em] uppercase font-medium">
                    Homes & offices furnished
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

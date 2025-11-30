"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { useEffect, useRef, useState } from "react";

const heroFrames = [
  {
    src: "/images/frame1a.png",
    alt: "Entrance shutter fully closed",
  },
  {
    src: "/images/frame2a.png",
    alt: "Entrance shutter partially open",
  },
  {
    src: "/images/frame3a.png",
    alt: "Entrance shutter fully open",
  },
  {
    src: "/images/frame4a.png",
    alt: "View into the living space",
  },
  {
    src: "/images/frame5a.png",
    alt: "Detail of custom furniture",
  },
  {
    src: "/images/frame6a.png",
    alt: "Full room view with VAMA furniture",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner, Jubilee Hills",
    quote:
      "VAMA transformed our entire living space. The attention to detail and craftsmanship exceeded all expectations. Every piece feels like it was made just for us.",
    image: "/indian-woman-professional-headshot.png",
  },
  {
    id: 2,
    name: "Rajesh Mehta",
    role: "CEO, TechSpace Solutions",
    quote:
      "Our new office furniture from VAMA has completely changed how our team works. The custom workstations are both functional and stunning.",
    image: "/indian-man-business-executive-headshot.jpg",
  },
  {
    id: 3,
    name: "Ananya & Vikram Reddy",
    role: "Parents of Two",
    quote:
      "The kids' room solution was genius. Two children, one room, and somehow VAMA made it feel spacious and organized. Pure magic!",
    image: "/indian-couple-smiling-headshot.jpg",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    role: "Interior Designer",
    quote:
      "As a designer, I'm very particular about quality. VAMA delivers consistently. I recommend them to all my clients without hesitation.",
    image: "/indian-woman-designer-creative-headshot.jpg",
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function Page() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // hero scroll (desktop) state
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroStep, setHeroStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // hero slideshow (mobile) state
  const [heroMobileIndex, setHeroMobileIndex] = useState(0);

  // Track viewport size to decide desktop vs mobile behavior
  useEffect(() => {
    function updateIsDesktop() {
      if (typeof window === "undefined") return;
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    }

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => {
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);

  // Scroll-based hero only on desktop
  useEffect(() => {
    if (!isDesktop) return;

    function handleScroll() {
      const el = heroRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScroll = viewportHeight * (heroFrames.length - 1);
      const distance = clamp(-rect.top, 0, totalScroll);
      const progress = totalScroll === 0 ? 0 : distance / totalScroll;

      const step = Math.round(progress * (heroFrames.length - 1));
      setHeroStep(step);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDesktop]);

  const currentHeroFrameDesktop = heroFrames[heroStep] ?? heroFrames[0];
  const currentHeroFrameMobile = heroFrames[heroMobileIndex] ?? heroFrames[0];

  const handleHeroMobilePrev = () => {
    setHeroMobileIndex((prev) =>
      prev === 0 ? heroFrames.length - 1 : prev - 1
    );
  };

  const handleHeroMobileNext = () => {
    setHeroMobileIndex((prev) =>
      prev === heroFrames.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-[#0B7A78] text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-[#0B7A78]">
          {/* MOBILE HERO – slideshow with arrows */}
          <div className="relative h-[80vh] min-h-[480px] overflow-hidden pt-24 md:hidden">
            <div className="absolute inset-0">
              <Image
                src={currentHeroFrameMobile.src}
                alt={currentHeroFrameMobile.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </div>

            {/* CTA + copy */}
            <div className="relative z-10 flex h-full flex-col justify-between pb-8 px-5">
              <div className="pt-4">
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-white/70">
                  Step inside
                </span>
                <h1 className="mt-2 text-3xl font-serif text-white leading-tight">
                  Custom furniture, one room at a time.
                </h1>
                <p className="mt-3 text-sm text-white/80 max-w-xs">
                  Swipe through to see how we take you from entrance to finished
                  spaces.
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleHeroMobilePrev}
                    className="group w-9 h-9 rounded-full bg-black/40 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm active:scale-95 transition-all duration-200"
                    aria-label="Previous hero image"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.6}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleHeroMobileNext}
                    className="group w-9 h-9 rounded-full bg-black/40 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm active:scale-95 transition-all duration-200"
                    aria-label="Next hero image"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.6}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div className="flex gap-1 ml-2">
                    {heroFrames.map((_, index) => (
                      <span
                        key={index}
                        className={`h-1 rounded-full transition-all ${
                          index === heroMobileIndex
                            ? "w-4 bg-white"
                            : "w-1.5 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <Link href="/work">
                  <Button
                    className="rounded-full px-5 py-2.5 text-sm font-sans h-auto
                      bg-white/95 text-[#0B7A78] border border-white/70
                      shadow-[0_10px_25px_rgba(0,0,0,0.4)]
                      transition-all duration-300
                      hover:bg-[#F48587] hover:text-white
                      hover:shadow-[0_0_30px_rgba(244,133,135,0.5)]
                      active:translate-y-[1px] active:shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
                  >
                    Step inside VAMA
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* DESKTOP HERO – scroll-driven frames */}
          <div className="relative hidden md:block" ref={heroRef}>
            {/* Tall wrapper for scroll distance: 6 frames × 100vh */}
            <div className="relative h-[600vh]">
              {/* Sticky viewport */}
              <div className="sticky top-0 h-screen overflow-hidden pt-24">
                {/* Current frame as background */}
                <div className="absolute inset-0">
                  <Image
                    src={currentHeroFrameDesktop.src}
                    alt={currentHeroFrameDesktop.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out scale-105"
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />
                </div>

                {/* CTA button */}
                <div className="relative z-10 flex h-full items-end justify-end pb-10 pr-8 md:pb-12 md:pr-12">
                  <Link href="/work">
                    <Button
                      className="rounded-full px-10 py-4 text-lg font-sans h-auto
                        bg-white/95 text-[#0B7A78] border border-white/70
                        shadow-[0_18px_40px_rgba(0,0,0,0.45)]
                        transition-all duration-300
                        hover:bg-[#F48587] hover:text-white
                        hover:shadow-[0_0_40px_rgba(244,133,135,0.6)]
                        hover:-translate-y-1 hover:scale-[1.03]
                        active:translate-y-0 active:scale-100"
                    >
                      Step inside VAMA
                    </Button>
                  </Link>
                </div>

                {/* Frame indicator */}
                <div className="pointer-events-none absolute bottom-4 left-4 text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  Frame {heroStep + 1} / {heroFrames.length}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORPORATE */}
        <section className="relative overflow-hidden bg-[#0B7A78]">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#F48587]/10 blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/5 blur-[70px]" />

          <div className="container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <div className="inline-block">
                  <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#F48587] font-light">
                    Corporate
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance text-white">
                  New office, same old furniture won&apos;t work.
                </h2>
                <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We create custom workstations, chairs and reception setups for
                  how your team actually works. Want workstations customised?
                </p>
              </div>

              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F48587]/25 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-black/30">
                  <video
                    src="/videos/comsec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    // optional:
                    // poster="/images/corporate-poster.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B7A78]/70 via-transparent to-transparent" />
                  {/* Subtle play pulse indicator */}
                  <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-xs text-white/80">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48587]/60 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F48587]" />
                    </span>
                    <span className="uppercase tracking-[0.18em] text-white/80">
                      Playing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: RESIDENTIAL */}
        <section className="relative overflow-hidden bg-[#F48587]">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#0B7A78]/10 blur-[90px]" />
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/15 blur-[70px]" />

          <div className="container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Video first on desktop, second on mobile */}
              <div className="relative order-2 lg:order-1 group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0B7A78]/25 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border border-white/15 bg-black/20">
                  <video
                    src="/videos/ressec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    // poster="/images/residential-poster.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F48587]/70 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-xs text-white/85">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B7A78]/60 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0B7A78]" />
                    </span>
                    <span className="uppercase tracking-[0.18em]">
                      Living Story
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-block">
                  <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#0B7A78] font-medium">
                    Residential
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance text-white">
                  Need your living, dining and bedroom to feel like one story?
                </h2>
                <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We tailor sofas, beds, storage and more to your space, not the
                  other way around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KIDS */}
        <section className="relative overflow-hidden bg-[#0B7A78]">
          {/* Decorative elements */}
          <div className="absolute top-1/2 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#F48587]/12 blur-[90px]" />
          <div className="absolute top-0 left-1/4 w-40 h-40 md:w-48 md:h-48 rounded-full bg-white/7 blur-[60px]" />

          <div className="container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <div className="inline-block">
                  <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#F48587] font-light">
                    Kids
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance text-white">
                  One room, two kids, too many toys?
                </h2>
                <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We build bunk beds, study zones and storage that actually make
                  space instead of taking it.
                </p>
              </div>

              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F48587]/25 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border border-white/12 bg-black/25">
                  <video
                    src="/videos/kidssec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    // poster="/images/kids-poster.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B7A78]/70 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-xs text-white/85">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F48587]/70 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F48587]" />
                    </span>
                    <span className="uppercase tracking-[0.18em]">
                      Play in Place
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative min-h-screen overflow-hidden bg-[#F48587]">
          {/* Elegant background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#0B7A78]/15 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-[10%] right-[5%] w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-white/12 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_1s]" />
            <div className="absolute top-[50%] left-[40%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#0B7A78]/10 blur-[80px] animate-[pulse_6s_ease-in-out_infinite_2s]" />
          </div>

          {/* Decorative corner accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full opacity-[0.08]"
              >
                <circle
                  cx="0"
                  cy="0"
                  r="80"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.3"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-60 h-60 md:w-80 md:h-80">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full opacity-[0.08]"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.3"
                />
              </svg>
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32 min-h-screen flex flex-col justify-center">
            {/* Section header */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <span className="inline-block text-[0.65rem] md:text-xs tracking-[0.4em] uppercase text-[#0B7A78] font-medium mb-4 md:mb-6 px-4 py-2 border border-[#0B7A78]/30 rounded-full backdrop-blur-sm bg-white/10">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-white text-balance">
                What Our Clients Say
              </h2>
              <div className="mt-6 md:mt-8 flex justify-center items-center gap-3">
                <span className="w-6 md:w-8 h-[2px] bg-gradient-to-r from-transparent to-white/50 rounded-full" />
                <span className="w-2 h-2 bg-[#0B7A78] rounded-full" />
                <span className="w-6 md:w-8 h-[2px] bg-gradient-to-l from-transparent to-white/50 rounded-full" />
              </div>
            </div>

            {/* Main testimonial display */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Left: Client avatars navigation */}
              <div className="lg:col-span-2 flex lg:flex-col gap-4 md:gap-5 justify-center lg:justify-start">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(index)}
                    className={`group relative transition-all duration-500 ease-out ${
                      activeTestimonial === index
                        ? "scale-100 z-10"
                        : "scale-90 opacity-50 hover:opacity-90 hover:scale-95"
                    }`}
                  >
                    <div
                      className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden transition-all duration-500 ${
                        activeTestimonial === index
                          ? "ring-2 ring-[#0B7A78] ring-offset-2 ring-offset-[#F48587] shadow-[0_0_40px_rgba(11,122,120,0.4)]"
                          : "ring-1 ring-white/30 hover:ring-white/50"
                      }`}
                    >
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          activeTestimonial === index
                            ? "bg-transparent"
                            : "bg-black/30 group-hover:bg-black/10"
                        }`}
                      />
                    </div>
                    {activeTestimonial === index && (
                      <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-[#0B7A78] to-transparent ml-2" />
                    )}
                  </button>
                ))}
              </div>

              {/* Center: Main quote display */}
              <div className="lg:col-span-7">
                <div className="relative">
                  <svg
                    className="absolute -top-5 -left-1 md:-top-6 md:-left-2 lg:-top-8 lg:-left-6 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#0B7A78]/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                  </svg>

                  <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-12 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-all duration-700 hover:bg-white/15 hover:shadow-[0_20px_70px_rgba(0,0,0,0.24)] hover:-translate-y-1 hover:border-[#0B7A78]/40">
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 0%, rgba(11,122,120,0.12) 0%, transparent 70%)",
                      }}
                    />

                    <p className="relative text-lg md:text-xl lg:text-[1.75rem] font-serif text-white leading-relaxed mb-8 md:mb-10 text-balance">
                      "{testimonials[activeTestimonial].quote}"
                    </p>

                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-[#0B7A78]/40 transition-all duration-500 group-hover:ring-[#0B7A78]/60">
                        <img
                          src={
                            testimonials[activeTestimonial].image ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-10 w-px bg-gradient-to-b from-transparent via-[#0B7A78]/40 to-transparent hidden md:block" />
                      <div>
                        <h4 className="text-base md:text-lg font-medium text-white tracking-wide">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-white/60 text-xs md:text-sm mt-0.5">
                          {testimonials[activeTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <svg
                    className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 lg:-bottom-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#0B7A78]/20 rotate-180"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                </div>
              </div>

              {/* Right: Navigation and stats */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-8 md:gap-10">
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-[#0B7A78] hover:border-[#0B7A78] hover:scale-110 hover:shadow-[0_0_30px_rgba(11,122,120,0.4)] active:scale-95 backdrop-blur-sm"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white transition-colors duration-300"
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
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === testimonials.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="group w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-[#0B7A78] hover:border-[#0B7A78] hover:scale-110 hover:shadow-[0_0_30px_rgba(11,122,120,0.4)] active:scale-95 backdrop-blur-sm"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white transition-colors duration-300"
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
                      className={`rounded-full transition-all duration-500 ${
                        activeTestimonial === index
                          ? "w-6 md:w-8 h-2 bg-[#0B7A78] shadow-[0_0_12px_rgba(11,122,120,0.6)]"
                          : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="text-center lg:text-right">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-1 md:mb-2 tracking-tight">
                    500+
                  </div>
                  <div className="text-[#0B7A78] text-[0.6rem] md:text-xs tracking-[0.25em] uppercase font-medium">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0B7A78] text-white py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-5 md:px-6">
          <div className="flex flex-col items-center text-center space-y-5 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              VAMA Living
            </h2>

            <div className="flex items-center gap-5 md:gap-6">
              <a
                href="#"
                className="text-white/80 hover:text-[#F48587] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#F48587] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#F48587] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="space-y-1.5 md:space-y-2 text-white/70 text-sm">
              <p>contact@vamaliving.com</p>
              <p>+91 XXX XXX XXXX</p>
              <p>Hyderabad, India</p>
            </div>

            <p className="text-xs md:text-sm text-white/50 pt-4 md:pt-6">
              © 2025 VAMA Living. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

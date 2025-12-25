"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect, useRef, useState } from "react";

const heroFrames = [
  {
    src: "/images/shut1.jpg",
    alt: "Entrance shutter fully closed",
  },
  {
    src: "/images/shut2.jpg",
    alt: "Entrance shutter partially open",
  },
  {
    src: "/images/shut3.jpg",
    alt: "Entrance shutter fully open",
  },
  {
    src: "/images/shut4.jpg",
    alt: "View into the living space",
  },
  {
    src: "/images/shut5.jpg",
    alt: "Detail of custom furniture",
  },
  {
    src: "/images/shut6.jpg",
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

  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroStep, setHeroStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const [heroMobileIndex, setHeroMobileIndex] = useState(0);

  useEffect(() => {
    function updateIsDesktop() {
      if (typeof window === "undefined") return;
      setIsDesktop(window.innerWidth >= 768);
    }
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

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
    <div className="min-h-screen flex flex-col bg-white text-[#0B3B38]">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-white">
          {/* Mobile hero */}
          <div className="relative h-[80vh] min-h-[480px] overflow-hidden pt-24 md:hidden">
            <div className="absolute inset-0">
              <Image
                src={currentHeroFrameMobile.src}
                alt={currentHeroFrameMobile.alt}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/40 to-black/70" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between pb-8 px-5">
              <div className="pt-4">
                <span className="inline-block text-[0.65rem] tracking-[0.3em] uppercase text-white/70">
                  Step inside
                </span>
                <h1 className="mt-2 text-3xl font-serif text-white leading-tight">
                  Furniture made for your rooms, not a catalog.
                </h1>
                <p className="mt-3 text-sm text-white/80 max-w-xs">
                  Swipe through to see how we move from entrance to finished
                  space, one piece at a time.
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleHeroMobilePrev}
                    className="group w-9 h-9 rounded-full bg-black/45 border border-white/35 flex items-center justify-center text-white backdrop-blur-sm active:scale-95 transition-all duration-200"
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
                    className="group w-9 h-9 rounded-full bg-black/45 border border-white/35 flex items-center justify-center text-white backdrop-blur-sm active:scale-95 transition-all duration-200"
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
                      hover:bg-[#0B7A78] hover:text-white
                      hover:shadow-[0_16px_35px_rgba(0,0,0,0.45)]
                      active:translate-y-px active:shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
                  >
                    Step inside VAMA
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop hero */}
          <div className="relative hidden md:block" ref={heroRef}>
            <div className="relative h-[600vh]">
              <div className="sticky top-0 h-screen overflow-hidden pt-24">
                <div className="absolute inset-0">
                  <Image
                    src={currentHeroFrameDesktop.src}
                    alt={currentHeroFrameDesktop.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/35 to-black/80" />
                </div>

                {/* Copy block */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-10 max-w-3xl">
                    <p className="text-xs tracking-[0.3em] uppercase text-white/65 mb-4">
                      Hyderabad · Custom Furniture
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-serif text-white leading-tight mb-4">
                      Furniture that belongs to{" "}
                      <span className="text-white/80">your rooms.</span>
                    </h1>
                    <p className="text-lg text-white/75 max-w-xl">
                      From sofas and beds to full offices, we design and build
                      in-house so every piece fits your life, not just your
                      floor plan.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex h-full items-end justify-end pb-10 pr-10 lg:pb-14 lg:pr-14">
                  <Link href="/work">
                    <Button
                      className="rounded-full px-10 py-4 text-base lg:text-lg font-sans h-auto
                        bg-white/95 text-[#0B7A78] border border-white/80
                        shadow-[0_18px_40px_rgba(0,0,0,0.45)]
                        transition-all duration-300
                        hover:bg-[#0B7A78] hover:text-white
                        hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]
                        hover:-translate-y-1 hover:scale-[1.03]
                        active:translate-y-0 active:scale-100"
                    >
                      Step inside VAMA
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
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
                  New office, same old furniture won&apos;t work.
                </h2>
                <p className="text-base md:text-lg text-teal-900/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We design workstations, chairs and reception areas around how
                  your team moves, collaborates and focuses — not just how many
                  seats fit on a plan.
                </p>
              </div>

              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-teal-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(0,0,0,0.35)] border border-teal-950/20 bg-black/40">
                  <video
                    src="/videos/comsec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-[0.65rem] text-white/80">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400/70 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-300" />
                    </span>
                    <span className="uppercase tracking-[0.18em]">
                      Workspace in motion
                    </span>
                  </div>
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
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(0,0,0,0.5)] border border-white/20 bg-black/40">
                  <video
                    src="/videos/ressec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-[0.65rem] text-white/85">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300/80 opacity-70" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-200" />
                    </span>
                    <span className="uppercase tracking-[0.18em]">
                      Living story
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left">
                <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-teal-100 font-medium">
                  Residential
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance text-white">
                  Make your living, dining and bedroom feel like one story.
                </h2>
                <p className="text-base md:text-lg text-teal-50/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We tailor sofas, beds, storage and more to your rooms, your
                  light and the way your family actually moves through each
                  space.
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
                  One room, two kids and too many toys?
                </h2>
                <p className="text-base md:text-lg text-teal-900/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We build bunk beds, study zones and smart storage that make
                  space instead of taking it — so the room works for homework,
                  play and sleep.
                </p>
              </div>

              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-teal-400/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(0,0,0,0.4)] border border-teal-950/20 bg-black/35">
                  <video
                    src="/videos/kidssec.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2 text-[0.65rem] text-white/85">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300/80 opacity-70" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-200" />
                    </span>
                    <span className="uppercase tracking-[0.18em]">
                      Play in place
                    </span>
                  </div>
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance">
                What our clients say.
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Avatars */}
              <div className="lg:col-span-2 flex lg:flex-col gap-4 md:gap-5 justify-center lg:justify-start">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(index)}
                    className={`group relative transition-all duration-500 ease-out ${
                      activeTestimonial === index
                        ? "scale-100 z-10"
                        : "scale-90 opacity-55 hover:opacity-90 hover:scale-95"
                    }`}
                  >
                    <div
                      className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden transition-all duration-500 ${
                        activeTestimonial === index
                          ? "ring-2 ring-teal-300 ring-offset-2 ring-offset-[#062E2D] shadow-[0_0_40px_rgba(45,212,191,0.4)]"
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
                            : "bg-black/30 group-hover:bg-black/15"
                        }`}
                      />
                    </div>
                    {activeTestimonial === index && (
                      <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-8 h-px bg-linear-to-r from-teal-300 to-transparent ml-2" />
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

                  <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-12 border border-white/15 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-700 hover:bg.white/8 hover:border-teal-100/50">
                    <p className="relative text-lg md:text-xl lg:text-[1.6rem] font-serif text.white leading-relaxed mb-8 md:mb-10 text-balance">
                      "{testimonials[activeTestimonial].quote}"
                    </p>

                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-teal-300/50 transition-all duration-500 group-hover:ring-teal-200">
                        <img
                          src={
                            testimonials[activeTestimonial].image ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-10 w-px bg-linear-to-b from-transparent via-teal-200/60 to-transparent hidden md:block" />
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
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="group w-10 h-10 md:w-11 md:h-11 rounded-full bg.white/8 border border.white/25 flex items-center justify-center transition-all duration-300 hover:bg.white hover:border.white hover:scale-110 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)] active:scale-95 backdrop-blur-sm"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text.white group-hover:text-[#062E2D] transition-colors duration-300"
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
                    className="group w-10 h-10 md:w-11 md:h-11 rounded-full bg.white/8 border border.white/25 flex items-center justify-center transition-all duration-300 hover:bg.white hover:border.white hover:scale-110 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)] active:scale-95 backdrop-blur-sm"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text.white group-hover:text-[#062E2D] transition-colors duration-300"
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
                      className={`rounded-full transition-all duration-400 ${
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

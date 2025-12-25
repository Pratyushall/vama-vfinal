"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

/* ---------------- CONFIG ---------------- */

const HEADER_HEIGHT = 80; // px

/* ---------------- TYPES ---------------- */

type Slide = { src: string; alt: string };
type Category = {
  title: string;
  slides: Slide[];
};

/* ---------------- DATA ---------------- */

const residentialCategories: Category[] = [
  {
    title: "Sofa",
    slides: [
      { src: "/images/sofa1.jpg", alt: "Sofa 1" },
      { src: "/images/sofa2.jpg", alt: "Sofa 2" },
      { src: "/images/sofa3.jpg", alt: "Sofa 3" },
      { src: "/images/sofa4.jpg", alt: "Sofa 4" },
      { src: "/images/sofa5.jpg", alt: "Sofa 5" },
    ],
  },
  {
    title: "Bed",
    slides: [
      { src: "/images/bed1.jpg", alt: "Bed 1" },
      { src: "/images/bed3.jpg", alt: "Bed 2" },
      { src: "/images/bed4.jpg", alt: "Bed 3" },
      { src: "/images/bed5.jpg", alt: "Bed 4" },
      { src: "/images/bed6.jpg", alt: "Bed 5" },
    ],
  },
  {
    title: "Chair",
    slides: [
      { src: "/images/chair1.jpg", alt: "Chair 1" },
      { src: "/images/chair2.jpg", alt: "Chair 2" },
      { src: "/images/chair3.jpg", alt: "Chair 3" },
      { src: "/images/chair4.jpg", alt: "Chair 4" },
      { src: "/images/chair5.jpg", alt: "Chair 5" },
    ],
  },
  {
    title: "Dining",
    slides: [
      { src: "/work/residential/dining-1.jpg", alt: "Dining 1" },
      { src: "/work/residential/dining-2.jpg", alt: "Dining 2" },
      { src: "/work/residential/dining-3.jpg", alt: "Dining 3" },
      { src: "/work/residential/dining-4.jpg", alt: "Dining 4" },
      { src: "/work/residential/dining-5.jpg", alt: "Dining 5" },
    ],
  },
];

const corporateCategories: Category[] = [
  {
    title: "Workstations",
    slides: [
      { src: "/work/commercial/workstations-1.jpg", alt: "Work 1" },
      { src: "/work/commercial/workstations-2.jpg", alt: "Work 2" },
      { src: "/work/commercial/workstations-3.jpg", alt: "Work 3" },
      { src: "/work/commercial/workstations-4.jpg", alt: "Work 4" },
      { src: "/work/commercial/workstations-5.jpg", alt: "Work 5" },
    ],
  },
  {
    title: "Chairs",
    slides: [
      { src: "/work/commercial/chairs-1.jpg", alt: "Chair 1" },
      { src: "/work/commercial/chairs-2.jpg", alt: "Chair 2" },
      { src: "/work/commercial/chairs-3.jpg", alt: "Chair 3" },
      { src: "/work/commercial/chairs-4.jpg", alt: "Chair 4" },
      { src: "/work/commercial/chairs-5.jpg", alt: "Chair 5" },
    ],
  },
  {
    title: "Reception",
    slides: [
      { src: "/work/commercial/reception-1.jpg", alt: "Reception 1" },
      { src: "/work/commercial/reception-2.jpg", alt: "Reception 2" },
      { src: "/work/commercial/reception-3.jpg", alt: "Reception 3" },
      { src: "/work/commercial/reception-4.jpg", alt: "Reception 4" },
      { src: "/work/commercial/reception-5.jpg", alt: "Reception 5" },
    ],
  },
];

/* ---------------- CAROUSEL ---------------- */

function FullscreenCarousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative h-full w-full">
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="flex-[0_0_100%] h-full">
              <img
                src={s.src}
                alt={s.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-[#0B7A78] flex items-center justify-center"
      >
        <ArrowRight className="rotate-180" />
      </button>

      <button
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-[#0B7A78] flex items-center justify-center"
      >
        <ArrowRight />
      </button>

      {/* dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function WorkPage() {
  const [tab, setTab] = useState<"residential" | "corporate">("residential");
  const categories =
    tab === "residential" ? residentialCategories : corporateCategories;

  return (
    <div className="min-h-screen bg-[#0B7A78] text-white">
      <Header />

      {/* CONTENT WRAPPER — pushes everything below header */}
      <main style={{ paddingTop: HEADER_HEIGHT }}>
        {/* Tabs */}
        {/* Tabs */}
        <div className="flex justify-center py-10">
          <div className="flex gap-3 rounded-full bg-transparent">
            {/* Residential */}
            <button
              onClick={() => setTab("residential")}
              className={`
        px-12 py-4 rounded-full font-bold transition-all duration-300
        ${
          tab === "residential"
            ? `
              bg-white text-[#0B7A78]
              shadow-[0_8px_30px_rgba(255,255,255,0.25)]
            `
            : `
              bg-transparent text-white
              border border-white/60
              hover:bg-white hover:text-[#0B7A78]
            `
        }
      `}
            >
              Residential
            </button>

            {/* Corporate */}
            <button
              onClick={() => setTab("corporate")}
              className={`
        px-12 py-4 rounded-full font-bold transition-all duration-300
        ${
          tab === "corporate"
            ? `
              bg-white text-[#0B7A78]
              shadow-[0_8px_30px_rgba(255,255,255,0.25)]
            `
            : `
              bg-transparent text-white
              border border-white/60
              hover:bg-white hover:text-[#0B7A78]
            `
        }
      `}
            >
              Corporate
            </button>
          </div>
        </div>

        {/* Fullscreen Sections */}
        {categories.map((cat) => (
          <section
            key={cat.title}
            style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
            className="relative w-screen overflow-hidden"
          >
            <FullscreenCarousel slides={cat.slides} />

            {/* Single word title */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <h1 className="text-[10vw] font-bold uppercase tracking-tight text-white">
                {cat.title}
              </h1>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

/* ---------------- CONFIG ---------------- */

const HEADER_HEIGHT = 80;

/* ---------------- TYPES ---------------- */

type Slide = { src: string; alt: string };
type Category = {
  title: string;
  slides: Slide[];
};

type Tab = "residential" | "corporate" | "kids" | "exclusives";

/* ---------------- DATA ---------------- */

const residentialCategories: Category[] = [
  {
    title: "Sofa",
    slides: [
      { src: "/images/sofa1.png", alt: "Sofa 1" },
      { src: "/images/sofa2.png", alt: "Sofa 2" },
      { src: "/images/sofa3.png", alt: "Sofa 3" },
      { src: "/images/sofa4.png", alt: "Sofa 4" },
      { src: "/images/sofa5.jpeg", alt: "Sofa 5" },
    ],
  },
  {
    title: "Recliners",
    slides: [
      { src: "/images/rec1.png", alt: "Recliner 1" },
      { src: "/images/rec2.png", alt: "Recliner 2" },
      { src: "/images/rec3.png", alt: "Recliner 3" },
      { src: "/images/rec4.png", alt: "Recliner 4" },
      { src: "/images/rec5.png", alt: "Recliner 5" },
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
      { src: "/images/chair1.png", alt: "Chair 1" },
      { src: "/images/chair2.png", alt: "Chair 2" },
      { src: "/images/chair3.png", alt: "Chair 3" },
      { src: "/images/chair4.png", alt: "Chair 4" },
      { src: "/images/chair6.png", alt: "Chair 5" },
    ],
  },
  {
    title: "Dining",
    slides: [
      { src: "/images/dine1.jpg", alt: "Dining 1" },
      { src: "/images/dine2.jpg", alt: "Dining 2" },
      { src: "/images/dine3.jpg", alt: "Dining 3" },
      { src: "/images/dine4.jpg", alt: "Dining 4" },
      { src: "/images/dine5.jpg", alt: "Dining 5" },
    ],
  },
];

const corporateCategories: Category[] = [
  {
    title: "Ergonomic Chairs",
    slides: [
      { src: "/images/ergoo1.jpeg", alt: "Chair 1" },
      { src: "/images/ergoo2.jpeg", alt: "Chair 2" },
      { src: "/images/ergoo3.jpeg", alt: "Chair 3" },
      { src: "/images/ergoo4.jpeg", alt: "Chair 4" },
      { src: "/images/ergoo5.jpeg", alt: "Chair 5" },
    ],
  },
  {
    title: "Office Tables",
    slides: [
      { src: "/images/officef.png", alt: "Table 1" },
      { src: "/images/otables2.webp", alt: "Table 2" },
      { src: "/images/otables3.png", alt: "Table 3" },
      { src: "/images/otables4.png", alt: "Table 4" },
      { src: "/images/otables5.webp", alt: "Table 5" },
    ],
  },
  {
    title: "Workstation Furniture",
    slides: [
      { src: "/images/workstation1.webp", alt: "Workstation 1" },
      { src: "/images/workstation2.jpg", alt: "Workstation 2" },
      { src: "/images/workstation3.png", alt: "Workstation 3" },
      { src: "/images/workstation4.webp", alt: "Workstation 4" },
      { src: "/images/workstation5.jpg", alt: "Workstation 5" },
    ],
  },
  {
    title: "School Furniture",
    slides: [
      { src: "/images/schoolf1.png", alt: "School Desk 1" },
      { src: "/images/schoolf2.png", alt: "School Bench 2" },
      { src: "/images/schoolf3.png", alt: "Classroom Setup 3" },
      { src: "/images/schoolf4.png", alt: "Teacher Table 4" },
      { src: "/images/schoolf5.png", alt: "School Storage 5" },
    ],
  },
];

const kidsCategories: Category[] = [
  {
    title: "Bed",
    slides: [
      { src: "/images/kidbeds1.png", alt: "Kids Bed 1" },
      { src: "/images/kidbeds2.webp", alt: "Kids Bed 2" },
      { src: "/images/kidbeds3.webp", alt: "Kids Bed 3" },
      { src: "/images/kidbeds4.webp", alt: "Kids Bed 4" },
      { src: "/images/kidbeds5.jpg", alt: "Kids Bed 5" },
    ],
  },
  {
    title: "Bunk Beds",
    slides: [
      { src: "/images/bunkbeds1.png", alt: "Bunk Bed 1" },
      { src: "/images/bunkbeds2.png", alt: "Bunk Bed 2" },
      { src: "/images/bunkbeds3.png", alt: "Bunk Bed 3" },
      { src: "/images/bunkbeds4.png", alt: "Bunk Bed 4" },
      { src: "/images/bunkbeds5.webp", alt: "Bunk Bed 5" },
    ],
  },
  {
    title: "School",
    slides: [
      { src: "/images/kidschool1.png", alt: "School 1" },
      { src: "/images/kidschool2.png", alt: "School 2" },
      { src: "/images/kidschool3.png", alt: "School 3" },
      { src: "/images/kidschool4.webp", alt: "School 4" },
      { src: "/images/kidschool5.webp", alt: "School 5" },
    ],
  },
];

// ✅ NEW TAB: VAMA Exclusives (single section, 3 images)
const exclusivesCategories: Category[] = [
  {
    title: "Exclusives",
    slides: [
      { src: "/images/exclusive1.png", alt: "Exclusive 1" },
      { src: "/images/exclusive2.png", alt: "Exclusive 2" },
      { src: "/images/exclusive3.jpeg", alt: "Exclusive 3" },
    ],
  },
];

/* ---------------- CAROUSEL ---------------- */

function FullscreenCarousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  const prev = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      emblaApi?.scrollPrev();
    },
    [emblaApi]
  );

  const next = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      emblaApi?.scrollNext();
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
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
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ FIX: arrows now reliably clickable (higher z-index + stopPropagation) */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white text-[#0B7A78] flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ArrowRight className="rotate-180" />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white text-[#0B7A78] flex items-center justify-center"
        aria-label="Next slide"
      >
        <ArrowRight />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
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
  const [tab, setTab] = useState<Tab>("residential");

  const categories =
    tab === "residential"
      ? residentialCategories
      : tab === "corporate"
      ? corporateCategories
      : tab === "kids"
      ? kidsCategories
      : exclusivesCategories;

  const bgColor =
    tab === "residential"
      ? "bg-[#0B7A78]"
      : tab === "corporate"
      ? "bg-[#083E3C]"
      : tab === "kids"
      ? "bg-[#5AABA8]"
      : "bg-[#0D4341]"; // ✅ Exclusives background (deep teal)

  return (
    <div className={`min-h-screen ${bgColor} text-white`}>
      <Header />

      <main style={{ paddingTop: HEADER_HEIGHT }}>
        <div className="flex justify-center py-10">
          <div className="flex gap-3 flex-wrap justify-center">
            {["Residential", "Corporate", "Kids", "VAMA Exclusives"].map(
              (label) => {
                const key =
                  label === "VAMA Exclusives"
                    ? ("exclusives" as Tab)
                    : (label.toLowerCase() as Tab);

                return (
                  <button
                    key={label}
                    onClick={() => setTab(key)}
                    className={`px-10 py-4 rounded-full font-bold transition-all duration-300 ${
                      tab === key
                        ? "bg-white text-[#0B7A78] shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
                        : "border border-white/60 hover:bg-white hover:text-[#0B7A78]"
                    }`}
                  >
                    {label}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {categories.map((cat) => (
          <section
            key={cat.title}
            style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
            className="relative w-screen overflow-hidden group"
          >
            <FullscreenCarousel slides={cat.slides} />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center pointer-events-none">
              <h1 className="text-[3vw] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

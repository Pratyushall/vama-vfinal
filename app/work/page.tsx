"use client";

import type React from "react";

import type { ComponentType } from "react";
import { useState, useEffect, useCallback } from "react";
import Header from "@/components/header";
import {
  ArrowRight,
  Bed,
  Sofa,
  UtensilsCrossed,
  Armchair,
  Briefcase,
  Boxes,
  Building,
  Coffee,
  Hotel,
  Send,
  Sparkles,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

type Slide = { src: string; alt: string };
type Category = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  background: string;
  slides: Slide[];
};

const residentialCategories: Category[] = [
  {
    icon: Sofa,
    title: "Sofas",
    description:
      "Deep, sink-in sofas, loungers and sectionals tailored to your living room layout.",
    background: "#0B7A78",
    slides: [
      { src: "/images/sofa1.jpg", alt: "Custom sofa in a warm living room" },
      { src: "/images/sofa2.jpg", alt: "Sectional sofa with accent chairs" },
      { src: "/images/sofa3.jpg", alt: "Lounger with side table and lamp" },
      { src: "/images/sofa4.jpg", alt: "Family sofa setup with cushions" },
      { src: "/images/sofa5.jpg", alt: "Luxury sofa with coffee table" },
    ],
  },
  {
    icon: Bed,
    title: "Beds",
    description:
      "Custom beds, backrests and side tables that actually match your room story.",
    background: "#0B7A78",
    slides: [
      { src: "/images/bed1.jpg", alt: "King bed with upholstered headboard" },
      { src: "/images/bed3.jpg", alt: "Minimal wooden bed with side tables" },
      { src: "/images/bed4.jpg", alt: "Low platform bed in a cozy bedroom" },
      { src: "/images/bed5.jpg", alt: "Bed with integrated storage drawers" },
      {
        src: "/images/bed6.jpg",
        alt: "Bed with soft fabric headboard and lamps",
      },
    ],
  },
  {
    icon: Armchair,
    title: "Chairs",
    description:
      "Armchairs, loungers, reading chairs and accent pieces that pull a room together.",
    background: "#0B7A78",
    slides: [
      { src: "/images/chair1.jpg", alt: "Accent chair by a window" },
      { src: "/images/chair2.jpg", alt: "Pair of armchairs with side table" },
      { src: "/images/chair3.jpg", alt: "Reading corner with lounge chair" },
      {
        src: "/images/chair4.jpg",
        alt: "Armchair with footstool in a corner",
      },
      { src: "/images/chair5.jpg", alt: "Accent chair with floor lamp" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Dining",
    description:
      "Dining tables, chairs and sideboards built for everyday use and weekend hosting.",
    background: "#0B7A78",
    slides: [
      {
        src: "/work/residential/dining-1.jpg",
        alt: "6-seater dining table with chairs",
      },
      {
        src: "/work/residential/dining-2.jpg",
        alt: "Dining set with bench seating",
      },
      {
        src: "/work/residential/dining-3.jpg",
        alt: "Warm wooden dining table setup",
      },
      {
        src: "/work/residential/dining-4.jpg",
        alt: "Compact dining table in small space",
      },
      {
        src: "/work/residential/dining-5.jpg",
        alt: "Dining setup with crockery unit",
      },
    ],
  },
];

const kidsCategories: Category[] = [
  {
    icon: Bed,
    title: "Kids Beds",
    description:
      "Bunk beds, pull-outs and playful setups that keep siblings happy and safe.",
    background: "#0B7A78",
    slides: [
      {
        src: "/work/residential/kids-beds-1.jpg",
        alt: "Bunk bed with ladder and storage",
      },
      {
        src: "/work/residential/kids-beds-2.jpg",
        alt: "Twin beds in playful kids room",
      },
      {
        src: "/work/residential/kids-beds-3.jpg",
        alt: "Loft bed with play area below",
      },
      {
        src: "/work/residential/kids-beds-4.jpg",
        alt: "Kids bed with colourful headboard",
      },
      {
        src: "/work/residential/kids-beds-5.jpg",
        alt: "Bunk bed with study below",
      },
    ],
  },
  {
    icon: Boxes,
    title: "Kids Storage",
    description:
      "Study tables, bookshelves and toy storage that actually make space.",
    background: "#0B7A78",
    slides: [
      {
        src: "/work/residential/kids-storage-1.jpg",
        alt: "Kids study table with shelves",
      },
      {
        src: "/work/residential/kids-storage-2.jpg",
        alt: "Toy storage with open and closed units",
      },
      {
        src: "/work/residential/kids-storage-3.jpg",
        alt: "Bookshelves and study setup",
      },
      {
        src: "/work/residential/kids-storage-4.jpg",
        alt: "Wall-mounted storage for kids room",
      },
      {
        src: "/work/residential/kids-storage-5.jpg",
        alt: "Study zone with integrated drawers",
      },
    ],
  },
];

const corporateCategories: Category[] = [
  {
    icon: Briefcase,
    title: "Ergonomic Chairs",
    description:
      "Task chairs and executive seating customised for long hours and different roles.",
    background: "#F48587",
    slides: [
      {
        src: "/work/commercial/chairs-1.jpg",
        alt: "Task chairs in open office",
      },
      {
        src: "/work/commercial/chairs-2.jpg",
        alt: "Executive chair at manager desk",
      },
      {
        src: "/work/commercial/chairs-3.jpg",
        alt: "Meeting room chairs around table",
      },
      {
        src: "/work/commercial/chairs-4.jpg",
        alt: "Row of task chairs at workstations",
      },
      {
        src: "/work/commercial/chairs-5.jpg",
        alt: "Ergonomic chair with mesh back",
      },
    ],
  },
  {
    icon: Building,
    title: "Workstations",
    description:
      "Linear workstations, islands and manager desks planned for your floor plate.",
    background: "#F48587",
    slides: [
      {
        src: "/work/commercial/workstations-1.jpg",
        alt: "Open plan workstations",
      },
      {
        src: "/work/commercial/workstations-2.jpg",
        alt: "Manager cabin with desk",
      },
      {
        src: "/work/commercial/workstations-3.jpg",
        alt: "Collaborative table with seating",
      },
      {
        src: "/work/commercial/workstations-4.jpg",
        alt: "Corner workstation with storage",
      },
      {
        src: "/work/commercial/workstations-5.jpg",
        alt: "Long linear workstation setup",
      },
    ],
  },
  {
    icon: Coffee,
    title: "Cafés",
    description:
      "Pantry, café corners and breakout seating that make teams actually use the space.",
    background: "#F48587",
    slides: [
      {
        src: "/work/commercial/cafe-1.jpg",
        alt: "Cafe style breakout corner",
      },
      {
        src: "/work/commercial/cafe-2.jpg",
        alt: "High stools and bar counter",
      },
      {
        src: "/work/commercial/cafe-3.jpg",
        alt: "Soft seating in breakout zone",
      },
      {
        src: "/work/commercial/cafe-4.jpg",
        alt: "Pantry seating with tables",
      },
      {
        src: "/work/commercial/cafe-5.jpg",
        alt: "Colourful breakout seating area",
      },
    ],
  },
  {
    icon: Hotel,
    title: "Reception",
    description:
      "Reception desks, waiting lounges and lobby setups that feel like your brand.",
    background: "#F48587",
    slides: [
      {
        src: "/work/commercial/reception-1.jpg",
        alt: "Reception desk in office lobby",
      },
      {
        src: "/work/commercial/reception-2.jpg",
        alt: "Waiting lounge with sofas",
      },
      {
        src: "/work/commercial/reception-3.jpg",
        alt: "Lobby seating with coffee table",
      },
      {
        src: "/work/commercial/reception-4.jpg",
        alt: "Reception with brand backdrop",
      },
      {
        src: "/work/commercial/reception-5.jpg",
        alt: "Lobby with accent chairs and rug",
      },
    ],
  },
];

const makeId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

// Custom carousel component for each category
function CategoryCarousel({
  slides,
  tintColor,
}: {
  slides: Slide[];
  tintColor: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full relative">
              <img
                src={
                  slide.src ||
                  "/placeholder.svg?height=1080&width=1920&query=luxury furniture interior"
                }
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Elegant gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(180deg, 
                      rgba(0,0,0,0.15) 0%, 
                      rgba(0,0,0,0.05) 30%,
                      rgba(0,0,0,0.05) 50%,
                      rgba(0,0,0,0.4) 80%,
                      rgba(0,0,0,0.85) 100%
                    ),
                    radial-gradient(ellipse at 0% 0%, ${tintColor}15 0%, transparent 50%)
                  `,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center group"
        aria-label="Previous slide"
      >
        <ArrowRight className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform transform rotate-180" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center group"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Minimal dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-8 bg-white"
                : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<"residential" | "corporate">(
    "residential"
  );

  const [formData, setFormData] = useState({
    name: "",
    interest: "",
    selectedTags: [] as string[],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const residentialTags = [
    "Sofas",
    "Beds",
    "Dining",
    "Storage",
    "Kids Room",
    "Something Unique",
  ];
  const corporateTags = [
    "Workstations",
    "Chairs",
    "Cafeteria",
    "Reception",
    "Meeting Rooms",
    "Something Unique",
  ];

  const handleTagToggle = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const residentialSections = [...residentialCategories, ...kidsCategories];
  const corporateSections = corporateCategories;

  const isResidential = activeTab === "residential";
  const currentSections = isResidential
    ? residentialSections
    : corporateSections;

  const handleScrollTo = (title: string) => {
    if (typeof document === "undefined") return;
    const id = makeId(title);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 transition-colors duration-700"
              style={{ background: isResidential ? "#0B7A78" : "#F48587" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          {/* Decorative lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Elegant label */}
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-12 bg-white/40" />
                <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                  Our Portfolio
                </span>
                <span className="h-px w-12 bg-white/40" />
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05] tracking-tight text-balance text-white">
                Furniture that fits
                <br />
                <span className="text-white/80">your space.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
                Residential and corporate work, shown fullscreen – one story at
                a time.
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-pulse">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        <section className="relative z-30">
          <div
            className="border-y border-white/10 transition-colors duration-700"
            style={{ background: isResidential ? "#F48587" : "#0B7A78" }}
          >
            <div className="container mx-auto px-6 lg:px-12 py-8">
              <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                  <div className="inline-flex p-2 rounded-full bg-black/20 border border-white/15">
                    <button
                      type="button"
                      onClick={() => setActiveTab("residential")}
                      className={`relative px-10 md:px-16 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold tracking-wide transition-all duration-500 ${
                        activeTab === "residential"
                          ? "text-[#0D0D0D]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {activeTab === "residential" && (
                        <div className="absolute inset-0 rounded-full bg-white transition-all duration-500" />
                      )}
                      <span className="relative z-10">Residential</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("corporate")}
                      className={`relative px-10 md:px-16 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold tracking-wide transition-all duration-500 ${
                        activeTab === "corporate"
                          ? "text-[#0D0D0D]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {activeTab === "corporate" && (
                        <div className="absolute inset-0 rounded-full bg-white transition-all duration-500" />
                      )}
                      <span className="relative z-10">Corporate</span>
                    </button>
                  </div>
                </div>

                {/* Category buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {currentSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.title}
                        type="button"
                        onClick={() => handleScrollTo(section.title)}
                        className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm text-white/90 hover:text-white hover:bg-black/30 hover:border-white/40 transition-all duration-300"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                          <Icon className="h-3.5 w-3.5 text-white" />
                        </span>
                        <span className="font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULLSCREEN SLIDESHOW SECTIONS */}
        <section
          className="py-16"
          style={{ backgroundColor: isResidential ? "#F48587" : "#0B7A78" }}
        >
          {currentSections.map((category, idx) => {
            const Icon = category.icon;
            const id = makeId(category.title);
            const tintColor = isResidential ? "#0B7A78" : "#F48587";

            return (
              <section
                key={category.title}
                id={id}
                className="relative h-[85vh] w-full overflow-hidden rounded-3xl mx-auto mb-12 last:mb-0 bg-[#0D0D0D]"
                style={{
                  maxWidth: "calc(100% - 3rem)",
                }}
              >
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <CategoryCarousel
                    slides={category.slides}
                    tintColor={tintColor}
                  />
                </div>

                {/* Title overlay - removed numbering */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end pb-16 md:pb-20">
                  <div className="container mx-auto px-8 lg:px-12">
                    <div className="max-w-3xl space-y-4">
                      <div className="inline-flex items-center gap-3 rounded-full bg-black/30 border border-white/10 px-4 py-2 backdrop-blur-xl">
                        <span
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full"
                          style={{ background: tintColor }}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.25em] text-white/70">
                          {isResidential ? "Residential" : "Corporate"}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight tracking-tight">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </section>

        {/* CTA SECTION - alternating background */}
        <section
          className="relative py-32 md:py-40 overflow-hidden transition-colors duration-700"
          style={{ background: isResidential ? "#0B7A78" : "#F48587" }}
        >
          {/* Decorative border */}
          <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto">
              {!isSubmitted ? (
                <>
                  <div className="text-center space-y-6 mb-12">
                    <div className="inline-flex items-center gap-3">
                      <span className="h-px w-12 bg-white/40" />
                      <span
                        className="text-xs uppercase tracking-[0.4em] text-white/90"
                        style={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
                      >
                        Tell Us More
                      </span>
                      <span className="h-px w-12 bg-white/40" />
                    </div>

                    <h2
                      className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance text-white"
                      style={{
                        textShadow:
                          "0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(255,255,255,0.2)",
                      }}
                    >
                      What caught your eye?
                    </h2>

                    <p
                      className="text-lg text-white/90 font-light max-w-md mx-auto"
                      style={{ textShadow: "0 0 30px rgba(255,255,255,0.3)" }}
                    >
                      Let us know what you liked — we&apos;ll take it from here.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name input */}
                    <div className="space-y-3">
                      <label
                        className="text-sm font-medium text-white tracking-wide"
                        style={{ textShadow: "0 0 15px rgba(255,255,255,0.4)" }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="What should we call you?"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-6 py-4 bg-white/15 border border-white/30 rounded-2xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all duration-300"
                        style={{ textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
                      />
                    </div>

                    {/* Interest tags */}
                    <div className="space-y-3">
                      <label
                        className="text-sm font-medium text-white tracking-wide"
                        style={{ textShadow: "0 0 15px rgba(255,255,255,0.4)" }}
                      >
                        I&apos;m interested in...
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {(isResidential ? residentialTags : corporateTags).map(
                          (tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => handleTagToggle(tag)}
                              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                formData.selectedTags.includes(tag)
                                  ? "bg-white text-[#0D0D0D] shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25 hover:border-white/50"
                              }`}
                              style={{
                                textShadow: formData.selectedTags.includes(tag)
                                  ? "none"
                                  : "0 0 10px rgba(255,255,255,0.3)",
                              }}
                            >
                              {tag}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-3">
                      <label
                        className="text-sm font-medium text-white tracking-wide"
                        style={{ textShadow: "0 0 15px rgba(255,255,255,0.4)" }}
                      >
                        Anything specific in mind?
                        <span className="text-white/70 font-normal ml-2">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        placeholder="A teal velvet sofa, a 10-seater dining table, matching bedside lamps..."
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            interest: e.target.value,
                          }))
                        }
                        rows={3}
                        className="w-full px-6 py-4 bg-white/15 border border-white/30 rounded-2xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all duration-300 resize-none"
                        style={{ textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full bg-white text-[#0D0D0D] hover:bg-white/90 px-8 py-5 text-base h-auto rounded-full transition-all duration-500 hover:scale-[1.02] font-medium tracking-wide flex items-center justify-center gap-3"
                    >
                      Send it over
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center space-y-6 py-12">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/20 mb-4">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
                    We got it!
                  </h2>
                  <p className="text-lg text-white/70 font-light max-w-md mx-auto">
                    Thanks, {formData.name.split(" ")[0]}! We&apos;ll be in
                    touch soon to bring your ideas to life.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", interest: "", selectedTags: [] });
                    }}
                    className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Decorative bottom border */}
          <div className="absolute bottom-0 left-6 right-6 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
      </main>

      {/* FOOTER - alternating background */}
      <footer
        className="text-white py-16 border-t border-white/10 transition-colors duration-700"
        style={{ background: isResidential ? "#F48587" : "#0B7A78" }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-white">
              VAMA Living
            </h2>
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <span>Custom furniture</span>
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span>Hyderabad</span>
            </div>
            <p className="text-white/70 text-sm">contact@vamaliving.com</p>
            <div className="pt-4">
              <p className="text-xs text-white/50">
                © 2025 VAMA Living. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

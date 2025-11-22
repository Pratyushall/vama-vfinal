"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Bed,
  Sofa,
  UtensilsCrossed,
  Armchair,
  Briefcase,
  Coffee,
  Building,
  Hotel,
  Boxes,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type React from "react";

type CategorySlide = {
  src: string;
  alt: string;
};

type Category = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  slides: CategorySlide[];
};

// VAMA-ish palette
const VAMA_TEAL = "#0D4341";
const RESIDENTIAL_ACCENT = "#F4E0C8"; // warm beige / nude
const COMMERCIAL_ACCENT = "#D4ECE7"; // soft muted teal

// Different BGs for residential vs commercial section
const RESIDENTIAL_BG = "#0B3B38";
const COMMERCIAL_BG = "#062629";

const residentialCategories: Category[] = [
  {
    icon: Sofa,
    title: "Sofas & Loungers",
    description:
      "Deep, sink-in sofas, loungers and sectionals tailored to your living room layout.",
    slides: [
      {
        src: "/images/sofa1.jpg",
        alt: "Custom sofa in a warm living room",
      },
      {
        src: "/images/sofa2.jpg",
        alt: "Sectional sofa with accent chairs",
      },
      {
        src: "/images/sofa3.jpg",
        alt: "Lounger with side table and lamp",
      },
      {
        src: "/images/sofa4.jpg",
        alt: "Family sofa setup with cushions",
      },
      {
        src: "/images/sofa5.jpg",
        alt: "Luxury sofa with coffee table",
      },
    ],
  },
  {
    icon: Bed,
    title: "Beds & Headboards",
    description:
      "Custom beds, backrests and side tables that actually match your room story.",
    slides: [
      {
        src: "/images/bed1.jpg",
        alt: "King bed with upholstered headboard",
      },
      {
        src: "/images/bed3.jpg",
        alt: "Minimal wooden bed with side tables",
      },
      {
        src: "/images/bed4.jpg",
        alt: "Low platform bed in a cozy bedroom",
      },
      {
        src: "/images/bed5.jpg",
        alt: "Bed with integrated storage drawers",
      },
      {
        src: "/images/bed6.jpg",
        alt: "Bed with soft fabric headboard and lamps",
      },
    ],
  },
  {
    icon: Armchair,
    title: "Chairs & Accent Pieces",
    description:
      "Armchairs, loungers, reading chairs and accent pieces that pull a room together.",
    slides: [
      {
        src: "/images/chair1.jpg",
        alt: "Accent chair by a window",
      },
      {
        src: "/images/chair2.jpg",
        alt: "Pair of armchairs with side table",
      },
      {
        src: "/images/chair3.jpg",
        alt: "Reading corner with lounge chair",
      },
      {
        src: "/images/chair4.jpg",
        alt: "Armchair with footstool in a corner",
      },
      {
        src: "/images/chair5.jpg",
        alt: "Accent chair with floor lamp",
      },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Sets",
    description:
      "Dining tables, chairs and sideboards built for everyday use and weekend hosting.",
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
    title: "Kids Beds & Bunks",
    description:
      "Bunk beds, pull-outs and playful setups that keep siblings happy and safe.",
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
    title: "Kids Storage & Study",
    description:
      "Study tables, bookshelves and toy storage that actually make space.",
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

const commercialCategories: Category[] = [
  {
    icon: Briefcase,
    title: "Ergonomic Chairs",
    description:
      "Task chairs and executive seating customised for long hours and different roles.",
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
    title: "Workstations & Tables",
    description:
      "Linear workstations, islands and manager desks planned for your floor plate.",
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
    title: "Cafés & Breakout Zones",
    description:
      "Pantry, café corners and breakout seating that make teams actually use the space.",
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
    title: "Reception & Lobbies",
    description:
      "Reception desks, waiting lounges and lobby setups that feel like your brand.",
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

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">(
    "residential"
  );

  const isResidential = activeTab === "residential";
  const accentColor = isResidential ? RESIDENTIAL_ACCENT : COMMERCIAL_ACCENT;
  const currentCategories = isResidential
    ? residentialCategories
    : commercialCategories;
  const workBgColor = isResidential ? RESIDENTIAL_BG : COMMERCIAL_BG;

  return (
    <div className="min-h-screen bg-[#0D4341] text-white">
      <Header />

      <main>
        {/* Hero + Tabs */}
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-10 md:px-12 md:py-12 shadow-[0_22px_80px_rgba(0,0,0,0.55)]">
              <div className="mb-8 text-center space-y-3">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
                  Furniture that fits the{" "}
                  <span className="underline decoration-white/50 underline-offset-8">
                    space
                  </span>
                  , not the catalog.
                </h2>
              </div>

              {/* Tabs */}
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab("residential")}
                  className={[
                    "flex-1 rounded-full py-3.5 px-6 text-base md:text-lg font-serif font-semibold transition-all duration-300 border",
                    "hover:-translate-y-[1px] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
                    activeTab === "residential"
                      ? "border-transparent text-[#3C2A19] shadow-xl"
                      : "border-white/15 text-white/75 hover:bg-white/5",
                  ].join(" ")}
                  style={
                    activeTab === "residential"
                      ? { backgroundColor: RESIDENTIAL_ACCENT }
                      : {}
                  }
                >
                  Residential
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("commercial")}
                  className={[
                    "flex-1 rounded-full py-3.5 px-6 text-base md:text-lg font-serif font-semibold transition-all duration-300 border",
                    "hover:-translate-y-[1px] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
                    activeTab === "commercial"
                      ? "border-transparent text-[#0E3433] shadow-xl"
                      : "border-white/15 text-white/75 hover:bg-white/5",
                  ].join(" ")}
                  style={
                    activeTab === "commercial"
                      ? { backgroundColor: COMMERCIAL_ACCENT }
                      : {}
                  }
                >
                  Commercial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section – background switches per tab */}
        <section
          className="py-20 md:py-24 border-t border-white/15"
          style={{ backgroundColor: workBgColor }}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between gap-4 mb-10 md:mb-14">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                {isResidential
                  ? "Rooms we keep coming back to."
                  : "Spaces that actually get used."}
              </h3>
              <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span>
                  {isResidential ? "Home projects" : "Commercial work"}
                </span>
              </div>
            </div>

            {/* ONE BIG CARD PER ROW */}
            <div className="space-y-10 md:space-y-12 max-w-5xl mx-auto">
              {currentCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={category.title}
                    className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl text-white rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,0,0,0.8)]"
                  >
                    {/* Luxe frame glow */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle at 0 0, rgba(255,255,255,0.20), transparent 55%), radial-gradient(circle at 100% 100%, rgba(255,255,255,0.12), transparent 55%)",
                      }}
                    />

                    {/* Carousel – wide framed */}
                    <div className="relative p-4 pb-0 md:p-5 md:pb-0">
                      <div className="rounded-2xl border border-white/15 overflow-hidden">
                        <Carousel className="relative w-full">
                          <CarouselContent>
                            {category.slides.map((slide, i) => (
                              <CarouselItem key={i}>
                                <div className="relative h-64 md:h-80 overflow-hidden">
                                  <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-black/45 text-white border-none hover:bg-black/70" />
                          <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-black/45 text-white border-none hover:bg-black/70" />
                        </Carousel>
                      </div>
                    </div>

                    <CardContent className="relative px-6 md:px-8 pb-7 pt-5">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 shadow-inner"
                            style={{ boxShadow: "0 0 22px rgba(0,0,0,0.65)" }}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="text-xl md:text-2xl font-serif font-semibold">
                            {category.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                        <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-2xl">
                          {category.description}
                        </p>
                        <Link href="/contact" className="shrink-0"></Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Kids block only for Residential */}
            {isResidential && (
              <div className="max-w-5xl mx-auto mt-20 space-y-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold">
                    Kids&apos; rooms that actually grow with them.
                  </h3>
                  <span className="hidden md:inline-flex text-xs uppercase tracking-[0.3em] text-white/50">
                    Kids · Beds · Storage
                  </span>
                </div>

                {/* CHANGED HERE: stack kids cards vertically */}
                <div className="space-y-8">
                  {kidsCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Card
                        key={category.title}
                        className="group relative overflow-hidden border border-white/12 bg.white/5 backdrop-blur-xl text-white rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_85px_rgba(0,0,0,0.85)]"
                      >
                        <div className="relative p-3 pb-0">
                          <div className="rounded-2xl border border-white/18 overflow-hidden">
                            <Carousel className="relative w-full">
                              <CarouselContent>
                                {category.slides.map((slide, i) => (
                                  <CarouselItem key={i}>
                                    <div className="relative h-56 md:h-60 overflow-hidden">
                                      <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-black/45 text-white border-none hover:bg-black/70" />
                              <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-black/45 text-white border-none hover:bg-black/70" />
                            </Carousel>
                          </div>
                        </div>

                        <CardContent className="relative p-6 pt-5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/30"></div>
                            <h4 className="text-xl font-serif font-semibold">
                              {category.title}
                            </h4>
                          </div>
                          <p className="text-sm text-white/80 leading-relaxed mb-4">
                            {category.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20 bg-gradient-to-br from.black via-[#052120] to-[#0D4341] border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-5">
              {isResidential
                ? "Have a floor plan or just a moodboard?"
                : "Have a bare shell or a half-furnished office?"}
            </h3>
            <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto mb-8">
              Share your reference images, plan or even a rough WhatsApp sketch.
              We&apos;ll tell you exactly what&apos;s possible with custom
              furniture.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-[#0D4341] hover:bg-white/90 shadow-[0_18px_55px_rgba(0,0,0,0.7)] px-8 py-6 text-base md:text-lg h-auto rounded-full">
                {isResidential
                  ? "Talk about your home project"
                  : "Discuss your commercial project"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-14 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              VAMA Living
            </h2>
            <p className="text-sm text-white/60">
              Factory-to-home custom furniture · Hyderabad
            </p>
            <div className="space-y-1 text-white/60 text-sm">
              <p>contact@vamaliving.com · +91 XXX XXX XXXX</p>
              <p>Hyderabad, India</p>
            </div>
            <p className="text-xs text-white/45 pt-2">
              © 2025 VAMA Living. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
  Boxes,
  Building,
  Coffee,
  Hotel,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Declare variables
const residentialCategories = [
  {
    icon: Sofa,
    title: "Sofas & Loungers",
    description:
      "Deep, sink-in sofas, loungers and sectionals tailored to your living room layout.",
    background: "#F48587",
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
    background: "#A55457",
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
    background: "#F48587",
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
    background: "#A55457",
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

const kidsCategories = [
  {
    icon: Bed,
    title: "Kids Beds & Bunks",
    description:
      "Bunk beds, pull-outs and playful setups that keep siblings happy and safe.",
    background: "#F48587",
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
    background: "#A55457",
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

const commercialCategories = [
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
    title: "Workstations & Tables",
    description:
      "Linear workstations, islands and manager desks planned for your floor plate.",
    background: "#A55457",
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
    title: "Reception & Lobbies",
    description:
      "Reception desks, waiting lounges and lobby setups that feel like your brand.",
    background: "#A55457",
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
  const currentCategories = isResidential
    ? residentialCategories
    : commercialCategories;

  return (
    <div className="min-h-screen bg-[#0D4341]">
      <Header />

      <main>
        <section className="pt-32 pb-16 bg-[#467891] relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/20 rounded-full blur-[140px]" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight text-pretty">
                Furniture that
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">fits your space</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-white/20 -z-0" />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light tracking-wide">
                Custom-made to measure
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/5 py-8 border-t border-white/10 sticky top-[72px] z-30 backdrop-blur-xl">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex w-full gap-4 md:gap-6 max-w-3xl mx-auto">
              <button
                type="button"
                onClick={() => setActiveTab("residential")}
                className={[
                  "group relative flex-1 rounded-3xl px-8 py-5 overflow-hidden",
                  "text-sm md:text-base lg:text-lg font-serif font-semibold uppercase tracking-[0.35em]",
                  "transition-all duration-700 ease-out",
                  activeTab === "residential"
                    ? "scale-105"
                    : "scale-100 hover:scale-[1.02]",
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute inset-0 border backdrop-blur-2xl transition-all duration-700",
                    activeTab === "residential"
                      ? "bg-white/15 border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                      : "bg-white/5 border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)]",
                  ].join(" ")}
                  style={{ borderRadius: "inherit" }}
                />

                {activeTab === "residential" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                )}

                <span
                  className={[
                    "relative z-10 transition-colors duration-500",
                    activeTab === "residential"
                      ? "text-white"
                      : "text-white/50",
                  ].join(" ")}
                >
                  Residential
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("commercial")}
                className={[
                  "group relative flex-1 rounded-3xl px-8 py-5 overflow-hidden",
                  "text-sm md:text-base lg:text-lg font-serif font-semibold uppercase tracking-[0.35em]",
                  "transition-all duration-700 ease-out",
                  activeTab === "commercial"
                    ? "scale-105"
                    : "scale-100 hover:scale-[1.02]",
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute inset-0 border backdrop-blur-2xl transition-all duration-700",
                    activeTab === "commercial"
                      ? "bg-white/15 border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                      : "bg-white/5 border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)]",
                  ].join(" ")}
                  style={{ borderRadius: "inherit" }}
                />

                {activeTab === "commercial" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                )}

                <span
                  className={[
                    "relative z-10 transition-colors duration-500",
                    activeTab === "commercial" ? "text-white" : "text-white/50",
                  ].join(" ")}
                >
                  Commercial
                </span>
              </button>
            </div>
          </div>
        </section>

        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: isResidential ? "#8ab3c7" : "#467891" }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
                {isResidential
                  ? "Spaces worth coming home to"
                  : "Workspaces built for focus"}
              </h2>
            </div>

            <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
              {currentCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="group">
                    <Card className="relative overflow-hidden border-none bg-black/20 backdrop-blur-2xl text-white rounded-[2rem] shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_35px_120px_rgba(0,0,0,0.7)] hover:-translate-y-3">
                      <div className="relative">
                        <Carousel className="relative w-full">
                          <CarouselContent>
                            {category.slides.map((slide, i) => (
                              <CarouselItem key={i}>
                                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                                  <img
                                    src={slide.src || "/placeholder.svg"}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/40 text-white border-white/20 hover:bg-black/60 backdrop-blur-xl" />
                          <CarouselNext className="right-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/40 text-white border-white/20 hover:bg-black/60 backdrop-blur-xl" />
                        </Carousel>
                      </div>

                      <CardContent className="absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <div className="flex items-end justify-between gap-6">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-11 w-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                                <Icon className="h-5 w-5" />
                              </div>
                              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
                                {category.title}
                              </h3>
                            </div>
                            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Kids Section */}
            {isResidential && (
              <div className="mt-24 pt-24 border-t border-white/10 bg-[#467891]/30 rounded-[2rem] p-8 md:p-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12 text-balance">
                  Rooms that grow with them
                </h2>

                <div className="flex flex-col gap-8">
                  {kidsCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Card
                        key={category.title}
                        className="group relative overflow-hidden border-none bg-black/20 backdrop-blur-2xl text-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-700 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] hover:-translate-y-2"
                      >
                        <div className="relative">
                          <Carousel className="relative w-full">
                            <CarouselContent>
                              {category.slides.map((slide, i) => (
                                <CarouselItem key={i}>
                                  <div className="relative h-[300px] md:h-[350px] overflow-hidden">
                                    <img
                                      src={slide.src || "/placeholder.svg"}
                                      alt={slide.alt}
                                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-4 h-10 w-10 bg-black/40 text-white border-white/20 hover:bg-black/60 backdrop-blur-xl" />
                            <CarouselNext className="right-4 h-10 w-10 bg-black/40 text-white border-white/20 hover:bg-black/60 backdrop-blur-xl" />
                          </Carousel>
                        </div>

                        <CardContent className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                              <Icon className="h-4 w-4" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold">
                              {category.title}
                            </h3>
                          </div>
                          <p className="text-sm md:text-base text-white/70">
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

        <section className="relative py-32 bg-[#8ab3c7] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance leading-tight">
              {isResidential
                ? "Let's design your space"
                : "Build a workspace that works"}
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 font-light">
              Share your vision. We'll make it real.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-[#0D4341] hover:bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.6)] px-10 py-7 text-lg h-auto rounded-full transition-all duration-500 hover:scale-105">
                Start your project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#467891] text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
              VAMA Living
            </h2>
            <p className="text-white/60">Custom furniture · Hyderabad</p>
            <div className="text-white/60 text-sm pt-2">
              <p>contact@vamaliving.com</p>
            </div>
            <p className="text-xs text-white/40 pt-4">© 2025 VAMA Living</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

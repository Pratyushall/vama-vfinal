import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 3-image sets for each section
const commercialImages = [
  {
    src: "/images/com3.jpg",
    alt: "Custom commercial workstations",
  },
  {
    src: "/images/com2.jpg",
    alt: "Commercial meeting space",
  },
  {
    src: "/images/com1.jpg",
    alt: "Reception and waiting area",
  },
];

const residentialImages = [
  {
    src: "/images/res1.jpg",
    alt: "Custom living room furniture",
  },
  {
    src: "/images/res2.jpg",
    alt: "Dining and open plan space",
  },
  {
    src: "/images/res3.jpg",
    alt: "Bedroom with custom storage",
  },
];

const kidsImages = [
  {
    src: "/images/kid1.jpg",
    alt: "Kids room with custom bunk beds",
  },
  {
    src: "/images/kid2.jpg",
    alt: "Kids study and play zone",
  },
  {
    src: "/images/kid3.jpg",
    alt: "Storage solutions for kids room",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0D4341]">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section – kept EXACTLY as you wrote it */}
        <section className="relative min-h-screen overflow-hidden pt-24">
          {/* Full-screen background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/herov.png" // your hero image in /public
              alt="VAMA Living custom furniture"
              fill
              priority
              className="
        object-cover
        scale-70
        transition-transform
        duration-[4000ms]
        ease-out
        hover:scale-75
      "
            />
            {/* Subtle overlay for contrast */}
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* CTA pinned bottom-right, with spacing from header & edges */}
          <div className="relative z-10 flex min-h-[calc(100vh-6rem)] items-end justify-end pb-8 pr-6 md:pb-10 md:pr-10">
            <Link href="/work">
              <Button
                className="
          rounded-full px-10 py-4 text-lg font-sans h-auto
          bg-white/95 text-[#0D4341] border border-white/70
          shadow-[0_18px_40px_rgba(0,0,0,0.4)]
          transition-all duration-300
          hover:bg-[#0C7B79] hover:text-white
          hover:shadow-[0_0_40px_rgba(255,255,255,0.45)]
          hover:-translate-y-1 hover:scale-[1.03]
          active:translate-y-0 active:scale-100
          active:shadow-[0_10px_25px_rgba(0,0,0,0.45)]
        "
              >
                Step inside VAMA
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 1: Commercial - Description Left, Slideshow Right */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Commercial Description - Left */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                    Commercial
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-balance text-white">
                  New office, same old furniture won&apos;t work.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  We create custom workstations, chairs and reception setups for
                  how your team actually works. Want workstations customised?
                </p>
              </div>

              {/* Commercial Slideshow - Right */}
              <div className="relative">
                <Carousel className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                  <CarouselContent>
                    {commercialImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/60" />
                  <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/60" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Residential - Slideshow Left, Description Right */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Residential Slideshow - Left */}
              <div className="relative order-2 lg:order-1">
                <Carousel className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                  <CarouselContent>
                    {residentialImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/60" />
                  <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/60" />
                </Carousel>
              </div>

              {/* Residential Description - Right */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-block">
                  <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                    Residential
                  </span>
                </div>
                <h2 className="text-5xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance text-white">
                  Need your living, dining and bedroom to feel like one story?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  We tailor sofas, beds, storage and more to your space, not the
                  other way around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider Line */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Section 3: Kids - Description Left, Slideshow Right */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Kids Description - Left */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-light">
                    Kids
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-balance text-white">
                  One room, two kids, too many toys?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  We build bunk beds, study zones and storage that actually make
                  space instead of taking it.
                </p>
              </div>

              {/* Kids Slideshow - Right */}
              <div className="relative">
                <Carousel className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                  <CarouselContent>
                    {kidsImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/60" />
                  <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white border-none hover:bg-black/60" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer — also same green now */}
      <footer className="bg-[#0D4341] text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold">VAMA Living</h2>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225 1.664 4.771 4.919 4.919 1.266.057 1.645.069 4.849.069zm0-2.163c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="space-y-2 text-muted-foreground">
              <p>contact@vamaliving.com</p>
              <p>+91 XXX XXX XXXX</p>
              <p>Hyderabad, India</p>
            </div>

            <p className="text-sm text-muted-foreground pt-6">
              © 2025 VAMA Living. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

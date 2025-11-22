"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "@/components/header";

export default function ResidentialPage() {
  const bedsCollection = [
    {
      image: "/luxury-king-size-bed-with-tufted-headboard.jpg",
      title: "King Bed - Tufted Elegance",
    },
    {
      image: "/modern-platform-bed-with-wooden-frame.jpg",
      title: "Platform Bed - Modern Oak",
    },
    {
      image: "/classic-four-poster-bed-with-canopy.jpg",
      title: "Four Poster - Classic Design",
    },
    {
      image: "/contemporary-upholstered-bed-in-velvet.jpg",
      title: "Upholstered Bed - Velvet Touch",
    },
    {
      image: "/minimalist-wooden-bed-with-storage.jpg",
      title: "Storage Bed - Space Saver",
    },
  ];

  const sofasCollection = [
    {
      image: "/luxury-leather-sectional-sofa-in-living-room.jpg",
      title: "Leather Sectional - Premium",
    },
    {
      image: "/elegant-velvet-sofa-with-gold-legs.jpg",
      title: "Velvet Sofa - Royal Blue",
    },
    {
      image: "/modern-l-shaped-sofa-in-neutral-tones.jpg",
      title: "L-Shaped - Contemporary",
    },
    {
      image: "/chesterfield-sofa-with-deep-button-tufting.jpg",
      title: "Chesterfield - Classic",
    },
    {
      image: "/minimalist-scandinavian-sofa-with-wooden-legs.jpg",
      title: "Scandinavian - Minimal",
    },
  ];

  const chairsCollection = [
    {
      image: "/luxury-accent-chair-with-velvet-upholstery.jpg",
      title: "Accent Chair - Velvet",
    },
    {
      image: "/modern-dining-chair-with-leather-seat.jpg",
      title: "Dining Chair - Leather",
    },
    {
      image: "/ergonomic-office-chair-in-premium-materials.jpg",
      title: "Office Chair - Executive",
    },
    {
      image: "/comfortable-lounge-chair-with-ottoman.jpg",
      title: "Lounge Chair - Relaxation",
    },
    {
      image: "/elegant-wingback-chair-in-rich-fabric.jpg",
      title: "Wingback - Traditional",
    },
  ];

  const kidsBeds = [
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Kids Bed - Adventure Theme",
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Bunk Bed - Space Saver",
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Princess Bed - Dreamy",
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Race Car Bed - Fun Design",
    },
  ];

  const kidsChairs = [
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Study Chair - Ergonomic",
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Bean Bag - Cozy",
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Rocking Chair - Classic",
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Desk Chair - Adjustable",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 text-balance">
              Custom Furniture for Your Home
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transform every room in your house with furniture that's designed
              around your lifestyle, tailored to your taste, and built to last
              generations.
            </p>
            <Link href="/contact">
              <Button className="shadow-lg px-8 py-6 text-lg h-auto">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="container mx-auto px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {bedsCollection.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        {item.title}
                      </h3>
                      <Button
                        variant="outline"
                        className="mt-2 bg-white/90 border-white hover:bg-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sofasCollection.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        {item.title}
                      </h3>
                      <Button
                        variant="outline"
                        className="mt-2 bg-white/90 border-white hover:bg-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {chairsCollection.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        {item.title}
                      </h3>
                      <Button
                        variant="outline"
                        className="mt-2 bg-white/90 border-white hover:bg-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-balance">
            Kids Collection
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Playful, safe, and beautifully crafted furniture for your little
            ones
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {kidsBeds.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        {item.title}
                      </h3>
                      <Button
                        variant="outline"
                        className="mt-2 bg-white/90 border-white hover:bg-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {kidsChairs.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-serif font-bold mb-2">
                        {item.title}
                      </h3>
                      <Button
                        variant="outline"
                        className="mt-2 bg-white/90 border-white hover:bg-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
              Why Choose VAMA for Your Home?
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">
                    1
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">
                  Personal Consultation
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We visit your home, understand your needs, and design
                  furniture that fits perfectly.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">
                    2
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">
                  Complete Customization
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Choose materials, colors, dimensions, and finishes to match
                  your exact vision.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">
                    3
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">
                  Seamless Installation
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Professional delivery and setup, ensuring everything is
                  perfect from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Redesign Your Home?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's create furniture that makes your house feel like home.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-neutral-900 hover:bg-white/90 shadow-lg px-8 py-6 text-lg h-auto">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.069-4.849-.069-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

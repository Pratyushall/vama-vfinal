import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  Coffee,
  Building,
  Users,
  ShoppingBag,
  Hotel,
} from "lucide-react";
import header from "@/components/header";

export default function CommercialPage() {
  const categories = [
    {
      icon: Briefcase,
      title: "Corporate Offices",
      description:
        "Executive desks, ergonomic chairs, conference tables, and storage solutions for professional workspaces.",
      image: "/modern-corporate-office-furniture.jpg",
    },
    {
      icon: Coffee,
      title: "Cafes & Restaurants",
      description:
        "Stylish dining furniture, bar stools, outdoor seating, and custom booths for hospitality spaces.",
      image: "/modern-cafe-interior-with-custom-furniture.jpg",
    },
    {
      icon: Building,
      title: "Reception & Lobbies",
      description:
        "Make a lasting first impression with elegant reception desks and comfortable waiting area seating.",
      image: "/luxury-office-reception-area.jpg",
    },
    {
      icon: Users,
      title: "Coworking Spaces",
      description:
        "Flexible furniture solutions for collaborative work environments and shared offices.",
      image: "/modern-coworking-space-furniture.jpg",
    },
    {
      icon: ShoppingBag,
      title: "Retail Spaces",
      description:
        "Display units, checkout counters, and custom fixtures that enhance your brand experience.",
      image: "/boutique-retail-store-furniture.jpg",
    },
    {
      icon: Hotel,
      title: "Hotels & Hospitality",
      description:
        "Complete furnishing solutions for guest rooms, lobbies, and common areas.",
      image: "/luxury-hotel-lobby-furniture.jpg",
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
              Premium Furniture for Businesses
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Elevate your commercial space with custom furniture that reflects
              your brand, inspires your team, and impresses your clients.
            </p>
            <Link href="/contact">
              <Button className="shadow-lg px-8 py-6 text-lg h-auto">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Solutions for Every Business
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-serif font-bold mb-3">
                    {category.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Link href="/contact" className="block">
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
              Why Businesses Trust VAMA
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-serif font-bold mb-4">
                  Bulk Order Expertise
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We handle large-scale projects with efficiency, ensuring
                  consistent quality across hundreds of pieces and delivering on
                  time, every time.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-serif font-bold mb-4">
                  Brand Alignment
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Custom designs that match your brand colors, aesthetic, and
                  values, creating a cohesive environment that speaks to your
                  identity.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-serif font-bold mb-4">
                  Durability Focus
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Commercial-grade materials and construction built to withstand
                  heavy daily use, protecting your investment for years.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-serif font-bold mb-4">
                  Post-Installation Support
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated support team available for maintenance, repairs, and
                  additional orders as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
              Our Process
            </h3>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    Site Visit & Consultation
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We visit your location to understand space requirements,
                    workflow, and design preferences.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    Custom Design Proposal
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Receive detailed 3D renders, material samples, and
                    comprehensive quotes for your project.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    Manufacturing & Quality Control
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Each piece is crafted in our factory with rigorous quality
                    checks at every stage.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-serif font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-2">
                    Installation & Final Setup
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional installation team ensures everything is perfect
                    before handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Furnish Your Business?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial project and create a custom solution
            that works for you.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-neutral-900 hover:bg-white/90 shadow-lg px-8 py-6 text-lg h-auto">
              Schedule Consultation
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.949 0 3.205.013 3.668.072 4.948.149 3.227 2.617 6.78 6.979 6.98 1.281.059 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.204-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.645-.069-4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, Sparkles, Heart } from "lucide-react";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D4341] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-[#0D4341]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 text-balance">
              Crafting Comfort, Defining Style
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              At VAMA Living, we believe furniture is more than just utility.
              It&apos;s an expression of who you are, a reflection of your
              taste, and the foundation of memorable moments in your space.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#0B3B38]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Founded in Hyderabad, VAMA Living emerged from a simple
                  vision: to deliver factory-fresh, fully customizable furniture
                  directly to homes and businesses, eliminating middlemen and
                  maximizing value.
                </p>
                <p>
                  Over the years, we&apos;ve grown from a small workshop to a
                  trusted name in custom furnishing, serving clients across
                  residential and commercial spaces.
                </p>
                <p>
                  Every piece we create is designed with care, crafted with
                  precision, and delivered with pride. That&apos;s the VAMA
                  promise.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-white/15">
              <img
                src="/furniture-workshop-craftsmen-at-work.jpg"
                alt="VAMA Living Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#062629]">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            What We Stand For
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-serif font-bold mb-3">
                  Quality First
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Premium materials and expert craftsmanship in every piece we
                  create.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-serif font-bold mb-3">
                  Full Customization
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Design freedom to match your unique style and space
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-serif font-bold mb-3">
                  Client Focus
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Your satisfaction is our priority, from design to delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-serif font-bold mb-3">
                  Built to Last
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Durable designs that stand the test of time and daily use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-[#052120] to-[#0D4341] text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s create furniture that perfectly fits your vision and
            lifestyle.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#0D4341] hover:bg-white/90 shadow-lg px-8 py-6 text-lg h-auto rounded-full">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold">VAMA Living</h2>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-[#F4E0C8] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[#F4E0C8] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.663-.069 4.849-.149 3.225-1.664 4.771-6.98 6.98-1.266.057-1.645.069-4.849.069-3.204 0-3.663-.012-4.849-.069-4.358-.2-6.78-2.618-6.98-6.98C.014 15.668 0 15.259 0 12c0-3.259.014-3.668.072-4.948.2-4.358 2.622-6.78 6.98-6.98C8.257.014 8.666 0 11.925 0h.15zm0 5.838C8.597 8.001 5.838 10.76 5.838 14.163S8.597 20.326 12 20.326s6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-3.999 0-2.21 1.791-4 4-4s4 1.79 4 4c0 2.209-1.791 3.999-4 3.999zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[#F4E0C8] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.564v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368 3.274 4.23 4.193 3.305 5.337 3.305c1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>

            <div className="space-y-2 text-white/60">
              <p>contact@vamaliving.com</p>
              <p>+91 XXX XXX XXXX</p>
              <p>Hyderabad, India</p>
            </div>

            <p className="text-sm text-white/45 pt-6">
              © 2025 VAMA Living. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

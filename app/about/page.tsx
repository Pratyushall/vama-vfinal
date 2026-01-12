"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Sparkles, Heart } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B3B38]">
      <Header />

      <main className="flex-1">
        {/* HERO — WHITE */}
        <section className="pt-32 pb-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl text-center space-y-6">
            <p className="text-xs tracking-[0.28em] uppercase text-teal-700/70">
              About VAMA Living
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-balance">
              Crafting comfort,
              <span className="block text-teal-800">
                quietly, for your rooms.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-teal-900/80 leading-relaxed max-w-3xl mx-auto">
              At VAMA Living, furniture isn&apos;t a product line. It&apos;s a
              long-term relationship with the spaces you live and work in.
            </p>
          </div>
        </section>

        {/* STORY — DEEP TEAL */}
        <section className="py-24 bg-[#0B3B38] text-white">
          <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
                Our story begins at the factory.
              </h2>

              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Founded in Hyderabad, VAMA Living started with a simple
                  belief: great furniture doesn&apos;t need three middlemen.
                </p>
                <p>
                  We design, engineer and build in-house, so what reaches your
                  space is factory-fresh, built to measure, and aligned with how
                  you actually live.
                </p>
                <p>
                  From a small workshop to a trusted custom studio, our promise
                  remains measured, deliberate, and built to last.
                </p>
              </div>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden border border-white/15">
              <img
                src="/furniture-workshop-craftsmen-at-work.jpg"
                alt="VAMA Living Workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* VALUES — WHITE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 space-y-3">
              <p className="text-xs tracking-[0.3em] uppercase text-teal-700/70">
                What matters to us
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                The principles behind every piece.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border border-teal-900/10 shadow-[0_14px_35px_rgba(0,0,0,0.06)]">
                <CardContent className="p-8">
                  <Award className="h-10 w-10 text-teal-800 mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    Quiet quality
                  </h3>
                  <p className="text-sm text-teal-900/80">
                    Materials and finishes chosen to feel better over time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-teal-900/10 shadow-[0_14px_35px_rgba(0,0,0,0.06)]">
                <CardContent className="p-8">
                  <Sparkles className="h-10 w-10 text-teal-800 mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    Built to your life
                  </h3>
                  <p className="text-sm text-teal-900/80">
                    Every dimension and detail tuned to your space.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-teal-900/10 shadow-[0_14px_35px_rgba(0,0,0,0.06)]">
                <CardContent className="p-8">
                  <Heart className="h-10 w-10 text-teal-800 mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">
                    Designed to last
                  </h3>
                  <p className="text-sm text-teal-900/80">
                    Durable, serviceable, and thoughtfully engineered.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION PROCESS — DEEP TEAL */}
        <section className="py-28 bg-[#0B3B38] text-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16 space-y-3">
              <p className="text-xs tracking-[0.3em] uppercase text-teal-200">
                How we work
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                Our customization process.
              </h2>
            </div>

            <div className="space-y-14">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "We understand your spatial requirements, aesthetic preferences, and functional needs.",
                },
                {
                  step: "02",
                  title: "Design & Material Selection",
                  desc: "Guidance on fabrics, woods, finishes, and operational mechanisms.",
                },
                {
                  step: "03",
                  title: "3D Visualization & Approval",
                  desc: "Accurate previews to ensure fit and appearance before manufacturing.",
                },
                {
                  step: "04",
                  title: "Manufacturing",
                  desc: "In-house production with stringent quality controls.",
                },
                {
                  step: "05",
                  title: "Installation & Delivery",
                  desc: "Doorstep delivery with careful on-site assembly.",
                },
              ].map((item) => (
                <div key={item.step} className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-1 text-teal-200 font-semibold">
                    {item.step}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — WHITE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-teal-700">
              Buy from Vama
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Ready to plan your space with us?
            </h2>
            <p className="text-lg text-teal-900/80">
              Share your floor plan, photos or just an idea. We&apos;ll help
              translate it into furniture that feels like it belongs.
            </p>

            <Link href="/contact">
              <Button className="bg-[#0B3B38] text-white hover:bg-teal-900 px-8 py-4 rounded-full text-base h-auto shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
                Book a consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

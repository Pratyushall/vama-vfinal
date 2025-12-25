"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B3B38] text-white">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-32">
        {/* CONTACT BOX */}
        <div className="w-full max-w-2xl perspective-[1200px]">
          <div
            className="
              relative bg-white text-[#0B3B38]
              rounded-3xl p-8 md:p-10
              transition-all duration-700 ease-out
              shadow-[0_40px_120px_rgba(0,0,0,0.45)]
              hover:-translate-y-3
              hover:rotate-x-[3deg]
              hover:rotate-y-[-3deg]
              group
            "
          >
            {/* Glow layer */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700
                shadow-[inset_0_0_60px_rgba(11,59,56,0.35)]
              "
            />

            {/* Header */}
            <div className="relative text-center mb-10 space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#0B3B38]/60">
                Contact
              </p>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold">
                Let’s plan your space.
              </h1>
              <p className="text-[#0B3B38]/80 leading-relaxed max-w-md mx-auto">
                Share a few details. We’ll respond with clarity, not a generic
                quote.
              </p>
            </div>

            {/* FORM */}
            <form className="relative space-y-6">
              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm">First name</Label>
                  <Input
                    placeholder="Your"
                    className="
                      bg-white border-[#0B3B38]/30
                      transition-all duration-300
                      hover:shadow-[0_0_0_3px_rgba(11,59,56,0.15)]
                      focus:shadow-[0_0_0_4px_rgba(11,59,56,0.25)]
                      focus:border-[#0B3B38]
                      focus:bg-[#0B3B38]/5
                      focus-visible:ring-0
                    "
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Last name</Label>
                  <Input
                    placeholder="Name"
                    className="
                      bg-white border-[#0B3B38]/30
                      transition-all duration-300
                      hover:shadow-[0_0_0_3px_rgba(11,59,56,0.15)]
                      focus:shadow-[0_0_0_4px_rgba(11,59,56,0.25)]
                      focus:border-[#0B3B38]
                      focus:bg-[#0B3B38]/5
                      focus-visible:ring-0
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-sm">Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    bg-white border-[#0B3B38]/30
                    transition-all duration-300
                    hover:shadow-[0_0_0_3px_rgba(11,59,56,0.15)]
                    focus:shadow-[0_0_0_4px_rgba(11,59,56,0.25)]
                    focus:border-[#0B3B38]
                    focus:bg-[#0B3B38]/5
                    focus-visible:ring-0
                  "
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label className="text-sm">Phone number</Label>
                <Input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="
                    bg-white border-[#0B3B38]/30
                    transition-all duration-300
                    hover:shadow-[0_0_0_3px_rgba(11,59,56,0.15)]
                    focus:shadow-[0_0_0_4px_rgba(11,59,56,0.25)]
                    focus:border-[#0B3B38]
                    focus:bg-[#0B3B38]/5
                    focus-visible:ring-0
                  "
                />
              </div>

              {/* Project type */}
              <div className="space-y-2">
                <Label className="text-sm">Project type</Label>
                <select
                  className="
                    w-full px-3 py-2.5 rounded-md
                    bg-white text-[#0B3B38]
                    border border-[#0B3B38]/30
                    transition-all duration-300
                    hover:shadow-[0_0_0_3px_rgba(11,59,56,0.15)]
                    focus:shadow-[0_0_0_4px_rgba(11,59,56,0.25)]
                    focus:border-[#0B3B38]
                    focus:bg-[#0B3B38]/5
                    focus:outline-none
                  "
                >
                  <option>Select project type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label className="text-sm">Tell us about your space</Label>
                <Textarea
                  rows={5}
                  placeholder="Rooms, sizes, timelines, references…"
                  className="
                    bg-white border-[#0B3B38]/30
                    transition-all duration-300
                    hover:shadow-[0_0_0_3px_rgba(11,59,56,0.15)]
                    focus:shadow-[0_0_0_4px_rgba(11,59,56,0.25)]
                    focus:border-[#0B3B38]
                    focus:bg-[#0B3B38]/5
                    focus-visible:ring-0
                  "
                />
              </div>

              {/* CTA */}
              <Button
                type="submit"
                className="
                  w-full mt-8 bg-[#0B3B38] text-white
                  py-4 rounded-full text-base
                  transition-all duration-300
                  hover:scale-[1.05]
                  hover:shadow-[0_25px_70px_rgba(11,59,56,0.55)]
                "
              >
                Request a consultation
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

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

      <main className="flex-1 flex items-center justify-center px-6 py-32 relative overflow-hidden">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_35%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-300/20 blur-[90px]" />
          <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-black/40 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[url('/images/grain.png')]" />
        </div>

        {/* CONTACT BOX */}
        <div className="w-full max-w-2xl relative z-10">
          <div
            className="
              relative
              rounded-3xl p-8 md:p-10
              transition-all duration-500 ease-out
              shadow-[0_40px_120px_rgba(0,0,0,0.45)]
              hover:-translate-y-2
              group
              border border-white/15
              bg-white/90 backdrop-blur-xl
              text-[#0B3B38]
            "
          >
            {/* Cinematic sheen (soft highlight) */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700
                bg-[radial-gradient(900px_circle_at_20%_-20%,rgba(255,255,255,0.9),transparent_40%),radial-gradient(700px_circle_at_90%_120%,rgba(11,59,56,0.18),transparent_45%)]
              "
            />

            {/* Glow layer */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-700
                shadow-[inset_0_0_80px_rgba(11,59,56,0.22)]
              "
            />

            {/* Accent line */}
            <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 h-[3px] w-24 rounded-full bg-[#0B3B38]/20" />

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
                      rounded-xl
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
                      rounded-xl
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
                    rounded-xl
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
                    rounded-xl
                  "
                />
              </div>

              {/* Project type */}
              <div className="space-y-2">
                <Label className="text-sm">Project type</Label>
                <select
                  className="
                    w-full px-3 py-2.5 rounded-xl
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
                    rounded-xl
                  "
                />
              </div>

              <div className="text-[0.75rem] md:text-xs text-[#0B3B38]/70 text-center">
                We’ll get back with a clear next step — no spam, no push.
              </div>

              {/* CTA */}
              <Button
                type="submit"
                className="
                  w-full mt-8 bg-[#0B3B38] text-white
                  py-4 rounded-full text-base
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-[0_25px_70px_rgba(11,59,56,0.55)]
                  active:scale-[0.99]
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

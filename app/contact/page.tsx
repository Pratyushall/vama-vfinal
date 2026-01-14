"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlggdrdy";

type Errors = Partial<{
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  submit: string;
}>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidFullName(name: string) {
  const trimmed = name.trim();
  if (trimmed.length < 2) return false;
  return /^[A-Za-z\s]+$/.test(trimmed);
}

function isValidPhone(phone: string) {
  const p = phone.trim().replace(/\s+/g, "");
  return /^(\+91)?\d{10}$/.test(p);
}

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successText, setSuccessText] = useState<string | null>(null);

  const fullName = useMemo(
    () => `${firstName} ${lastName}`.replace(/\s+/g, " ").trim(),
    [firstName, lastName]
  );

  function validate(): Errors {
    const next: Errors = {};

    if (!isValidFullName(fullName)) next.fullName = "Please enter your name.";
    if (!isValidEmail(email))
      next.email = "Please enter a valid email address.";
    if (!isValidPhone(phone))
      next.phone = "Please enter a valid phone number so we can reach you.";
    if (!projectType)
      next.projectType = "Please select a project type to continue.";

    const msg = message.trim();
    if (msg.length < 15 || msg.length > 500) {
      next.message =
        "Tell us a little more about your space (rooms, size, or timeline helps).";
    }

    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccessText(null);

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const payload = {
        _subject: `New VAMA inquiry — ${
          projectType || "Project"
        } (${fullName})`,
        firstName,
        lastName,
        fullName,
        email,
        phone,
        projectType,
        message,
        source: "VAMA Living website - Contact page",
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const msg =
          (data && data.errors && data.errors[0]?.message) || "submit_failed";
        throw new Error(msg);
      }

      setSuccessText(
        "Thank you. We’ve received your details and will respond shortly with clear next steps."
      );

      // optional: clear fields after success
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setMessage("");
    } catch (err: any) {
      setErrors({
        submit:
          err?.message && err.message !== "submit_failed"
            ? err.message
            : "Something went wrong while submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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

        {/* ✅ Page header OUTSIDE the contact form box */}
        <div className="w-full max-w-2xl relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-white font-serif font-semibold text-3xl md:text-4xl leading-tight">
              Have a project in mind? We’d love to hear from you.
            </h1>
            <p className="mt-3 text-white/75 text-sm md:text-base">
              Available on WhatsApp for quick queries.
            </p>
          </div>

          {/* CONTACT BOX */}
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
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                When you buy from VAMA Living,
              </h2>
              <p className="text-[#0B3B38]/80 leading-relaxed max-w-md mx-auto">
                you invest in furniture that is custom-built, durable, and made
                with care.
              </p>

              {/* Process / Expectations */}
              <div className="pt-1">
                <ul className="mt-2 space-y-2 text-sm md:text-[0.95rem] text-[#0B3B38]/85">
                  <li className="flex items-start justify-center gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0B3B38]/55" />
                    <span>Made-to-order furniture</span>
                  </li>
                  <li className="flex items-start justify-center gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0B3B38]/55" />
                    <span>Custom dimensions and finishes</span>
                  </li>
                  <li className="flex items-start justify-center gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0B3B38]/55" />
                    <span>Direct communication from design to delivery</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FORM */}
            <form
              className="relative space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
              {successText && (
                <div className="rounded-2xl border border-[#0B3B38]/15 bg-white/70 px-4 py-3 text-sm md:text-[0.95rem] text-[#0B3B38] text-center">
                  {successText}
                </div>
              )}

              {errors.submit && (
                <div className="rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-700 text-center">
                  {errors.submit}
                </div>
              )}

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm">First name</Label>
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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

              {errors.fullName && (
                <p className="text-sm text-red-700 text-left -mt-3">
                  {errors.fullName}
                </p>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-sm">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                {errors.email && (
                  <p className="text-sm text-red-700">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label className="text-sm">Phone number</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                {errors.phone && (
                  <p className="text-sm text-red-700">{errors.phone}</p>
                )}
              </div>

              {/* Project type */}
              <div className="space-y-2">
                <Label className="text-sm">Project type</Label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
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
                  <option value="">Select project type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
                {errors.projectType && (
                  <p className="text-sm text-red-700">{errors.projectType}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label className="text-sm">Tell us about your space</Label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                {errors.message && (
                  <p className="text-sm text-red-700">{errors.message}</p>
                )}
              </div>

              <div className="text-[0.75rem] md:text-xs text-[#0B3B38]/70 text-center">
                We’ll get back with a clear next step :)
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full mt-8 bg-[#0B3B38] text-white
                  py-4 rounded-full text-base
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-[0_25px_70px_rgba(11,59,56,0.55)]
                  active:scale-[0.99]
                  disabled:opacity-60 disabled:hover:scale-100
                "
              >
                {isSubmitting ? "Submitting..." : "Request a consultation"}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0D4341] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-[#0D4341]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 text-balance">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-xl leading-relaxed text-white">
              Ready to start your custom furniture project? We&apos;re here to
              help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0B3B38]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-serif font-bold mb-8">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your"
                      className="bg-white/95 text-[#0D4341] border border-white/40 focus-visible:ring-white/70"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Name"
                      className="bg-white/95 text-[#0D4341] border border-white/40 focus-visible:ring-white/70"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-white/95 text-[#0D4341] border border-white/40 focus-visible:ring-white/70"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXX XXX XXXX"
                    className="bg-white/95 text-[#0D4341] border border-white/40 focus-visible:ring-white/70"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-white">
                    Project Type
                  </Label>
                  <select
                    id="projectType"
                    className="w-full px-3 py-2 rounded-md bg-white/95 text-[#0D4341] border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/70"
                  >
                    <option>Select project type</option>
                    <option>Residential - Bedroom</option>
                    <option>Residential - Living Room</option>
                    <option>Residential - Dining Room</option>
                    <option>Residential - Home Office</option>
                    <option>Commercial - Office</option>
                    <option>Commercial - Cafe/Restaurant</option>
                    <option>Commercial - Retail</option>
                    <option>Commercial - Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Tell us about your project
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Share details about your space, style preferences, and any specific requirements..."
                    rows={6}
                    className="bg-white/95 text-[#0D4341] border border-white/40 focus-visible:ring-white/70"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full px-8 py-6 text-lg h-auto bg-white text-[#0D4341] hover:bg-white/90 shadow-[0_18px_55px_rgba(0,0,0,0.7)] rounded-full"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-8">
                  Get in Touch
                </h3>
                <p className="leading-relaxed mb-8 text-white">
                  Have questions? We&apos;re here to help. Reach out through any
                  of these channels, and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-1">
                          Phone
                        </h4>
                        <p className="text-white">+91 XXX XXX XXXX</p>
                        <p className="text-sm text-white mt-1">
                          Mon-Sat, 9 AM - 7 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-1">
                          Email
                        </h4>
                        <p className="text-white">contact@vamaliving.com</p>
                        <p className="text-sm text-white mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-1">
                          Visit Our Showroom
                        </h4>
                        <p className="text-white">
                          Hyderabad, Telangana
                          <br />
                          India
                        </p>
                        <p className="text-sm text-white mt-1">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-white/15 bg-white/5 text-white hover:border-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-1">
                          Business Hours
                        </h4>
                        <p className="text-white">
                          Monday - Saturday: 9:00 AM - 7:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
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

            <div className="space-y-2 text-white">
              <p>contact@vamaliving.com</p>
              <p>+91 XXX XXX XXXX</p>
              <p>Hyderabad, India</p>
            </div>

            <p className="text-sm text-white pt-6">
              © 2025 VAMA Living. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

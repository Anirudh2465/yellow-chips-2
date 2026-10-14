"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Customer Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-cream min-h-screen py-10 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
            We'd Love to Hear From You
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3 mb-3">
            Contact Yellow Chips
          </h1>
          <p className="text-ink-soft text-base">
            Have a question about an order, feedback on our crunch, or interested in corporate gifting? Our team is always here to assist.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919995836662"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-3xl border border-sand shadow-xs hover:shadow-md transition-all text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-ink text-sm mb-1">WhatsApp Chat</h4>
            <p className="text-xs text-ink-soft mb-2">Fastest response for order help</p>
            <span className="text-xs font-bold text-[#25D366]">+91 99958 36662</span>
          </a>

          {/* Email */}
          <a
            href="mailto:care@yellowchips.in"
            className="bg-white p-6 rounded-3xl border border-sand shadow-xs hover:shadow-md transition-all text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-chip/30 text-turmeric flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-ink text-sm mb-1">Email Care</h4>
            <p className="text-xs text-ink-soft mb-2">Official correspondence & bulk</p>
            <span className="text-xs font-bold text-ink">care@yellowchips.in</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919847012345"
            className="bg-white p-6 rounded-3xl border border-sand shadow-xs hover:shadow-md transition-all text-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-sand text-ink flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-ink text-sm mb-1">Helpline Phone</h4>
            <p className="text-xs text-ink-soft mb-2">Mon - Sat: 9 AM – 7 PM</p>
            <span className="text-xs font-bold text-ink">+91 98470 12345</span>
          </a>

          {/* Headquarters */}
          <div className="bg-white p-6 rounded-3xl border border-sand shadow-xs text-center">
            <div className="w-12 h-12 rounded-2xl bg-cream text-leaf flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-ink text-sm mb-1">Central Kadai</h4>
            <p className="text-xs text-ink-soft mb-2">Beach Promenade, Kozhikode</p>
            <span className="text-[11px] font-semibold text-ink-soft">Kerala 673032</span>
          </div>
        </div>

        {/* Form and Hours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 md:p-12 rounded-3xl border border-sand shadow-sm">
          {/* Left Details */}
          <div className="space-y-6 md:border-r md:border-sand/80 md:pr-8">
            <h3 className="font-display text-2xl font-bold text-ink">
              Send us a Message
            </h3>
            <p className="text-xs text-ink-soft leading-relaxed">
              Fill out the form and our guest relations team will respond within 24 hours. For urgent order cancellations or address updates, please ping our WhatsApp directly.
            </p>

            <div className="space-y-3 pt-4 border-t border-sand text-xs text-ink-soft">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-turmeric shrink-0" />
                <span>Support Hours: 9:00 AM – 8:00 PM IST</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                <span>FSSAI License: 10022041000188</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-2">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-16 h-16 bg-leaf/10 text-leaf rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Message Sent!</h3>
                <p className="text-xs text-ink-soft max-w-sm mx-auto">
                  Thank you for reaching out. A confirmation has been sent to your email and our team will get in touch shortly.
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-sand text-ink hover:bg-chip rounded-full font-bold text-xs mt-4"
                >
                  Send Another Note
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-bold text-ink uppercase">Your Name *</Label>
                    <Input
                      required
                      placeholder="e.g. Maya Krishnan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-cream border-sand rounded-xl h-11 text-xs"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-bold text-ink uppercase">Email Address *</Label>
                    <Input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-cream border-sand rounded-xl h-11 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-bold text-ink uppercase">Phone Number</Label>
                    <Input
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-cream border-sand rounded-xl h-11 text-xs"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-bold text-ink uppercase">Topic / Subject</Label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      aria-label="Inquiry Subject"
                      className="w-full bg-cream border border-sand rounded-xl h-11 px-3 text-xs font-semibold text-ink outline-none"
                    >
                      <option value="Customer Inquiry">Customer & Order Help</option>
                      <option value="Franchise">Franchise Partnership</option>
                      <option value="Corporate Gifting">Corporate Bulk Gifting</option>
                      <option value="Feedback">Product Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-bold text-ink uppercase">Your Message *</Label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-cream border-sand rounded-xl text-xs"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12 px-8 text-xs shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 mr-2" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

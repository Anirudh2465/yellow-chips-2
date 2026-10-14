"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gift,
  Sparkles,
  ShoppingBag,
  Building2,
  CheckCircle2,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/lib/store/useCartStore";

export default function GiftingPage() {
  const { addItem } = useCartStore();
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [corporateForm, setCorporateForm] = useState({
    name: "",
    company: "",
    phone: "",
    quantity: "50",
    date: "",
  });

  const handleCorporateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const handleAddHamper = (name: string, price: number, weight: string, id: string) => {
    addItem({
      productId: id,
      name,
      slug: "kerala-heritage-feast-hamper",
      weight,
      price,
      quantity: 1,
      image: "https://placehold.co/600x700/FFF9EC/2B1B10?text=Heritage+Gift+Hamper",
    });
  };

  return (
    <div className="bg-cream min-h-screen py-10 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5" /> Celebrate with Authentic Flavours
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3 mb-4">
            Curated Kerala Gift Hampers
          </h1>
          <p className="text-ink-soft text-base">
            For festivals, corporate milestones, weddings, and family reunions. Packaged in luxury embossed gift boxes with custom greeting cards.
          </p>
        </div>

        {/* Gift Boxes Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Hamper 1 */}
          <div className="bg-white rounded-3xl border border-sand p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-sand mb-6 border border-sand">
                <Image
                  src="https://placehold.co/800x500/FFF9EC/2B1B10?text=Kerala+Feast+Box"
                  alt="Kerala Feast Box"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-chip text-ink text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Most Popular Gift
                </span>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-2xl font-bold text-ink">
                  Kerala Heritage Feast Box
                </h3>
                <span className="font-display text-2xl font-bold text-ink">₹999</span>
              </div>
              <p className="text-xs text-ink-soft mb-4">
                Six authentic snacks packed inside a gold-foiled festive gift box with personalised note.
              </p>

              <div className="space-y-1.5 text-xs text-ink-soft mb-6 bg-cream p-4 rounded-xl border border-sand">
                <p className="font-bold text-ink mb-1">Includes 6 Signature Packs:</p>
                <p>• Classic Coconut Oil Banana Chips (250g)</p>
                <p>• Marayoor Jaggery Sharkara Upperi (250g)</p>
                <p>• Golden Ripe Jackfruit Chips (200g)</p>
                <p>• Kerala Royal Special Mixture (250g)</p>
                <p>• Fiery Hot Tapioca Sticks (200g)</p>
                <p>• Roasted Tellicherry Pepper Cashews (150g)</p>
              </div>
            </div>

            <Button
              onClick={() =>
                handleAddHamper("Kerala Heritage Feast Box", 999, "1.3kg Assorted", "7")
              }
              className="w-full bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12 text-sm shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2" /> Add to Bag · ₹999
            </Button>
          </div>

          {/* Hamper 2 */}
          <div className="bg-white rounded-3xl border border-sand p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-sand mb-6 border border-sand">
                <Image
                  src="https://placehold.co/800x500/FFF9EC/2B1B10?text=Royal+Tin+Collection"
                  alt="Royal Tin Collection"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-turmeric text-ink text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Luxury Collectible Tin
                </span>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-2xl font-bold text-ink">
                  The Royal Onam Tin Collection
                </h3>
                <span className="font-display text-2xl font-bold text-ink">₹1,499</span>
              </div>
              <p className="text-xs text-ink-soft mb-4">
                Presented in an ornate, reusable brass-toned keepsake tin. The ultimate festive gift.
              </p>

              <div className="space-y-1.5 text-xs text-ink-soft mb-6 bg-cream p-4 rounded-xl border border-sand">
                <p className="font-bold text-ink mb-1">Includes 4 Grand Packs (2kg Total):</p>
                <p>• Handpicked A-Grade Banana Chips (500g)</p>
                <p>• Premium Jackfruit Golden Crisps (500g)</p>
                <p>• Spiced Royal Cashew Halwa & Mixture (500g)</p>
                <p>• Authentic Jaggery Varatti (500g)</p>
                <p className="text-leaf font-semibold pt-1">
                  ✓ Reusable decorative vintage Kerala tin
                </p>
              </div>
            </div>

            <Button
              onClick={() =>
                handleAddHamper("The Royal Onam Tin Collection", 1499, "2kg Keepsake Tin", "7-tin")
              }
              className="w-full bg-ink text-cream hover:bg-ink-soft rounded-full font-bold h-12 text-sm shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2" /> Add to Bag · ₹1,499
            </Button>
          </div>
        </div>

        {/* Corporate Gifting Inquiry */}
        <div className="bg-sand/60 rounded-3xl p-8 md:p-12 border border-sand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-white px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" /> Corporate & Event Orders
              </span>
              <h2 className="font-display text-3xl font-bold text-ink mt-3 mb-4">
                Custom Branding & Bulk Gifting
              </h2>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                Planning employee Diwali appreciation, conference swag, or wedding favors? We provide custom logo branding, branded ribbon sleeves, personalized greeting cards, and direct doorstep dispatch to multiple recipient addresses.
              </p>

              <div className="space-y-2 text-xs font-semibold text-ink">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf" /> Bulk volume tiered discounts starting at 25 boxes
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf" /> Custom co-branded sleeves with your company logo
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-leaf" /> Multi-destination pan-India shipping management
                </div>
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold text-xs"
                >
                  <a
                    href="https://wa.me/919995836662?text=Hello%20Yellow%20Chips!%20We%20need%20bulk%20corporate%20gifting%20quotes."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp for Quick Quote
                  </a>
                </Button>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-sand shadow-sm">
              {inquirySubmitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 bg-leaf/10 text-leaf rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">Inquiry Received!</h3>
                  <p className="text-xs text-ink-soft max-w-xs mx-auto">
                    Our corporate gifting manager will contact you within 2 hours with a custom catalogue and volume pricing.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCorporateSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-ink">Request Bulk Pricing</h3>
                  <div>
                    <Label className="text-xs font-bold text-ink uppercase">Your Name *</Label>
                    <Input
                      required
                      placeholder="e.g. Priya Sharma"
                      value={corporateForm.name}
                      onChange={(e) => setCorporateForm({ ...corporateForm, name: e.target.value })}
                      className="bg-cream border-sand rounded-xl h-11 text-xs"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-bold text-ink uppercase">Company / Event Name *</Label>
                    <Input
                      required
                      placeholder="e.g. Infosys / Sharma Wedding"
                      value={corporateForm.company}
                      onChange={(e) => setCorporateForm({ ...corporateForm, company: e.target.value })}
                      className="bg-cream border-sand rounded-xl h-11 text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs font-bold text-ink uppercase">Phone Number *</Label>
                      <Input
                        required
                        placeholder="10-digit mobile"
                        value={corporateForm.phone}
                        onChange={(e) => setCorporateForm({ ...corporateForm, phone: e.target.value })}
                        className="bg-cream border-sand rounded-xl h-11 text-xs"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-bold text-ink uppercase">Estimated Quantity</Label>
                      <Input
                        placeholder="e.g. 50 boxes"
                        value={corporateForm.quantity}
                        onChange={(e) => setCorporateForm({ ...corporateForm, quantity: e.target.value })}
                        className="bg-cream border-sand rounded-xl h-11 text-xs"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-11 text-xs mt-2"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" /> Send Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

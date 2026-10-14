"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  ArrowLeft,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/lib/store/useCartStore";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, freeShippingThreshold, clearCart } = useCartStore();

  const [formData, setFormData] = useState({
    name: "Rahul Nair",
    email: "rahul.nair@example.com",
    phone: "9876543210",
    address: "Flat 402, Green Palms, MG Road",
    landmark: "Near Metro Pillar 124",
    pincode: "682001",
    city: "Kochi",
    state: "Kerala",
  });

  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "cod">("upi");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getSubtotal();
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : 49;
  const grandTotal = subtotal + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fire festive celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFC93C", "#F2A900", "#2F6B3A", "#C8372D"],
      });
    } catch {
      // ignore
    }

    // Generate random order ID
    const orderId = `YC-${Math.floor(100000 + Math.random() * 900000)}`;

    // Store simple mock order details in localStorage for order confirmation page
    try {
      localStorage.setItem(
        `order_${orderId}`,
        JSON.stringify({
          orderId,
          date: new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          customer: formData,
          items,
          total: grandTotal,
          paymentMethod,
        })
      );
    } catch {
      // ignore
    }

    setTimeout(() => {
      clearCart();
      router.push(`/order/${orderId}`);
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="bg-cream min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-sand">
          <h2 className="font-display text-2xl font-bold text-ink mb-2">No Items in Checkout</h2>
          <p className="text-sm text-ink-soft mb-6">
            Please add items to your cart before proceeding to checkout.
          </p>
          <Button asChild className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold">
            <Link href="/shop">Go to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-10 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href="/cart"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-soft hover:text-ink mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Cart
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Express Checkout
            </h1>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-leaf bg-leaf/10 px-3 py-1.5 rounded-full">
            <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Form Sections */}
          <div className="lg:col-span-2 space-y-6">
            {/* 1. Contact Information */}
            <div className="bg-white rounded-3xl border border-sand p-6 md:p-8 shadow-xs">
              <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-chip text-ink text-xs font-bold flex items-center justify-center">
                  1
                </span>
                Customer Contact Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-bold text-ink uppercase">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-bold text-ink uppercase">
                    Phone (for Delivery & WhatsApp updates) *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-bold text-ink uppercase">
                    Email Address (for Invoice) *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Address */}
            <div className="bg-white rounded-3xl border border-sand p-6 md:p-8 shadow-xs">
              <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-chip text-ink text-xs font-bold flex items-center justify-center">
                  2
                </span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label htmlFor="address" className="text-xs font-bold text-ink uppercase">
                    Flat / House No. / Building / Street *
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="landmark" className="text-xs font-bold text-ink uppercase">
                    Landmark (Optional)
                  </Label>
                  <Input
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pincode" className="text-xs font-bold text-ink uppercase">
                    PIN Code *
                  </Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    required
                    maxLength={6}
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="city" className="text-xs font-bold text-ink uppercase">
                    City / Town *
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="state" className="text-xs font-bold text-ink uppercase">
                    State *
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                  />
                </div>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white rounded-3xl border border-sand p-6 md:p-8 shadow-xs">
              <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-chip text-ink text-xs font-bold flex items-center justify-center">
                  3
                </span>
                Payment Options
              </h2>
              <div className="space-y-3">
                {/* UPI */}
                <label
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "border-turmeric bg-chip/10"
                      : "border-sand bg-cream/40 hover:bg-cream"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <QrCode className="w-5 h-5 text-turmeric" />
                    <div>
                      <span className="font-bold text-sm text-ink block">
                        Instant UPI / QR / Google Pay / PhonePe
                      </span>
                      <span className="text-xs text-ink-soft">
                        Fastest checkout with zero transaction fees
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="accent-turmeric w-4 h-4"
                  />
                </label>

                {/* Cards */}
                <label
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-turmeric bg-chip/10"
                      : "border-sand bg-cream/40 hover:bg-cream"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-turmeric" />
                    <div>
                      <span className="font-bold text-sm text-ink block">
                        Credit / Debit Card / NetBanking
                      </span>
                      <span className="text-xs text-ink-soft">
                        Visa, Mastercard, RuPay & Netbanking
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-turmeric w-4 h-4"
                  />
                </label>

                {/* COD */}
                <label
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "border-turmeric bg-chip/10"
                      : "border-sand bg-cream/40 hover:bg-cream"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Banknote className="w-5 h-5 text-turmeric" />
                    <div>
                      <span className="font-bold text-sm text-ink block">
                        Cash on Delivery (COD)
                      </span>
                      <span className="text-xs text-ink-soft">
                        Pay cash when freshly fried chips arrive
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-turmeric w-4 h-4"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Right Col: Order Summary Review & Submit */}
          <div>
            <div className="bg-white rounded-3xl border border-sand p-6 md:p-8 shadow-sm sticky top-28 space-y-6">
              <h2 className="font-display font-bold text-xl text-ink">Order Items ({items.length})</h2>

              {/* Items scroll list */}
              <div className="max-h-60 overflow-y-auto space-y-3 pr-1 divide-y divide-sand/40">
                {items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex gap-3 items-center">
                    <div className="relative w-12 h-14 rounded-xl overflow-hidden bg-cream shrink-0 border border-sand">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-xs text-ink line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-ink-soft">
                        {item.weight} × {item.quantity}
                      </p>
                    </div>
                    <span className="font-bold text-xs text-ink">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-sand text-sm">
                <div className="flex justify-between text-ink-soft">
                  <span>Subtotal</span>
                  <span className="font-bold text-ink">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-ink-soft">
                  <span>Shipping</span>
                  <span className="font-bold text-ink">
                    {isFreeShipping ? <span className="text-leaf">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-ink pt-3 border-t border-sand">
                  <span>Total Payable</span>
                  <span className="font-display text-2xl text-ink">₹{grandTotal}</span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-14 text-base shadow-md transition-all active:scale-95"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin" />
                    Securing Your Kadai Chips...
                  </span>
                ) : (
                  <span>Place Order · ₹{grandTotal}</span>
                )}
              </Button>

              <div className="space-y-2 pt-2 text-center text-xs text-ink-soft">
                <div className="flex items-center justify-center gap-2 text-leaf font-bold">
                  <CheckCircle2 className="w-4 h-4" /> 100% Satisfaction Guarantee
                </div>
                <p className="text-[11px]">
                  Freshly fried batch dispatch from our Kerala kitchens within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

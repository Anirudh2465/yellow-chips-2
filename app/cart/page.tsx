"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Check,
  Tag,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/lib/store/useCartStore";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getSubtotal, freeShippingThreshold, clearCart } =
    useCartStore();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const subtotal = getSubtotal();
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping || items.length === 0 ? 0 : 49;
  const grandTotal = Math.max(0, subtotal - discount + shippingFee);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "CRUNCH10" || couponCode.trim().toUpperCase() === "KERALA10") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code. Try 'CRUNCH10' for 10% off!");
    }
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincode.trim())) {
      setPincodeStatus("✓ Delivery available! Estimated arrival: 2-3 business days");
    } else {
      setPincodeStatus("Please enter a valid 6-digit Indian PIN code.");
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-cream min-h-screen py-16 px-4 md:px-6 flex items-center justify-center">
        <div className="text-center max-w-md bg-white p-10 rounded-3xl border border-sand shadow-sm">
          <div className="w-20 h-20 rounded-full bg-sand flex items-center justify-center mx-auto mb-6 text-ink-soft">
            <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h1 className="font-display text-3xl font-bold text-ink mb-3">Your Crunch Bag is Empty</h1>
          <p className="text-sm text-ink-soft mb-8">
            Looks like you haven't added any authentic Kerala snacks yet. Our hot kadai chips are ready to be shipped fresh!
          </p>
          <Button
            asChild
            className="w-full bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12 text-base shadow-sm"
          >
            <Link href="/shop">Browse Our Snacks</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-10 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-soft hover:text-ink mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Your Shopping Bag
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-bold text-ink-soft hover:text-chilli transition-colors"
          >
            Clear Bag
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        <div className="bg-white p-4 rounded-2xl border border-sand shadow-xs mb-8">
          <div className="flex justify-between items-center text-xs font-bold text-ink mb-2">
            <span>
              {isFreeShipping
                ? "🎉 You've unlocked FREE Shipping across India!"
                : `Add ₹${remainingForFreeShipping} more to get FREE express shipping!`}
            </span>
            <span className="text-turmeric">{freeShippingProgress}%</span>
          </div>
          <div className="w-full h-2.5 bg-cream rounded-full overflow-hidden border border-sand">
            <div
              className="h-full bg-turmeric transition-all duration-300 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List Table */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl border border-sand p-6 shadow-sm divide-y divide-sand/60">
              {items.map((item) => (
                <div key={item.id} className="py-5 first:pt-0 last:pb-0 flex gap-4 sm:gap-6 items-center">
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden bg-cream shrink-0 border border-sand">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link
                          href={`/product/${item.slug}`}
                          className="font-display font-bold text-base sm:text-lg text-ink hover:text-turmeric transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <span className="inline-block bg-sand text-ink text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1">
                          {item.weight}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-ink-soft/60 hover:text-chilli p-1.5 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3 border-2 border-sand bg-cream rounded-full px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center font-bold text-ink hover:text-turmeric"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-ink w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center font-bold text-ink hover:text-turmeric"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-ink-soft block font-medium">₹{item.price} each</span>
                        <span className="font-display font-bold text-lg text-ink">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pincode Estimator */}
            <div className="bg-white rounded-3xl border border-sand p-6 shadow-sm">
              <h3 className="font-display font-bold text-ink text-base mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-turmeric" /> Check Delivery Date
              </h3>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <Input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN code"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="bg-cream border-sand rounded-full h-11 text-sm max-w-xs text-ink"
                />
                <Button type="submit" variant="outline" className="rounded-full font-bold border-ink text-ink h-11 px-5">
                  Check
                </Button>
              </form>
              {pincodeStatus && (
                <p className={`text-xs mt-2.5 font-semibold ${pincodeStatus.startsWith("✓") ? "text-leaf" : "text-chilli"}`}>
                  {pincodeStatus}
                </p>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-sand p-6 md:p-8 shadow-sm">
              <h2 className="font-display font-bold text-xl text-ink mb-6">Order Summary</h2>

              {/* Coupon Code Section */}
              <form onSubmit={handleApplyCoupon} className="mb-6">
                <label className="text-xs font-bold text-ink uppercase tracking-wider block mb-2">
                  Promo / Coupon Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-ink-soft absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      type="text"
                      placeholder="e.g. CRUNCH10"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                      className="pl-9 bg-cream border-sand rounded-full h-11 text-xs font-bold uppercase text-ink"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={couponApplied || !couponCode.trim()}
                    className="bg-ink text-cream hover:bg-ink-soft rounded-full font-bold h-11 px-5 text-xs"
                  >
                    {couponApplied ? "Applied" : "Apply"}
                  </Button>
                </div>
                {couponApplied && (
                  <p className="text-xs text-leaf font-bold mt-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> 10% discount applied to your order!
                  </p>
                )}
                {couponError && (
                  <p className="text-xs text-chilli font-medium mt-2">{couponError}</p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-3 pt-4 border-t border-sand text-sm">
                <div className="flex justify-between text-ink-soft">
                  <span>Bag Subtotal</span>
                  <span className="font-bold text-ink">₹{subtotal}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-leaf">
                    <span>Coupon Discount (10%)</span>
                    <span className="font-bold">-₹{discount}</span>
                  </div>
                )}

                <div className="flex justify-between text-ink-soft">
                  <span>Shipping Cost</span>
                  <span className="font-bold text-ink">
                    {isFreeShipping ? (
                      <span className="text-leaf">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-ink pt-4 border-t border-sand">
                  <span>Grand Total</span>
                  <span className="font-display text-2xl text-ink">₹{grandTotal}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <Button
                asChild
                className="w-full bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-14 text-base shadow-md mt-6 group"
              >
                <Link href="/checkout" className="flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="mt-6 pt-4 border-t border-sand text-center">
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-leaf">
                  <ShieldCheck className="w-4 h-4" /> 100% Safe & Secure Checkout
                </div>
                <p className="text-[11px] text-ink-soft mt-1">
                  Supports UPI, Google Pay, PhonePe, Cards & Cash on Delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

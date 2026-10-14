"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/useCartStore";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal, freeShippingThreshold } = useCartStore();
  const subtotal = getSubtotal();
  const progress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col bg-cream/95 backdrop-blur-xl border-l border-turmeric/30 shadow-2xl">
        <SheetHeader className="p-6 border-b border-sand/80 glass-kerala-gold">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-display text-2xl font-bold text-ink flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-chip/40 text-turmeric flex items-center justify-center">
                <ShoppingBag className="h-5 w-5" />
              </span>
              Your Crunch Bag
            </SheetTitle>
            <span className="text-xs font-bold bg-chip/50 text-ink px-3 py-1 rounded-full border border-turmeric/30 shadow-xs">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>

          {/* Free Shipping Progress */}
          <div className="mt-4 bg-white/70 p-3.5 rounded-2xl border border-turmeric/25 shadow-xs">
            <div className="flex justify-between items-center text-xs font-medium text-ink mb-2">
              <span className="font-bold">
                {remainingForFreeShipping === 0
                  ? "🎉 You've unlocked FREE Shipping across India!"
                  : `Add ₹${remainingForFreeShipping} more for FREE shipping`}
              </span>
              <span className="font-bold text-turmeric">{progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-sand/60 rounded-full overflow-hidden p-0.5 border border-sand">
              <div
                className="h-full bg-gradient-to-r from-chip via-turmeric to-leaf transition-all duration-500 rounded-full shadow-xs"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </SheetHeader>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 rounded-full bg-sand flex items-center justify-center mb-4 text-ink-soft">
                <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-2">Your Bag is Empty</h3>
              <p className="text-sm text-ink-soft max-w-xs mb-6">
                Freshly fried Kerala banana chips and jackfruit crisps are waiting for you.
              </p>
              <Button
                onClick={closeCart}
                asChild
                className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold px-6"
              >
                <Link href="/shop">Start Snacking</Link>
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3.5 rounded-2xl glass-kerala-card border border-sand/80 shadow-xs hover:border-turmeric/40 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-cream shrink-0 border border-sand/50">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-display font-bold text-ink hover:text-turmeric text-sm line-clamp-1 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-ink-soft/60 hover:text-chilli p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-xs text-ink-soft font-semibold bg-sand/80 border border-sand px-2.5 py-0.5 rounded-full inline-block mt-1">
                      {item.weight}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-ink text-sm">
                      ₹{item.price * item.quantity}
                    </span>
                    <div className="flex items-center gap-2 border border-sand bg-cream/90 backdrop-blur-xs rounded-full px-2.5 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-ink hover:text-turmeric w-5 h-5 flex items-center justify-center font-bold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-ink min-w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-ink hover:text-turmeric w-5 h-5 flex items-center justify-center font-bold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-turmeric/20 glass-kerala-gold space-y-4 shadow-lg">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-ink-soft">
                <span>Subtotal</span>
                <span className="font-bold text-ink">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-ink-soft">
                <span>Estimated Shipping</span>
                <span className="font-bold text-ink">
                  {remainingForFreeShipping === 0 ? (
                    <span className="text-leaf font-bold">FREE</span>
                  ) : (
                    "₹49 (Free above ₹499)"
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-ink pt-2.5 border-t border-sand/80">
                <span>Total Amount</span>
                <span className="text-xl text-ink font-extrabold">
                  ₹{subtotal + (remainingForFreeShipping === 0 ? 0 : 49)}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <Button
                asChild
                onClick={closeCart}
                className="w-full bg-turmeric text-ink hover:bg-turmeric/90 rounded-full font-bold h-12 text-base shadow-md group transition-all hover:scale-[1.01]"
              >
                <Link href="/checkout" className="flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                onClick={closeCart}
                className="w-full rounded-full border-sand bg-white/70 backdrop-blur-xs font-bold text-ink hover:bg-sand/70"
              >
                <Link href="/cart">View Full Cart</Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

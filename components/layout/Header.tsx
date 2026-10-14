"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/useCartStore";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Cafe & Menu", href: "/cafe" },
    { name: "Our Story", href: "/our-story" },
    { name: "Stores", href: "/stores" },
    { name: "Gifting", href: "/gifting" },
    { name: "Franchise", href: "/franchise" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-ink text-cream py-2 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-turmeric animate-pulse" />
        <span>Kerala Heritage Crunch · Fried in 100% Coconut Oil · Free Shipping Above ₹499</span>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-sand bg-cream/95 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-2xl bg-chip flex items-center justify-center text-ink font-bold text-xl shadow-sm group-hover:rotate-6 transition-transform">
                🍌
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-tight text-ink">
                  Yellow Chips
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-turmeric -mt-1">
                  Kerala Kadai Fresh
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-full text-sm font-bold transition-all ${
                      isActive
                        ? "bg-sand text-ink shadow-xs"
                        : "text-ink-soft hover:text-ink hover:bg-sand/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3">
            {/* Franchise CTA Button */}
            <Button
              asChild
              className="hidden md:inline-flex bg-ink text-cream hover:bg-ink-soft rounded-full font-bold px-5 h-10 text-xs tracking-wider uppercase transition-transform active:scale-95"
            >
              <Link href="/franchise">Own a Franchise</Link>
            </Button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full bg-sand/70 hover:bg-sand text-ink transition-all active:scale-95"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-turmeric text-ink font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm border-2 border-cream">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-sand/70 text-ink hover:bg-sand"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-sand bg-cream px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold py-2 border-b border-sand/50 flex justify-between items-center ${
                    pathname === link.href ? "text-turmeric" : "text-ink"
                  }`}
                >
                  {link.name}
                  <ArrowRight className="w-4 h-4 text-ink-soft opacity-60" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <Button
                asChild
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12"
              >
                <Link href="/shop">Shop Fresh Snacks</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full border-ink text-ink rounded-full font-bold h-12"
              >
                <Link href="/franchise">Franchise Opportunities</Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

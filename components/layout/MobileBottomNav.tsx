"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Store, MapPin, Coffee } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Shop", href: "/shop", icon: Store },
    { label: "Cafe", href: "/cafe", icon: Coffee },
    { label: "Stores", href: "/stores", icon: MapPin },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-md border-t border-sand z-40 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 py-1 px-3 rounded-xl transition-colors ${
                isActive ? "text-turmeric font-bold" : "text-ink-soft hover:text-ink"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* Cart Trigger with Badge */}
        <button
          onClick={openCart}
          className="flex flex-col items-center justify-center space-y-1 py-1 px-3 rounded-xl text-ink-soft hover:text-ink relative"
          aria-label="Open Cart"
        >
          <div className="relative">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-turmeric text-ink font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-cream">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[11px] font-medium">Cart</span>
        </button>
      </div>
    </div>
  );
}

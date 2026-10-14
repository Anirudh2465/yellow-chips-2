"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/useCartStore";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      weight: product.baseWeight,
      price: product.basePrice,
      quantity: 1,
      image: product.images[0],
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl glass-kerala-card border border-sand/80 shadow-xs transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(242,169,0,0.2)] hover:border-turmeric/45 hover:-translate-y-1.5">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isBestseller && (
          <Badge className="bg-chip/95 text-ink font-bold border border-turmeric/40 shadow-xs text-xs backdrop-blur-xs">
            Bestseller
          </Badge>
        )}
        {product.spiceLevel === "Hot" && (
          <Badge className="bg-chilli/95 text-white font-bold border-none text-xs backdrop-blur-xs">
            Spicy 🔥
          </Badge>
        )}
        {product.category === "gifting" && (
          <Badge className="bg-turmeric/95 text-ink font-bold border-none text-xs backdrop-blur-xs">
            Gift Box ✨
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
        className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink shadow-xs backdrop-blur-md transition-transform hover:scale-110 active:scale-90"
        aria-label="Add to wishlist"
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            isWishlisted ? "fill-chilli text-chilli" : "text-ink-soft hover:text-ink"
          }`}
        />
      </button>

      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="relative aspect-4/5 w-full overflow-hidden bg-cream">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.1)_0%,transparent_60%) opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs text-ink-soft mb-1.5">
          <span className="text-turmeric text-sm">★</span>
          <span className="font-bold text-ink">{product.rating}</span>
          <span className="text-ink-soft/70">({product.reviewCount})</span>
          <span className="mx-1 text-sand">•</span>
          <span className="text-[11px] font-semibold text-leaf uppercase tracking-wider">
            {product.categoryName}
          </span>
        </div>

        <Link href={`/product/${product.slug}`} className="mb-1">
          <h3 className="font-display text-lg font-bold text-ink group-hover:text-turmeric transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-ink-soft line-clamp-2 leading-relaxed mb-4">
          {product.tagline}
        </p>

        {/* Pricing and Quick Add */}
        <div className="mt-auto pt-3 border-t border-sand/60 flex items-center justify-between">
          <div>
            <span className="text-xs text-ink-soft block -mb-0.5">From</span>
            <span className="text-lg font-bold text-ink">₹{product.basePrice}</span>
            <span className="text-[11px] text-ink-soft ml-1 font-medium">/ {product.baseWeight}</span>
          </div>

          <Button
            size="sm"
            onClick={handleQuickAdd}
            className={`rounded-full font-bold px-4 h-9 shadow-sm transition-all duration-200 active:scale-95 ${
              added
                ? "bg-leaf text-white hover:bg-leaf"
                : "bg-chip text-ink hover:bg-turmeric"
            }`}
          >
            {added ? (
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Added
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" /> Quick Add
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

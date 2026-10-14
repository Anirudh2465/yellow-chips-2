"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { ProductCard } from "@/components/commerce/ProductCard";
import { PRODUCTS, Product } from "@/lib/products";
import { Input } from "@/components/ui/input";

const CATEGORIES = [
  { id: "all", name: "All Snacks" },
  { id: "banana", name: "Banana Chips" },
  { id: "jackfruit", name: "Jackfruit Crisps" },
  { id: "tapioca", name: "Tapioca Sticks" },
  { id: "mixtures", name: "Kerala Mixtures" },
  { id: "gifting", name: "Gift Hampers" },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.basePrice - b.basePrice;
      if (sortBy === "price-desc") return b.basePrice - a.basePrice;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-cream min-h-screen py-10 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
            Kerala's Finest Crunch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3 mb-3">
            Shop Authentic Kerala Snacks
          </h1>
          <p className="text-ink-soft text-base">
            Small-batch chips sliced fresh and fried in pure cold-pressed coconut oil. Delivered straight to your doorstep across India.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-sand shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
              <Input
                type="text"
                placeholder="Search banana, jackfruit, spicy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-cream/70 border-sand rounded-full h-11 text-sm font-medium focus-visible:ring-turmeric text-ink"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <ArrowUpDown className="w-4 h-4 text-ink-soft hidden md:block" />
              <span className="text-xs font-bold text-ink-soft hidden md:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort snacks by"
                className="bg-cream/70 border border-sand rounded-full px-4 h-11 text-xs font-bold text-ink outline-none cursor-pointer focus:ring-2 focus:ring-turmeric"
              >
                <option value="featured">Featured / Bestsellers</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-sand/60">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-ink text-cream shadow-sm"
                    : "bg-cream text-ink-soft hover:bg-sand/70 hover:text-ink"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6 px-1">
          <p className="text-xs font-bold text-ink-soft uppercase tracking-wider">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "snack" : "snacks"}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-sand">
            <p className="font-display text-2xl font-bold text-ink mb-2">No snacks found</p>
            <p className="text-sm text-ink-soft max-w-sm mx-auto mb-6">
              We couldn't find any snacks matching "{searchQuery}". Try searching for banana, tapioca, or mixture.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="bg-chip text-ink hover:bg-turmeric px-6 py-2.5 rounded-full font-bold text-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

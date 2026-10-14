"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Truck,
  ShieldCheck,
  Flame,
  Clock,
  ArrowLeft,
  Check,
  Star,
} from "lucide-react";
import { Product } from "@/lib/products";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCartStore } from "@/lib/store/useCartStore";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const { addItem, openCart } = useCartStore();
  const currentVariant = product.variants[selectedVariantIndex] || {
    weight: product.baseWeight,
    price: product.basePrice,
  };

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      weight: currentVariant.weight,
      price: currentVariant.price,
      quantity,
      image: product.images[0],
    });

    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Yellow Chips! I would like to order:\n- ${product.name} (${currentVariant.weight}) x ${quantity}\nTotal: ₹${
      currentVariant.price * quantity
    }\nPlease confirm availability and payment instructions!`
  );

  return (
    <div className="bg-cream min-h-screen py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold text-ink-soft">
          <Link href="/shop" className="hover:text-ink flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Shop
          </Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-ink capitalize">
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-ink truncate max-w-xs">{product.name}</span>
        </div>

        {/* Product Hero Section: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 bg-white p-6 md:p-10 rounded-3xl border border-sand shadow-sm mb-16">
          {/* Left: Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-cream border border-sand shadow-inner group">
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/90 text-ink shadow-md backdrop-blur-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? "fill-chilli text-chilli" : "text-ink-soft"
                  }`}
                />
              </button>

              {product.isBestseller && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-chip text-ink font-bold text-xs px-3 py-1 border-none shadow-sm">
                    Bestseller
                  </Badge>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-cream border-2 transition-all shrink-0 cursor-pointer ${
                      selectedImage === index
                        ? "border-turmeric ring-2 ring-turmeric/30 scale-102"
                        : "border-sand opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Buy Box & Details */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-turmeric uppercase tracking-wider bg-sand px-2.5 py-0.5 rounded-full">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-ink">
                  <Star className="w-3.5 h-3.5 fill-turmeric text-turmeric" />
                  <span>{product.rating}</span>
                  <span className="text-ink-soft">({product.reviewCount} customer reviews)</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3 leading-tight">
                {product.name}
              </h1>
              <p className="text-ink-soft text-base leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Dynamic Price Display */}
              <div className="flex items-baseline gap-3 mb-6 p-4 rounded-2xl bg-cream/70 border border-sand">
                <span className="font-display text-3xl md:text-4xl font-bold text-ink">
                  ₹{currentVariant.price * quantity}
                </span>
                {currentVariant.originalPrice && (
                  <span className="text-sm line-through text-ink-soft">
                    ₹{currentVariant.originalPrice * quantity}
                  </span>
                )}
                <span className="text-xs font-bold text-leaf bg-leaf/10 px-2 py-0.5 rounded-full">
                  In Stock · Fresh Batch
                </span>
              </div>

              {/* Weight Selector */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">
                    Select Pack Size / Weight
                  </label>
                  <span className="text-xs font-semibold text-turmeric">
                    Selected: {currentVariant.weight}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {product.variants.map((v, idx) => (
                    <button
                      key={v.weight}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        selectedVariantIndex === idx
                          ? "border-turmeric bg-chip/15 text-ink shadow-xs font-bold"
                          : "border-sand bg-cream/50 text-ink-soft hover:border-sand hover:text-ink font-medium"
                      }`}
                    >
                      <span className="block text-sm font-bold">{v.weight}</span>
                      <span className="block text-xs mt-0.5">₹{v.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="mb-8">
                <label className="text-xs font-bold text-ink uppercase tracking-wider block mb-2.5">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-sand bg-cream rounded-full px-3 py-1.5 w-36 justify-between">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 flex items-center justify-center font-bold text-ink hover:text-turmeric rounded-full hover:bg-sand/60 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-base text-ink">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center font-bold text-ink hover:text-turmeric rounded-full hover:bg-sand/60 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-ink-soft">
                    ₹{currentVariant.price} per {currentVariant.weight} pack
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className={`flex-1 rounded-full font-bold h-14 text-base shadow-md transition-all active:scale-98 ${
                    addedAnimation
                      ? "bg-leaf text-white hover:bg-leaf"
                      : "bg-chip text-ink hover:bg-turmeric"
                  }`}
                >
                  {addedAnimation ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-5 h-5" /> Added to Crunch Bag!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5" /> Add to Bag · ₹{currentVariant.price * quantity}
                    </span>
                  )}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full font-bold h-14 px-6 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  <Link
                    href={`https://wa.me/919995836662?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Order
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-sand text-xs text-ink-soft">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-turmeric shrink-0" />
                  <span>Fried in 100% Coconut Oil</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-leaf shrink-0" />
                  <span>FSSAI Quality Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-turmeric shrink-0" />
                  <span>Pan-India 2-4 Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-leaf shrink-0" />
                  <span>{product.shelfLife}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional & Ingredients Accordions */}
        <div className="max-w-4xl mx-auto mb-16 bg-white p-6 md:p-10 rounded-3xl border border-sand shadow-sm">
          <h2 className="font-display text-2xl font-bold text-ink mb-6">
            Product Secrets & Nutrition
          </h2>
          <Accordion className="w-full">
            <AccordionItem value="ingredients" className="border-sand">
              <AccordionTrigger className="text-base font-bold text-ink py-4 hover:text-turmeric">
                Ingredients & Sourcing
              </AccordionTrigger>
              <AccordionContent className="text-ink-soft text-sm leading-relaxed pb-4">
                <p className="mb-2">We source directly from farmer producer organizations in Wayanad and Palakkad:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="bg-sand/60 text-ink font-semibold text-xs px-3 py-1 rounded-full">
                      {ing}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-leaf font-bold">
                  ✓ 100% Vegetarian · Zero Palm Oil · No Artificial Preservatives · No Chemical Additives
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nutrition" className="border-sand">
              <AccordionTrigger className="text-base font-bold text-ink py-4 hover:text-turmeric">
                Nutritional Values (Per {product.nutrition.servingSize})
              </AccordionTrigger>
              <AccordionContent className="text-ink-soft text-sm leading-relaxed pb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                  <div className="bg-cream p-3 rounded-xl text-center border border-sand">
                    <span className="text-xs text-ink-soft uppercase block">Energy</span>
                    <span className="font-display text-xl font-bold text-ink">{product.nutrition.calories} kcal</span>
                  </div>
                  <div className="bg-cream p-3 rounded-xl text-center border border-sand">
                    <span className="text-xs text-ink-soft uppercase block">Protein</span>
                    <span className="font-display text-xl font-bold text-ink">{product.nutrition.protein}</span>
                  </div>
                  <div className="bg-cream p-3 rounded-xl text-center border border-sand">
                    <span className="text-xs text-ink-soft uppercase block">Carbohydrates</span>
                    <span className="font-display text-xl font-bold text-ink">{product.nutrition.carbs}</span>
                  </div>
                  <div className="bg-cream p-3 rounded-xl text-center border border-sand">
                    <span className="text-xs text-ink-soft uppercase block">Healthy Fats</span>
                    <span className="font-display text-xl font-bold text-ink">{product.nutrition.fat}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="storage" className="border-sand">
              <AccordionTrigger className="text-base font-bold text-ink py-4 hover:text-turmeric">
                Storage & Crispness Care
              </AccordionTrigger>
              <AccordionContent className="text-ink-soft text-sm leading-relaxed pb-4">
                <p>
                  Keep sealed in the original zip-lock pouch or transfer to an airtight glass container immediately after opening. Store in a cool, dry place away from direct sunlight. Once opened, consume within 15 days for optimal kadai crispness.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Customer Reviews Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-white p-6 md:p-10 rounded-3xl border border-sand shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">Customer Crunch Reviews</h2>
              <p className="text-xs text-ink-soft mt-1">Based on {product.reviewCount} verified purchases</p>
            </div>
            <div className="flex items-center gap-2 bg-sand/60 px-4 py-2 rounded-full">
              <div className="flex text-turmeric text-sm">★★★★★</div>
              <span className="font-bold text-ink text-sm">{product.rating} / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-cream border border-sand">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-ink">Ananya R. (Bengaluru)</span>
                <span className="text-xs text-leaf font-bold">✓ Verified Buyer</span>
              </div>
              <div className="text-turmeric text-xs mb-2">★★★★★</div>
              <p className="text-xs text-ink-soft leading-relaxed">
                "Reminds me of the chips my grandmother used to pack for me from Calicut! The coconut oil aroma is unmistakable and there is zero greasiness."
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cream border border-sand">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-ink">Siddharth M. (Mumbai)</span>
                <span className="text-xs text-leaf font-bold">✓ Verified Buyer</span>
              </div>
              <div className="text-turmeric text-xs mb-2">★★★★★</div>
              <p className="text-xs text-ink-soft leading-relaxed">
                "Ordered 1kg for Diwali. Slices were wafer thin and unbroken. Fast shipping to Mumbai in 3 days. Definitely subscribing!"
              </p>
            </div>
          </div>
        </div>

        {/* Related Bestsellers */}
        <div>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink">You May Also Crave</h2>
              <p className="text-sm text-ink-soft">More heritage chips fried fresh in pure coconut oil.</p>
            </div>
            <Link href="/shop" className="text-xs font-bold text-ink hover:text-turmeric transition-colors">
              View All Snacks →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

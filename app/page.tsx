"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  Flame,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  Coffee,
  Store,
  ChevronRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/commerce/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const filteredBestsellers = PRODUCTS.filter((p) => {
    if (activeCategoryFilter === "all") return true;
    return p.category === activeCategoryFilter;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <div className="flex flex-col gap-16 md:gap-28 overflow-hidden bg-cream">
      {/* 1. Hero Section */}
      <section className="relative pt-12 md:pt-24 pb-16 md:pb-24 overflow-hidden px-4 md:px-6">
        <div className="absolute inset-0 bg-sunshine-gradient -z-10" />
        <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 max-w-2xl order-2 lg:order-1"
          >
            {/* Live Trust Pill */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-sand shadow-xs mb-6 backdrop-blur-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-leaf animate-pulse" />
              <span className="text-xs font-bold text-ink">
                Hot Kadai Batches Frying Today · 100% Coconut Oil
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] text-ink mb-6"
            >
              Kerala's crunch, fresh from the{" "}
              <span className="text-turmeric underline decoration-chip/60 decoration-wavy decoration-2">
                kadai.
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-ink-soft mb-8 leading-relaxed">
              Small-batch raw banana, golden jackfruit, and spicy tapioca chips. Hand-sliced and fried in cold-pressed coconut oil, nitrogen-sealed within hours.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold text-base h-14 px-8 shadow-md hover:shadow-lg transition-all active:scale-95 group"
                asChild
              >
                <Link href="/shop" className="flex items-center justify-center gap-2">
                  Shop Fresh Batches
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-bold text-base h-14 px-8 border-ink text-ink hover:bg-ink hover:text-cream bg-white/50 backdrop-blur-xs transition-all active:scale-95"
                asChild
              >
                <Link href="/franchise">Own a Yellow Chips</Link>
              </Button>
            </motion.div>

            {/* Quick Guarantees Strip */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-2 pt-6 border-t border-sand/80 text-[11px] sm:text-xs font-semibold text-ink-soft"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                <span>Zero Palm Oil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-turmeric shrink-0" />
                <span>2-3 Day Pan-India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-leaf shrink-0" />
                <span>FSSAI Certified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Visual Bowl */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative h-[380px] sm:h-[480px] w-full order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Ambient Warm Aura */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-chip/30 blur-3xl animate-pulse-glow -z-10" />

            {/* Floating Main Kadai Bowl */}
            <div className="relative w-72 sm:w-96 aspect-square rounded-full p-4 bg-gradient-to-b from-white/90 to-sand/60 border border-white shadow-2xl backdrop-blur-md flex items-center justify-center animate-float-slow">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://placehold.co/800x800/FFF9EC/2B1B10?text=Fresh+Kadai+Banana+Chips"
                  alt="Fresh Banana Chips in Kadai"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Badge 1: Coconut Oil */}
            <div className="absolute -top-2 left-4 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-sand shadow-lg flex items-center gap-2 animate-float-reverse">
              <span className="text-xl">🥥</span>
              <div>
                <span className="text-xs font-bold text-ink block">Cold-Pressed</span>
                <span className="text-[10px] text-ink-soft">100% Coconut Oil</span>
              </div>
            </div>

            {/* Floating Badge 2: Crisp Rating */}
            <div className="absolute -bottom-4 right-4 sm:right-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sand shadow-lg flex items-center gap-3 animate-float-slow">
              <div className="w-9 h-9 rounded-full bg-chip/30 text-turmeric flex items-center justify-center font-bold text-sm">
                ★
              </div>
              <div>
                <span className="text-xs font-bold text-ink block">4.9 / 5.0 Rating</span>
                <span className="text-[10px] text-ink-soft">15,000+ Happy Crunchers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Trust Marquee */}
      <section className="bg-ink text-cream py-4 overflow-hidden border-y border-ink flex items-center shadow-inner">
        <div className="animate-marquee flex items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-6 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="text-chip mr-2">✦</span>
              <span>Freshly Fried in Coconut Oil</span>
              <span className="mx-6 text-sand/40">•</span>
              <span className="text-chip mr-2">✦</span>
              <span>No Palm Oil or Chemical Preservatives</span>
              <span className="mx-6 text-sand/40">•</span>
              <span className="text-chip mr-2">✦</span>
              <span>FSSAI Certified</span>
              <span className="mx-6 text-sand/40">•</span>
              <span className="text-chip mr-2">✦</span>
              <span>Wayanad Farm Direct</span>
              <span className="mx-6 text-sand/40">•</span>
              <span className="text-chip mr-2">✦</span>
              <span>Pan-India 2-3 Day Express Shipping</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bestsellers Section with Category Quick Tabs */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
              Signature Crunch
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-2 mb-2">
              Our Bestselling Snacks
            </h2>
            <p className="text-ink-soft text-sm md:text-base">
              The iconic flavours that Kerala households have celebrated for generations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="text-xs font-bold text-ink hover:text-turmeric transition-colors inline-flex items-center gap-1"
            >
              View Full Shop <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {[
            { id: "all", label: "All Bestsellers" },
            { id: "banana", label: "Banana Chips" },
            { id: "jackfruit", label: "Jackfruit Chips" },
            { id: "tapioca", label: "Tapioca Sticks" },
            { id: "mixtures", label: "Kerala Mixtures" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategoryFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategoryFilter === tab.id
                  ? "bg-ink text-cream shadow-xs"
                  : "bg-white text-ink-soft border border-sand hover:bg-sand/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-5">
            {filteredBestsellers.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-3 md:pl-5 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-2 mt-6 pr-2">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-sand bg-white text-ink hover:bg-sand" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-sand bg-white text-ink hover:bg-sand" />
          </div>
        </Carousel>
      </section>

      {/* 4. Interactive Bento Grid: Shop By Category */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
            Kerala's Golden Harvest
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-2">
            Explore by Snack Category
          </h2>
          <p className="text-ink-soft text-sm">
            From farm-fresh bananas to spiced cassava batons, choose your craving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-auto">
          {/* Tile 1: Banana Chips (Large Spotlight) */}
          <Link
            href="/shop/banana"
            className="md:col-span-8 relative min-h-[300px] md:min-h-[380px] rounded-3xl overflow-hidden bg-sand border border-sand group shadow-xs hover:shadow-lg transition-all"
          >
            <Image
              src="https://placehold.co/1000x600/FFF9EC/2B1B10?text=Banana+Chips+Spotlight"
              alt="Banana Chips"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
              <div>
                <span className="bg-chip text-ink text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                  Flagship Heritage
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-bold">
                  Kerala Banana Chips
                </h3>
                <p className="text-cream/80 text-xs md:text-sm max-w-md mt-1">
                  Classic salted, crushed Malabar pepper, and sweet jaggery upperi.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center shrink-0 group-hover:bg-chip transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Tile 2: Ripe Jackfruit Chips */}
          <Link
            href="/shop/jackfruit"
            className="md:col-span-4 relative min-h-[240px] md:min-h-[380px] rounded-3xl overflow-hidden bg-sand border border-sand group shadow-xs hover:shadow-lg transition-all"
          >
            <Image
              src="https://placehold.co/600x600/FFF9EC/2B1B10?text=Jackfruit+Chips"
              alt="Jackfruit Chips"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
              <div>
                <span className="bg-turmeric text-ink text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                  Naturally Sweet
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  Jackfruit Crisps
                </h3>
                <p className="text-cream/80 text-xs mt-0.5">
                  Chakka Varuthathu from Palakkad.
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shrink-0 group-hover:bg-chip transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Tile 3: Fiery Tapioca */}
          <Link
            href="/shop/tapioca"
            className="md:col-span-4 relative min-h-[220px] rounded-3xl overflow-hidden bg-sand border border-sand group shadow-xs hover:shadow-lg transition-all"
          >
            <Image
              src="https://placehold.co/600x400/FFF9EC/2B1B10?text=Tapioca+Chips"
              alt="Tapioca Chips"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
              <div>
                <span className="bg-chilli text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-1 inline-block">
                  Spicy Snap
                </span>
                <h3 className="font-display text-xl font-bold">Tapioca Sticks</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shrink-0 group-hover:bg-chip transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Tile 4: Kerala Mixtures */}
          <Link
            href="/shop/mixtures"
            className="md:col-span-4 relative min-h-[220px] rounded-3xl overflow-hidden bg-sand border border-sand group shadow-xs hover:shadow-lg transition-all"
          >
            <Image
              src="https://placehold.co/600x400/FFF9EC/2B1B10?text=Kerala+Mixtures"
              alt="Kerala Mixtures"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
              <div>
                <span className="bg-sand text-ink text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-1 inline-block">
                  Tea-time Classic
                </span>
                <h3 className="font-display text-xl font-bold">Royal Mixtures</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shrink-0 group-hover:bg-chip transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Tile 5: Gift Boxes */}
          <Link
            href="/gifting"
            className="md:col-span-4 relative min-h-[220px] rounded-3xl overflow-hidden bg-sand border border-sand group shadow-xs hover:shadow-lg transition-all"
          >
            <Image
              src="https://placehold.co/600x400/FFF9EC/2B1B10?text=Festive+Hampers"
              alt="Festive Hampers"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
              <div>
                <span className="bg-chip text-ink text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-1 inline-block">
                  Festive Boxes
                </span>
                <h3 className="font-display text-xl font-bold">Gift Hampers</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center shrink-0 group-hover:bg-chip transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. The 4-Step Kadai Craft Story Banner */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-sand/60 rounded-3xl p-8 md:p-14 border border-sand">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-white px-3 py-1 rounded-full">
              The Heritage Kadai Method
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mt-3 mb-3">
              Why Yellow Chips Tastes Different
            </h2>
            <p className="text-ink-soft text-sm md:text-base">
              We ditched commercial assembly lines. Every batch is sliced directly into bubbling wood-pressed coconut oil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-sand shadow-xs">
              <div className="text-2xl font-bold font-display text-turmeric mb-2">01</div>
              <h4 className="font-display font-bold text-ink text-base mb-1">
                Wayanad Green Bananas
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed">
                Handpicked at exact 80% ripeness for maximum natural crunch and sweetness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand shadow-xs">
              <div className="text-2xl font-bold font-display text-turmeric mb-2">02</div>
              <h4 className="font-display font-bold text-ink text-base mb-1">
                Direct Hand Mandoline Slicing
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed">
                Wafer-thin discs sliced directly into the frying vessel to prevent oxidation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand shadow-xs">
              <div className="text-2xl font-bold font-display text-turmeric mb-2">03</div>
              <h4 className="font-display font-bold text-ink text-base mb-1">
                Heavy Cast-Iron Kadai
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed">
                Fried in 100% pure cold-pressed coconut oil seasoned with natural sea salt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sand shadow-xs">
              <div className="text-2xl font-bold font-display text-turmeric mb-2">04</div>
              <h4 className="font-display font-bold text-ink text-base mb-1">
                90-Minute Aroma Nitrogen Pack
              </h4>
              <p className="text-xs text-ink-soft leading-relaxed">
                Sealed fresh within 90 minutes of frying to guarantee uncompromised snap.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-ink text-ink hover:bg-ink hover:text-cream font-bold text-xs px-6"
            >
              <Link href="/our-story">Read Our Full Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. The Yellow Cafe Teaser */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-sand shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5" /> Sit Down & Savour
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              The Yellow Cafe Experience
            </h2>
            <p className="text-ink-soft text-base leading-relaxed">
              Step into our warm Kerala-inspired cafes. Enjoy authentic South Indian filter kaapi, freshly tossed banana chip platters, spicy tapioca roast, and warm artisanal sandwiches.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold text-ink">
              <span className="bg-cream px-3 py-1 rounded-full border border-sand">☕ Degree Filter Kaapi</span>
              <span className="bg-cream px-3 py-1 rounded-full border border-sand">🍌 Fresh Chip Platters</span>
              <span className="bg-cream px-3 py-1 rounded-full border border-sand">🥪 Paneer Tikka Toast</span>
            </div>
            <div className="pt-4 flex gap-3">
              <Button asChild className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12 px-6 text-xs">
                <Link href="/cafe">Explore Cafe Menu</Link>
              </Button>
              <Button asChild variant="outline" className="border-sand rounded-full font-bold h-12 px-6 text-xs">
                <Link href="/stores">Find Nearest Cafe</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 aspect-video sm:aspect-16/10 rounded-2xl overflow-hidden bg-cream border border-sand shadow-md">
            <Image
              src="https://placehold.co/800x500/2B1B10/FFF9EC?text=The+Yellow+Cafe+Interior"
              alt="The Yellow Cafe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. Franchise Lead Teaser */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-ink text-cream rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-chip/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-chip bg-white/10 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5" /> High-Margin F&B Business
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Own a piece of Kerala's favourite snack story.
              </h2>
              <p className="text-cream/80 text-base leading-relaxed">
                Join India's fastest growing heritage snacking brand. Three flexible formats: Express Kiosk, Smart Store, and Flagship Store with complete training, centralized supply, and brand marketing.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="font-display text-3xl font-bold text-chip">₹5L</div>
                  <div className="text-[11px] font-semibold text-cream/70 uppercase tracking-wider mt-0.5">
                    Starting Investment
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-chip">25+</div>
                  <div className="text-[11px] font-semibold text-cream/70 uppercase tracking-wider mt-0.5">
                    Operating Outlets
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-chip">35%</div>
                  <div className="text-[11px] font-semibold text-cream/70 uppercase tracking-wider mt-0.5">
                    High Gross Margin
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-14 px-8 text-sm shadow-lg transition-transform active:scale-95"
                  asChild
                >
                  <Link href="/franchise">Explore Franchise Models & ROI</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-square sm:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="https://placehold.co/800x600/FFF9EC/2B1B10?text=Franchise+Smart+Store"
                alt="Store Exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Customer Crunch Testimonials */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
            Real Buyer Love
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-2">
            Why Snacker Families Love Us
          </h2>
          <p className="text-ink-soft text-sm">
            Over 15,000 satisfied customers enjoy authentic Kerala crunch delivered fresh across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-sand shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex text-turmeric text-sm mb-3">★★★★★</div>
              <p className="text-xs md:text-sm text-ink-soft leading-relaxed italic mb-4">
                "The classic banana chips are genuinely sliced paper-thin. You can immediately smell the fresh coconut oil the second you tear open the nitrogen pouch!"
              </p>
            </div>
            <div className="pt-4 border-t border-sand/60 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-xs text-ink">Deepa Varma</h5>
                <span className="text-[10px] text-ink-soft">Bengaluru, KA</span>
              </div>
              <span className="text-[10px] text-leaf font-bold bg-leaf/10 px-2 py-0.5 rounded-full">
                ✓ Verified Buyer
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-sand shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex text-turmeric text-sm mb-3">★★★★★</div>
              <p className="text-xs md:text-sm text-ink-soft leading-relaxed italic mb-4">
                "The Jaggery Sharkara Upperi brought back exact memories of our family Onam in Thrissur. The chukku and cardamom flavor is just perfection."
              </p>
            </div>
            <div className="pt-4 border-t border-sand/60 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-xs text-ink">Manoj Menon</h5>
                <span className="text-[10px] text-ink-soft">Mumbai, MH</span>
              </div>
              <span className="text-[10px] text-leaf font-bold bg-leaf/10 px-2 py-0.5 rounded-full">
                ✓ Verified Buyer
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-sand shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex text-turmeric text-sm mb-3">★★★★★</div>
              <p className="text-xs md:text-sm text-ink-soft leading-relaxed italic mb-4">
                "Ordered 40 gift hampers for our company Diwali distribution in Delhi. Every single packet arrived unbroken and our team was raving about the Jackfruit crisps!"
              </p>
            </div>
            <div className="pt-4 border-t border-sand/60 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-xs text-ink">Rohit Agarwal</h5>
                <span className="text-[10px] text-ink-soft">Gurugram, HR</span>
              </div>
              <span className="text-[10px] text-leaf font-bold bg-leaf/10 px-2 py-0.5 rounded-full">
                ✓ Corporate Client
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VIP Crunch Club Newsletter & WhatsApp Band */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="bg-chip/25 rounded-3xl p-8 md:p-14 border border-chip/40 text-center max-w-4xl mx-auto shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-ink bg-white px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-turmeric" /> Yellow Chips VIP Club
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">
            Get 10% Off Your First Batch
          </h2>
          <p className="text-ink-soft text-sm max-w-lg mx-auto mb-8">
            Join 20,000+ snack lovers. Receive secret seasonal batch drops (Fresh Jackfruit harvests) and exclusive festive coupon codes.
          </p>

          {subscribed ? (
            <div className="bg-white p-6 rounded-2xl border border-sand max-w-md mx-auto space-y-2">
              <span className="text-xl">🎉</span>
              <h4 className="font-display font-bold text-ink text-lg">Welcome to the Club!</h4>
              <p className="text-xs text-ink-soft">
                Use code <span className="font-mono font-bold text-turmeric">CRUNCH10</span> at checkout for 10% off your order.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-white border border-sand rounded-full h-12 px-5 text-sm font-medium text-ink flex-1 outline-none focus:ring-2 focus:ring-turmeric"
              />
              <Button type="submit" className="bg-ink text-cream hover:bg-ink-soft rounded-full font-bold h-12 px-6 text-xs shrink-0">
                Claim 10% Off
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

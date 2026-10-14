"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
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
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-24 pb-12 overflow-hidden px-4 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#FFC93C33_0%,#FFF9EC_70%)] -z-10" />
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl order-2 md:order-1">
            <motion.h1 variants={item} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-ink mb-6">
              Kerala's crunch, fresh from the kadai.
            </motion.h1>
            <motion.p variants={item} className="text-lg md:text-xl text-ink-soft mb-8">
              Small-batch banana, jackfruit and tapioca chips, fried in coconut oil and packed fresh.
            </motion.p>
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold text-lg h-14 px-8" asChild>
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-bold text-lg h-14 px-8 border-ink text-ink hover:bg-ink hover:text-cream" asChild>
                <Link href="/franchise">Own a Yellow Chips</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] w-full order-1 md:order-2"
          >
            {/* Parallax Floating Bowl Placeholder */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image 
                src="https://placehold.co/800x800/FFF9EC/2B1B10?text=Floating+Bowl" 
                alt="Floating Bowl" 
                width={600} 
                height={600}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Marquee */}
      <section className="bg-ink text-cream py-4 overflow-hidden border-y border-ink-soft flex items-center">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-4 text-sm md:text-base font-medium tracking-wide flex items-center">
              Freshly fried <span className="mx-4 text-chip">•</span> 
              No preservatives <span className="mx-4 text-chip">•</span> 
              FSSAI certified <span className="mx-4 text-chip">•</span> 
              Delivered across India <span className="mx-4 text-chip">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* Bestsellers Carousel */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-2">Our Bestsellers</h2>
            <p className="text-ink-soft">The crunch that everyone loves.</p>
          </div>
          <Link href="/shop" className="hidden md:inline-flex text-ink font-bold hover:text-turmeric transition-colors">
            View all snacks →
          </Link>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {PRODUCTS.slice(0, 6).map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </div>
        </Carousel>
      </section>

      {/* Bento Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <Link href="/shop/banana" className="relative block overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 group">
            <Image src="https://placehold.co/800x800/FFF9EC/2B1B10?text=Banana" alt="Banana" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <h3 className="absolute bottom-6 left-6 font-display text-3xl font-bold text-white">Banana</h3>
          </Link>
          <Link href="/shop/tapioca" className="relative block h-64 md:h-auto overflow-hidden rounded-3xl group">
            <Image src="https://placehold.co/600x400/FFF9EC/2B1B10?text=Tapioca" alt="Tapioca" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <h3 className="absolute bottom-6 left-6 font-display text-2xl font-bold text-white">Tapioca</h3>
          </Link>
          <Link href="/shop/jackfruit" className="relative block h-64 md:h-auto overflow-hidden rounded-3xl group">
            <Image src="https://placehold.co/600x400/FFF9EC/2B1B10?text=Jackfruit" alt="Jackfruit" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <h3 className="absolute bottom-6 left-6 font-display text-2xl font-bold text-white">Jackfruit</h3>
          </Link>
        </div>
      </section>

      {/* Franchise Teaser */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="bg-sand rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-chip/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="max-w-xl relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-6">Own a Yellow Chips.</h2>
            <p className="text-lg text-ink-soft mb-8">
              Proven snacks, simple formats, full support. Join our growing family of franchise partners across India.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="font-display text-3xl font-bold text-turmeric">50+</div>
                <div className="text-xs font-semibold text-ink uppercase tracking-wider">Outlets</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-turmeric">₹5L</div>
                <div className="text-xs font-semibold text-ink uppercase tracking-wider">Invest From</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-turmeric">24/7</div>
                <div className="text-xs font-semibold text-ink uppercase tracking-wider">Support</div>
              </div>
            </div>
            <Button size="lg" className="bg-ink text-cream hover:bg-ink-soft rounded-full font-bold text-lg px-8 h-14" asChild>
              <Link href="/franchise">Explore Franchise</Link>
            </Button>
          </div>
          
          <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-lg z-10">
            <Image src="https://placehold.co/800x600/FFF9EC/2B1B10?text=Store+Exterior" alt="Store format" fill className="object-cover" />
          </div>
        </div>
      </section>
      
      {/* CSS for marquee animation (could also be in globals.css) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}

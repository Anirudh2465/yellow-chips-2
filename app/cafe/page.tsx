"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Coffee, MapPin, Sparkles, Clock, Heart, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const menuData = {
  snacks: [
    {
      name: "Kadai Hot Banana Chip Platter",
      price: "₹129",
      desc: "Served straight from the hot kadai with coconut mint chutney and spicy onion relish.",
      veg: true,
      spicy: "Mild",
      isSpecial: true,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Hot+Banana+Chips",
    },
    {
      name: "Kerala Special Royal Mixture Bowl",
      price: "₹89",
      desc: "Crispy sev, roasted groundnuts, curry leaves, and whole fried garlic cloves.",
      veg: true,
      spicy: "Medium",
      isSpecial: false,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Mixture+Bowl",
    },
    {
      name: "Fiery Tapioca Sticks with Kanthari Dip",
      price: "₹119",
      desc: "Cassava batons double-crisped in coconut oil, served with bird's eye chili mayonnaise.",
      veg: true,
      spicy: "Hot",
      isSpecial: true,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Tapioca+Roast",
    },
    {
      name: "Sharkara Upperi (Sweet Jaggery Nibbles)",
      price: "₹110",
      desc: "Chunky fried banana coated in Marayoor jaggery, ginger powder, and crushed cardamom.",
      veg: true,
      spicy: "Sweet",
      isSpecial: false,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Sharkara+Upperi",
    },
  ],
  beverages: [
    {
      name: "Degree South Indian Filter Kaapi",
      price: "₹59",
      desc: "Freshly ground Chikmagalur peaberry blend brewed in brass filters with frothy milk.",
      veg: true,
      spicy: "Hot Drink",
      isSpecial: true,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Filter+Kaapi",
    },
    {
      name: "Cardamom Highway Chai",
      price: "₹49",
      desc: "Strong Nilgiri tea infused with whole crushed green cardamom pods and ginger.",
      veg: true,
      spicy: "Hot Drink",
      isSpecial: false,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Cardamom+Chai",
    },
    {
      name: "Tender Coconut & Mint Cooler",
      price: "₹119",
      desc: "Fresh Malabar tender coconut water blended with garden mint and a hint of lime.",
      veg: true,
      spicy: "Chilled",
      isSpecial: true,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Coconut+Cooler",
    },
    {
      name: "Spiced Buttermilk (Sambharam)",
      price: "₹49",
      desc: "Chilled cultured buttermilk churned with ginger, green chilies, shallots, and curry leaves.",
      veg: true,
      spicy: "Refreshing",
      isSpecial: false,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Sambharam",
    },
  ],
  sandwiches: [
    {
      name: "Malabar Paneer Tikka Toast",
      price: "₹149",
      desc: "Marinated cottage cheese tossed in roasted spices and grilled in buttered sourdough.",
      veg: true,
      spicy: "Medium",
      isSpecial: true,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Paneer+Toast",
    },
    {
      name: "Golden Sweet Corn & Melting Cheese Grill",
      price: "₹129",
      desc: "Sweet corn, bell peppers, and gooey mozzarella sprinkled with oregano seasoning.",
      veg: true,
      spicy: "Mild",
      isSpecial: false,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Cheese+Corn+Grill",
    },
  ],
  combos: [
    {
      name: "Afternoon Kaapi & Crunch Combo",
      price: "₹149",
      desc: "1 Frothy Degree Filter Kaapi + Fresh Hot Banana Chips Platter + Coconut Dip.",
      veg: true,
      spicy: "Bestseller",
      isSpecial: true,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Kaapi+Crunch+Combo",
    },
    {
      name: "The Grand High-Tea Tasting Board",
      price: "₹249",
      desc: "Assortment of Banana, Jackfruit, Tapioca chips, Mixture bowl, and 2 Filter Coffees.",
      veg: true,
      spicy: "Feast",
      isSpecial: true,
      img: "https://placehold.co/400x300/FFF9EC/2B1B10?text=Tasting+Board",
    },
  ],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Cafe() {
  return (
    <div className="flex flex-col overflow-hidden bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080/2B1B10/FFF9EC?text=The+Yellow+Cafe+Ambiance"
            alt="Cafe Interior"
            fill
            priority
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.div initial="hidden" animate="show" variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 glass-kerala-gold px-4 py-1.5 rounded-full text-xs font-bold text-ink mb-4 shadow-sm border border-turmeric/35"
            >
              <Coffee className="w-3.5 h-3.5 text-turmeric animate-bounce" />
              <span>Aroma of Kerala · Fresh Brews & Hot Kadai Snacks</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-7xl font-black text-ink mb-6 tracking-tight"
            >
              The Yellow Cafe
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-ink-soft mb-8 max-w-xl mx-auto font-normal">
              Where hot coconut oil chips meet frothy brass-filter kaapi. Relax, crunch, and catch up with friends.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center gap-3">
              <Button asChild className="bg-turmeric text-ink hover:bg-turmeric/90 rounded-full font-bold h-12 px-8 text-xs shadow-md transition-all hover:scale-105">
                <Link href="#menu">View Full Menu</Link>
              </Button>
              <Button asChild variant="outline" className="border-ink/80 text-ink rounded-full font-bold h-12 px-8 text-xs glass-kerala-card hover:bg-ink hover:text-cream transition-all hover:scale-105">
                <Link href="/stores">Find Nearest Cafe</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="container mx-auto px-4 md:px-6 py-16 md:py-20 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric glass-kerala-gold px-4 py-1.5 rounded-full inline-block shadow-xs border border-turmeric/30">
            Freshly Prepared
          </span>
          <h2 className="font-display text-4xl font-bold text-ink mt-3 mb-2">Our Cafe Menu</h2>
          <p className="text-ink-soft max-w-lg mx-auto text-sm">
            Everything is crafted to order with clean ingredients and traditional South Indian spices.
          </p>
        </div>

        <Tabs defaultValue="snacks" className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <TabsList className="glass-kerala-card p-1.5 rounded-full border border-turmeric/25 h-auto shadow-sm flex">
              <TabsTrigger
                value="snacks"
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-turmeric data-[state=active]:text-ink text-ink-soft font-bold text-xs transition-all cursor-pointer"
              >
                Snacks
              </TabsTrigger>
              <TabsTrigger
                value="beverages"
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-turmeric data-[state=active]:text-ink text-ink-soft font-bold text-xs transition-all cursor-pointer"
              >
                Hot & Cold Drinks
              </TabsTrigger>
              <TabsTrigger
                value="sandwiches"
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-turmeric data-[state=active]:text-ink text-ink-soft font-bold text-xs transition-all cursor-pointer"
              >
                Toasted Sandwiches
              </TabsTrigger>
              <TabsTrigger
                value="combos"
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-turmeric data-[state=active]:text-ink text-ink-soft font-bold text-xs transition-all cursor-pointer"
              >
                Combos & Boards
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="glass-kerala-card rounded-3xl p-5 border border-sand/80 shadow-xs hover:border-turmeric/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex gap-4 items-center group"
                  >
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-sand shrink-0 border border-sand/60">
                      <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      {item.isSpecial && (
                        <span className="absolute top-1.5 left-1.5 bg-chip/95 text-ink text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-turmeric/30 backdrop-blur-xs">
                          Special
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3 className="font-display font-bold text-base text-ink group-hover:text-turmeric transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                        <span className="font-bold text-ink text-base shrink-0 bg-sand/80 border border-sand px-2.5 py-0.5 rounded-full text-xs">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-ink-soft leading-relaxed line-clamp-2 mb-3">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-leaf bg-leaf/10 border border-leaf/20 px-2 py-0.5 rounded-full">
                          100% Veg
                        </span>
                        <span className="text-[10px] font-semibold text-ink-soft">
                          {item.spicy}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Cafe Ambiance Experience Strip */}
      <section className="container mx-auto px-4 md:px-6 pb-20 max-w-6xl">
        <div className="glass-kerala-gold rounded-3xl p-8 md:p-12 border border-turmeric/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-white/90 border border-turmeric/20 px-3.5 py-1.5 rounded-full shadow-xs">
              Hospitality & Timings
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mt-3 mb-2">
              Open Daily: 9:00 AM – 10:30 PM
            </h3>
            <p className="text-xs md:text-sm text-ink-soft max-w-lg leading-relaxed">
              Available at our Calicut Beach Promenade, Indiranagar Bengaluru, Marine Drive Kochi, and Anna Nagar Chennai outlets. Walk-in friendly with free high-speed Wi-Fi.
            </p>
          </div>

          <Button asChild className="bg-ink text-cream hover:bg-ink-soft rounded-full font-bold h-12 px-8 text-xs shrink-0 shadow-md transition-transform hover:scale-105">
            <Link href="/stores">View Cafe Locations & Directions</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

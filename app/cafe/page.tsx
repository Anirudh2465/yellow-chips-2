"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuData = {
  snacks: [
    { name: "Kerala Mixture Bowl", price: "₹89", desc: "Spicy and crunchy, served fresh.", veg: true },
    { name: "Banana Chip Platter", price: "₹129", desc: "Assorted banana chips with dips.", veg: true },
    { name: "Spicy Tapioca Roast", price: "₹110", desc: "Tossed in fiery Kerala spices.", veg: true },
  ],
  beverages: [
    { name: "Filter Kaapi", price: "₹59", desc: "Authentic South Indian filter coffee.", veg: true },
    { name: "Cardamom Chai", price: "₹49", desc: "Strong tea brewed with fresh cardamom.", veg: true },
    { name: "Tender Coconut Cooler", price: "₹119", desc: "Fresh coconut water with mint.", veg: true },
  ],
  sandwiches: [
    { name: "Paneer Tikka Toast", price: "₹149", desc: "Spicy paneer loaded in grilled bread.", veg: true },
    { name: "Cheese & Corn Grill", price: "₹129", desc: "Melted cheese and sweet corn.", veg: true },
  ],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Cafe() {
  return (
    <div className="flex flex-col overflow-hidden bg-cream">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="https://placehold.co/1920x1080/2B1B10/FFF9EC?text=Cafe+Interior" 
            alt="Cafe Interior" 
            fill 
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.div initial="hidden" animate="show" variants={containerVariants}>
            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl font-bold text-ink mb-6">
              The Yellow Cafe
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-ink-soft mb-8">
              Experience the authentic taste of Kerala right at your table. Fresh brews, crispy snacks, and warm smiles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Our Menu</h2>
          <p className="text-ink-soft max-w-xl mx-auto">Made fresh every day with the finest ingredients and lots of love.</p>
        </motion.div>

        <Tabs defaultValue="snacks" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-sand p-1 rounded-full border border-cream h-auto">
              <TabsTrigger value="snacks" className="rounded-full px-6 py-3 data-[state=active]:bg-chip data-[state=active]:text-ink text-ink-soft font-bold text-base transition-all">Snacks</TabsTrigger>
              <TabsTrigger value="beverages" className="rounded-full px-6 py-3 data-[state=active]:bg-chip data-[state=active]:text-ink text-ink-soft font-bold text-base transition-all">Beverages</TabsTrigger>
              <TabsTrigger value="sandwiches" className="rounded-full px-6 py-3 data-[state=active]:bg-chip data-[state=active]:text-ink text-ink-soft font-bold text-base transition-all">Sandwiches</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-8 outline-none">
              <motion.div 
                initial="hidden" 
                animate="show" 
                variants={containerVariants}
                className="grid md:grid-cols-2 gap-6"
              >
                {items.map((item, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Card className="bg-white hover:shadow-lg transition-all duration-300 border-none group cursor-pointer hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-display text-2xl font-bold text-ink group-hover:text-turmeric transition-colors">{item.name}</h3>
                          <span className="font-bold text-ink bg-cream px-3 py-1 rounded-full text-sm border border-sand shadow-sm">{item.price}</span>
                        </div>
                        <p className="text-ink-soft text-sm mb-4">{item.desc}</p>
                        {item.veg && (
                          <Badge variant="outline" className="text-leaf border-leaf/30 bg-leaf/10">Pure Veg</Badge>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Info Banner */}
      <section className="bg-ink text-cream py-16 px-4 md:px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-chip">Visit Us</h2>
            <p className="text-cream/80 text-lg mb-8 leading-relaxed">
              We are open every day from 10 AM to 10 PM. Drop by for a quick crunch or stay a while and enjoy the ambience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold">Kochi Flagship Store</h4>
                  <p className="text-sm text-cream/60">MG Road, Ernakulam, Kerala</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="https://placehold.co/800x600/2B1B10/FFF9EC?text=Map+Location" alt="Location" fill className="object-cover" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

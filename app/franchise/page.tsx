"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Franchise() {
  const [footfall, setFootfall] = useState([500]);
  const estimatedRevenue = footfall[0] * 120 * 30; // Mock calculation

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="flex flex-col overflow-hidden bg-cream">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-chip/20 rounded-full blur-[100px] -z-10" />
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={containerVariants}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
            <span className="text-sm font-bold text-ink">Now expanding in South India</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl font-bold text-ink mb-6 leading-tight">
            Own a piece of Kerala's favourite snack story.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-ink-soft mb-10 max-w-2xl mx-auto">
            Join our network with low investment, proven business models, and end-to-end operational support.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all">
              Download Franchise Kit
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-bold text-lg h-14 px-8 border-ink text-ink hover:bg-ink hover:text-cream bg-transparent">
              Calculate ROI
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Models Section */}
      <section className="container mx-auto px-4 md:px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Choose Your Format</h2>
          <p className="text-ink-soft">We have a model for every space and budget.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Kiosk", area: "100 - 150 sq.ft", investment: "₹5L - ₹8L", img: "https://placehold.co/600x400/FFF9EC/2B1B10?text=Kiosk+Model" },
            { title: "Smart Store", area: "250 - 400 sq.ft", investment: "₹10L - ₹15L", img: "https://placehold.co/600x400/FFF9EC/2B1B10?text=Smart+Store" },
            { title: "Flagship", area: "800+ sq.ft", investment: "₹25L+", img: "https://placehold.co/600x400/FFF9EC/2B1B10?text=Flagship+Store" }
          ].map((model, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card className="bg-white rounded-3xl overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="relative aspect-video w-full overflow-hidden bg-sand">
                  <Image src={model.img} alt={model.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold text-ink mb-4 group-hover:text-turmeric transition-colors">{model.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center pb-3 border-b border-sand">
                      <span className="text-ink-soft text-sm font-medium">Area Required</span>
                      <span className="font-bold text-ink">{model.area}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                      <span className="text-ink-soft text-sm font-medium">Investment</span>
                      <span className="font-bold text-ink">{model.investment}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-ink/20 text-ink hover:bg-chip hover:text-ink hover:border-chip rounded-full transition-colors">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="bg-ink text-cream py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://placehold.co/100x100/FFF9EC/2B1B10?text=Pattern')] bg-repeat" />
        <div className="container mx-auto max-w-5xl relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-chip mb-6">Calculate Your Potential</h2>
            <p className="text-cream/80 text-lg mb-8 leading-relaxed">
              Use our interactive calculator to estimate your monthly revenue based on expected daily footfall.
            </p>
            
            <div className="mb-8 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="flex justify-between items-end mb-4">
                <Label className="text-cream text-base">Expected Daily Footfall</Label>
                <span className="text-2xl font-bold text-chip">{footfall[0]} people</span>
              </div>
              <Slider 
                value={footfall} 
                onValueChange={setFootfall} 
                max={2000} 
                step={50}
                className="py-4"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 text-ink shadow-2xl relative"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-turmeric text-ink text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Estimate
            </div>
            <h3 className="text-ink-soft font-medium mb-2 uppercase tracking-wide text-sm">Estimated Monthly Revenue</h3>
            <div className="font-display text-5xl md:text-6xl font-bold text-ink mb-6">
              {formatCurrency(estimatedRevenue)}
            </div>
            <p className="text-sm text-ink-soft/80 italic mb-8">
              * Figures are indicative estimates and not a guarantee of returns. Actual revenue may vary based on location and model.
            </p>
            <Button className="w-full bg-ink text-cream hover:bg-ink/90 rounded-full h-14 font-bold text-lg">
              Start Your Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ & Form Section */}
      <section className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl font-bold text-ink mb-8">Frequent Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-sand">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-turmeric py-6">Do I need prior F&B experience?</AccordionTrigger>
              <AccordionContent className="text-ink-soft text-base leading-relaxed pb-6">
                No prior experience is necessary. We provide comprehensive training for you and your staff, covering operations, hygiene, and customer service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-sand">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-turmeric py-6">How long does it take to setup?</AccordionTrigger>
              <AccordionContent className="text-ink-soft text-base leading-relaxed pb-6">
                From agreement signing to opening day, it typically takes 30-45 days depending on the store format and interior work required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-sand">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-turmeric py-6">Do you supply the products?</AccordionTrigger>
              <AccordionContent className="text-ink-soft text-base leading-relaxed pb-6">
                Yes, to maintain consistent quality across all outlets, all core snacks and ingredients are supplied from our central manufacturing unit in Kerala.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-sand">
          <h2 className="font-display text-3xl font-bold text-ink mb-2">Request Info</h2>
          <p className="text-ink-soft mb-8">Fill this out and our franchise team will call you.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="bg-cream border-transparent h-12 rounded-xl focus-visible:ring-turmeric" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 90000 00000" className="bg-cream border-transparent h-12 rounded-xl focus-visible:ring-turmeric" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Preferred City</Label>
              <Input id="city" placeholder="E.g. Bangalore" className="bg-cream border-transparent h-12 rounded-xl focus-visible:ring-turmeric" />
            </div>
            <Button type="button" className="w-full bg-chip text-ink hover:bg-turmeric rounded-xl font-bold text-lg h-14 mt-4 transition-transform active:scale-95">
              Submit Request
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

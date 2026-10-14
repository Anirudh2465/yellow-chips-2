"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import {
  Store,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  Download,
  Building,
  Users,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const FRANCHISE_MODELS = [
  {
    id: "kiosk",
    title: "Express Kiosk",
    tag: "High Footfall Hubs",
    area: "80 – 150 sq.ft",
    investment: "₹5L – ₹8L",
    avgTicket: 120,
    staff: "1 – 2 Staff",
    payback: "7 – 10 Months",
    desc: "Compact modular setup ideal for metro concourses, IT tech parks, shopping mall food courts, and transit stations.",
    features: [
      "Low capital expenditure",
      "Plug & play pre-fabricated kiosk counters",
      "Packaged retail chips & signature mixtures",
      "Fast breakeven within 3-4 months",
    ],
    img: "https://placehold.co/600x400/FFF9EC/2B1B10?text=Express+Kiosk+Model",
  },
  {
    id: "smart",
    title: "Smart High-Street Store",
    tag: "Most Popular",
    area: "200 – 400 sq.ft",
    investment: "₹10L – ₹15L",
    avgTicket: 190,
    staff: "2 – 3 Staff",
    payback: "9 – 13 Months",
    desc: "Full retail snack display combined with a compact live frying kadai show-window for maximum sensory customer pull.",
    features: [
      "Live aromatic kadai frying counter",
      "Complete 20+ packaged snack product range",
      "Beverage station with Filter Kaapi takeaway",
      "High repeat residential customer loyalty",
    ],
    img: "https://placehold.co/600x400/FFF9EC/2B1B10?text=Smart+Retail+Store",
  },
  {
    id: "flagship",
    title: "Flagship Cafe & Kadai",
    tag: "Complete Experience",
    area: "600 – 1,200 sq.ft",
    investment: "₹20L – ₹28L",
    avgTicket: 310,
    staff: "4 – 6 Staff",
    payback: "12 – 16 Months",
    desc: "A destination cafe featuring seating, authentic hot snacks, South Indian specialty brews, live kadai, and festive gift counters.",
    features: [
      "30+ seat casual dining cafe lounge",
      "Full menu: sandwiches, snacks, filter kaapi",
      "Corporate & festive hamper display corner",
      "Maximum brand prestige & revenue volume",
    ],
    img: "https://placehold.co/600x400/FFF9EC/2B1B10?text=Flagship+Cafe+Store",
  },
];

export default function Franchise() {
  const [selectedModel, setSelectedModel] = useState<"kiosk" | "smart" | "flagship">("smart");
  const [footfall, setFootfall] = useState([450]);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    hasProperty: "no",
    propertyArea: "",
    budget: "10-15L",
  });

  const activeModelData = FRANCHISE_MODELS.find((m) => m.id === selectedModel) || FRANCHISE_MODELS[1];

  // Dynamic Financial Calculations
  const dailyCustomers = footfall[0];
  const monthlyRevenue = dailyCustomers * activeModelData.avgTicket * 30;
  const estimatedGrossProfit = Math.round(monthlyRevenue * 0.4); // 40% gross margin
  const estimatedRentAndStaff = selectedModel === "kiosk" ? 65000 : selectedModel === "smart" ? 120000 : 220000;
  const projectedNetMonthlyProfit = Math.max(0, estimatedGrossProfit - estimatedRentAndStaff);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden bg-cream min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-16 px-4 text-center overflow-hidden bg-kadai-mesh">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-turmeric/15 rounded-full blur-[140px] -z-10 animate-pulse-glow" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-kerala-gold border border-turmeric/40 shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-leaf animate-ripple-pulse" />
            <span className="text-xs font-bold text-ink">
              Expanding Across South India · Karnataka, Tamil Nadu & Kerala
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-ink mb-6 leading-[1.1] tracking-tight"
          >
            Own a piece of Kerala's favourite snack story.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-ink-soft mb-10 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Partner with a brand that combines generational snacking love with streamlined modern operations and exceptional margins.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                const el = document.getElementById("apply-wizard");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-turmeric text-ink hover:bg-turmeric/90 rounded-full font-bold text-base h-14 px-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Franchise Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const el = document.getElementById("roi-calculator");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full font-bold text-base h-14 px-8 border-ink/80 text-ink hover:bg-ink hover:text-cream glass-kerala-card transition-all duration-300 hover:scale-105"
            >
              Calculate Store ROI
            </Button>
          </motion.div>

          {/* Metrics Counter Glass Card */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 glass-kerala-card p-6 rounded-3xl border border-turmeric/25 shadow-md"
          >
            <div className="p-2">
              <div className="font-display text-3xl font-extrabold text-turmeric">₹5 Lakhs</div>
              <div className="text-xs font-semibold text-ink-soft uppercase mt-0.5 tracking-wider">Low Capex Entry</div>
            </div>
            <div className="p-2">
              <div className="font-display text-3xl font-extrabold text-turmeric">35 - 45%</div>
              <div className="text-xs font-semibold text-ink-soft uppercase mt-0.5 tracking-wider">Gross Margin</div>
            </div>
            <div className="p-2">
              <div className="font-display text-3xl font-extrabold text-turmeric">25+ Outlets</div>
              <div className="text-xs font-semibold text-ink-soft uppercase mt-0.5 tracking-wider">Proven Network</div>
            </div>
            <div className="p-2">
              <div className="font-display text-3xl font-extrabold text-turmeric">30 - 45 Days</div>
              <div className="text-xs font-semibold text-ink-soft uppercase mt-0.5 tracking-wider">Speed to Launch</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Formats Showcase */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
            Flexible Formats
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-2 mb-3">
            Choose Your Store Format
          </h2>
          <p className="text-ink-soft text-sm md:text-base">
            From sleek tech park kiosks to full-service flagship cafes, our modular architecture adapts to your space and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FRANCHISE_MODELS.map((model) => (
            <div
              key={model.id}
              className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between ${
                selectedModel === model.id
                  ? "border-turmeric shadow-xl scale-102 ring-4 ring-turmeric/10"
                  : "border-sand shadow-xs hover:border-sand/80 hover:shadow-md"
              }`}
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-sand">
                  <Image src={model.img} alt={model.title} fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-chip text-ink text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {model.tag}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold text-ink mb-2">{model.title}</h3>
                  <p className="text-xs text-ink-soft leading-relaxed mb-6">{model.desc}</p>

                  <div className="space-y-3 pt-4 border-t border-sand/60 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-sand/40">
                      <span className="text-ink-soft font-medium">Area Required</span>
                      <span className="font-bold text-ink">{model.area}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-sand/40">
                      <span className="text-ink-soft font-medium">Investment Range</span>
                      <span className="font-bold text-ink">{model.investment}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-sand/40">
                      <span className="text-ink-soft font-medium">Staff Required</span>
                      <span className="font-bold text-ink">{model.staff}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-ink-soft font-medium">Expected Payback</span>
                      <span className="font-bold text-leaf">{model.payback}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-sand/60 space-y-1.5">
                    {model.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-ink-soft">
                        <Check className="w-3.5 h-3.5 text-turmeric shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <Button
                  onClick={() => setSelectedModel(model.id as any)}
                  className={`w-full rounded-full font-bold h-12 text-xs transition-colors ${
                    selectedModel === model.id
                      ? "bg-ink text-cream hover:bg-ink-soft"
                      : "bg-chip text-ink hover:bg-turmeric"
                  }`}
                >
                  {selectedModel === model.id ? "Selected for Calculator ✓" : "Select Format"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive ROI Calculator */}
      <section id="roi-calculator" className="bg-gradient-to-br from-ink via-[#24170e] to-[#120b06] text-cream py-20 px-4 md:px-6 relative overflow-hidden border-y border-turmeric/25">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-turmeric/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10 grid md:grid-cols-12 gap-12 items-center">
          {/* Controls */}
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-chip bg-white/10 px-3.5 py-1.5 rounded-full border border-chip/25 shadow-xs">
              Interactive Financial Projection
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Calculate Your Revenue Potential
            </h2>
            <p className="text-cream/80 text-sm leading-relaxed font-normal">
              Select your format and simulate daily footfall to estimate monthly revenue and payback.
            </p>

            {/* Model Selector Pills */}
            <div className="grid grid-cols-3 gap-2 glass-kerala-dark p-2 rounded-2xl border border-turmeric/25">
              {FRANCHISE_MODELS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id as any)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    selectedModel === m.id
                      ? "bg-turmeric text-ink shadow-md scale-102"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </div>

            {/* Footfall Slider */}
            <div className="p-6 rounded-3xl glass-kerala-dark border border-turmeric/25 shadow-xl">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <Label className="text-cream text-sm font-semibold">Expected Daily Footfall</Label>
                  <p className="text-[11px] text-cream/60 mt-0.5">Walk-ins purchasing snacks</p>
                </div>
                <span className="font-display text-2xl font-bold text-chip">
                  {dailyCustomers} Customers / day
                </span>
              </div>
              <Slider
                value={footfall}
                onValueChange={(val) => setFootfall(Array.isArray(val) ? [...val] : [val])}
                min={100}
                max={1500}
                step={25}
                className="py-4"
              />
              <div className="flex justify-between text-[11px] text-cream/50 mt-1 font-medium">
                <span>100 (Quiet Location)</span>
                <span>750 (High Street)</span>
                <span>1500 (Metro/Mall Concourse)</span>
              </div>
            </div>
          </div>

          {/* Calculator Output Card */}
          <div className="md:col-span-5 glass-kerala-card text-ink rounded-3xl p-8 shadow-2xl relative border-2 border-turmeric/40">
            <span className="absolute top-0 right-8 -translate-y-1/2 bg-turmeric text-ink text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {activeModelData.title}
            </span>

            <span className="text-xs uppercase font-bold text-ink-soft tracking-wider block mb-1">
              Estimated Monthly Sales
            </span>
            <div className="font-display text-4xl md:text-5xl font-black text-ink mb-6">
              {formatCurrency(monthlyRevenue)}
            </div>

            <div className="space-y-3 pt-4 border-t border-sand/80 text-xs mb-8">
              <div className="flex justify-between text-ink-soft">
                <span>Average Bill Value</span>
                <span className="font-bold text-ink">₹{activeModelData.avgTicket}</span>
              </div>
              <div className="flex justify-between text-ink-soft">
                <span>Est. Gross Margin (~40%)</span>
                <span className="font-bold text-leaf">{formatCurrency(estimatedGrossProfit)}</span>
              </div>
              <div className="flex justify-between text-ink-soft">
                <span>Est. Rent, Utilities & Staffing</span>
                <span className="font-bold text-ink">-{formatCurrency(estimatedRentAndStaff)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-ink pt-3 border-t border-sand/80">
                <span>Projected Monthly Net Profit</span>
                <span className="text-leaf text-base font-extrabold">{formatCurrency(projectedNetMonthlyProfit)}</span>
              </div>
            </div>

            <Button
              onClick={() => {
                const el = document.getElementById("apply-wizard");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full bg-turmeric text-ink hover:bg-turmeric/90 rounded-full h-12 font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              Apply for {activeModelData.title}
            </Button>
            <p className="text-[10px] text-ink-soft/70 text-center mt-3 italic">
              * Indicative calculations based on historical outlet averages.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Multi-Step Franchise Application Wizard */}
      <section id="apply-wizard" className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-sand p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-leaf/10 text-leaf rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-bold text-ink">Application Received!</h3>
              <p className="text-sm text-ink-soft max-w-md mx-auto">
                Thank you, <strong>{form.name}</strong>. Our Franchise Development Director will call you at <strong>{form.phone}</strong> within 24 hours with the detailed kit.
              </p>
              <div className="pt-4">
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  variant="outline"
                  className="rounded-full border-sand font-bold text-xs"
                >
                  Start New Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-bold text-ink mb-2">
                  <span className="uppercase tracking-wider text-turmeric">
                    Step {step} of 3: {step === 1 ? "Personal Details" : step === 2 ? "Location & Space" : "Investment & Model"}
                  </span>
                  <span>{Math.round((step / 3) * 100)}% Complete</span>
                </div>
                <div className="w-full h-2 bg-sand rounded-full overflow-hidden">
                  <div
                    className="h-full bg-turmeric transition-all duration-300 rounded-full"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleNextStep} className="space-y-6">
                {/* Step 1: Personal Details */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-ink mb-2">About You</h3>
                    <div>
                      <Label className="text-xs font-bold text-ink uppercase">Full Name *</Label>
                      <Input
                        required
                        placeholder="e.g. Suresh Panicker"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs font-bold text-ink uppercase">Phone Number (WhatsApp) *</Label>
                        <Input
                          required
                          type="tel"
                          placeholder="10-digit number"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-bold text-ink uppercase">Email Address *</Label>
                        <Input
                          required
                          type="email"
                          placeholder="name@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Location & Space */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-ink mb-2">Location & Space</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs font-bold text-ink uppercase">Preferred City *</Label>
                        <Input
                          required
                          placeholder="e.g. Bengaluru, Kochi, Chennai"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                        />
                      </div>
                      <div>
                        <Label className="text-xs font-bold text-ink uppercase">State *</Label>
                        <Input
                          required
                          placeholder="e.g. Karnataka, Kerala"
                          value={form.state}
                          onChange={(e) => setForm({ ...form, state: e.target.value })}
                          className="bg-cream border-sand rounded-xl h-12 text-sm text-ink"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs font-bold text-ink uppercase">
                        Do you currently own or rent a commercial space?
                      </Label>
                      <div className="grid grid-cols-3 gap-3 mt-1.5">
                        {["Already Rented", "Own Property", "Looking for Site"].map((status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => setForm({ ...form, hasProperty: status })}
                            className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                              form.hasProperty === status
                                ? "border-turmeric bg-chip/20 text-ink"
                                : "border-sand bg-cream text-ink-soft hover:border-sand/80"
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Investment Budget */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-ink mb-2">Investment Capital</h3>
                    <div>
                      <Label className="text-xs font-bold text-ink uppercase">Available Capital Budget</Label>
                      <div className="grid grid-cols-3 gap-3 mt-1.5">
                        {["₹5L – ₹10L", "₹10L – ₹20L", "₹20L – ₹35L+"].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setForm({ ...form, budget: b })}
                            className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                              form.budget === b
                                ? "border-turmeric bg-chip/20 text-ink"
                                : "border-sand bg-cream text-ink-soft hover:border-sand/80"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="bg-cream p-4 rounded-xl border border-sand text-xs text-ink-soft">
                      <p className="font-bold text-ink mb-1">What happens next?</p>
                      <p>
                        Our franchise director will review your preferred city and send you the comprehensive 18-page Yellow Chips Franchise Prospectus & P&L model.
                      </p>
                    </div>
                  </div>
                )}

                {/* Button Controls */}
                <div className="flex justify-between items-center pt-4 border-t border-sand">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="rounded-full border-sand font-bold text-xs px-5"
                    >
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  <Button
                    type="submit"
                    className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12 px-8 text-xs shadow-sm"
                  >
                    {step === 3 ? "Submit Application" : "Continue to Next Step →"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-10">
          Frequently Answered Questions
        </h2>
        <Accordion className="w-full bg-white p-6 md:p-8 rounded-3xl border border-sand shadow-sm">
          <AccordionItem value="item-1" className="border-sand">
            <AccordionTrigger className="text-left font-bold text-base text-ink py-4 hover:text-turmeric">
              Do I need prior food & beverage experience to run a franchise?
            </AccordionTrigger>
            <AccordionContent className="text-ink-soft text-sm leading-relaxed pb-4">
              No prior culinary experience is necessary. We provide a rigorous 14-day training module for you and your staff covering food handling, live frying mandoline operation, inventory management, POS billing, and hospitality standards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-sand">
            <AccordionTrigger className="text-left font-bold text-base text-ink py-4 hover:text-turmeric">
              Where do the raw bananas, jackfruit, and oils come from?
            </AccordionTrigger>
            <AccordionContent className="text-ink-soft text-sm leading-relaxed pb-4">
              To guarantee zero deviation in crispness and taste, 100% of raw seasoned chips, packaged mixtures, and authentic cold-pressed coconut oil are supplied directly from our centralized Kerala manufacturing hub.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-sand">
            <AccordionTrigger className="text-left font-bold text-base text-ink py-4 hover:text-turmeric">
              What is the typical setup timeline from agreement signing?
            </AccordionTrigger>
            <AccordionContent className="text-ink-soft text-sm leading-relaxed pb-4">
              For an Express Kiosk, launch takes approximately 20-30 days. For Smart Stores and Flagships, civil interiors and equipment setup typically take 35-45 days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OurStoryPage() {
  const values = [
    {
      icon: Flame,
      title: "100% Pure Coconut Oil",
      desc: "We never dilute with palm oil or cheap vegetable blends. Only freshly extracted coconut oil that lends the authentic Kerala aroma.",
    },
    {
      icon: HeartHandshake,
      title: "Direct Farmer Sourcing",
      desc: "Our Nendran bananas are handpicked at exact 80% maturity from traditional groves in Wayanad and Palakkad.",
    },
    {
      icon: ShieldCheck,
      title: "FSSAI & Quality Audited",
      desc: "State-of-the-art hygiene practices combined with generational kadai frying methods to guarantee absolute purity.",
    },
    {
      icon: Sparkles,
      title: "Zero Preservatives",
      desc: "No artificial flavoring, zero MSG, and no chemical crispeners. Just pure fruit, oil, salt, and Kerala spices.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Early Morning Harvest",
      desc: "Farmers harvest mature green Nendran bananas and wild jackfruits before sunrise to retain moisture.",
    },
    {
      step: "02",
      title: "Wafer-Thin Hand Slicing",
      desc: "Skilled artisans slice directly into hot oil using traditional wooden mandolines for maximum consistency.",
    },
    {
      step: "03",
      title: "Kadai Frying to Golden Snap",
      desc: "Fried in heavy iron kadais with cold-pressed coconut oil, seasoned with sea salt water right in the oil.",
    },
    {
      step: "04",
      title: "Aroma-Lock Packaging",
      desc: "Cooled, salted, and sealed into three-ply nitrogen pouches within 90 minutes of frying.",
    },
  ];

  return (
    <div className="bg-cream min-h-screen py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
            Kerala Roots · Modern Craft
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink mt-4 mb-6 leading-tight">
            How we brought the kadai back to life.
          </h1>
          <p className="text-ink-soft text-lg md:text-xl leading-relaxed">
            In an era of mass-produced, palm-oil drenched commercial snacks, Yellow Chips was born out of an uncompromising mission: to restore the sacred crunch of Kerala's heritage banana chips.
          </p>
        </div>

        {/* Story Grid & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 md:p-12 rounded-3xl border border-sand shadow-sm mb-16">
          <div className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              The Aroma of Calicut Streets
            </h2>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">
              If you have ever walked through the bustling Mittai Theruvu (SM Street) in Kozhikode, you will never forget the smell of fresh coconut oil sizzling in massive cast-iron vessels.
            </p>
            <p className="text-ink-soft text-sm md:text-base leading-relaxed">
              We started Yellow Chips to make sure anyone in India can taste that exact same warm, golden chip—fried just hours before being shipped to your dining table.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="font-display text-4xl font-bold text-turmeric">15,000+</span>
              <span className="text-xs font-semibold text-ink-soft">
                Packets freshly fried and delivered across India every week.
              </span>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-sand border border-sand shadow-inner">
            <Image
              src="https://placehold.co/800x600/FFF9EC/2B1B10?text=Master+Fryer+at+Kadai"
              alt="Traditional kadai frying"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars Values */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-ink mb-3">Our Four Pledges</h2>
            <p className="text-ink-soft text-sm">
              We believe great food does not need artificial shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white p-6 rounded-3xl border border-sand shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-chip/30 text-turmeric flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-2">{v.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The 4-Step Process */}
        <div className="bg-sand/50 rounded-3xl p-8 md:p-12 border border-sand mb-20">
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-10">
            From Soil to Crunch: The Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white p-5 rounded-2xl border border-sand shadow-xs">
                <span className="font-display text-2xl font-bold text-turmeric block mb-2">
                  {step.step}
                </span>
                <h4 className="font-display font-bold text-base text-ink mb-1">{step.title}</h4>
                <p className="text-xs text-ink-soft leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-sand shadow-md text-center max-w-2xl mx-auto">
          <h3 className="font-display text-3xl font-bold text-ink mb-3">
            Taste the Authentic Kadai Difference
          </h3>
          <p className="text-sm text-ink-soft mb-8">
            Experience our Classic Banana Chips, Ripe Jackfruit, and Spicy Tapioca fresh from Kerala.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12 px-8 text-sm shadow-sm"
            >
              <Link href="/shop" className="flex items-center gap-2">
                Order Fresh Batch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-ink text-ink hover:bg-ink hover:text-cream font-bold h-12 px-8 text-sm"
            >
              <Link href="/stores">Find Nearest Store</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

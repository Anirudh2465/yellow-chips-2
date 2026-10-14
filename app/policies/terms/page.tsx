import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-3xl border border-sand shadow-xs">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-soft hover:text-ink mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
          Terms & Conditions
        </h1>
        <p className="text-xs text-ink-soft mb-8">Effective Date: October 2025</p>

        <div className="space-y-6 text-sm text-ink-soft leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing yellowchips.in or purchasing our packaged snacks, you agree to be bound by these Terms of Service and all applicable Indian food safety and commerce regulations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">2. Products & Pricing</h2>
            <p>
              All prices are listed in Indian Rupees (INR) inclusive of applicable taxes. Because our chips are fried in small batches from fresh seasonal produce, batch weights and colors may naturally vary slightly between harvests.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">3. Intellectual Property</h2>
            <p>
              All trademarks, logos, recipes, and brand imagery associated with Yellow Chips are the sole property of Yellow Chips Foods Pvt. Ltd.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

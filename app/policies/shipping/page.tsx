import Link from "next/link";
import { ArrowLeft, Truck, Clock, ShieldCheck } from "lucide-react";

export default function ShippingPolicyPage() {
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
          Shipping & Delivery Policy
        </h1>
        <p className="text-xs text-ink-soft mb-8">Fast, Fresh Pan-India Dispatch</p>

        <div className="space-y-6 text-sm text-ink-soft leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="bg-cream p-4 rounded-2xl border border-sand text-center">
              <Truck className="w-6 h-6 text-turmeric mx-auto mb-2" />
              <span className="font-bold text-ink block text-xs">FREE Shipping</span>
              <span className="text-[11px] text-ink-soft">On all orders above ₹499</span>
            </div>
            <div className="bg-cream p-4 rounded-2xl border border-sand text-center">
              <Clock className="w-6 h-6 text-leaf mx-auto mb-2" />
              <span className="font-bold text-ink block text-xs">24h Dispatch</span>
              <span className="text-[11px] text-ink-soft">Freshly fried daily</span>
            </div>
            <div className="bg-cream p-4 rounded-2xl border border-sand text-center">
              <ShieldCheck className="w-6 h-6 text-turmeric mx-auto mb-2" />
              <span className="font-bold text-ink block text-xs">Air-Cushioned</span>
              <span className="text-[11px] text-ink-soft">Zero-breakage packing</span>
            </div>
          </div>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">1. Delivery Timelines</h2>
            <p>
              • <strong>Kerala & South India:</strong> 1-2 business days.<br />
              • <strong>Metros (Mumbai, Delhi, Bengaluru, Chennai, Hyderabad):</strong> 2-3 business days.<br />
              • <strong>Rest of India:</strong> 3-5 business days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">2. Shipping Charges</h2>
            <p>
              Orders above ₹499 qualify for 100% Free Shipping. A nominal delivery fee of ₹49 is charged for orders under ₹499 to cover express courier costs.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">3. Tracking Updates</h2>
            <p>
              As soon as your batch is fried and nitrogen-sealed, you will receive an automated tracking link via WhatsApp and Email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

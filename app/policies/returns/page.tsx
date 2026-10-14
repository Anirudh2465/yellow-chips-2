import Link from "next/link";
import { ArrowLeft, ShieldCheck, RefreshCw } from "lucide-react";

export default function ReturnsPolicyPage() {
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
          Returns & Refund Policy
        </h1>
        <p className="text-xs text-ink-soft mb-8">Our Freshness & Crunch Guarantee</p>

        <div className="space-y-6 text-sm text-ink-soft leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">1. Freshness Guarantee</h2>
            <p>
              Because Yellow Chips are perishable food items fried in pure coconut oil without artificial chemical preservatives, we do not accept standard physical returns. However, we stand 100% behind our product quality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">2. Damaged or Broken Packages</h2>
            <p>
              If your package arrives punctured, unsealed, or compromised during transit, please take a photo and WhatsApp us at <strong>+91 99958 36662</strong> or email <strong>care@yellowchips.in</strong> within 48 hours of delivery. We will immediately dispatch a fresh replacement batch at zero cost, or issue a full refund to your original payment method.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">3. Refund Processing</h2>
            <p>
              Approved refunds are credited back to your original payment method (UPI / Bank Account / Card) within 3-5 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xs text-ink-soft mb-8">Effective Date: October 2025</p>

        <div className="space-y-6 text-sm text-ink-soft leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">1. Overview</h2>
            <p>
              Yellow Chips ("we", "our", or "us") respects your privacy. This policy outlines how we collect, use, and protect your personal information when you visit yellowchips.in or place snack orders.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">2. Information We Collect</h2>
            <p>
              When you purchase snacks, register for franchise inquiries, or contact us, we collect details such as your name, delivery address, phone number, email address, and order history. Payment card details are handled directly by PCI-DSS compliant payment gateways and are never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">3. How We Use Your Data</h2>
            <p>
              Your data is used solely to fulfill food orders, dispatch courier packages, deliver WhatsApp delivery alerts, answer support inquiries, and comply with food safety regulatory standards.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink mb-2">4. Contact & Inquiries</h2>
            <p>
              If you have any questions regarding your personal information, please email our privacy officer at <a href="mailto:privacy@yellowchips.in" className="text-turmeric font-bold hover:underline">privacy@yellowchips.in</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

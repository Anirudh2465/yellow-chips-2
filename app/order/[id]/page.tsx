import Link from "next/link";
import {
  CheckCircle2,
  Package,
  Flame,
  Truck,
  ArrowRight,
  MessageCircle,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return [{ id: "YC-SAMPLE" }];
}

export default async function OrderConfirmationPage({ params }: OrderPageProps) {
  const { id } = await params;

  return (
    <div className="bg-cream min-h-screen py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Celebration Header */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-sand shadow-sm text-center mb-8">
          <div className="w-20 h-20 bg-chip/30 text-turmeric rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 stroke-[2]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-leaf bg-leaf/10 px-3 py-1 rounded-full">
            Order Confirmed & Placed
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-ink mt-3 mb-2">
            Freshness is on its way!
          </h1>
          <p className="text-ink-soft text-base max-w-lg mx-auto">
            Thank you for ordering with Yellow Chips. Your batch is being scheduled for frying in fresh cold-pressed coconut oil.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full border border-sand">
            <span className="text-xs text-ink-soft font-semibold">Order ID:</span>
            <span className="font-mono font-bold text-ink text-sm">{id}</span>
          </div>
        </div>

        {/* Live Tracking Stepper */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-sand shadow-sm mb-8">
          <h2 className="font-display font-bold text-xl text-ink mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-turmeric" /> Kadai-to-Kitchen Status
          </h2>

          <div className="relative pl-6 border-l-2 border-turmeric space-y-8 my-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-turmeric text-ink flex items-center justify-center text-xs font-bold shadow-xs">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink">Order Verified & Scheduled</h4>
                <p className="text-xs text-ink-soft mt-0.5">
                  Payment confirmed. Farm-fresh Nendran bananas allocated.
                </p>
                <span className="text-[11px] font-semibold text-leaf mt-1 block">Just now</span>
              </div>
            </div>

            {/* Step 2 (Active) */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-chip text-ink flex items-center justify-center text-xs font-bold animate-pulse shadow-xs">
                <Flame className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink flex items-center gap-2">
                  Hot Kadai Frying in Pure Coconut Oil
                  <span className="bg-chip/40 text-ink text-[10px] px-2 py-0.5 rounded-full font-bold">
                    In Progress
                  </span>
                </h4>
                <p className="text-xs text-ink-soft mt-0.5">
                  Our master fryers are slicing and tossing chips in wood-pressed coconut oil.
                </p>
                <span className="text-[11px] font-semibold text-ink-soft mt-1 block">
                  Estimated 2-4 hours
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-sand text-ink-soft flex items-center justify-center text-xs font-bold">
                <Package className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink-soft">Nitrogen Packaging & Sealing</h4>
                <p className="text-xs text-ink-soft mt-0.5">
                  Packed in moisture-barrier pouches to lock in that unforgettable snap.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-sand text-ink-soft flex items-center justify-center text-xs font-bold">
                <Truck className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink-soft">Dispatched via Express Courier</h4>
                <p className="text-xs text-ink-soft mt-0.5">
                  Delivered straight to your doorstep across India in 2-3 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions & WhatsApp Support */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="flex-1 bg-chip text-ink hover:bg-turmeric rounded-full font-bold h-12 text-sm shadow-sm"
          >
            <Link href="/shop" className="flex items-center justify-center gap-2">
              Order More Snacks
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="flex-1 rounded-full font-bold h-12 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
          >
            <Link
              href={`https://wa.me/919995836662?text=${encodeURIComponent(
                `Hi Yellow Chips! I would like to get tracking updates for Order ${id}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Track on WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

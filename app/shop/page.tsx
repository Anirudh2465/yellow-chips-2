import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Shop() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Shop All Snacks</h1>
          <p className="text-ink-soft max-w-xl">
            Browse our complete collection of heritage Kerala snacks. Use the filters to find your perfect crunch.
          </p>
        </div>
      </div>
      
      {/* Placeholder Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md">
            <Link href="#" className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
              <Image src={`https://placehold.co/400x500/FFF9EC/2B1B10?text=Snack+${i+1}`} alt={`Snack ${i+1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </Link>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-display text-lg font-bold text-ink mb-1">Snack Item {i+1}</h3>
              <p className="text-xs text-ink-soft mb-2">Delicious and fresh.</p>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="font-bold text-ink">From ₹120</span>
                <Button size="sm" className="bg-chip text-ink hover:bg-turmeric rounded-full font-bold">Add</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

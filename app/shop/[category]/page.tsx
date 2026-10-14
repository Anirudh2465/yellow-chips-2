import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/commerce/ProductCard";
import { PRODUCTS, getProductsByCategory } from "@/lib/products";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const CATEGORY_NAMES: Record<string, string> = {
  banana: "Banana Chips",
  jackfruit: "Jackfruit Chips",
  tapioca: "Tapioca Chips",
  mixtures: "Kerala Mixtures",
  gifting: "Gift Hampers & Boxes",
};

export function generateStaticParams() {
  return [
    { category: "banana" },
    { category: "jackfruit" },
    { category: "tapioca" },
    { category: "mixtures" },
    { category: "gifting" },
  ];
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryTitle = CATEGORY_NAMES[category];

  if (!categoryTitle) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <div className="bg-cream min-h-screen py-10 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-bold text-ink-soft hover:text-ink mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Snacks
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
                Kerala Heritage Category
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3">
                {categoryTitle}
              </h1>
              <p className="text-ink-soft text-base mt-2">
                Handcrafted in small batches, fried in pure coconut oil with traditional spice blends.
              </p>
            </div>
            <p className="text-xs font-bold text-ink-soft uppercase tracking-wider">
              {products.length} {products.length === 1 ? "item" : "items"} available
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

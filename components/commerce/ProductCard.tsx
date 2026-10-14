import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  weight: string;
  image: string;
  tags?: string[];
  rating: number;
  reviewCount: number;
}

export function ProductCard({
  id,
  name,
  slug,
  description,
  price,
  weight,
  image,
  tags,
  rating,
  reviewCount,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {tags?.map((tag) => (
          <Badge key={tag} variant={tag === "Spicy" ? "destructive" : "default"} className={tag !== "Spicy" ? "bg-leaf text-white" : ""}>
            {tag}
          </Badge>
        ))}
      </div>
      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur transition-transform hover:scale-110">
        <Heart className="h-4 w-4" />
      </button>

      {/* Image */}
      <Link href={`/product/${slug}`} className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
        <Image src={image} alt={name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href={`/product/${slug}`}>
              <h3 className="font-display text-lg font-bold text-ink hover:text-turmeric">{name}</h3>
            </Link>
            <p className="mt-1 text-xs text-ink-soft line-clamp-1">{description}</p>
          </div>
        </div>
        
        <div className="mt-2 flex items-center gap-1 text-xs text-ink-soft">
          <span className="text-turmeric">★</span>
          <span className="font-medium text-ink">{rating}</span>
          <span>({reviewCount})</span>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-ink">From ₹{price}</p>
            <p className="text-[10px] text-ink-soft uppercase tracking-wider">{weight}</p>
          </div>
          <Button size="icon" className="h-10 w-10 shrink-0 rounded-full bg-chip text-ink hover:bg-turmeric md:translate-y-4 md:opacity-0 md:transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

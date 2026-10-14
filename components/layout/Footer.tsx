import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1f140c] to-[#110a05] text-cream/80 py-16 px-4 md:px-6 border-t border-turmeric/25">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Col */}
        <div className="md:col-span-4 space-y-4">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-chip text-ink flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 group-hover:rotate-6 transition-all">
              🍌
            </div>
            <div>
              <span className="font-display text-2xl font-black tracking-tight text-cream">
                Yellow Chips
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-turmeric -mt-1">
                Kerala Heritage Crunch
              </span>
            </div>
          </Link>

          <p className="text-xs text-cream/70 leading-relaxed max-w-sm">
            Small-batch raw Nendran banana, sweet jackfruit, and tapioca crisps. Fried exclusively in 100% cold-pressed coconut oil and shipped fresh across India.
          </p>

          <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold text-cream/80">
            <span className="glass-kerala-dark px-3 py-1 rounded-full border border-turmeric/20">
              🥥 100% Coconut Oil
            </span>
            <span className="glass-kerala-dark px-3 py-1 rounded-full border border-turmeric/20">
              🌱 Zero Palm Oil
            </span>
            <span className="glass-kerala-dark px-3 py-1 rounded-full border border-turmeric/20">
              ✓ FSSAI Certified
            </span>
          </div>
        </div>

        {/* Shop Col */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="font-display font-bold text-chip text-sm uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-xs font-medium">
            <li><Link href="/shop/banana" className="hover:text-chip transition-colors">Banana Chips</Link></li>
            <li><Link href="/shop/jackfruit" className="hover:text-chip transition-colors">Jackfruit Crisps</Link></li>
            <li><Link href="/shop/tapioca" className="hover:text-chip transition-colors">Tapioca Sticks</Link></li>
            <li><Link href="/shop/mixtures" className="hover:text-chip transition-colors">Kerala Mixtures</Link></li>
            <li><Link href="/gifting" className="hover:text-chip transition-colors">Festive Hampers</Link></li>
          </ul>
        </div>

        {/* Company Col */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-display font-bold text-chip text-sm uppercase tracking-wider">Experience</h4>
          <ul className="space-y-2 text-xs font-medium">
            <li><Link href="/our-story" className="hover:text-chip transition-colors">The Kadai Story & Heritage</Link></li>
            <li><Link href="/cafe" className="hover:text-chip transition-colors">The Yellow Cafe & Kaapi Menu</Link></li>
            <li><Link href="/stores" className="hover:text-chip transition-colors">Store Locator (8 Outlets)</Link></li>
            <li><Link href="/franchise" className="hover:text-chip transition-colors">Own a Franchise Store</Link></li>
          </ul>
        </div>

        {/* Support & Policies Col */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-display font-bold text-chip text-sm uppercase tracking-wider">Customer Care</h4>
          <ul className="space-y-2 text-xs font-medium">
            <li><Link href="/contact" className="hover:text-chip transition-colors">Contact & WhatsApp Support</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-chip transition-colors">Pan-India Shipping Policy</Link></li>
            <li><Link href="/policies/returns" className="hover:text-chip transition-colors">Freshness Guarantee & Returns</Link></li>
            <li><Link href="/policies/privacy" className="hover:text-chip transition-colors">Privacy Policy</Link></li>
            <li><Link href="/policies/terms" className="hover:text-chip transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
        <p>&copy; 2026 Yellow Chips Pvt Ltd. All rights reserved.</p>
        <p className="text-cream/60">
          Handcrafted with 💛 in God's Own Country · Fried in 100% Pure Coconut Oil
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-sand text-ink-soft py-12 px-4 md:px-6 mt-12 border-t border-border">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display font-bold text-ink mb-4 text-xl">Yellow Chips</h3>
          <p className="text-sm">
            Kerala's crunch, fresh from the kadai. Authentic snacks, lovingly crafted.
          </p>
          <div className="mt-4">
            <p className="text-xs font-semibold">FSSAI Lic. No. 10000000000000</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-ink mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop/banana" className="hover:text-ink transition-colors">Banana Chips</Link></li>
            <li><Link href="/shop/jackfruit" className="hover:text-ink transition-colors">Jackfruit Chips</Link></li>
            <li><Link href="/shop/tapioca" className="hover:text-ink transition-colors">Tapioca Chips</Link></li>
            <li><Link href="/shop/mixtures" className="hover:text-ink transition-colors">Mixtures</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-ink mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/our-story" className="hover:text-ink transition-colors">Our Story</Link></li>
            <li><Link href="/cafe" className="hover:text-ink transition-colors">Cafe & Menu</Link></li>
            <li><Link href="/stores" className="hover:text-ink transition-colors">Store Locator</Link></li>
            <li><Link href="/franchise" className="hover:text-ink transition-colors">Franchise</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-ink mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-ink transition-colors">Contact Us</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-ink transition-colors">Shipping Policy</Link></li>
            <li><Link href="/policies/returns" className="hover:text-ink transition-colors">Returns & Refunds</Link></li>
            <li><Link href="/policies/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-6 border-t border-cream/50 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Yellow Chips. All rights reserved.</p>
      </div>
    </footer>
  );
}

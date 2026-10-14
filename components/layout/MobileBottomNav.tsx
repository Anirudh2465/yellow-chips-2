import Link from "next/link";
import { Home, ShoppingBag, User, Store } from "lucide-react";

export function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-4">
        <Link href="/" className="flex flex-col items-center justify-center space-y-1 text-ink-soft hover:text-ink transition-colors">
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="/shop" className="flex flex-col items-center justify-center space-y-1 text-ink-soft hover:text-ink transition-colors">
          <Store className="h-5 w-5" />
          <span className="text-[10px] font-medium">Shop</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center justify-center space-y-1 text-ink-soft hover:text-ink transition-colors">
          <ShoppingBag className="h-5 w-5" />
          <span className="text-[10px] font-medium">Cart</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center justify-center space-y-1 text-ink-soft hover:text-ink transition-colors">
          <User className="h-5 w-5" />
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </div>
    </div>
  );
}

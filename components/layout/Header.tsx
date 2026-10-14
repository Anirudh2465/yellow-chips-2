import Link from "next/link";
import { ShoppingBag, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-display text-xl font-bold text-chip">Yellow Chips</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/shop" className="transition-colors hover:text-foreground/80 text-foreground">
              Shop
            </Link>
            <Link href="/cafe" className="transition-colors hover:text-foreground/80 text-foreground">
              Cafe
            </Link>
            <Link href="/franchise" className="transition-colors hover:text-foreground/80 text-foreground">
              Franchise
            </Link>
          </nav>
        </div>
        <button className="inline-flex items-center justify-center rounded-md md:hidden font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none text-center md:hidden font-display text-lg font-bold text-chip">
            <Link href="/">Yellow Chips</Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button className="hidden md:inline-flex bg-chip text-ink hover:bg-turmeric rounded-full font-bold">
              Own a Yellow Chips
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

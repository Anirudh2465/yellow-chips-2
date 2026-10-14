"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Coffee,
  Flame,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface StoreLocation {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  hours: string;
  phone: string;
  hasCafe: boolean;
  hasLiveKadai: boolean;
  format: "Flagship Store" | "Smart Store" | "Express Kiosk";
  mapsQuery: string;
}

const STORES: StoreLocation[] = [
  {
    id: "1",
    name: "Calicut Beach Flagship",
    city: "Calicut",
    area: "Beach Road",
    address: "Shop 4, Heritage Promenade, Beach Road, Kozhikode, Kerala 673032",
    hours: "9:00 AM – 11:00 PM (Daily)",
    phone: "+91 98470 12345",
    hasCafe: true,
    hasLiveKadai: true,
    format: "Flagship Store",
    mapsQuery: "Calicut+Beach+Kozhikode+Kerala",
  },
  {
    id: "2",
    name: "Kochi Marine Drive",
    city: "Kochi",
    area: "Marine Drive",
    address: "Ground Floor, Bay Pride Mall, Marine Drive, Kochi, Kerala 682031",
    hours: "10:00 AM – 10:30 PM (Daily)",
    phone: "+91 98470 54321",
    hasCafe: true,
    hasLiveKadai: true,
    format: "Flagship Store",
    mapsQuery: "Marine+Drive+Kochi+Kerala",
  },
  {
    id: "3",
    name: "Lulu Mall Kochi Express",
    city: "Kochi",
    area: "Edappally",
    address: "Kiosk K-12, Food Court Level 2, LuLu Mall, Edappally, Kochi 682024",
    hours: "10:00 AM – 11:00 PM (Daily)",
    phone: "+91 98470 98765",
    hasCafe: false,
    hasLiveKadai: false,
    format: "Express Kiosk",
    mapsQuery: "LuLu+Mall+Kochi+Kerala",
  },
  {
    id: "4",
    name: "Trivandrum Kowdiar",
    city: "Trivandrum",
    area: "Kowdiar",
    address: "Opposite Golf Club, Raj Bhavan Road, Kowdiar, Thiruvananthapuram 695003",
    hours: "9:30 AM – 10:00 PM (Daily)",
    phone: "+91 98470 11223",
    hasCafe: true,
    hasLiveKadai: true,
    format: "Smart Store",
    mapsQuery: "Kowdiar+Trivandrum+Kerala",
  },
  {
    id: "5",
    name: "Bengaluru Indiranagar",
    city: "Bengaluru",
    area: "Indiranagar",
    address: "12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
    hours: "10:00 AM – 10:30 PM (Daily)",
    phone: "+91 98800 44556",
    hasCafe: true,
    hasLiveKadai: true,
    format: "Smart Store",
    mapsQuery: "12th+Main+Indiranagar+Bangalore",
  },
  {
    id: "6",
    name: "Bengaluru HSR Layout",
    city: "Bengaluru",
    area: "HSR Layout",
    address: "27th Main Rd, Sector 1, HSR Layout, Bengaluru, Karnataka 560102",
    hours: "10:00 AM – 10:00 PM (Daily)",
    phone: "+91 98800 77889",
    hasCafe: false,
    hasLiveKadai: true,
    format: "Smart Store",
    mapsQuery: "HSR+Layout+Bangalore",
  },
  {
    id: "7",
    name: "Chennai Anna Nagar",
    city: "Chennai",
    area: "Anna Nagar",
    address: "2nd Avenue, Block C, Anna Nagar, Chennai, Tamil Nadu 600040",
    hours: "9:30 AM – 10:30 PM (Daily)",
    phone: "+91 98400 33221",
    hasCafe: true,
    hasLiveKadai: false,
    format: "Smart Store",
    mapsQuery: "Anna+Nagar+Chennai",
  },
  {
    id: "8",
    name: "Coimbatore Race Course",
    city: "Coimbatore",
    area: "Race Course",
    address: "Near Thomas Park, Race Course Road, Coimbatore, Tamil Nadu 641018",
    hours: "10:00 AM – 10:00 PM (Daily)",
    phone: "+91 98422 66778",
    hasCafe: false,
    hasLiveKadai: true,
    format: "Express Kiosk",
    mapsQuery: "Race+Course+Coimbatore",
  },
];

const CITIES = ["All", "Kochi", "Calicut", "Trivandrum", "Bengaluru", "Chennai", "Coimbatore"];

export default function StoresPage() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStores = STORES.filter((store) => {
    const matchesCity = selectedCity === "All" || store.city === selectedCity;
    const matchesSearch =
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.area.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="bg-cream min-h-screen py-10 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-turmeric bg-sand px-3 py-1 rounded-full">
            Locate The Kadai Near You
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3 mb-3">
            Our Stores & Cafes
          </h1>
          <p className="text-ink-soft text-base">
            Visit our outlets to watch master fryers toss hot banana chips live in coconut oil, or grab your favourite evening snacks and filter kaapi.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-sand shadow-xs mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
              <Input
                type="text"
                placeholder="Search area, mall, landmark..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-cream/70 border-sand rounded-full h-11 text-sm font-medium text-ink"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full sm:w-auto">
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCity === city
                      ? "bg-ink text-cream shadow-sm"
                      : "bg-cream text-ink-soft hover:bg-sand/70 hover:text-ink"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-3xl border border-sand p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-turmeric bg-sand px-2.5 py-0.5 rounded-full">
                    {store.format}
                  </span>
                  <div className="flex gap-1.5">
                    {store.hasLiveKadai && (
                      <span className="inline-flex items-center gap-1 bg-chip/30 text-ink text-[11px] font-bold px-2 py-0.5 rounded-full">
                        <Flame className="w-3 h-3 text-turmeric" /> Live Kadai
                      </span>
                    )}
                    {store.hasCafe && (
                      <span className="inline-flex items-center gap-1 bg-sand text-ink text-[11px] font-bold px-2 py-0.5 rounded-full">
                        <Coffee className="w-3 h-3 text-ink-soft" /> Cafe
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-ink mb-2">
                  {store.name}
                </h3>

                <div className="space-y-2 text-xs text-ink-soft mb-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-turmeric shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{store.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-leaf shrink-0" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-ink-soft shrink-0" />
                    <a href={`tel:${store.phone}`} className="hover:text-ink font-semibold">
                      {store.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand/60 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 rounded-full border-ink text-ink hover:bg-ink hover:text-cream text-xs font-bold h-10"
                >
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${store.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Get Directions
                  </a>
                </Button>
                {store.hasCafe && (
                  <Button
                    asChild
                    className="flex-1 bg-chip text-ink hover:bg-turmeric rounded-full text-xs font-bold h-10"
                  >
                    <Link href="/cafe">View Cafe</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Own a Store Banner */}
        <div className="mt-16 bg-sand/60 rounded-3xl p-8 md:p-12 border border-sand flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">
              Want to bring Yellow Chips to your city?
            </h3>
            <p className="text-sm text-ink-soft max-w-xl">
              We are rapidly expanding across South India. Explore our Kiosk, Smart Store, and Flagship franchise opportunities with complete brand support.
            </p>
          </div>
          <Button
            asChild
            className="bg-ink text-cream hover:bg-ink-soft rounded-full font-bold h-12 px-8 text-sm shrink-0"
          >
            <Link href="/franchise">Explore Franchise Models</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export interface ProductVariant {
  weight: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "banana" | "jackfruit" | "tapioca" | "mixtures" | "gifting";
  categoryName: string;
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  basePrice: number;
  baseWeight: string;
  variants: ProductVariant[];
  images: string[];
  inStock: boolean;
  isBestseller?: boolean;
  spiceLevel?: "Mild" | "Medium" | "Hot" | "Sweet";
  ingredients: string[];
  nutrition: {
    servingSize: string;
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  shelfLife: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Classic Kerala Banana Chips",
    slug: "classic-banana-chips",
    category: "banana",
    categoryName: "Banana Chips",
    tagline: "Fried in 100% pure cold-pressed coconut oil, lightly salted.",
    description: "Handcrafted from farm-fresh Nendran bananas harvested at peak crispness in Wayanad. Thinly sliced by master fryers and tossed in pure cold-pressed coconut oil with natural sea salt.",
    rating: 4.9,
    reviewCount: 342,
    tags: ["Bestseller", "Traditional", "100% Coconut Oil"],
    basePrice: 129,
    baseWeight: "200g",
    variants: [
      { weight: "200g", price: 129, originalPrice: 149 },
      { weight: "500g", price: 299, originalPrice: 349 },
      { weight: "1kg", price: 549, originalPrice: 649 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Banana+Chips+Classic",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Banana+Chips+Crisp",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Kadai+Frying+Fresh"
    ],
    inStock: true,
    isBestseller: true,
    spiceLevel: "Mild",
    ingredients: ["Raw Nendran Banana", "Pure Coconut Oil", "Sea Salt", "Turmeric"],
    nutrition: {
      servingSize: "30g",
      calories: 154,
      protein: "1.2g",
      carbs: "18.5g",
      fat: "8.4g",
    },
    shelfLife: "90 Days from packing date",
  },
  {
    id: "2",
    name: "Kerala Pepper Banana Chips",
    slug: "kerala-pepper-banana-chips",
    category: "banana",
    categoryName: "Banana Chips",
    tagline: "Tossed with crushed Malabar black pepper and pink salt.",
    description: "A spicy, fragrant kick on Kerala's beloved banana chip. Dusted with freshly ground Tellicherry black pepper straight from the spice hills of Idukki.",
    rating: 4.8,
    reviewCount: 188,
    tags: ["Spicy", "Malabar Pepper"],
    basePrice: 139,
    baseWeight: "200g",
    variants: [
      { weight: "200g", price: 139, originalPrice: 159 },
      { weight: "500g", price: 319, originalPrice: 369 },
      { weight: "1kg", price: 599, originalPrice: 699 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Pepper+Banana+Chips",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Crushed+Pepper+Crunch"
    ],
    inStock: true,
    isBestseller: false,
    spiceLevel: "Medium",
    ingredients: ["Raw Nendran Banana", "Pure Coconut Oil", "Malabar Black Pepper", "Rock Salt"],
    nutrition: {
      servingSize: "30g",
      calories: 152,
      protein: "1.3g",
      carbs: "18.0g",
      fat: "8.2g",
    },
    shelfLife: "90 Days from packing date",
  },
  {
    id: "3",
    name: "Sharkara Upperi (Jaggery Banana Chips)",
    slug: "sharkara-upperi-jaggery-chips",
    category: "banana",
    categoryName: "Banana Chips",
    tagline: "Thick quarter-cut bananas coated in organic jaggery, ginger & cardamom.",
    description: "The crown jewel of Kerala's Onam Sadya. Chunky cut bananas roasted golden and lavishly coated with melted Marayoor jaggery, dry ginger powder (chukku), and ground cardamom.",
    rating: 5.0,
    reviewCount: 412,
    tags: ["Festive Favourite", "Sweet & Crisp"],
    basePrice: 149,
    baseWeight: "200g",
    variants: [
      { weight: "200g", price: 149, originalPrice: 175 },
      { weight: "500g", price: 349, originalPrice: 399 },
      { weight: "1kg", price: 649, originalPrice: 749 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Sharkara+Upperi",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Jaggery+Glazed+Chips"
    ],
    inStock: true,
    isBestseller: true,
    spiceLevel: "Sweet",
    ingredients: ["Raw Banana", "Marayoor Jaggery", "Dry Ginger (Chukku)", "Cardamom", "Coconut Oil", "Cumin Powder"],
    nutrition: {
      servingSize: "30g",
      calories: 168,
      protein: "1.1g",
      carbs: "24.2g",
      fat: "6.8g",
    },
    shelfLife: "120 Days from packing date",
  },
  {
    id: "4",
    name: "Golden Ripe Jackfruit Chips (Chakka Varuthathu)",
    slug: "golden-ripe-jackfruit-chips",
    category: "jackfruit",
    categoryName: "Jackfruit Chips",
    tagline: "Naturally sweet, aromatic, and extraordinarily crunchy.",
    description: "Prepared from firm, golden-sweet Varikka jackfruits handpicked in the valleys of Palakkad. Fried in clean coconut oil to lock in that unforgettable tropical aroma.",
    rating: 4.9,
    reviewCount: 267,
    tags: ["Seasonal", "Natural Sweetness", "Bestseller"],
    basePrice: 189,
    baseWeight: "150g",
    variants: [
      { weight: "150g", price: 189, originalPrice: 220 },
      { weight: "350g", price: 399, originalPrice: 460 },
      { weight: "800g", price: 849, originalPrice: 990 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Jackfruit+Chips",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Crisp+Chakka+Varuthathu"
    ],
    inStock: true,
    isBestseller: true,
    spiceLevel: "Sweet",
    ingredients: ["Ripe Varikka Jackfruit", "Pure Coconut Oil", "Sea Salt"],
    nutrition: {
      servingSize: "30g",
      calories: 145,
      protein: "1.5g",
      carbs: "21.0g",
      fat: "7.1g",
    },
    shelfLife: "75 Days from packing date",
  },
  {
    id: "5",
    name: "Fiery Tapioca Sticks (Kappa Varuthathu)",
    slug: "fiery-tapioca-sticks",
    category: "tapioca",
    categoryName: "Tapioca Chips",
    tagline: "Batonnet cut Kerala cassava tossed in fiery bird's eye chili & curry leaves.",
    description: "Locally sourced cassava tubers sliced into satisfying matchsticks, double-fried for maximum snap, and tossed in fragrant Kanthari (bird's eye chilli) spice mix with fried curry leaves.",
    rating: 4.7,
    reviewCount: 154,
    tags: ["Hot & Spicy", "Extra Crunchy"],
    basePrice: 109,
    baseWeight: "200g",
    variants: [
      { weight: "200g", price: 109, originalPrice: 130 },
      { weight: "500g", price: 249, originalPrice: 290 },
      { weight: "1kg", price: 469, originalPrice: 550 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Tapioca+Chilli+Sticks",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Curry+Leaf+Tapioca"
    ],
    inStock: true,
    isBestseller: false,
    spiceLevel: "Hot",
    ingredients: ["Fresh Tapioca (Cassava)", "Coconut Oil", "Red Chilli Flakes", "Curry Leaves", "Hing", "Salt"],
    nutrition: {
      servingSize: "30g",
      calories: 148,
      protein: "0.9g",
      carbs: "22.0g",
      fat: "6.5g",
    },
    shelfLife: "90 Days from packing date",
  },
  {
    id: "6",
    name: "Kerala Special Royal Mixture",
    slug: "kerala-special-royal-mixture",
    category: "mixtures",
    categoryName: "Kerala Mixtures",
    tagline: "Crunchy sev, roasted peanuts, fried curry leaves, garlic & cashews.",
    description: "The undisputed tea-time legend of Kerala households. A master blend of bespoke sev, roasted groundnuts, crispy gram flour boondi, and fried whole garlic cloves.",
    rating: 4.9,
    reviewCount: 295,
    tags: ["Tea-time Classic", "Bestseller"],
    basePrice: 139,
    baseWeight: "250g",
    variants: [
      { weight: "250g", price: 139, originalPrice: 160 },
      { weight: "500g", price: 269, originalPrice: 310 },
      { weight: "1kg", price: 499, originalPrice: 580 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Kerala+Royal+Mixture",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Peanut+Cashew+Mixture"
    ],
    inStock: true,
    isBestseller: true,
    spiceLevel: "Medium",
    ingredients: ["Gram Flour (Besan)", "Groundnuts", "Cashews", "Curry Leaves", "Garlic", "Chilli Powder", "Asafoetida", "Oil", "Salt"],
    nutrition: {
      servingSize: "30g",
      calories: 162,
      protein: "3.4g",
      carbs: "15.8g",
      fat: "9.6g",
    },
    shelfLife: "90 Days from packing date",
  },
  {
    id: "7",
    name: "Kerala Heritage Feast Hamper",
    slug: "kerala-heritage-feast-hamper",
    category: "gifting",
    categoryName: "Gift Boxes",
    tagline: "The ultimate 6-snack celebration box in custom embossed gift packaging.",
    description: "The grandest celebration of God's Own Country. Includes Classic Banana Chips (250g), Jaggery Sharkara Upperi (250g), Jackfruit Chips (200g), Royal Mixture (250g), Fiery Tapioca (200g), and Roasted Cashews (150g).",
    rating: 5.0,
    reviewCount: 118,
    tags: ["Gift Box", "Festive", "Luxury"],
    basePrice: 999,
    baseWeight: "1.3kg Box",
    variants: [
      { weight: "Standard Box (1.3kg)", price: 999, originalPrice: 1199 },
      { weight: "Deluxe Tin Box (2kg)", price: 1499, originalPrice: 1799 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Heritage+Gift+Hamper",
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Inside+Hamper+Unboxing"
    ],
    inStock: true,
    isBestseller: true,
    spiceLevel: "Medium",
    ingredients: ["Selected assortment of 6 handcrafted Kerala snacks."],
    nutrition: {
      servingSize: "30g Assorted",
      calories: 155,
      protein: "2.1g",
      carbs: "19.0g",
      fat: "8.0g",
    },
    shelfLife: "90 Days from packing date",
  },
  {
    id: "8",
    name: "Salted Tapioca Rounds",
    slug: "salted-tapioca-rounds",
    category: "tapioca",
    categoryName: "Tapioca Chips",
    tagline: "Crisp wafer-thin tapioca rounds tossed with mild rock salt.",
    description: "Paper-thin cassava discs fried to a delicate, brittle snap. Seasoned gently with pink Himalayan salt to let the natural earthy richness shine.",
    rating: 4.6,
    reviewCount: 92,
    tags: ["Mild", "Gluten Free"],
    basePrice: 109,
    baseWeight: "200g",
    variants: [
      { weight: "200g", price: 109, originalPrice: 125 },
      { weight: "500g", price: 239, originalPrice: 275 },
    ],
    images: [
      "https://placehold.co/600x700/FFF9EC/2B1B10?text=Tapioca+Rounds+Salted"
    ],
    inStock: true,
    isBestseller: false,
    spiceLevel: "Mild",
    ingredients: ["Tapioca", "Vegetable Oil / Coconut Oil", "Pink Salt"],
    nutrition: {
      servingSize: "30g",
      calories: 144,
      protein: "0.8g",
      carbs: "22.5g",
      fat: "6.0g",
    },
    shelfLife: "90 Days from packing date",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all" || !category) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

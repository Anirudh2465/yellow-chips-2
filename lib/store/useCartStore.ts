import { create } from "zustand";

export interface CartItem {
  id: string; // unique item id combining productId + weight
  productId: string;
  name: string;
  slug: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotalItems: () => number;
  freeShippingThreshold: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [
    {
      id: "1-200g",
      productId: "1",
      name: "Classic Kerala Banana Chips",
      slug: "classic-banana-chips",
      weight: "200g",
      price: 129,
      quantity: 2,
      image: "https://placehold.co/600x700/FFF9EC/2B1B10?text=Banana+Chips+Classic",
    },
    {
      id: "4-150g",
      productId: "4",
      name: "Golden Ripe Jackfruit Chips",
      slug: "golden-ripe-jackfruit-chips",
      weight: "150g",
      price: 189,
      quantity: 1,
      image: "https://placehold.co/600x700/FFF9EC/2B1B10?text=Jackfruit+Chips",
    }
  ],
  isOpen: false,
  freeShippingThreshold: 499,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (newItem) => {
    const id = `${newItem.productId}-${newItem.weight}`;
    const existing = get().items.find((item) => item.id === id);

    if (existing) {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + newItem.quantity } : item
        ),
        isOpen: true,
      }));
    } else {
      set((state) => ({
        items: [...state.items, { ...newItem, id }],
        isOpen: true,
      }));
    }
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  updateQuantity: (id, delta) => {
    set((state) => ({
      items: state.items
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[],
    }));
  },

  clearCart: () => set({ items: [] }),

  getSubtotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));

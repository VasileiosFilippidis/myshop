"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { Product } from "../lib/products";

type CartItem = Product & { qty: number };

type CartCtx = {
  items: CartItem[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
   if (typeof window === "undefined") return [];
   try {
     const raw = localStorage.getItem("mt_cart");
     return raw ? (JSON.parse(raw) as CartItem[]) : [];
   } catch {
     return [];
   }
});
  useEffect(() => {
    localStorage.setItem("mt_cart", JSON.stringify(items));
  }, [items]);

  const api: CartCtx = useMemo(() => ({
    items,
    addToCart: (p) => {
      setItems(prev => {
        const i = prev.find(it => it.id === p.id);
        if (i) return prev.map(it => it.id === p.id ? { ...it, qty: it.qty + 1 } : it);
        return [...prev, { ...p, qty: 1 }];
      });
    },
    removeFromCart: (id) => setItems(prev => prev.filter(it => it.id !== id)),
    updateQty: (id, qty) => setItems(prev => prev.map(it => it.id === id ? { ...it, qty: Math.max(1, qty) } : it)),
    clear: () => setItems([]),
    count: items.reduce((n, it) => n + it.qty, 0),
    total: items.reduce((sum, it) => sum + it.price * it.qty, 0),
  }), [items]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

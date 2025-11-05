export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
   meta?: { burnTime?: number };
};


export const prints: Product[] = [
  {
    id: "p1",
    slug: "phone-stand",
    title: "Minimal Phone Stand",
    description: "Clean, desk-friendly stand for phones. PLA, multiple colors.",
    price: 9.9,
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc0?q=80&w=1600&auto=format&fit=crop",
    category: "Creo",
  },
  {
    id: "p2",
    slug: "key-hook",
    title: "Wall Key Hook",
    description: "Compact hook with hidden screws; includes anchors.",
    price: 12.5,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    category: "Creo",
  },
  {
    id: "p3",
    slug: "cable-clip",
    title: "Cable Clips (Pack of 6)",
    description: "Keep your setup tidy. Fits 3–4 mm cables.",
    price: 6.0,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    category: "Creo",
  },
];

export const candles: Product[] = [
  {
    id: "c1",
    slug: "lavender-rose",
    title: "Lavender • Rose",
    description: "Hand-poured soy candle with floral notes.",
    price: 14.9,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    category: "Soul",
    meta: { burnTime: 26 },
  },
  {
    id: "c2",
    slug: "vanilla-amber",
    title: "Vanilla • Amber",
    description: "Warm vanilla with a smooth amber finish.",
    price: 15.9,
    image: "https://images.unsplash.com/photo-1511910849309-0dffb85988f5?q=80&w=1600&auto=format&fit=crop",
    category: "Soul",
    meta: { burnTime: 28 },
  },
  {
    id: "c3",
    slug: "citrus-zest",
    title: "Citrus Zest",
    description: "Bright and fresh — perfect daytime scent.",
    price: 12.9,
    image: "https://images.unsplash.com/photo-1512437379220-762fbc5f1d08?q=80&w=1600&auto=format&fit=crop",
    category: "Soul",
  },
];

import Link from "next/link";
import type { Product } from "../lib/products";

export function ProductCard({ product, href, accent = "accent" }: { product: Product; href: string; accent?: "accent"|"rose" }) {
  return (
    <div className="card overflow-hidden">
      <Link href={href}>
        <img src={product.image} alt={product.title} className="w-full h-52 object-cover" />
      </Link>
      <div className="p-4 space-y-2">
        <Link href={href} className="block font-medium hover:underline">{product.title}</Link>
        <div className="text-black/60 text-sm line-clamp-2">{product.description}</div>
        <div className="flex items-center justify-between pt-1">
          <div className="font-semibold">€{product.price.toFixed(2)}</div>
          <span className={`badge ${accent === "rose" ? "border-mt-rose/30" : "border-mt-accent/30"}`}>{product.category}</span>
        </div>
      </div>
    </div>
  );
}
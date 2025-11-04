import { ProductCard } from "./ProductCard";
import type { Product } from "../lib/products";

export function ProductGrid({ products, baseHref, accent = "accent" }: { products: Product[]; baseHref: string; accent?: "accent"|"rose" }) {
  return (
    <div className="grid-products">
      {products.map(p => (
        <ProductCard key={p.id} product={p} href={`${baseHref}/${p.slug}`} accent={accent} />
      ))}
    </div>
  );
}

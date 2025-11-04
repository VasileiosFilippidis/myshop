import { ProductGrid } from "../../components/ProductGrid";
import { candles } from "../../lib/products";

export const metadata = { title: "Candles — MadeTogether Soul" };

export default function CandlesPage() {
  return (
    <div className="container-page space-y-6">
      <header className="flex items-baseline justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Candles</h1>
          <p className="text-black/60">Hand‑poured soy candles with gentle aromas.</p>
        </div>
      </header>
      <ProductGrid products={candles} baseHref="/candles" accent="rose" />
    </div>
  );
}
import { ProductGrid } from "../../components/ProductGrid";
import { prints } from "../../lib/products";

export const metadata = { title: "3D Prints — MadeTogether Creo" };

export default function PrintsPage() {
  return (
    <div className="container-page space-y-6">
      <header className="flex items-baseline justify-between">
        <div>
          <h1 className="text-3xl font-semibold">3D Prints</h1>
          <p className="text-black/60">Ready‑made designs and a doorway to fully custom parts.</p>
        </div>
      </header>
      <ProductGrid products={prints} baseHref="/prints" accent="accent" />
    </div>
  );
}
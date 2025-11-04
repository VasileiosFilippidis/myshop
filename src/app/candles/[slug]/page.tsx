import { notFound } from "next/navigation";
import { candles } from "../../../lib/products";
import { AddToCart } from "../../../components/AddToCart";

export async function generateStaticParams() {
  return candles.map(p => ({ slug: p.slug }));
}

export default async function CandleDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = candles.find(p => p.slug === slug);
  if (!product) return notFound();

  return (
    <div className="container-page grid lg:grid-cols-2 gap-8">
      <div className="card overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-black/70">{product.description}</p>
        <div className="badge">Burn time: ~{product.meta?.burnTime ?? 24}h</div>
        <div className="text-2xl font-semibold">€{product.price.toFixed(2)}</div>
        <AddToCart product={product} accent="rose" />
      </div>
    </div>
  );
}

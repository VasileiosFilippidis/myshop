import { notFound } from "next/navigation";
import { prints } from "../../../lib/products";
import { AddToCart } from "../../../components/AddToCart";

export async function generateStaticParams() {
  return prints.map(p => ({ slug: p.slug }));
}

export default async function PrintDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = prints.find(p => p.slug === slug);
  if (!product) return notFound();
  return (
    <div className="container-page grid lg:grid-cols-2 gap-8">
      <div className="card overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <p className="text-black/70">{product.description}</p>
        <div className="badge">Lead time: 2–5 days</div>
        <div className="text-2xl font-semibold">€{product.price.toFixed(2)}</div>
        <AddToCart product={product} accent="accent" />
        <a className="btn-ghost" href="mailto:hello@madetogether.gr?subject=Custom%203D%20Print">Request Custom</a>
      </div>
    </div>
  );
}

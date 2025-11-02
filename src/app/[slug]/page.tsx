import { supabaseServer } from '@/lib/supabase/server';
import type { Metadata } from 'next';

// Let Next infer route prop types; avoid PageProps conflicts
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const sb = await supabaseServer();
  const { data } = await sb
    .from('products')
    .select('name, description')
    .eq('slug', params.slug)
    .single();
  return { title: data?.name ?? 'Product' };
}

export default async function ProductPage({ params }: any) {
  const sb = supabaseServer();
  const { data: p } = await sb
    .from('products')
    .select('id, slug, name, description, price_cents, product_images(url)')
    .eq('slug', params.slug)
    .single();

  if (!p) return <div>Not found</div>;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <img
        src={p.product_images?.[0]?.url ?? 'https://placehold.co/800'}
        alt={p.name}
        className="w-full rounded-xl"
      />
      <div>
        <h1 className="text-2xl font-semibold mb-2">{p.name}</h1>
        <div className="text-sm opacity-80 mb-4">{p.description}</div>
        <div className="text-xl font-medium mb-6">€{(p.price_cents / 100).toFixed(2)}</div>
        <form action={async () => { 'use server'; }}>
          <button className="px-4 py-2 rounded-lg border">Add to cart (soon)</button>
        </form>
      </div>
    </div>
  );
}

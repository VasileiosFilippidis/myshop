import { supabaseServer } from '@/lib/supabase/server';


export default async function Home() {
const sb = await supabaseServer();
const { data: products } = await sb
.from('products')
.select('id, slug, name, price_cents, product_images(url)')
.eq('active', true)
.order('created_at', { ascending: false })
.limit(24);


return (
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{products?.map((p) => (
<a key={p.id} href={`/${p.slug}`} className="block border rounded-lg overflow-hidden">
<img src={p.product_images?.[0]?.url ?? 'https://placehold.co/600'} alt={p.name} className="aspect-square object-cover w-full" />
<div className="p-3">
<div className="text-sm font-medium line-clamp-1">{p.name}</div>
<div className="text-xs opacity-70">€{(p.price_cents/100).toFixed(2)}</div>
</div>
</a>
))}
</div>
);
}
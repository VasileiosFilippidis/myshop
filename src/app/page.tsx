import Link from "next/link";

export default function Home() {
  return (
    <div className="container-page space-y-16">
      <section className="card p-8 sm:p-12 text-center">
        <div className="badge mx-auto mb-6">Two Shops • One Brand</div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">MadeTogether</h1>
        <p className="text-lg text-black/70 max-w-2xl mx-auto">
          Discover <strong>Creo</strong> — custom 3D printed creations — and <strong>Soul</strong> — handmade soy candles. Crafted with care in Volos.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/prints" className="btn-primary">Explore 3D Prints</Link>
          <Link href="/candles" className="btn-secondary">Discover Candles</Link>
          <Link href="/about" className="btn-ghost">About Us</Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-6">
        <div className="card p-8">
          <h3 className="text-2xl font-semibold mb-2">Custom 3D Parts</h3>
          <p className="text-black/70">Need a custom piece for home, gifts, or industry? Send us your idea; we’ll quote and print it.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/prints" className="btn-primary">Shop Prints</Link>
            <a className="btn-ghost" href="mailto:hello@madetogether.gr?subject=Custom%203D%20Print">Request a Quote</a>
          </div>
        </div>
        <div className="card p-8">
          <h3 className="text-2xl font-semibold mb-2">Hand‑poured Candles</h3>
          <p className="text-black/70">Small batches, quality scents, and elegant finishes — perfect for gifts or cozy nights.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/candles" className="btn-secondary">Shop Candles</Link>
            <Link href="/faq" className="btn-ghost">FAQ</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

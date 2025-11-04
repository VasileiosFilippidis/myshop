"use client";
import { useCart } from "../../components/CartProvider";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, updateQty, total } = useCart();

  return (
    <div className="container-page space-y-6">
      <h1 className="text-3xl font-semibold">Your Cart</h1>

      {items.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="mb-4">Your cart is empty.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/prints" className="btn-primary">Shop 3D Prints</Link>
            <Link href="/candles" className="btn-secondary">Shop Candles</Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {items.map((it) => (
              <div className="card p-4 flex gap-4 items-center" key={it.id}>
                <img src={it.image} alt={it.title} className="w-24 h-24 object-cover rounded-xl" />
                <div className="flex-1">
                  <div className="font-medium">{it.title}</div>
                  <div className="text-sm text-black/60">€{it.price.toFixed(2)}</div>
                </div>
                <input
                  type="number"
                  min={1}
                  value={it.qty}
                  onChange={(e) => updateQty(it.id, parseInt(e.target.value || "1", 10))}
                  className="input w-20"
                />
                <button className="btn-ghost" onClick={() => removeFromCart(it.id)}>Remove</button>
              </div>
            ))}
          </div>

          <aside className="card p-6 h-fit sticky top-24">
            <div className="text-lg font-medium mb-2">Order Summary</div>
            <div className="flex justify-between mb-1"><span>Subtotal</span><span>€{total.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm text-black/60 mb-3"><span>Shipping</span><span>Calculated at checkout</span></div>
            <Link href="/checkout" className="btn-primary w-full">Proceed to Checkout</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
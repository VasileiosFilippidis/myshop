"use client";
import { useState } from "react";
import { useCart } from "../../components/CartProvider";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    setPlaced(true);
    clear();
  }

  if (placed) {
    return (
      <div className="container-page">
        <div className="card p-10 text-center">
          <h1 className="text-2xl font-semibold mb-2">Order placed 🎉</h1>
          <p className="text-black/70">We`ll email you the details shortly. Thank you!</p>
      </div></div>
    );
  }

  return (
    <div className="container-page grid lg:grid-cols-3 gap-8">
      <form className="card p-6 space-y-4 lg:col-span-2" onSubmit={placeOrder}>
        <h1 className="text-2xl font-semibold mb-2">Checkout</h1>

        <div>
          <label className="label">Full name</label>
          <input className="input" required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Email</label>
            <input type="email" className="input" required />
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="input" />
          </div>
        </div>
        <div>
          <label className="label">Address</label>
          <input className="input" required />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="label">City</label>
            <input className="input" required />
          </div>
          <div>
            <label className="label">Postal Code</label>
            <input className="input" required />
          </div>
          <div>
            <label className="label">Country</label>
            <input className="input" defaultValue="Greece" />
          </div>
        </div>
        <button className="btn-primary">Place order</button>
      </form>

      <aside className="card p-6 h-fit">
        <div className="text-lg font-medium mb-2">Summary</div>
        <ul className="space-y-2">
          {items.map(it => (
            <li key={it.id} className="flex justify-between text-sm"><span>{it.title} × {it.qty}</span><span>€{(it.price*it.qty).toFixed(2)}</span></li>
          ))}
        </ul>
        <div className="border-t my-3" />
        <div className="flex justify-between font-medium"><span>Total</span><span>€{total.toFixed(2)}</span></div>
      </aside>
    </div>
  );
}
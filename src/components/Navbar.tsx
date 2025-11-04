"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";

export function Navbar() {
  const { count } = useCart();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav className="container-page h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">MadeTogether</Link>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="/prints" className="hover:underline">3D Prints</Link>
            <Link href="/candles" className="hover:underline">Candles</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/cart" className="btn-ghost">Cart ({count})</Link>
        </div>
      </nav>
    </header>
  );
}
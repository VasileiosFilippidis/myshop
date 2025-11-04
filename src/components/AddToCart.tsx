"use client";
import { useCart } from "./CartProvider";
import type { Product } from "../lib/products";

export function AddToCart({ product, accent = "accent" }: { product: Product; accent?: "accent"|"rose" }) {
  const { addToCart } = useCart();
  return (
    <button className={`${accent === "rose" ? "btn-secondary" : "btn-primary"}`} onClick={() => addToCart(product)}>
      Add to cart
    </button>
  );
}
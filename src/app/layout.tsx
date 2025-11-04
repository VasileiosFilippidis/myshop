import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartProvider } from "../components/CartProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MadeTogether — Handmade Candles & 3D Prints",
  description: "Two shops, one brand: Soul (candles) & Creo (3D prints).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-h-dvh pt-20 pb-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
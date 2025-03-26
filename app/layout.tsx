import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../contexts/CartContext.js"; // Import the CartProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pitama Foods",
  description: "Pitama Foods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit"; // Import the client component
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title:
    "Engines Market | Engines for Sale | New, Used & Reconditioned  Engines – Lowest Prices!",
  description:
    "Looking for a high-quality engine? We offer new, used, and reconditioned  engines at the lowest prices, covering all models. Get expert guidance, a comprehensive engine compatibility chart, and troubleshooting support. Compare prices and find the best  engine deals today!",
  icons: {
    icon: "/FooterLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Toaster richColors />
        <AOSInit /> {/* Initialize AOS on the client */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

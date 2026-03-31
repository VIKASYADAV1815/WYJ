import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCall } from "@/components/MobileStickyCall";
import Script from "next/script";

const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
});

const serif = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WYJ Logistics LLC | Residential Remodeling Services in Atlanta",
  description: "Reliable residential remodeling services in Atlanta, GA. Specializing in home remodeling, renovation, structural improvements, and repairs.",
  keywords: "remodeling, renovation, Atlanta, residential, repairs, WYJ Logistics, Wiley Jones",
  openGraph: {
    title: "WYJ Logistics LLC | Residential Remodeling",
    description: "Premium remodeling and renovation services in Atlanta, Georgia.",
    url: "https://WYJLOGISTICS.com",
    siteName: "WYJ Logistics LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "WYJ Logistics LLC",
    "image": "",
    "@id": "https://WYJLOGISTICS.com",
    "url": "https://WYJLOGISTICS.com",
    "telephone": "404-388-9408",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1205 Shoreham Dr",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30349",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Wiley Jones"
    },
    "description": "Reliable residential remodeling services in Atlanta.",
  };

  return (
    <html lang="en" className={`scroll-smooth ${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col antialiased text-zinc-950 bg-white selection:bg-amber-500/30 selection:text-amber-900 w-full" suppressHydrationWarning>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <div className="flex flex-col min-h-screen overflow-x-hidden w-full relative">
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
          <MobileStickyCall />
        </div>
      </body>
    </html>
  );
}
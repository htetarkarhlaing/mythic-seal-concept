import type { Metadata, Viewport } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ServiceWorkerProvider } from "@/components/providers/ServiceWorkerProvider";
import { RouteProgressBar } from "@/components/ui/RouteProgressBar";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060A1A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://myth.visionx.com.mm"),
  title: {
    default: "MYTHIC SEAL | Official MLBB Esports Team",
    template: "%s | Mythic SEAL MLBB",
  },
  description:
    "Competing at the highest level of MLBB esports. United as one. Driven by passion. Destined for glory. Official website, roster, matches, news, and merchandise store.",
  keywords: [
    "Mythic SEAL",
    "MLBB",
    "Mobile Legends",
    "Myanmar Esports",
    "MSL Season 4",
    "GEG 2026",
    "Galaxy",
    "Justin",
    "Kenn",
    "Zippy",
    "Naomi",
    "Yangon Esports",
  ],
  authors: [{ name: "Mythic SEAL Esports Organization" }],
  creator: "Mythic SEAL",
  publisher: "VisionX",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myth.visionx.com.mm",
    siteName: "Mythic SEAL MLBB",
    title: "MYTHIC SEAL | Official MLBB Esports Team",
    description:
      "Competing at the highest level of MLBB esports. United as one. Driven by passion. Destined for glory. Official website, roster, matches, and shop.",
    images: [
      {
        url: "https://myth.visionx.com.mm/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mythic SEAL Official Esports Team Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MYTHIC SEAL | Official MLBB Esports Team",
    description:
      "Competing at the highest level of MLBB esports. United as one. Driven by passion. Destined for glory.",
    images: ["https://myth.visionx.com.mm/images/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "Mythic SEAL",
  sport: "Mobile Legends: Bang Bang",
  url: "https://myth.visionx.com.mm",
  logo: "https://myth.visionx.com.mm/images/og-image.jpg",
  location: {
    "@type": "Place",
    name: "Yangon, Myanmar",
  },
  athlete: [
    { "@type": "Person", name: "Galaxy (Kyaw Thu Hein)", roleName: "Captain / EXP Lane" },
    { "@type": "Person", name: "Justin (Justin Htet Aung)", roleName: "Jungler" },
    { "@type": "Person", name: "Kenn (Kenn Sithu)", roleName: "Mid Lane" },
    { "@type": "Person", name: "Zippy (Zippy Min Htet)", roleName: "Gold Lane" },
    { "@type": "Person", name: "Naomi (Min Ko Ko)", roleName: "Roamer" },
  ],
  sponsor: [
    { "@type": "Organization", name: "ATOM Myanmar" },
    { "@type": "Organization", name: "KBZ Pay" },
    { "@type": "Organization", name: "Royal-D" },
    { "@type": "Organization", name: "Balance Fitness" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#060a1a] text-white flex flex-col font-sans antialiased overflow-x-hidden selection:bg-[#FFC107] selection:text-black">
        <ServiceWorkerProvider />
        <RouteProgressBar />
        <QueryProvider>
          <SmoothScrollProvider>
            <CartProvider>
              {children}
              <CartDrawer />
            </CartProvider>
          </SmoothScrollProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

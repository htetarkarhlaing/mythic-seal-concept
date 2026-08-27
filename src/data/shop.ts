export type ProductCategory =
  | "JERSEYS"
  | "OUTERWEAR"
  | "HEADWEAR"
  | "ACCESSORIES"
  | "FAN GEAR";

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ShopProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  badge?: string;
  image: string;
  gallery: readonly string[];
  description: string;
  features: readonly string[];
  sizes?: readonly string[];
  colors?: readonly string[];
  allowPlayerCustomization?: boolean;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  reviews: readonly ProductReview[];
}

export const SHOP_PRODUCTS: readonly ShopProduct[] = [
  {
    id: "jersey-2026-pro",
    name: "Official Pro Jersey 2026 (Tournament Edition)",
    slug: "official-pro-jersey-2026",
    price: 45000,
    originalPrice: 52000,
    category: "JERSEYS",
    badge: "OFFICIAL PRO KIT",
    image: "/images/shop/jersey-2026-pro.jpg",
    gallery: [
      "/images/shop/jersey-2026-pro.jpg",
      "/images/shop/jersey-player-custom.jpg",
    ],
    description:
      "Engineered for championship performance. Authentic pro kit worn by Mythic SEAL athletes in MSL Season 4 and GEG 2026. Crafted from ultra-breathable cyber-mesh fabric with metallic gold accents.",
    features: [
      "Ultra-breathable micro-mesh fabric",
      "Reinforced moisture-wicking technology",
      "Official sponsor insignias & team seal",
      "Custom gamer tag & number print available",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Cyber Black"],
    allowPlayerCustomization: true,
    inStock: true,
    stockCount: 24,
    rating: 4.9,
    reviewCount: 128,
    reviews: [
      {
        id: "rev-1",
        author: "Aung Kaung",
        rating: 5,
        date: "2 days ago",
        comment:
          "Fabric quality is insane! Got mine customized with #07 GALAXY.",
        verified: true,
      },
      {
        id: "rev-2",
        author: "Htet Myat",
        rating: 5,
        date: "1 week ago",
        comment:
          "Fast delivery via KBZPay. Perfect fit for tournament viewing parties.",
        verified: true,
      },
    ],
  },
  {
    id: "jersey-player-custom",
    name: "Custom Player Name & Number Pro Jersey",
    slug: "custom-player-jersey-2026",
    price: 48000,
    originalPrice: 55000,
    category: "JERSEYS",
    badge: "BESTSELLER",
    image: "/images/shop/jersey-player-custom.jpg",
    gallery: ["/images/shop/jersey-player-custom.jpg"],
    description:
      "Personalize the official Mythic SEAL tournament jersey with your custom gamer tag and squad number in official tournament metallic gold heat-pressed lettering.",
    features: [
      "Custom IGN & 2-digit number heat-pressed",
      "Metallic gold tournament foil finish",
      "Official SEAL authenticity badge on hem",
      "Anti-bacterial quick-dry treatment",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Tournament Gold / Black"],
    allowPlayerCustomization: true,
    inStock: true,
    stockCount: 18,
    rating: 5.0,
    reviewCount: 94,
    reviews: [
      {
        id: "rev-3",
        author: "Sai Thiha",
        rating: 5,
        date: "3 days ago",
        comment: "The gold lettering looks so premium in real life. Worth every kyat!",
        verified: true,
      },
    ],
  },
  {
    id: "snapback-gold-crest",
    name: "Championship Snapback Cap",
    slug: "championship-snapback-cap",
    price: 22000,
    category: "HEADWEAR",
    badge: "LIMITED",
    image: "/images/shop/snapback-cap.jpg",
    gallery: ["/images/shop/snapback-cap.jpg"],
    description:
      "Structured 6-panel snapback with 3D raised metallic gold embroidery and moisture-absorbing inner band.",
    features: [
      "High-profile structured 6-panel crown",
      "3D metallic gold dragon embroidery",
      "Adjustable premium snap closure",
      "Breathable sweat-wicking inner headband",
    ],
    sizes: ["FREE SIZE"],
    inStock: true,
    stockCount: 30,
    rating: 4.7,
    reviewCount: 42,
    reviews: [],
  },
  {
    id: "gaming-deskmat-xl",
    name: "Mythic SEAL Cyber Deskmat XL (900x400mm)",
    slug: "cyber-deskmat-xl",
    price: 28000,
    originalPrice: 32000,
    category: "ACCESSORIES",
    badge: "PRO GEAR",
    image: "/images/shop/gaming-deskmat-xl.jpg",
    gallery: ["/images/shop/gaming-deskmat-xl.jpg"],
    description:
      "Tournament-grade micro-weave cloth surface optimized for low and high DPI tracking. Features anti-fray precision stitched edges and non-slip rubber base.",
    features: [
      "900mm x 400mm x 4mm extra-large surface",
      "Speed & control hybrid micro-weave texture",
      "Water-resistant nano-coating",
      "Heavy-duty non-slip natural rubber base",
    ],
    inStock: true,
    stockCount: 22,
    rating: 4.9,
    reviewCount: 58,
    reviews: [],
  },
  {
    id: "roster-wall-flag",
    name: "Official Championship Wall Flag (150x90cm)",
    slug: "championship-wall-flag",
    price: 18000,
    category: "FAN GEAR",
    badge: "FAN SPECIAL",
    image: "/images/shop/roster-flag.jpg",
    gallery: ["/images/shop/roster-flag.jpg"],
    description:
      "High-definition sublimation-printed polyester banner featuring the complete Mythic SEAL active squad lineup with brass hanging grommets.",
    features: [
      "150cm x 90cm large room format",
      "Fade-resistant vivid sublimation print",
      "Double-stitched reinforced perimeter",
      "Dual brass mounting grommets",
    ],
    inStock: true,
    stockCount: 40,
    rating: 4.8,
    reviewCount: 31,
    reviews: [],
  },
] as const;

export function getProductBySlug(slug: string): ShopProduct | undefined {
  return SHOP_PRODUCTS.find(
    (product) => product.slug.toLowerCase() === slug.toLowerCase()
  );
}

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
    name: "Official Pro Jersey 2026 (Player Edition)",
    slug: "official-pro-jersey-2026",
    price: 45000,
    originalPrice: 52000,
    category: "JERSEYS",
    badge: "OFFICIAL PRO KIT",
    image: "/images/shop/jersey-pro-black.png",
    gallery: [
      "/images/shop/jersey-pro-black.png",
      "/images/shop/jersey-white-alt.png",
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
    colors: ["Cyber Black", "Pure White"],
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
    id: "hoodie-stealth-black",
    name: "Cyber Stealth Pro Hoodie",
    slug: "cyber-stealth-pro-hoodie",
    price: 58000,
    originalPrice: 65000,
    category: "OUTERWEAR",
    badge: "NEW DROP",
    image: "/images/shop/hoodie-stealth.png",
    gallery: ["/images/shop/hoodie-stealth.png"],
    description:
      "Heavyweight 380GSM cyber fleece hoodie with neon cyan reflective piping, high-collar wind barrier, and dragon emblem back embroidery.",
    features: [
      "380 GSM heavyweight cotton-fleece blend",
      "3M reflective piping & high-density crest",
      "Concealed tech pocket for wireless earphones",
      "Double-lined tactical hood",
    ],
    sizes: ["M", "L", "XL", "2XL"],
    colors: ["Midnight Black"],
    inStock: true,
    stockCount: 15,
    rating: 4.8,
    reviewCount: 64,
    reviews: [],
  },
  {
    id: "snapback-gold-crest",
    name: "Championship Snapback Cap",
    slug: "championship-snapback-cap",
    price: 22000,
    category: "HEADWEAR",
    badge: "LIMITED",
    image: "/images/shop/cap-black.png",
    gallery: ["/images/shop/cap-black.png"],
    description:
      "Structured 6-panel snapback with 3D raised metallic gold embroidery and moisture-absorbing inner band.",
    features: [
      "High-profile structured 6-panel crown",
      "3D metallic gold dragon embroidery",
      "Adjustable premium snap closure",
    ],
    sizes: ["FREE SIZE"],
    inStock: true,
    stockCount: 30,
    rating: 4.7,
    reviewCount: 42,
    reviews: [],
  },
] as const;

export function getProductBySlug(slug: string): ShopProduct | undefined {
  return SHOP_PRODUCTS.find(
    (product) => product.slug.toLowerCase() === slug.toLowerCase()
  );
}

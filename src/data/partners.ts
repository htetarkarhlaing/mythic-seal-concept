export type PartnerTier = "TITLE" | "MAIN" | "OFFICIAL";

export interface Partner {
  id: string;
  name: string;
  category: string;
  tier: PartnerTier;
  logo: string;
  description: string;
  website: string;
}

export const PARTNERS: readonly Partner[] = [
  {
    id: "atom",
    name: "ATOM",
    category: "Official Telecom & 5G Partner",
    tier: "TITLE",
    logo: "/images/partners/atom-logo.png",
    description:
      "Powering ultra-low ping gaming connectivity and high-speed live stream broadcasts across Myanmar.",
    website: "https://www.atom.com.mm",
  },
  {
    id: "kbzpay",
    name: "KBZPay",
    category: "Official Digital Payment Partner",
    tier: "MAIN",
    logo: "/images/partners/kbzpay-logo.png",
    description:
      "Empowering Myanmar gamers with instant mobile payments, seamless in-game diamonds top-ups, and official merchandise checkout.",
    website: "https://www.kbzpay.com",
  },
  {
    id: "royald",
    name: "Royal-D",
    category: "Official Electrolyte & Energy Drink",
    tier: "MAIN",
    logo: "/images/partners/royald-logo.png",
    description:
      "Supplying rapid hydration and cognitive alertness for our pro players during grueling 5-game championship series.",
    website: "https://royal-d.com",
  },
  {
    id: "balancefitness",
    name: "Balance Fitness",
    category: "Official Performance & Health Partner",
    tier: "OFFICIAL",
    logo: "/images/partners/balance-logo.png",
    description:
      "Providing world-class ergonomic conditioning, physical training, and wellness coaching for esports athletes.",
    website: "https://balancefitnessyangon.com",
  },
] as const;

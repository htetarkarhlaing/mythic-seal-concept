export type NewsCategory =
  | "TOURNAMENT"
  | "TEAM UPDATE"
  | "ANNOUNCEMENT"
  | "COMMUNITY";

export interface NewsArticle {
  id: string;
  category: NewsCategory;
  title: string;
  date: string;
  image: string;
  cardImage: string;
  summary: string;
  content: readonly string[];
  readTime: string;
  author: string;
  tags: readonly string[];
}

export const NEWS_ARTICLES: readonly NewsArticle[] = [
  {
    id: "geg-2026-advances",
    category: "TOURNAMENT",
    title: "Mythic SEAL advances to GEG 2026 Semi Finals",
    date: "May 18, 2026",
    image: "/images/news/news-1.jpg",
    cardImage: "/images/news/news-card-1.png",
    readTime: "3 min read",
    author: "Mythic SEAL Media Team",
    tags: ["GEG2026", "MLBB", "Playoffs", "Victory"],
    summary:
      "Following an electrifying 2-0 sweep in Stage 1, Mythic SEAL secures their coveted spot in the Global Esports Games 2026 Myanmar Qualifier playoffs.",
    content: [
      "In a commanding showcase of strategic dominance, Mythic SEAL locked in a decisive 2-0 victory against Zino Esports to punch their ticket to the GEG 2026 Semi Finals.",
      "Captain GALAXY spearheaded the squad with pinpoint initiates on Paquito in Game 1, while JUSTIN dismantled the enemy backline with immaculate Ling gameplay in Game 2.",
      "The team now prepares for the next high-stakes clash against Team MAX on May 24th at 4:00 PM MMT. Fans can catch every match live on our official YouTube and Facebook channels.",
    ],
  },
  {
    id: "welcome-justin",
    category: "TEAM UPDATE",
    title: "Welcome our new Jungler, JUSTIN!",
    date: "May 15, 2026",
    image: "/images/news/news-2.jpg",
    cardImage: "/images/news/news-card-2.png",
    readTime: "4 min read",
    author: "Management Office",
    tags: ["Roster", "Jungler", "Justin", "Signing"],
    summary:
      "Mythic SEAL is proud to announce the signing of hyper-carry Jungler Justin Htet Aung to bolster our 2026 championship campaign.",
    content: [
      "With over 140 competitive games and an outstanding 76% win rate, Justin brings lethal aggression, unmatched mechanics, and fearless shot-calling to the Mythic SEAL frontline.",
      "Head Coach Arthur commented on the signing: 'Justin's hero pool and fast jungle pathing fit our aggressive teamfight identity seamlessly. He gives us the flexibility to contest neutral objectives instantly.'",
      "Justin will make his official starting debut this weekend during the MSL Super League regular season opener.",
    ],
  },
  {
    id: "kbz-pay-partnership",
    category: "ANNOUNCEMENT",
    title: "Mythic SEAL announces official partnership with KBZPay",
    date: "May 10, 2026",
    image: "/images/news/news-3.jpg",
    cardImage: "/images/news/news-card-3.png",
    readTime: "2 min read",
    author: "Partnership Team",
    tags: ["Sponsorship", "KBZPay", "FinTech", "Partner"],
    summary:
      "Myanmar's leading mobile financial service joins forces with Mythic SEAL to power national esports infrastructure, fan rewards, and merchandise checkout.",
    content: [
      "Mythic SEAL is thrilled to welcome KBZPay as our Official Financial Technology Partner for the 2026-2027 competitive seasons.",
      "Through this landmark alliance, fans can enjoy instant cashier checkout for official team jerseys, unlock exclusive digital sticker packs in the KBZPay app, and access VIP ticketing for upcoming national qualifiers.",
      "Together, we are investing in grassroots tournament development across Yangon, Mandalay, and Taunggyi to nurture the next generation of Myanmar gaming talent.",
    ],
  },
  {
    id: "bootcamp-diary-2026",
    category: "COMMUNITY",
    title: "Inside the Yangon Bootcamp: Road to the Championship",
    date: "May 02, 2026",
    image: "/images/news/news-1.jpg",
    cardImage: "/images/news/news-card-1.png",
    readTime: "5 min read",
    author: "Analyst Desk",
    tags: ["Bootcamp", "Training", "BehindTheScenes"],
    summary:
      "Take an exclusive look behind the scenes at Mythic SEAL's high-tech gaming house as the roster puts in 12-hour scrim sessions ahead of MSL Season 4.",
    content: [
      "Every championship run is forged in the grueling hours of preparation. Located in Yangon, the Mythic SEAL Performance Facility serves as the daily battlefield for our five starting athletes.",
      "Daily routines begin with physical conditioning and hand-eye reflex drills, followed by six consecutive Best-of-3 scrimmages against top-tier overseas rosters from the Philippines, Indonesia, and Malaysia.",
      "Tactical debriefs led by Analyst Zenith break down neutral turtle control timing, ward vision placement, and draft response trees to ensure 100% readiness on match day.",
    ],
  },
] as const;

export function getArticleById(id: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((art) => art.id === id);
}

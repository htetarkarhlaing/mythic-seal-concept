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
  summary: string;
  content: readonly string[];
  readTime: string;
  author: string;
}

export const NEWS_ARTICLES: readonly NewsArticle[] = [
  {
    id: "geg-2026-advances",
    category: "TOURNAMENT",
    title: "Mythic SEAL advances to GEG 2026 Semi Finals",
    date: "May 18, 2026",
    image: "/images/news/news-1.jpg",
    readTime: "3 min read",
    author: "Mythic SEAL Media Team",
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
    readTime: "4 min read",
    author: "Mythic SEAL Management",
    summary:
      "Mythic SEAL is proud to announce the signing of superstar assassin jungler Justin Htet Aung to bolster our championship roster for the upcoming season.",
    content: [
      "Mythic SEAL is ecstatic to officially announce the arrival of Justin 'JUSTIN' Htet Aung as our starting Jungler for MSL Myanmar Season 4 and the GEG 2026 campaign.",
      "Justin brings explosive mechanics, exceptional objective tempo, and high-pressure tournament experience. 'Joining Mythic SEAL is a tremendous milestone in my career,' Justin commented. 'We are hungry for trophies and ready to represent Myanmar on the international stage.'",
      "Join us in welcoming Justin to the SEAL family!",
    ],
  },
  {
    id: "kbz-pay-partnership",
    category: "ANNOUNCEMENT",
    title: "Mythic SEAL partners with KBZ Pay",
    date: "May 10, 2026",
    image: "/images/news/news-3.jpg",
    readTime: "2 min read",
    author: "Sponsorship & PR Desk",
    summary:
      "Mythic SEAL announces an exclusive official financial technology partnership with KBZ Pay to empower Myanmar esports and fan engagement.",
    content: [
      "Mythic SEAL is thrilled to unveil a multi-season strategic partnership with KBZ Pay, Myanmar's leading mobile wallet and digital payment platform.",
      "This landmark collaboration will power team bootcamps, official merchandise checkout integration, and exclusive fan giveaways throughout MSL Season 4 and international qualifiers.",
      "KBZ Pay users will also receive special discounts on all official Mythic SEAL jerseys, apparel, and tournament viewing party tickets.",
    ],
  },
] as const;

export function getNewsArticleById(id: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find(
    (article) => article.id.toLowerCase() === id.toLowerCase()
  );
}

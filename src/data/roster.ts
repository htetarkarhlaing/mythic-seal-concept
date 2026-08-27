export type PlayerLane =
  | "EXP LANE"
  | "JUNGLE"
  | "MID LANE"
  | "GOLD LANE"
  | "ROAM";

export interface PlayerStats {
  kda: string;
  winRate: string;
  signatureHeroes: readonly string[];
  mvpCount: number;
}

export interface Player {
  id: string;
  name: string;
  ign: string;
  realName: string;
  role: string;
  lane: PlayerLane;
  image: string;
  avatarImage: string;
  joinDate: string;
  totalMatches: number;
  quote: string;
  bio: string;
  number: string;
  stats: PlayerStats;
}

export const ROSTER: readonly Player[] = [
  {
    id: "galaxy",
    name: "GALAXY",
    ign: "GALAXY",
    realName: "Kyaw Thu Hein",
    role: "CAPTAIN / EXP LANE",
    lane: "EXP LANE",
    image: "/images/players/card-galaxy.png",
    avatarImage: "/images/players/galaxy.jpg",
    joinDate: "JANUARY 2023",
    totalMatches: 184,
    quote:
      "True leadership isn't about being in the spotlight — it's about holding the frontline so your brothers can shine. We fight for every fan who believes in the SEAL shield.",
    bio: "As team captain and EXP lane anchor, Galaxy commands Mythic SEAL's tempo and teamfight engagements with calm precision, tactical mastery, and relentless resolve.",
    number: "07",
    stats: {
      kda: "4.82",
      winRate: "71.4%",
      signatureHeroes: ["Paquito", "Chou", "Yu Zhong", "Terizla"],
      mvpCount: 28,
    },
  },
  {
    id: "justin",
    name: "JUSTIN",
    ign: "JUSTIN",
    realName: "Justin Htet Aung",
    role: "JUNGLER",
    lane: "JUNGLE",
    image: "/images/players/card-justin.png",
    avatarImage: "/images/players/justin.jpg",
    joinDate: "NOVEMBER 2023",
    totalMatches: 142,
    quote:
      "Speed and instinct win championships. When the opportunity appears on the map, I don't hesitate — I strike.",
    bio: "Renowned for lightning-fast mechanical reflexes and aggressive objective control, Justin dictates the pace of the early game and dismantles enemy formations with assassin execution.",
    number: "11",
    stats: {
      kda: "5.45",
      winRate: "76.2%",
      signatureHeroes: ["Ling", "Hayabusa", "Fanny", "Nolan"],
      mvpCount: 34,
    },
  },
  {
    id: "kenn",
    name: "KENN",
    ign: "KENN",
    realName: "Kenn Sithu",
    role: "MID LANE",
    lane: "MID LANE",
    image: "/images/players/card-kenn.png",
    avatarImage: "/images/players/kenn.jpg",
    joinDate: "MARCH 2024",
    totalMatches: 116,
    quote:
      "Every rotation has a purpose. We stay disciplined, protect our resources, and punish every mistake the opponent makes.",
    bio: "The tactical brain of the roster, Kenn delivers consistent zoning, decisive high-ground defence, and clutch objective vision during chaotic Southeast Asian tournaments.",
    number: "23",
    stats: {
      kda: "6.10",
      winRate: "73.8%",
      signatureHeroes: ["Valentina", "Pharsa", "Novaria", "Vexana"],
      mvpCount: 22,
    },
  },
  {
    id: "zippy",
    name: "ZIPPY",
    ign: "ZIPPY",
    realName: "Zippy Min Htet",
    role: "GOLD LANE",
    lane: "GOLD LANE",
    image: "/images/players/card-zippy.png",
    avatarImage: "/images/players/zippy.jpg",
    joinDate: "AUGUST 2023",
    totalMatches: 156,
    quote:
      "Give me the farm and the space to scale. When late game arrives, trust me to finish what we started.",
    bio: "A calm and lethal marksman carry, Zippy excels in 5v5 teamfight positioning, surgical focus fire, and high-pressure late-game damage execution under enemy siege.",
    number: "09",
    stats: {
      kda: "5.12",
      winRate: "69.5%",
      signatureHeroes: ["Claude", "Bruno", "Harith", "Karrie"],
      mvpCount: 26,
    },
  },
  {
    id: "naomi",
    name: "NAOMI",
    ign: "NAOMI",
    realName: "Min Ko Ko",
    role: "ROAMER",
    lane: "ROAM",
    image: "/images/players/card-naomi.png",
    avatarImage: "/images/players/naomi.jpg",
    joinDate: "JANUARY 2024",
    totalMatches: 128,
    quote:
      "I am the eyes and the shield of this team. My job is to protect my carries and create the winning setup.",
    bio: "Celebrated across Southeast Asia for aggressive vision denial and godlike crowd-control initiations that flip lost teamfights into game-winning sweeps.",
    number: "01",
    stats: {
      kda: "4.30",
      winRate: "74.1%",
      signatureHeroes: ["Khufra", "Tigreal", "Franco", "Minotaur"],
      mvpCount: 19,
    },
  },
] as const;

export function getPlayerById(id: string): Player | undefined {
  return ROSTER.find((player) => player.id.toLowerCase() === id.toLowerCase());
}

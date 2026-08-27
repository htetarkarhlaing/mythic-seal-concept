export type PlayerLane =
  | "EXP LANE"
  | "JUNGLE"
  | "MID LANE"
  | "GOLD LANE"
  | "ROAM";

export interface Player {
  id: string;
  name: string;
  ign: string;
  realName: string;
  role: string;
  lane: PlayerLane;
  image: string;
  joinDate: string;
  totalMatches: number;
  quote: string;
  bio: string;
  number: string;
}

export const ROSTER: readonly Player[] = [
  {
    id: "galaxy",
    name: "GALAXY",
    ign: "GALAXY",
    realName: "Kyaw Thu Hein",
    role: "CAPTAIN / EXP LANE",
    lane: "EXP LANE",
    image: "/images/players/player-1.png",
    joinDate: "JANUARY 2023",
    totalMatches: 184,
    quote:
      "True leadership isn't about being in the spotlight — it's about holding the frontline so your brothers can shine. We fight for every fan who believes in the SEAL shield.",
    bio: "As team captain and EXP lane anchor, Galaxy commands Mythic SEAL's tempo and teamfight engagements with calm precision and relentless resolve.",
    number: "07",
  },
  {
    id: "justin",
    name: "JUSTIN",
    ign: "JUSTIN",
    realName: "Justin Htet Aung",
    role: "JUNGLER",
    lane: "JUNGLE",
    image: "/images/players/player-1.png",
    joinDate: "NOVEMBER 2023",
    totalMatches: 142,
    quote:
      "Speed and instinct win championships. When the opportunity appears on the map, I don't hesitate — I strike.",
    bio: "Renowned for lightning-fast mechanical reflexes and aggressive objective control, Justin dictates the pace of the early and mid-game.",
    number: "11",
  },
  {
    id: "kenn",
    name: "KENN",
    ign: "KENN",
    realName: "Kenn Sithu",
    role: "MID LANE",
    lane: "MID LANE",
    image: "/images/players/player-1.png",
    joinDate: "MARCH 2024",
    totalMatches: 116,
    quote:
      "Every rotation has a purpose. We stay disciplined, protect our resources, and punish every mistake the opponent makes.",
    bio: "The tactical core of the roster, Kenn delivers consistent zoning, decisive high-ground defence, and clutch objective vision.",
    number: "23",
  },
  {
    id: "zippy",
    name: "ZIPPY",
    ign: "ZIPPY",
    realName: "Zippy Min Htet",
    role: "GOLD LANE",
    lane: "GOLD LANE",
    image: "/images/players/player-1.png",
    joinDate: "AUGUST 2023",
    totalMatches: 156,
    quote:
      "Give me the farm and the space to scale. When late game arrives, trust me to finish what we started.",
    bio: "A calm and lethal marksman carry, Zippy excels in 5v5 teamfight positioning and late-game damage execution.",
    number: "09",
  },
  {
    id: "naomi",
    name: "NAOMI",
    ign: "NAOMI",
    realName: "Min Ko Ko",
    role: "ROAMER",
    lane: "ROAM",
    image: "/images/players/player-1.png",
    joinDate: "JANUARY 2024",
    totalMatches: 128,
    quote:
      "I am the eyes and the shield of this team. My job is to protect my carries and create the winning setup.",
    bio: "Renowned across Southeast Asia for aggressive vision control and godlike crowd-control initiations that flip lost fights into victory.",
    number: "01",
  },
] as const;

export function getPlayerById(id: string): Player | undefined {
  return ROSTER.find((player) => player.id.toLowerCase() === id.toLowerCase());
}

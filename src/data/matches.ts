export type MatchStatus = "UPCOMING" | "LIVE" | "COMPLETED";

export interface TeamMatchDetails {
  name: string;
  logo: string;
  score?: number;
}

export interface StreamBroadcast {
  platform: string;
  url: string;
  icon: string;
}

export interface Match {
  id: string;
  tournament: string;
  stage: string;
  date: string;
  time: string;
  status: MatchStatus;
  teamA: TeamMatchDetails;
  teamB: TeamMatchDetails;
  streams: readonly StreamBroadcast[];
  format: string;
  featured?: boolean;
  vodUrl?: string;
  mvp?: string;
}

export const UPCOMING_FEATURED_MATCH: Match = {
  id: "geg-2026-qualifier",
  tournament: "GEG 2026 MYANMAR QUALIFIER",
  stage: "Upper Bracket Finals",
  date: "MAY 24, 2026",
  time: "4:00 PM (MMT)",
  status: "UPCOMING",
  teamA: {
    name: "MYTHIC SEAL",
    logo: "/images/logo.png",
  },
  teamB: {
    name: "TEAM MAX",
    logo: "/images/team-max-logo.png",
  },
  streams: [
    { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
    { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
  ],
  format: "Best of 3 (BO3)",
  featured: true,
};

export const TOURNAMENT_MATCHES: readonly Match[] = [
  UPCOMING_FEATURED_MATCH,
  {
    id: "msl-s4-week2",
    tournament: "MSL MYANMAR SEASON 4",
    stage: "Regular Season - Week 2",
    date: "JUNE 02, 2026",
    time: "6:30 PM (MMT)",
    status: "UPCOMING",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.png",
    },
    teamB: {
      name: "AI ESPORTS",
      logo: "/images/team-max-logo.png",
    },
    streams: [
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
      { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
    ],
    format: "Best of 3 (BO3)",
  },
  {
    id: "msl-s4-week3",
    tournament: "MSL MYANMAR SEASON 4",
    stage: "Regular Season - Week 3",
    date: "JUNE 09, 2026",
    time: "4:00 PM (MMT)",
    status: "UPCOMING",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.png",
    },
    teamB: {
      name: "FALCON ESPORTS",
      logo: "/images/team-max-logo.png",
    },
    streams: [
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
      { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
    ],
    format: "Best of 3 (BO3)",
  },
  {
    id: "geg-2026-semi",
    tournament: "GEG 2026 MYANMAR QUALIFIER",
    stage: "Playoffs Semi-Final",
    date: "MAY 18, 2026",
    time: "2:00 PM (MMT)",
    status: "COMPLETED",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.png",
      score: 2,
    },
    teamB: {
      name: "TEAM SEVEN",
      logo: "/images/team-max-logo.png",
      score: 1,
    },
    streams: [
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
    ],
    format: "Best of 3 (BO3)",
    vodUrl: "https://youtube.com",
    mvp: "JUSTIN (Ling - 9/1/8)",
  },
  {
    id: "geg-2026-stage1",
    tournament: "GEG 2026 MYANMAR QUALIFIER",
    stage: "Group Stage Round 1",
    date: "MAY 12, 2026",
    time: "5:00 PM (MMT)",
    status: "COMPLETED",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.png",
      score: 2,
    },
    teamB: {
      name: "ZINO ESPORTS",
      logo: "/images/team-max-logo.png",
      score: 0,
    },
    streams: [
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
    ],
    format: "Best of 3 (BO3)",
    vodUrl: "https://youtube.com",
    mvp: "GALAXY (Paquito - 6/0/11)",
  },
  {
    id: "msc-qualifier-finals",
    tournament: "MSC 2025 MYANMAR CHAMPIONSHIP",
    stage: "Grand Finals",
    date: "DECEMBER 20, 2025",
    time: "7:00 PM (MMT)",
    status: "COMPLETED",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.png",
      score: 3,
    },
    teamB: {
      name: "BURMESE GHOULS",
      logo: "/images/team-max-logo.png",
      score: 2,
    },
    streams: [
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
    ],
    format: "Best of 5 (BO5)",
    vodUrl: "https://youtube.com",
    mvp: "KENN (Valentina - 8/1/14)",
  },
] as const;

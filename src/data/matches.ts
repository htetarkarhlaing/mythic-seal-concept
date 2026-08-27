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
    logo: "/images/logo.jpg",
  },
  teamB: {
    name: "TEAM MAX",
    logo: "/images/team-max.png",
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
    stage: "Regular Season - Day 4",
    date: "JUNE 02, 2026",
    time: "6:30 PM (MMT)",
    status: "UPCOMING",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.jpg",
    },
    teamB: {
      name: "AI ESPORTS",
      logo: "/images/team-max.png",
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
    stage: "Semi Final",
    date: "MAY 18, 2026",
    time: "2:00 PM (MMT)",
    status: "COMPLETED",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.jpg",
      score: 1,
    },
    teamB: {
      name: "TEAM SEVEN",
      logo: "/images/team-max.png",
      score: 2,
    },
    streams: [
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
    ],
    format: "Best of 3 (BO3)",
  },
  {
    id: "geg-2026-stage1",
    tournament: "GEG 2026 MYANMAR QUALIFIER",
    stage: "Stage 1",
    date: "MAY 12, 2026",
    time: "5:00 PM (MMT)",
    status: "COMPLETED",
    teamA: {
      name: "MYTHIC SEAL",
      logo: "/images/logo.jpg",
      score: 2,
    },
    teamB: {
      name: "ZINO ESPORTS",
      logo: "/images/team-max.png",
      score: 0,
    },
    streams: [
      { platform: "YouTube", url: "https://youtube.com", icon: "youtube" },
    ],
    format: "Best of 3 (BO3)",
  },
] as const;

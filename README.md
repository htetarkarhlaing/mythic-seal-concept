# Mythic SEAL Esports Web Platform

Official web platform for **Mythic SEAL**, Myanmar's premier *Mobile Legends: Bang Bang* (MLBB) competitive esports team.

Built with **Next.js 16 (App Router)**, **React 19**, **GSAP 3 Motion & Physics**, **Zustand Slices + TanStack Query**, **Native Web Audio API**, **Web Workers**, and **Playwright E2E testing**.

---

## Key Features

- **GSAP 3 + Lenis Inertial Scroll:** Hardware-accelerated RAF ticker synchronization delivering smooth 60/120 FPS page scrolling and interactive 3D perspective tilt cards with specular reflections.
- **Dual-Engine State Architecture:** Modular Zustand slices for client UI/cart persistence combined with TanStack React Query for async caching and network deduplication.
- **Deterministic Checkout Machine:** Finite State Machine (FSM) enforcing valid state transitions across cart, contact validation, payment method selection, and order confirmation.
- **Zero-Latency Web Audio API Engine:** Synthesized cybernetic audio feedback (hover, click, drawer toggle, order confirmation) generated directly via browser `AudioContext` with zero `.mp3` asset overhead.
- **Dedicated Multithreaded Web Workers:**
  - `timerWorker.ts`: Drift-free UTC tournament countdown calculations running off the main thread.
  - `searchWorker.ts`: Instant fuzzy search filtering across shop merchandise with zero input latency.
- **Real-Time Vector SVG Jersey Customizer:** Live vector projection engine in `/shop` allowing users to preview their custom athlete gamer tag and squad number on the official tournament kit.
- **Accessible Radix UI Dialogs:** Modal dialogues and cart drawer powered by `@radix-ui/react-dialog` with automated focus trapping and keyboard navigation (`Escape`).
- **Progressive Web App (PWA):** Standalone web app manifest and Stale-While-Revalidate Service Worker for offline tournament schedule browsing.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (React Server Components, App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict nominal branding & Zod schemas) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with semantic `@theme` design tokens |
| **Motion & Animation** | [GSAP 3](https://gsap.com/) + [@studio-freight/lenis](https://github.com/darkroomengineering/lenis) |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) + [TanStack React Query v5](https://tanstack.com/query) |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) + [Lucide Icons](https://lucide.dev/) |
| **Audio** | Native Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`) |
| **Unit Testing** | [Vitest](https://vitest.dev/) + React Testing Library (49 tests) |
| **E2E Testing** | [Playwright](https://playwright.dev/) (Headless Chromium verification) |
| **Quality Gates** | [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) + ESLint 9 |

---

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm 9 or higher

### Installation

```bash
git clone https://github.com/htetarkarhlaing/mythic-seal-concept.git
cd mythic-seal-concept
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Quality & Testing Commands

```bash
# Run unit & integration test suites (Vitest)
npm run test

# Run end-to-end browser tests (Playwright)
npm run test:e2e

# Run ESLint validation
npm run lint

# TypeScript strict type checking
npx tsc --noEmit

# Build production static export
npm run build
```

---

## Project Structure

```
├── e2e/                     # Playwright end-to-end test suites
├── public/                  # Static assets, PWA manifest, and service worker
├── src/
│   ├── app/                 # Next.js App Router (RSC page shells & layouts)
│   ├── components/          # React components (cart, modals, ui, shop)
│   ├── context/             # React Context providers (Cart, Lenis, TanStack)
│   ├── data/                # Strongly-typed data models (roster, matches, news, shop)
│   ├── hooks/               # Custom hooks (countdown, search, telemetry, motion)
│   ├── lib/                 # Web Audio synthesizer, telemetry utilities
│   ├── machines/            # Deterministic Finite State Machines (checkout)
│   ├── queries/             # TanStack Query hooks & query keys
│   ├── schemas/             # Zod validation schemas
│   ├── store/               # Zustand slices store & selectors
│   ├── types/               # TypeScript definitions & nominal branded types
│   └── workers/             # Dedicated Web Workers (timer & search)
├── playwright.config.ts     # Playwright configuration
├── vitest.config.ts         # Vitest test runner configuration
└── next.config.ts           # Next.js configuration (Static SSG export)
```

---

## License

Private repository. All rights reserved by Mythic SEAL Esports Organization.

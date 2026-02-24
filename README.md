# Superteam Academy

Production-ready Learning Management System (LMS) dApp for Solana developer education. Interactive courses, gamification with soulbound XP tokens (Token-2022), on-chain credential NFTs (Metaplex Core), and integrated code editor.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui
- **CMS:** Sanity
- **Wallet:** Unified Wallet Kit (Jupiter)
- **i18n:** next-intl (English, Portuguese, Spanish)
- **Code Editor:** Monaco Editor
- **On-chain:** Anchor, Token-2022, Metaplex Core
- **Testing:** Vitest + Playwright
- **Deploy:** Vercel

## Monorepo Structure

```
superteam-academy/
├── app/                  # Next.js frontend (this project)
├── onchain-academy/      # Anchor program (existing)
├── docs/                 # Documentation
└── scripts/              # Utility scripts
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- Solana CLI (for devnet interaction)

### Setup

```bash
cd app
cp .env.example .env.local
pnpm install
pnpm dev
```

### Environment Variables

```env
NEXT_PUBLIC_PROGRAM_ID=ACADBRCB3zGvo1KSCbkztS33ZNzeBv2d7bqGceti3ucf
NEXT_PUBLIC_XP_MINT=xpXPUjkfk7t4AJF1tYUoyAYxzuM5DhinZWS1WjfjAu3
NEXT_PUBLIC_CLUSTER=devnet
NEXT_PUBLIC_HELIUS_RPC_URL=<your-helius-rpc>
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-sanity-project>
NEXT_PUBLIC_SANITY_DATASET=production
BACKEND_SIGNER_KEYPAIR=<path-to-signer-keypair>
```

## Features

### Core (10 Pages)
- Landing page with hero and animated stats
- Course catalog with filtering and search
- Course detail with module/lesson curriculum
- Split-layout lesson view with Monaco code editor
- Code challenge interface with test cases
- User dashboard with progress and achievements
- User profiles with skill radar chart
- Leaderboard with time-based filters
- Settings (appearance, language, notifications)
- Credential viewer with on-chain verification

### Bonus
- Admin dashboard (course management, analytics)
- E2E test suite (Playwright)
- Community forum
- Onboarding quiz
- PWA support (offline learning)
- Daily coding challenges
- Course creator dashboard
- Deep devnet program integration

## On-Chain Program

Deployed to Solana devnet. 16 instructions, 6 PDA types, 26 error variants, 15 events.

See [docs/INTEGRATION.md](docs/INTEGRATION.md) for frontend integration guide.

## Documentation

- [Design Document (PRD)](docs/plans/2026-02-24-superteam-academy-design.md)
- [Roadmap](ROADMAP.md)
- [Strategy](STRATEGY.md)

## License

MIT

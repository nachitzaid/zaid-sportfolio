# Zaid Immobilier

A real estate marketplace for rentals and sales. V1 focuses on Morocco with a clean SaaS flow: listings, search, messaging, moderation, and in-app payments. International expansion and premium 3D tours are planned for V2.

## Key Features (V1)
- Listing creation for rent/sale
- Photo uploads
- Search and filters
- 1-1 messaging between owner/agent and seeker
- Admin moderation (approve before publish)
- In-app payments with Stripe (cards)
- Anti-circumvention in chat (block + 7 EUR fine)
- Short-term rentals (per night, max 30 days, 100% prepaid)
- Simple stay terms acceptance (short-term)

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Validation**: Zod
- **Auth**: Clerk (planned)
- **Maps**: Leaflet + OpenStreetMap (planned)
- **Payments**: Stripe (V1), PayPal (V2)

## Project Status
- Project scaffolded in `C:\Users\slm\Desktop\zaid project\zaid-immobilier`
- Prisma schema drafted in `prisma/schema.prisma`

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Architecture](#architecture)
- [Database Schema](#database-schema)
- [Payments and Monetization](#payments-and-monetization)
- [Scripts](#scripts)
- [Roadmap](#roadmap)
- [Troubleshooting](#troubleshooting)

## Prerequisites
- Node.js 20+ (recommended)
- npm 9+
- PostgreSQL database (Supabase recommended)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy and update the example file:

```bash
cp .env.example .env
```

Update `DATABASE_URL` and Stripe keys in `.env`.

## Supabase + Clerk Setup (Quick Guide)

### Supabase (Postgres + Storage)
1. Create a new Supabase project.
2. Go to **Project Settings → Database** and copy the **connection string**.
3. Set `DATABASE_URL` in `.env`.
4. Enable **Storage** and create a bucket named `listing-photos`.

### Clerk (Auth)
1. Create a Clerk application.
2. Copy your **Publishable Key** and **Secret Key**.
3. Add them to `.env`:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Set the Clerk **redirect URLs** to your local app:
   - `http://localhost:3000`
5. Pick allowed social providers later (Google is enough for V1).

### 3. Prisma setup

Generate client and run migrations (once DB is ready):

```bash
npx prisma generate
npx prisma migrate dev
```

### 4. Start dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

From `.env.example`:

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Postgres connection string |
| `NEXT_PUBLIC_APP_URL` | Public base URL |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `AUTH_SECRET` | App auth secret (when Auth is wired) |

## Architecture

### Directory Structure

```
zaid-immobilier/
├─ prisma/
│  └─ schema.prisma
├─ src/
│  └─ app/
│     ├─ layout.tsx
│     ├─ page.tsx
│     └─ globals.css
├─ public/
├─ .env.example
├─ prisma.config.ts
└─ package.json
```

### App Flow (V1)
1. Owner/agent creates a listing
2. Admin approves before publish
3. Seekers search and message
4. Payments happen in-app (Stripe)
5. Anti-circumvention checks in chat

## Database Schema

Main models:
- `User` (roles: OWNER_AGENT, SEEKER, ADMIN)
- `Listing` + `ListingPhoto`
- `MessageThread` + `Message`
- `ChatViolation` + `Fine`
- `Plan` + `Subscription`
- `Payment`

See `prisma/schema.prisma` for full definitions.

## Payments and Monetization

- **Rentals**: fixed 30 EUR fee charged to owner/agent
- **Sales**: 2% commission
- **Subscriptions (3 months)**: commission-free + benefits
- **Short-term**: 100% prepaid by guest (per night, max 30 days)

Suggested pricing:
- Morocco (MAD): Starter 199, Pro 499, Agency 999
- International (EUR): Starter 19, Pro 49, Agency 99

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Roadmap

### V1 (Web MVP)
- Listings CRUD
- Photos upload
- Search and filters
- 1-1 messaging
- Admin moderation
- Stripe payments
- Anti-circumvention rules
- Short-term booking flow (per night)
                      
### V2
- Mobile app
- PayPal
- Premium 3D tours (in-house)

## Troubleshooting

### Database connection issues
- Verify `DATABASE_URL` format
- Ensure Supabase project is running

### Prisma migration issues
- Run `npx prisma migrate dev` after schema updates
- If stuck, run `npx prisma generate`

---

## Notes
This README reflects V1 scope only.

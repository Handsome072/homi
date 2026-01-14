# Homiqio

A Next.js application for property rentals, experiences, and services. Originally designed from [Figma](https://www.figma.com/design/axCqGnTgbB6Z3sAnCtjbIs/Int%C3%A9gration-site-Airbnb).

## Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, shadcn/ui
- **Language**: TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (legal)/           # Legal pages (terms, privacy, etc.)
│   ├── (main)/            # Main layout with header/footer
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Shared React components
├── features/              # Feature-specific modules
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── services/              # API services
├── src/app/               # Legacy Vite components (shared)
│   ├── components/        # Reusable UI components
│   ├── context/           # React contexts
│   └── pages/             # Page components
└── types/                 # TypeScript type definitions
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

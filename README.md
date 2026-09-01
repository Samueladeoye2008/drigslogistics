# Drigroamers Logistics

A [TanStack Start](https://tanstack.com/start) app built with React 19, Tailwind CSS 4, and shadcn/ui (Radix primitives).

## Architecture

```mermaid
flowchart LR
    Browser["Browser"] --> Router["TanStack Router"]
    Router --> Root["__root.tsx<br/>(layout, error boundary)"]
    Root --> Index["routes/index.tsx<br/>(landing page)"]
    Index --> UI["components/ui<br/>(shadcn/ui)"]
    Index --> Assets["assets<br/>(images, logos)"]
    Root --> Server["server.ts<br/>(SSR entry)"]
    Server --> Nitro["Nitro"]
```

## Request Flow

```mermaid
sequenceDiagram
    participant U as User
    participant V as Vite/Nitro Server
    participant R as TanStack Router
    participant P as index.tsx (Page)

    U->>V: GET /
    V->>R: Render root route
    R->>P: Match route, render page
    P-->>R: HTML + hydration data
    R-->>V: SSR output
    V-->>U: Response
    U->>P: Hydrate + interact (forms, nav)
```

## Tech Stack

- **Framework:** TanStack Start + TanStack Router
- **UI:** React 19, Tailwind CSS 4, shadcn/ui, Radix UI, lucide-react
- **Forms/data:** react-hook-form, zod, @tanstack/react-query
- **Tooling:** Vite, ESLint, Prettier, TypeScript

## Prerequisites

- [Bun](https://bun.sh) (or Node.js if you prefer npm/pnpm)

## Getting Started

```bash
bun install
bun run dev
```

The app will be available at `http://localhost:3000` (default Vite dev port).

## Scripts

| Command             | Description                        |
| -------------------- | ----------------------------------- |
| `bun run dev`         | Start the dev server                |
| `bun run build`       | Production build                    |
| `bun run build:dev`   | Development-mode build              |
| `bun run preview`     | Preview the production build        |
| `bun run lint`        | Run ESLint                          |
| `bun run format`      | Format code with Prettier           |

## Project Structure

```mermaid
flowchart TD
    A[src] --> B[routes]
    A --> C["components/ui"]
    A --> D[hooks]
    A --> E[lib]
    A --> F[assets]
    A --> G["server.ts"]
    A --> H["styles.css"]
    B --> B1["__root.tsx"]
    B --> B2["index.tsx"]
```
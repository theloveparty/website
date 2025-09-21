# The Love Party Website

A Next.js website for The Love Party - mixing tunes, talking about utopia.

## Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **React**: 19.1.0
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 with custom theming
- **Build Tool**: Turbopack for faster development and builds
- **Package Manager**: pnpm
- **Fonts**: Geist Sans & Geist Mono from Google Fonts

## Package Management

This project uses **pnpm** as the package manager. Key commands:

```bash
pnpm install          # Install dependencies
pnpm dev              # Start development server with Turbopack
pnpm build            # Build for production with Turbopack
pnpm start            # Start production server
```

## SVG Support

Custom webpack configuration enables importing SVG files as React components:

```typescript
// next.config.ts
webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })
  return config
}
```

Usage in components:
```tsx
import Logo from "@/assets/theloveparty-logo.svg"
import Banner from "@/assets/theloveparty-banner.svg"

<Logo width={100} height={50} />
```

## Icon System

The project is configured to use **Lucide icons**. Install when needed:

```bash
pnpm add lucide-react
```

Usage example:
```tsx
import { Heart, Music, Users } from "lucide-react"

<Heart className="w-6 h-6 text-red-500" />
```

## Styling with Tailwind CSS v4

- **Configuration**: Uses Tailwind CSS v4 with PostCSS plugin
- **Custom Theme**: Defined in `src/app/globals.css` with CSS variables
- **Dark Mode**: Automatic dark mode support based on system preference
- **Custom Colors**: `--color-background`, `--color-foreground`, `--color-foreground-muted`

Theme variables:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Home page component
└── assets/
    ├── theloveparty-logo.svg
    └── theloveparty-banner.svg
```

## Development Guidelines

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)
- All components should be typed

### Code Style
- Use TypeScript for all new files
- Follow existing component patterns
- Minimal dependencies approach
- Prefer built-in Next.js features

### Image Optimization
- Use Next.js `Image` component for raster images
- SVG files imported as React components
- Configured image domains: `localhost`, `theloveparty.com`

## Key Features

1. **Fast Development**: Turbopack for instant feedback
2. **Modern React**: Latest React 19 features
3. **Type Safety**: Full TypeScript coverage
4. **Responsive Design**: Tailwind CSS utilities
5. **SVG Components**: Direct SVG imports as React components
6. **Optimized Fonts**: Google Fonts with variable font loading

## Environment Configuration

- **Node.js**: ES2017 target
- **Module Resolution**: Bundler mode for modern tooling
- **Build Tool**: Next.js with Turbopack optimization
- **Development**: Hot reload with fast refresh

## Notes for AI Assistants

1. **Minimal Dependencies**: Only add new dependencies when absolutely necessary
2. **SVG First**: Use SVG components for icons and graphics when possible
3. **Tailwind Classes**: Prefer Tailwind utilities over custom CSS
4. **TypeScript**: All new code should be properly typed
5. **pnpm**: Always use pnpm commands, not npm or yarn
6. **Turbopack**: Development and build commands use `--turbopack` flag
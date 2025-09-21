# The Love Party Website

A Next.js website for The Love Party - mixing tunes, talking about utopia.

## Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **React**: 19.1.0
- **TypeScript**: Strict mode enabled
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS v4 with custom theming
- **Theme Management**: next-themes for dark/light mode
- **Build Tool**: Turbopack for faster development and builds
- **Package Manager**: pnpm
- **Icons**: Lucide React icons
- **Utilities**: clsx, tailwind-merge, class-variance-authority
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

## shadcn/ui Components

The project uses **shadcn/ui** for UI components with the following configuration:

- **Style**: New York variant
- **Base Color**: Neutral
- **Icon Library**: Lucide React
- **CSS Variables**: Enabled for theming

### Adding Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dropdown-menu
```

### Usage Example

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

<Button variant="default" size="lg">
  Click me
</Button>

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

## Icon System

The project uses **Lucide React icons** (already installed):

```tsx
import { Heart, Music, Users, Moon, Sun } from "lucide-react"

<Heart className="w-6 h-6 text-primary" />
<Music className="w-4 h-4" />
```

## Theme System

### Dark/Light Mode
The project uses `next-themes` for theme management with manual toggle support:

```tsx
import { ThemeProvider } from "@/components/theme-provider"

// In layout.tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
  {children}
</ThemeProvider>
```

### Comprehensive Color Palette
Custom color system defined in `src/app/globals.css`:

**Light Theme Colors:**
- Background: `#f6e6ee` (soft pink)
- Primary: `#d04f99` (vibrant pink)
- Secondary: `#8acfd1` (mint blue)
- Accent: `#fbe2a7` (warm yellow)
- Card: `#fdedc9` (cream)

**Dark Theme Colors:**
- Background: `#101828` (dark blue-gray)
- Primary: `#fbe2a7` (warm yellow)
- Secondary: `#e4a2b1` (soft pink)
- Accent: `#c67b96` (muted rose)

### Custom Shadows
Unique shadow system with colored shadows using the primary color:
```css
--shadow-sm: 3px 3px 0px 0px hsl(325.78 58.18% 56.86% / 1.00);
--shadow-md: 3px 3px 0px 0px hsl(325.78 58.18% 56.86% / 1.00), 3px 2px 4px -1px hsl(325.78 58.18% 56.86% / 1.00);
```

### Typography
- **Sans**: Poppins (primary)
- **Serif**: Lora (accent)
- **Mono**: Fira Code (code)

### Tailwind CSS v4 Integration
- **tw-animate-css**: Enhanced animations
- **CSS Variables**: Full theme system integration
- **Custom Variants**: Dark mode with `.dark` class

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles, theme variables, Tailwind imports
│   ├── layout.tsx          # Root layout with ThemeProvider and fonts
│   └── page.tsx            # Home page component
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── dropdown-menu.tsx
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── dark-mode-toggle.tsx # Theme toggle component
└── assets/
    ├── theloveparty-logo.svg
    └── theloveparty-banner.svg

components.json             # shadcn/ui configuration
```

## Development Guidelines

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)
- All components should be typed

### Code Style
- Use TypeScript for all new files
- Follow existing component patterns
- Use shadcn/ui components for consistent design
- Minimal dependencies approach
- Prefer built-in Next.js features

### Component Guidelines
- Use shadcn/ui components: `Button`, `Card`, `DropdownMenu`
- Implement proper TypeScript interfaces
- Use className with clsx/tailwind-merge for conditional styling
- Follow the theme system color palette

### Image Optimization
- Use Next.js `Image` component for raster images
- SVG files imported as React components
- Configured image domains: `localhost`, `theloveparty.com`

## Key Features

1. **Fast Development**: Turbopack for instant feedback
2. **Modern React**: Latest React 19 features
3. **Type Safety**: Full TypeScript coverage
4. **UI Components**: shadcn/ui with Radix UI primitives
5. **Theme System**: Dark/light mode with comprehensive color palette
6. **Responsive Design**: Tailwind CSS utilities with custom theming
7. **SVG Components**: Direct SVG imports as React components
8. **Enhanced Animations**: tw-animate-css integration
9. **Optimized Fonts**: Google Fonts with variable font loading

## Environment Configuration

- **Node.js**: ES2017 target
- **Module Resolution**: Bundler mode for modern tooling
- **Build Tool**: Next.js with Turbopack optimization
- **Development**: Hot reload with fast refresh

## Notes for AI Assistants

1. **Component Library**: Use shadcn/ui components (`Button`, `Card`, `DropdownMenu`) for UI elements
2. **Theme System**: Follow the established color palette and use semantic color names (`primary`, `secondary`, `accent`)
3. **Dark Mode**: Use the ThemeProvider and theme toggle patterns already established
4. **Minimal Dependencies**: Only add new dependencies when absolutely necessary
5. **SVG First**: Use SVG components for icons and graphics when possible
6. **Tailwind Classes**: Prefer Tailwind utilities over custom CSS, use theme variables
7. **TypeScript**: All new code should be properly typed with interfaces
8. **pnpm**: Always use pnpm commands, not npm or yarn
9. **Turbopack**: Development and build commands use `--turbopack` flag
10. **Animations**: Use tw-animate-css classes for enhanced animations

### Adding New shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

### Theme Colors Usage
```tsx
// Use semantic colors from the theme
<div className="bg-primary text-primary-foreground">
<Button variant="secondary">Secondary Action</Button>
<Card className="border-accent">
```
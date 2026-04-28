# Personal Portfolio

> A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and a clean professional design. Sugestions in github issues :)

---

## Technologies

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Features

| Feature | Description |
|---------|-------------|
| **Theme Toggle** | Dark/Light mode with smooth transitions |
| **Responsive Design** | Mobile-first approach for all devices |
| **Smooth Animations** | Staggered reveal animations using Framer Motion |
| **Navigation** | Smooth scroll navigation with active state |
| **Contact Form** | Interactive contact section |
| **SEO Optimized** | Robots.txt and sitemap.xml included |

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

---

##  Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # SEO robots config
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── about.tsx
│   ├── brand-icons.tsx
│   ├── contact.tsx
│   ├── education.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── nav.tsx
│   ├── projects.tsx
│   ├── reveal.tsx
│   ├── section-heading.tsx
│   ├── skills.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/                   # Utilities & data
│   └── data.ts
├── public/                # Static assets
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

<div align="center">

**Built with Next.js**

</div>

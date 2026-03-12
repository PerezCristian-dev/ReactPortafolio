# Cristian Perez — Developer Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and DaisyUI. Features a Swiper-powered projects carousel, animated sections via Framer Motion, and a working contact form via EmailJS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS** + **DaisyUI** — styling and UI components
- **Framer Motion** — animations
- **Swiper** — touch-enabled projects carousel with keyboard navigation
- **EmailJS** — serverless contact form

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can find these values in your [EmailJS dashboard](https://dashboard.emailjs.com).

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── body/
│   │   ├── About.tsx
│   │   ├── Contact.tsx       # EmailJS contact form
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx      # Swiper carousel
│   │   ├── Services.tsx
│   │   └── Skills.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── config/
│   └── env.ts                # Typed env var exports
├── data/
│   └── data.js               # Projects, skills, experience, education
└── index.css                 # Global styles + Swiper theme vars
```

## Features

- **Projects carousel** — swipe/drag on mobile, arrow keys, dot pagination
- **Animated sections** — entrance animations powered by Framer Motion
- **Contact form** — sends email directly via EmailJS (no backend required)
- **Responsive design** — mobile-first layout using Tailwind CSS
- **Dark/light theme** — DaisyUI theme support

## License

MIT

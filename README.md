# 🚀 Portfolio Website

> Modern portfolio website showcasing full-stack projects with smooth animations and interactive UI. Built with cutting-edge web technologies.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://your-portfolio-url.com)
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

- **🎨 Modern Design** - Sleek, professional UI with glassmorphism effects and smooth animations
- **⚡ High Performance** - Built with Vite for lightning-fast development and optimized builds
- **🎭 GSAP Animations** - Smooth scroll-triggered animations and pinned sections
- **📱 Fully Responsive** - Seamless experience across all devices
- **🎯 Custom Cursor** - Interactive cursor that enhances user engagement
- **🌙 Dark Theme** - Eye-friendly dark color scheme with lime accents
- **♿ Accessible** - WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

### Core
- **React 19.2** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling

### Animation & Graphics
- **GSAP** - Professional-grade animation library
- **ScrollTrigger** - Scroll-based animations

### UI Components
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful & consistent icons

### Form Handling
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JerinKJoseph27/Portfolio.git

# Navigate to project directory
cd Portfolio/app

# Install dependencies
npm install

# Start development server
npm run dev

📦 Build for Production
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

📂 Project Structure
app/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Radix UI components
│   │   ├── CustomCursor.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── Navigation.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── data/           # Portfolio data
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── types/          # TypeScript definitions
│   └── App.tsx
├── public/             # Static assets
└── package.json

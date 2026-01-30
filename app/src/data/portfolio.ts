import type { Project, SkillsData, Metadata } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    name: "OSVERSE",
    tagline: "Interactive AR Platform for CPU Scheduling Algorithms",
    description: "An interactive educational web platform featuring an AR-enabled visualization system for 12 CPU scheduling algorithms. Designed to enhance conceptual understanding for students through real-time Gantt charts and immersive 3D animations.",
    category: "Education & AR",
    featured: true,
    liveUrl: "https://osverse-two.vercel.app",
    githubUrl: "https://github.com/JerinKJoseph27/OSVERSE",
    stars: 1,
    highlights: [
      "12 different CPU scheduling algorithm visualizations (FCFS, SJF, Round Robin, Priority, etc.)",
      "Mobile-optimized Augmented Reality experience with WebXR",
      "Real-time Gantt chart generation and interactive process management",
      "3D model visualization with Three.js and Google's model-viewer",
      "QR code sharing system for seamless mobile AR experiences",
      "Cross-platform support for iOS and Android devices"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "React"],
      graphics: ["Three.js", "model-viewer", "WebXR API"],
      styling: ["CSS3", "Tailwind CSS"],
      deployment: ["Vercel"]
    },
    technologies: ["Next.js", "TypeScript", "React", "Three.js", "WebXR", "AR", "3D Graphics", "Tailwind CSS"],
    status: "Live",
    date: "November 2025",
    image: "/project-osverse.jpg"
  },
  {
    id: 2,
    name: "CinemaMax",
    tagline: "Full-Stack Movie Ticket Booking Platform",
    description: "A comprehensive web-based movie ticket booking system with real-time seat selection, customer validation, and automated PDF ticket generation. Features a complete end-to-end cinema operation solution from browsing to ticket download.",
    category: "Web Application",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/JerinKJoseph27/Movie-Booking-App",
    stars: 0,
    highlights: [
      "Multi-movie management with individual seat layouts (14 rows × 20 seats)",
      "Real-time interactive seat selection with instant availability updates",
      "Smart validation system for Indian phone numbers and customer names",
      "Automated professional PDF ticket generation with ReportLab",
      "Unique timestamped booking ID system",
      "Dynamic pricing calculation (₹150 per seat)",
      "Responsive design working seamlessly on mobile and desktop"
    ],
    techStack: {
      backend: ["Python", "Flask 3.0+"],
      database: ["MySQL 8.0+", "MySQL Connector"],
      pdfGeneration: ["ReportLab"],
      frontend: ["HTML5", "CSS3", "Vanilla JavaScript"],
      design: ["Modern Gradients", "CSS Animations"]
    },
    technologies: ["Python", "Flask", "MySQL", "ReportLab", "HTML5", "CSS3", "JavaScript"],
    status: "Completed",
    date: "January 2026",
    license: "MIT",
    image: "/project-cinemax.jpg"
  },
  {
    id: 3,
    name: "SkyTrack Flight Explorer",
    tagline: "Real-Time Flight Tracking & Watchlist Application",
    description: "A comprehensive flight tracking and exploration application that enables users to search for flights, view detailed flight information in real-time, and maintain a personalized watchlist of tracked flights with status monitoring.",
    category: "Web Application",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/JerinKJoseph27/SkyTrack-Flight-Explorer",
    stars: 1,
    highlights: [
      "Advanced flight search with multiple filter options",
      "Real-time flight status tracking (On Time, Delayed, Cancelled, Arrived)",
      "Personal watchlist system for flight tracking",
      "Interactive statistics dashboard with status distribution",
      "Unique animated UI with moving cloud backgrounds",
      "Dark/Light theme toggle with persistent preferences",
      "Fully responsive design optimized for all devices"
    ],
    techStack: {
      frontend: ["React", "TypeScript"],
      ui: ["React Icons", "Custom Components"],
      stateManagement: ["React Context API", "WatchlistContext", "ThemeContext"],
      styling: ["CSS3", "Tailwind CSS"],
      buildTool: ["Vite"]
    },
    technologies: ["React", "TypeScript", "Context API", "Tailwind CSS", "Vite"],
    status: "Completed",
    date: "November 2025",
    image: "/project-skytrack.jpg"
  },
  {
    id: 4,
    name: "Akasa Air Data Pipeline",
    tagline: "ETL Pipeline for Customer-Order Analytics",
    description: "A robust data ingestion and analysis pipeline for processing customer-order details with comprehensive KPI calculations. Features automated batch processing, MySQL integration, and intelligent insights generation with CSV exports.",
    category: "Data Engineering",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/JerinKJoseph27/Akasa-Air-Task",
    stars: 1,
    highlights: [
      "Automated batch data ingestion from CSV files with configurable batch sizes",
      "Complete ETL pipeline for customer and order data processing",
      "KPI Analysis: Repeat customer identification and segmentation",
      "Monthly order trends and revenue analysis",
      "Regional revenue breakdown and insights",
      "Automated CSV report generation for business intelligence",
      "Environment-based secure configuration management"
    ],
    techStack: {
      language: ["Python 3.8+"],
      database: ["MySQL", "PyMySQL"],
      orm: ["SQLAlchemy"],
      dataProcessing: ["Pandas"],
      automation: ["PowerShell"],
      configuration: ["python-dotenv"]
    },
    technologies: ["Python", "MySQL", "SQLAlchemy", "Pandas", "ETL", "Data Analytics"],
    status: "Completed",
    date: "November 2025",
    image: "/project-akasa.jpg"
  }
];

export const skillsData: SkillsData = {
  languages: ["Python", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  frameworks: {
    backend: ["Flask", "Django", "Node.js"],
    frontend: ["React", "Next.js", "Vue.js"]
  },
  databases: ["MySQL", "MongoDB"],
  specializations: [
    "Full-Stack Web Development",
    "Data Pipeline & ETL",
    "3D Visualization & Augmented Reality",
    "Database Design & Optimization",
    "Real-time Applications"
  ],
  tools: [
    "Three.js",
    "WebXR",
    "SQLAlchemy",
    "Pandas",
    "ReportLab",
    "Git",
    "Vercel",
    "Tailwind CSS"
  ]
};

export const metadata: Metadata = {
  totalProjects: 4,
  featuredProjects: 3,
  lastUpdated: "2026-01-29",
  githubUsername: "JerinKJoseph27",
  linkedIn: "https://www.linkedin.com/in/jerin-k-joseph-80447021b/"
};

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);
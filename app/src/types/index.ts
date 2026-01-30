export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  category: string;
  featured: boolean;
  liveUrl: string | null;
  githubUrl: string;
  stars: number;
  highlights: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    graphics?: string[];
    styling?: string[];
    deployment?: string[];
    pdfGeneration?: string[];
    design?: string[];
    language?: string[];
    dataProcessing?: string[];
    automation?: string[];
    configuration?: string[];
    ui?: string[];
    stateManagement?: string[];
    buildTool?: string[];
    orm?: string[];
  };
  technologies: string[];
  status: string;
  date: string;
  license?: string;
  image: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface SkillsData {
  languages: string[];
  frameworks: {
    backend: string[];
    frontend: string[];
  };
  databases: string[];
  specializations: string[];
  tools: string[];
}

export interface Metadata {
  totalProjects: number;
  featuredProjects: number;
  lastUpdated: string;
  githubUsername: string;
  linkedIn: string;
}
export interface HeroContent {
  name: string;
  title: string;
  tagline: string;
  ctaProjects: string;
  ctaContact: string;
}

export interface AboutContent {
  title: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
}

export interface ContactContent {
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: ContactContent;
}
// ─── Portfolio data shape ────────────────────────────────────────────────────

export interface Meta {
  name: string;
  initials: string;
  role: string;
  title: string;
  bio: string;
  location: string;
  avatar: string;
  resume_url: string;
  contact_tagline: string;
}

export interface SkillGroup {
  label: string;
  tags: string[];
}

export interface Project {
  icon: string;
  name: string;
  desc: string;
  stack: string[];
  date?: string;
  link?: string;
  company?: string;
}

export interface Projects {
  personal: Project[];
  professional: Project[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface BlogPost {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  link?: string;
}

export interface Contact {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface PortfolioData {
  meta: Meta;
  tech_highlights: string[];
  skills: SkillGroup[];
  projects: Projects;
  experience: Experience[];
  blogs: BlogPost[];
  contact: Contact;
}

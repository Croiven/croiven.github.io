export interface SocialMedia {
  platform: string;
  url: string;
  icon?: string;
}

export interface CoreDetailsData {
  name: string;
  title: string;
  image: string;
  email: string;
  phone?: string;
  location?: string;
  socialMedia: SocialMedia[];
  bio?: string;
}

// Work Experience
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string; // If undefined, it's current position
  description: string;
  achievements?: string[];
  technologies?: string[];
}

// Education
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  gpa?: string;
  honors?: string[];
}

// Volunteering
export interface Volunteering {
  id: string;
  organization: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements?: string[];
}

// Skills
export interface SkillCategory {
  category: string;
  skills: string[];
}

// Projects
export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  startDate?: string | null;
  endDate?: string | null;
  url?: string | null;
  githubUrl?: string | null;
  image?: string | null;
  highlights?: string[];
}


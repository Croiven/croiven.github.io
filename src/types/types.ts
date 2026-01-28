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
  location?: string | null;
  startDate: string;
  endDate?: string | null; // If undefined or null, it's current position
  description: string;
  achievements?: string[] | null;
  technologies?: string[] | null;
}

// Education
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string | null;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
  gpa?: string | null;
  honors?: string[] | null;
}

// Volunteering
export interface Volunteering {
  id: string;
  organization: string;
  role: string;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  description: string;
  achievements?: string[] | null;
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

// Certifications
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string | null;
  credentialId?: string | null;
  credentialUrl?: string | null;
}


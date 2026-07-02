export interface Experience {
  role: string;
  company: string;
  year: string;
  current?: boolean;
}

export interface TechStackCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tag?: string;
  category?: string;
  overview?: string;
  roles?: string[];
  features?: string[];
  techStack?: string[];
  images?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  image?: string;
  description?: string;
  year?: string;
  category?: string;
  featured?: boolean;
}

export interface Recommendation {
  text: string;
  name: string;
  title: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

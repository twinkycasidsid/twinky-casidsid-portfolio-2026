import { Experience, TechStackCategory, Project, Certification, Recommendation, SocialLink } from './types.ts';

export const EXPERIENCES: Experience[] = [
  { role: "IT Intern", company: "Lifewood Data Technology", year: "January 2026 - May 2026", current: true },
  { role: "Interviewer", company: "Public Employment Service Office (PESO)", year: "2020" }
];

export const TECH_STACK: TechStackCategory[] = [
  {
    category: "Frontend",
    skills: ["JavaScript", "React.js", "React Native", "Expo", "Tailwind CSS", "Figma"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "C#", ".NET", "PHP", "Laravel", "SQL"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Supabase", "Firebase", "Android Studio"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "The Last Ritual",
    category: "GAME DEVELOPMENT",
    description: "A horror game built in Unity 3D for our game development project.",
    overview: "A psychological horror experience that challenges players to survive a dark ritual while solving cryptic puzzles in a hauntingly detailed 3D environment.",
    features: [
      "Procedural jump scares for unique play sessions",
      "Dynamic lighting system built with Unity HDRP",
      "Immersive spatial audio for maximum atmosphere"
    ],
    techStack: ["UNITY 3D", "C#", "HDRP", "BLENDER"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
    ],
    link: "Unity Game"
  },
  {
    title: "WisEnergy",
    category: "IOT & AI",
    description: "AI & IoT application for real-time appliance energy monitoring and optimization.",
    overview: "An integrated software-hardware solution that helps households monitor energy consumption of specific appliances and provides AI-driven recommendations for cost reduction.",
    features: [
      "Real-time energy consumption tracking via IoT sensors",
      "AI-driven predictive analytics for energy bills",
      "Cross-platform optimization for React Native"
    ],
    techStack: ["REACT", "IOT", "PYTHON", "TENSORFLOW"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
    ],
    link: "Capstone Project"
  },
  {
    title: "Open Heart",
    category: "AI & WELLNESS",
    description: "AI-powered emotional support chatbot using Gemini API and Supabase.",
    overview: "A safe space for emotional expression where users can engage with a compassionate AI assistant that provides mindful responses and wellness resources.",
    features: [
      "Sentiment-aware conversation using Google Gemini LLM",
      "Secure and private message history on Supabase",
      "Resource library for mental health support"
    ],
    techStack: ["REACT", "GEMINI API", "SUPABASE", "TAILWIND"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
    ],
    link: "November 2025"
  },
  {
    title: "CodeyGo",
    category: "MOBILE LEARNING",
    description: "Gamified mobile learning application for children to learn coding.",
    overview: "Making code education accessible and fun for children through an interactive world where learning concepts unlocks new stories and levels.",
    features: [
      "Gamified curriculum covering core CS concepts",
      "Interactive coding puzzles designed for touchscreens",
      "Progress tracking for parents and educators"
    ],
    techStack: ["REACT NATIVE", "EXPO", "FIREBASE"],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
    ],
    link: "IBPAP Hackathon"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    title: "IBM SkillsBuild: AI Fundamentals", 
    issuer: "IBM", 
    year: "2025",
    description: "Professional credentials and training in AI, Prompt Engineering, and IT Resilience.",
    image: "https://images.unsplash.com/photo-1517245385169-46b8b23ad391?w=1200&q=80" 
  },
  { 
    title: "Cisco: Ethical Hacker", 
    issuer: "Cisco", 
    year: "2025",
    description: "Certification covering network security, penetration testing, and ethical hacking methodologies.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" 
  },
  { 
    title: "11th ICT Congress 3rd Placer", 
    issuer: "ICT Congress", 
    year: "2025",
    description: "Awarded 3rd place in the regional ICT Congress competition for software innovation.",
    image: "https://images.unsplash.com/photo-1523240715639-960413009774?w=1200&q=80"
  },
  { 
    title: "Consistent Dean's Lister", 
    issuer: "UCLM", 
    year: "2023-2025",
    description: "Recognized for academic excellence and maintaining high scholastic standards.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=1200&q=80"
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    text: "Twinky is a highly motivated student with a strong foundation in UI/UX and AI. Her leadership in capstone projects is exceptional.",
    name: "Dr. Janette Q. Tanquis",
    title: "Dean, College of Computer Studies"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/twinky-casidsid/", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/twinkycasidsid", icon: "Github" },
  { name: "Instagram", url: "https://www.instagram.com/str.winx/", icon: "Instagram" },
  { name: "Facebook", url: "https://www.facebook.com/winksssxx", icon: "Facebook" }
];

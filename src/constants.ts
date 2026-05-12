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
    title: "Top 3 Best in Apps Development", 
    issuer: "CASIDSID", 
    year: "2025",
    description: "Recognized for outstanding performance and practical application development skills.",
    image: "/certificates/CASIDSID, TWINKY_Top3BestAPPSDEV.jpg",
    featured: true
  },
  { 
    title: "Top 20 Dean's List", 
    issuer: "CASIDSID", 
    year: "2025",
    description: "Academic recognition for consistent performance and strong scholastic standing.",
    image: "/certificates/CASIDSID, TWINKY_Top20DeansList.jpg",
    featured: true
  },
  { 
    title: "IBM SkillsBuild: AI Fundamentals", 
    issuer: "IBM SkillsBuild", 
    year: "2025",
    description: "Professional credentials and training in AI, Prompt Engineering, and IT Resilience.",
    image: "/certificates/CASIDSID, TWINKY_IBMSkillsBuild-AIFundamentals.png",
    featured: true
  },
  { 
    title: "PSITS 2nd Year Representative", 
    issuer: "PSITS", 
    year: "2025",
    description: "Leadership recognition for serving as the second-year representative in PSITS.",
    image: "/certificates/CASIDSID, TWINKY_PSITS2ndYearRep.jpg",
    featured: true
  },
  { 
    title: "11th ICT Congress 3rd Place in Networking", 
    issuer: "ICT Congress", 
    year: "2025",
    description: "Awarded third place in a regional ICT competition focused on networking.",
    image: "/certificates/CASIDSID, TWINKY_3rdplaceNetworking.jpg"
  },
  { 
    title: "Canva Design Certification", 
    issuer: "Canva", 
    year: "2025",
    description: "Training certificate covering practical visual design and content creation workflows.",
    image: "/certificates/CASIDSID, TWINKY_Canva.jpg"
  },
  { 
    title: "CCNA 7", 
    issuer: "Cisco", 
    year: "2025",
    description: "Networking coursework and certification aligned with Cisco CCNA learning outcomes.",
    image: "/certificates/CASIDSID, TWINKY_CCNA7.jpg"
  },
  { 
    title: "C# Workshop", 
    issuer: "CASIDSID", 
    year: "2025",
    description: "Workshop certificate covering core C# development concepts and implementation practice.",
    image: "/certificates/CASIDSID, TWINKY_CSharpWorkshop.png"
  },
  { 
    title: "College Days COP Networking", 
    issuer: "CASIDSID", 
    year: "2025",
    description: "Recognition for participation in college networking activities and collaborative events.",
    image: "/certificates/CASIDSID, TWINKY_COPNetworkingCollegeDays.jpg"
  },
  { 
    title: "Cisco Ethical Hacker", 
    issuer: "Cisco", 
    year: "2025",
    description: "Certification covering network security, penetration testing, and ethical hacking methodologies.",
    image: "/certificates/CASIDSID, TWINKY_EthicalHacker.jpg"
  },
  { 
    title: "IBM SkillsBuild: Getting Started with AI", 
    issuer: "IBM SkillsBuild", 
    year: "2025",
    description: "Foundational training on AI concepts, applications, and introductory workflows.",
    image: "/certificates/CASIDSID, TWINKY_IBMSkillsBuild-GettingStartedWithAI.png"
  },
  { 
    title: "IBM SkillsBuild: Working in a Digital World", 
    issuer: "IBM SkillsBuild", 
    year: "2025",
    description: "Certificate covering workplace readiness, productivity, and digital collaboration skills.",
    image: "/certificates/CASIDSID, TWINKY_IBMSkillsBuild-WorkingInADigitalWord.png"
  },
  { 
    title: "Tech Talk: Database Programming", 
    issuer: "CASIDSID", 
    year: "2025",
    description: "Seminar certificate focused on database programming concepts and practical usage.",
    image: "/certificates/CASIDSID, TWINKY_TECHTalkDBProgramming.jpg"
  },
  { 
    title: "Tech Talk: Networking", 
    issuer: "CASIDSID", 
    year: "2025",
    description: "Seminar certificate covering networking fundamentals and industry practices.",
    image: "/certificates/CASIDSID, TWINKY_TECHTalkNetworking.jpg"
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

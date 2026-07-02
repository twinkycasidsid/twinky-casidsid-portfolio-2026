import { Experience, TechStackCategory, Project, Certification, SocialLink } from './types.ts';

export const EXPERIENCES: Experience[] = [
  { role: "AI Executive Intern", company: "Lifewood Data Technology - Philippines, Cebu City", year: "Jan 2026 - May 2026", current: true },
  { role: "Interviewer", company: "Public Employment Service Office (PESO), Mandaue City", year: "Apr 2020 - Jun 2020" }
];

export const TECH_STACK: TechStackCategory[] = [
  {
    category: "Frontend",
    skills: ["Next.js", "React.js", "React Native", "TypeScript", "JavaScript", "Expo", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Java", "C#", ".NET", "FastAPI", "PHP", "Laravel", "SQL"]
  },
  {
    category: "Database",
    skills: ["Microsoft SQL Server", "MySQL", "Firebase", "Supabase"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Android Studio", "Unity", "Figma", "VS Code", "Visual Studio", "Google Colab", "Microsoft Office", "Google Workspace"]
  }
];

const OPEN_HEART_IMAGES = [
  "/projects/open-heart/oh1.png",
  "/projects/open-heart/oh2.png",
  "/projects/open-heart/oh3.png",
  "/projects/open-heart/oh4.png",
  "/projects/open-heart/oh5.png",
  "/projects/open-heart/oh6.png",
  "/projects/open-heart/oh7.png"
];

const THE_LAST_RITUAL_IMAGES = [
  "/projects/the-last-ritual/tlr1.png",
  "/projects/the-last-ritual/tlr2.png",
  "/projects/the-last-ritual/tlr3.png",
  "/projects/the-last-ritual/tlr4.png",
  "/projects/the-last-ritual/tlr5.png",
  "/projects/the-last-ritual/tlr6.png",
  "/projects/the-last-ritual/tlr7.png",
  "/projects/the-last-ritual/tlr8.png",
  "/projects/the-last-ritual/tlr9.png"
];

const WISENERGY_IMAGES = [
  "/projects/wisenergy/wis1.png",
  "/projects/wisenergy/wis2.png"
];

const PASS_IT_IMAGES = [
  "/projects/pass-it/pass1.png",
  "/projects/pass-it/pass2.png",
  "/projects/pass-it/pass3.png",
  "/projects/pass-it/pass4.png",
  "/projects/pass-it/pass5.png",
  "/projects/pass-it/pass6.png",
  "/projects/pass-it/pass7.png",
  "/projects/pass-it/pass8.png",
  "/projects/pass-it/pass9.png",
  "/projects/pass-it/pass10.png",
  "/projects/pass-it/pass11.png"
];

const SCHOLARTRACK_IMAGES = [
  "/projects/scholartrack/sch1.jpg"
];

export const PROJECTS: Project[] = [
  {
    title: "Open Heart",
    category: "AI & WELLNESS",
    description: "An AI-powered emotional support chatbot built with Gemini API and Supabase.",
    overview: "A safe space for emotional expression where users can engage with a compassionate AI assistant that provides mindful responses and wellness resources.",
    features: [
      "Sentiment-aware conversation using Google Gemini LLM",
      "Secure and private message history on Supabase",
      "Resource library for mental health support"
    ],
    techStack: ["REACT", "GEMINI API", "SUPABASE", "TAILWIND CSS"],
    images: OPEN_HEART_IMAGES,
    link: "AI Wellness Project"
  },
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
    images: THE_LAST_RITUAL_IMAGES,
    link: "Unity Game"
  },
  {
    title: "WisEnergy",
    category: "IOT & AI",
    description: "An AI and IoT application for real-time appliance energy monitoring and optimization.",
    overview: "An integrated software-hardware solution that helps households monitor energy consumption of specific appliances and provides AI-driven recommendations for cost reduction.",
    features: [
      "Real-time energy consumption tracking via IoT sensors",
      "AI-driven predictive analytics for energy bills",
      "Cross-platform optimization for React Native"
    ],
    techStack: ["REACT NATIVE", "IOT", "PYTHON", "FASTAPI"],
    images: WISENERGY_IMAGES,
    link: "Capstone Project"
  },
  {
    title: "Pass It",
    category: "MOBILE UI/UX",
    description: "A mobile-first pass management concept focused on streamlined flows and a polished user experience.",
    overview: "A UI/UX-driven mobile project designed to make digital pass access feel simple, organized, and intuitive across key screens and user actions.",
    features: [
      "User-friendly mobile flows built around clarity and ease of use",
      "Structured pass screens that keep important actions easy to reach",
      "Consistent visual design focused on readability and responsive layouts"
    ],
    techStack: ["FIGMA", "UI/UX DESIGN", "MOBILE PROTOTYPING", "USER FLOW DESIGN"],
    images: PASS_IT_IMAGES,
    link: "UI/UX Project"
  },
  {
    title: "ScholarTrack",
    category: "DESKTOP SYSTEM",
    description: "A C# desktop application that automates scholar attendance monitoring and data storage.",
    overview: "A desktop system built with C# and MS Access that replaces manual logbooks with a more reliable attendance tracking workflow for scholars.",
    features: [
      "Time-in and time-out attendance recording",
      "Local MS Access data storage for school records",
      "Cleaner workflow than manual logbooks"
    ],
    techStack: ["C#", ".NET", "MS ACCESS", "DESKTOP UI"],
    images: SCHOLARTRACK_IMAGES,
    link: "Application Development"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    title: "Outstanding Capstone Project", 
    issuer: "University of Cebu - Lapu-Lapu & Mandaue", 
    year: "June 2026",
    description: "Recognized for outstanding performance in the capstone project, reflecting strong technical execution, collaboration, and presentation skills.",
    image: "/certificates/CASIDSID, TWINKY_Top3BestAPPSDEV.jpg",
    featured: true
  },
  { 
    title: "Best in Poster/Exhibit Booth", 
    issuer: "University of Cebu - Lapu-Lapu & Mandaue", 
    year: "June 2026",
    description: "Recognized for delivering an effective and well-presented poster and exhibit booth during the capstone showcase.",
    image: "/certificates/CASIDSID, TWINKY_Top3BestAPPSDEV.jpg"
  },
  { 
    title: "PhilNITS Information Technology Passport (IP) Certification Examination", 
    issuer: "PhilNITS", 
    year: "June 2026",
    description: "Completed the IT Passport certification examination, demonstrating foundational knowledge in IT management, systems, and digital technology concepts.",
    image: "/certificates/CASIDSID, TWINKY_IBMSkillsBuild-AIFundamentals.png",
    featured: true
  },
  { 
    title: "UC CCS 5th Research Congress - Poster Presentation Champion", 
    issuer: "University of Cebu", 
    year: "May 2026",
    description: "Recognized as poster presentation champion for presenting a clear, technically sound, and well-defended research output.",
    image: "/certificates/CASIDSID, TWINKY_Top20DeansList.jpg",
    featured: true
  },
  { 
    title: "Consistent Dean's Lister", 
    issuer: "University of Cebu - Lapu-Lapu & Mandaue", 
    year: "2022 - Present",
    description: "Recognized for maintaining consistent academic excellence throughout the BSIT program.",
    image: "/certificates/CASIDSID, TWINKY_Top20DeansList.jpg",
    featured: true
  },
  { 
    title: "UCLM Academic Scholar", 
    issuer: "University of Cebu - Lapu-Lapu & Mandaue", 
    year: "2022 - Present",
    description: "Granted academic scholarship status in recognition of strong academic performance.",
    image: "/certificates/CASIDSID, TWINKY_Top20DeansList.jpg",
    featured: true
  },
  { 
    title: "Canva for Work", 
    issuer: "Canva", 
    year: "August 2025",
    description: "Completed Canva for Work training focused on visual design, content creation, and professional presentation design.",
    image: "/certificates/CASIDSID, TWINKY_Canva.jpg"
  },
  { 
    title: "IBM SkillsBuild . Artificial Intelligence Fundamentals", 
    issuer: "IBM SkillsBuild", 
    year: "July 2025",
    description: "Completed IBM SkillsBuild training on AI fundamentals, covering core AI concepts, machine learning basics, and practical applications.",
    image: "/certificates/CASIDSID, TWINKY_IBMSkillsBuild-AIFundamentals.png",
    featured: true
  },
  { 
    title: "IBM SkillsBuild . Working in a Digital World: Professional Skills", 
    issuer: "IBM SkillsBuild", 
    year: "July 2025",
    description: "Completed training focused on workplace readiness, productivity, and digital collaboration skills.",
    image: "/certificates/CASIDSID, TWINKY_IBMSkillsBuild-WorkingInADigitalWord.png"
  },
  { 
    title: "IBPAP Hackathon Challenge Participant", 
    issuer: "IBPAP", 
    year: "July 2025",
    description: "Participated in the IBPAP Hackathon Challenge and contributed to an innovation-focused development experience.",
    image: "/certificates/CASIDSID, TWINKY_COPNetworkingCollegeDays.jpg"
  },
  { 
    title: "11th ICT Congress Networking Competition - 3rd Placer", 
    issuer: "University of Cebu", 
    year: "April 2025",
    description: "Placed third in the networking competition, demonstrating strong troubleshooting and network configuration skills.",
    image: "/certificates/CASIDSID, TWINKY_3rdplaceNetworking.jpg"
  },
  { 
    title: "UCLM College Days 2025 TECH Talk: Database Programming", 
    issuer: "University of Cebu - Lapu-Lapu & Mandaue", 
    year: "April 2025",
    description: "Participated in a technical talk covering database concepts, query development, and application integration.",
    image: "/certificates/CASIDSID, TWINKY_TECHTalkDBProgramming.jpg"
  },
  { 
    title: "UCLM College Days 2025 TECH Talk: Networking", 
    issuer: "University of Cebu - Lapu-Lapu & Mandaue", 
    year: "April 2025",
    description: "Participated in a technical talk on networking fundamentals, infrastructure, and modern communication technologies.",
    image: "/certificates/CASIDSID, TWINKY_TECHTalkNetworking.jpg"
  },
  { 
    title: "UC Days 2025 Networking Competition - Champion", 
    issuer: "University of Cebu", 
    year: "March 2025",
    description: "Won the networking competition and demonstrated strong technical and problem-solving skills.",
    image: "/certificates/CASIDSID, TWINKY_3rdplaceNetworking.jpg"
  },
  { 
    title: "Cisco Ethical Hacker", 
    issuer: "Cisco", 
    year: "March 2025",
    description: "Completed the Cisco Ethical Hacker program covering cybersecurity fundamentals, vulnerability assessment, and ethical hacking practices.",
    image: "/certificates/CASIDSID, TWINKY_EthicalHacker.jpg"
  },
  { 
    title: "CCNA: Switching, Routing, and Wireless Essentials", 
    issuer: "Cisco", 
    year: "March 2025",
    description: "Completed the CCNA course on switching, routing, wireless essentials, and network security fundamentals.",
    image: "/certificates/CASIDSID, TWINKY_CCNA7.jpg"
  },
  { 
    title: "PSITS 2nd Year Representative", 
    issuer: "PSITS-UCLM", 
    year: "September 2023 - June 2024",
    description: "Served as 2nd Year Representative and contributed to student leadership, engagement, and coordination activities.",
    image: "/certificates/CASIDSID, TWINKY_PSITS2ndYearRep.jpg"
  },
  { 
    title: "3rd Place in Applications Development", 
    issuer: "University of Cebu", 
    year: "June 2024",
    description: "Placed third in the Applications Development competition, highlighting practical software development skills.",
    image: "/certificates/CASIDSID, TWINKY_Top3BestAPPSDEV.jpg"
  },
  { 
    title: "With High Honors", 
    issuer: "University of Cebu - Lapu-Lapu & Mandaue", 
    year: "June 2022",
    description: "Graduated senior high school with high honors.",
    image: "/certificates/CASIDSID, TWINKY_Top20DeansList.jpg"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/twinky-casidsid/", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/twinkycasidsid", icon: "Github" },
  { name: "Instagram", url: "https://www.instagram.com/str.winx/", icon: "Instagram" },
  { name: "Facebook", url: "https://www.facebook.com/winksssxx", icon: "Facebook" }
];

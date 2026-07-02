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

const AIRA_IMAGES = [
  "/aira/aira1.png",
  "/aira/aira2.png",
  "/aira/aira3.png",
  "/aira/aira4.png",
  "/aira/aira5.png"
];

const CODEYGO_IMAGES = [
  "/codeygo/codeygo.png"
];

const SCHOLARTRACK_IMAGES = [
  "/projects/scholartrack/sch1.jpg"
];

export const PROJECTS: Project[] = [
  {
    title: "PassIT",
    category: "EDTECH PLATFORM",
    description: "A review platform that brings IT Passport preparation, practice, and progress tracking into one streamlined system.",
    overview: "PassIT is a review platform designed to make IT Passport preparation clearer, more focused, and easier to manage. It brings practice questions, mock exams, topic resources, and progress tracking into one review experience so learners can study with less friction while administrators manage content, users, and learning resources behind the platform.",
    features: [
      "Guided Practice with randomized questions, immediate feedback, and focused review",
      "Mock Exams that simulate a full IT Passport examination experience",
      "Topic Resources with learning materials and educational videos alongside the question bank"
    ],
    techStack: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS", "SUPABASE", "AUTHENTICATION", "DATABASE", "STORAGE"],
    images: PASS_IT_IMAGES,
    link: "Review Platform"
  },
  {
    title: "AIRA (AI Recruitment Assistant)",
    category: "AI RECRUITMENT",
    description: "An AI-powered talent acquisition platform that centralizes applicant intake, tracking, and recruitment workflows.",
    overview: "AIRA (AI Recruitment Assistant) is Lifewood's AI-powered Talent Acquisition platform designed to streamline and organize recruitment. It automatically scans applicant emails, extracts candidate data, centralizes records, supports interview scheduling and notifications, integrates with external systems, and includes an AI Agent Chatbot that helps administrators retrieve applicant information and navigate the hiring workflow.",
    features: [
      "AI-powered applicant email scanning with automatic applicant data extraction",
      "Centralized recruitment dashboard for interview scheduling, monitoring, and notifications",
      "AI Agent Chatbot with applicant progress tracking, system guidance, and external integration support"
    ],
    techStack: ["AI AUTOMATION", "EMAIL PARSING", "RECRUITMENT DASHBOARD", "WORKFLOW MONITORING"],
    images: AIRA_IMAGES,
    link: "Talent Acquisition Platform"
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
    title: "CodeyGo",
    category: "GAMIFIED LEARNING",
    description: "A gamified learning application for the IBPAP Hackathon Challenge 2025 focused on coding and digital literacy.",
    overview: "CodeyGo is a gamified learning application created for the IBPAP Hackathon Challenge 2025. It teaches coding and digital literacy through interactive storytelling, educational worlds, engaging levels, and coding mini-games, with offline support for students with limited internet access and optional AI-powered adaptive learning when connectivity is available.",
    roles: [
      "UI/UX Designer",
      "Feature Ideation",
      "User Flow Design",
      "Wireframing",
      "Interface Design",
      "User Experience Planning"
    ],
    features: [
      "Story-driven learning with interactive educational worlds and coding mini-games",
      "Offline support for learners with limited internet access",
      "AI-assisted adaptive learning, personalized feedback, and gamified progression"
    ],
    techStack: ["UI/UX DESIGN", "GAMIFICATION", "OFFLINE LEARNING", "AI-ASSISTED FEEDBACK"],
    images: CODEYGO_IMAGES,
    link: "Hackathon Project"
  },
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
    title: "3rd Place – Networking Competition",
    issuer: "University of Cebu",
    year: "2025",
    category: "Award",
    description: "Awarded 3rd Place in the Networking Competition during the 11th UC ICT Congress 2025.",
    image: "/certificates/cert1.jpg"
  },
  {
    title: "Canva for Work",
    issuer: "Canva Design School",
    year: "2025",
    category: "Course",
    description: "Completed the Canva for Work course from Canva Design School, covering workplace collaboration and design fundamentals.",
    image: "/certificates/cert2.jpg"
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Certification",
    description: "Successfully completed the Cisco Networking Academy CCNAv7: Switching, Routing, and Wireless Essentials course.",
    image: "/certificates/cert3.jpg"
  },
  {
    title: "CCS Skills Competition – Networking Contest Participant",
    issuer: "University of Cebu",
    year: "2025",
    category: "Participation",
    description: "Participated in the CCS Skills Competition Networking Contest during College Days 2025.",
    image: "/certificates/cert4.jpg"
  },
  {
    title: "C# .NET Programming Seminar-Workshop",
    issuer: "Seminar-Workshop",
    year: "2025",
    category: "Seminar",
    description: "Participated in the C# .NET Programming Seminar-Workshop and completed discussions and practical exercises.",
    image: "/certificates/cert5.jpg"
  },
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Certification",
    description: "Successfully completed the Cisco Networking Academy Ethical Hacker course.",
    image: "/certificates/cert6.jpg"
  },
  {
    title: "IBM Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    category: "AI Credential",
    description: "Earned an IBM SkillsBuild credential demonstrating knowledge of AI concepts, machine learning, NLP, computer vision, and AI ethics.",
    image: "/certificates/cert7.png",
    featured: true
  },
  {
    title: "IBM Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    year: "2025",
    category: "AI Credential",
    description: "Completed IBM SkillsBuild foundational training covering AI concepts, generative AI, and prompt creation.",
    image: "/certificates/cert8.png"
  },
  {
    title: "IBM Working in a Digital World: Professional Skills",
    issuer: "IBM SkillsBuild",
    year: "2025",
    category: "Professional Skills",
    description: "Completed IBM SkillsBuild training focused on professional communication, teamwork, problem-solving, and workplace skills.",
    image: "/certificates/cert9.png"
  },
  {
    title: "PhilNITS IT Passport (IP) Certification",
    issuer: "PhilNITS",
    year: "2026",
    category: "Certification",
    description: "Passed the PhilNITS Information Technology Passport (IP) Certification Examination (Level 1).",
    image: "/certificates/cert10.jpg",
    featured: true
  },
  {
    title: "Best in Poster / Exhibit Booth",
    issuer: "University of Cebu - Lapu-Lapu & Mandaue",
    year: "2026",
    category: "Award",
    description: "Awarded Best in Poster/Exhibit Booth for the WisEnergy capstone project.",
    image: "/certificates/cert11.jpg",
    featured: true
  },
  {
    title: "Outstanding Capstone Project",
    issuer: "University of Cebu - Lapu-Lapu & Mandaue",
    year: "2026",
    category: "Award",
    description: "Recognized for the Outstanding Capstone Project titled \"WisEnergy: Mobile Application with AI & IoT for Real-Time Appliance Energy Monitoring and Optimization.\"",
    image: "/certificates/cert12.jpg",
    featured: true
  },
  {
    title: "UC CCS Research Congress 2026 Podium Presenter",
    issuer: "University of Cebu",
    year: "2026",
    category: "Research",
    description: "Participated as a Podium Presentation student presenter during the UC CCS Research Congress 2026.",
    image: "/certificates/cert13.jpg"
  },
  {
    title: "1st Place Poster Presentation",
    issuer: "University of Cebu",
    year: "2026",
    category: "Award",
    description: "Won 1st Place in Poster Presentation during the UC CCS Research Congress 2026 for the WisEnergy research project.",
    image: "/certificates/cert14.jpg",
    featured: true
  },
  {
    title: "3rd Place Networking Competition",
    issuer: "University of Cebu",
    year: "2025",
    category: "Award",
    description: "Awarded 3rd Place in the Networking Competition during the 11th UC ICT Congress 2025.",
    image: "/certificates/cert15.jpg"
  },
  {
    title: "Top 3 Best in Applications Development & Emerging Technology Project",
    issuer: "University of Cebu",
    year: "2026",
    category: "Award",
    description: "Recognized as one of the Top 3 Best in Applications Development & Emerging Technology Project.",
    image: "/certificates/cert16.jpg"
  },
  {
    title: "Dean's Lister (1st Semester AY 2023–2024)",
    issuer: "University of Cebu - Lapu-Lapu & Mandaue",
    year: "2024",
    category: "Academic",
    description: "Recognized as one of the Top 20 Dean's Listers for the 1st Semester of AY 2023–2024.",
    image: "/certificates/cert17.jpg"
  },
  {
    title: "Senior High School With High Honors",
    issuer: "University of Cebu - Lapu-Lapu & Mandaue",
    year: "2022",
    category: "Academic",
    description: "Graduated Senior High School with High Honors for outstanding academic performance.",
    image: "/certificates/cert18.jpg"
  },
  {
    title: "Dean's Lister (1st Semester AY 2024–2025)",
    issuer: "University of Cebu - Lapu-Lapu & Mandaue",
    year: "2025",
    category: "Academic",
    description: "Recognized as a Dean's Lister for the 1st Semester of AY 2024–2025.",
    image: "/certificates/cert19.jpg"
  },
  {
    title: "Dean's Lister (2nd Semester AY 2024–2025)",
    issuer: "University of Cebu - Lapu-Lapu & Mandaue",
    year: "2025",
    category: "Academic",
    description: "Recognized as a Dean's Lister for the 2nd Semester of AY 2024–2025.",
    image: "/certificates/cert20.jpg"
  },
  {
    title: "Leadership Award",
    issuer: "PSITS",
    year: "2024",
    category: "Leadership",
    description: "Awarded for outstanding leadership and service as the 2nd Year Representative of PSITS for AY 2023–2024.",
    image: "/certificates/cert21.jpg"
  },
  {
    title: "Seamless Cloud Seminar",
    issuer: "Seminar",
    year: "2025",
    category: "Seminar",
    description: "Participated in the \"Seamless Cloud: Integrating Your Skills for the Modern Workplace\" seminar.",
    image: "/certificates/cert22.jpg"
  },
  {
    title: "PhilNITS Review Seminar",
    issuer: "PhilNITS",
    year: "2026",
    category: "Seminar",
    description: "Participated in the PhilNITS Review Seminar in preparation for the IT Passport certification.",
    image: "/certificates/cert23.jpg"
  },
  {
    title: "Publishable Article Using LaTeX Seminar",
    issuer: "Seminar",
    year: "2026",
    category: "Seminar",
    description: "Participated in the Publishable Article Using LaTeX Seminar, learning how to prepare academic papers using LaTeX.",
    image: "/certificates/cert24.jpg"
  },
  {
    title: "Tech Talk: Networking",
    issuer: "University of Cebu",
    year: "2025",
    category: "Tech Talk",
    description: "Participated in the Tech Talk: Networking during the UC College Days 2025, gaining insights into networking technologies and careers.",
    image: "/certificates/cert25.jpg"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/twinky-casidsid/", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/twinkycasidsid", icon: "Github" },
  { name: "Instagram", url: "https://www.instagram.com/str.winx/", icon: "Instagram" },
  { name: "Facebook", url: "https://www.facebook.com/winksssxx", icon: "Facebook" }
];

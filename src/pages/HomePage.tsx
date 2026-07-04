import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Mail, 
  Linkedin, 
  Github, 
  ChevronRight, 
  MessageCircle,
  Sun,
  Moon,
  ArrowUp,
  ShieldCheck,
  Facebook,
  Instagram,
  ChevronLeft,
  X,
  Download
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCES, TECH_STACK, PROJECTS, CERTIFICATIONS, SOCIAL_LINKS } from "../constants";
import { Certification, Project } from "../types";
import { ProjectModal } from "../components/ProjectModal";

interface HomePageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function HomePage({ isDarkMode, setIsDarkMode }: HomePageProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
  const [activeProjectImage, setActiveProjectImage] = useState(0);
  const [showChatMaintenance, setShowChatMaintenance] = useState(false);

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const featuredProjects = PROJECTS.filter((project) =>
    ["PassIT", "AIRA (AI Recruitment Assistant)", "WisEnergy", "The Last Ritual"].includes(project.title)
  );
  const featuredCertifications = CERTIFICATIONS.filter((cert) => cert.featured).slice(0, 5);

  const galleryImages = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
    "/gallery/img16.jpg",
    "/gallery/img17.jpg",
    "/gallery/img18.jpg",
    "/gallery/img19.jpg",
    "/gallery/img20.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedGalleryImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGalleryImage(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGalleryImage, galleryImages.length]);

  useEffect(() => {
    const hasOpenModal =
      Boolean(selectedProject) ||
      Boolean(selectedCertificate) ||
      Boolean(selectedGalleryImage) ||
      showChatMaintenance;

    if (!hasOpenModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject, selectedCertificate, selectedGalleryImage, showChatMaintenance]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDarkMode ? "bg-zinc-950 text-white" : "bg-neutral-50 text-zinc-900"}`}>
      
      {/* Header Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Profile Section */}
        <header className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-20">
          <div className="relative group">
            <div className={`absolute -inset-1 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 ${isDarkMode ? "bg-white" : "bg-zinc-900"}`}></div>
            <img 
              src="/winx-pfp.png" 
              alt="Twinky Casidsid" 
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Twinky Casidsid</h1>
                  <ShieldCheck className="w-8 h-8 text-blue-500 fill-blue-500/10" />
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-500 font-medium tracking-wide">
                  <MapPin className="w-5 h-5" />
                  <span>Mandaue City, Cebu, Philippines</span>
                </div>
              </div>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-xl border transition-all ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900 shadow-sm"}`}
              >
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
            </div>

            <p className="text-xl font-bold tracking-tight text-zinc-400">
               BSIT Graduate <span className="mx-2 text-zinc-700">|</span> Software Developer <span className="mx-2 text-zinc-700">|</span> UI/UX Designer <span className="mx-2 text-zinc-700">|</span> AI Developer
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="/Twinky Casidsid CV.pdf"
                download
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all active:scale-95 ${isDarkMode ? "bg-white text-black hover:bg-zinc-100" : "bg-zinc-900 text-white hover:bg-zinc-800"}`}
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="mailto:twinkycasidsidx@gmail.com"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold border transition-all active:scale-95 ${isDarkMode ? "border-zinc-800 hover:bg-zinc-900 text-zinc-300" : "border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm"}`}
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start lg:auto-rows-fr">
          
          {/* Left Column (Left Sidebar-ish) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* About Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <h2 className="text-2xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-zinc-500 font-medium leading-relaxed">
                <p>
                  BSIT graduate with hands-on experience in web, mobile, AI, and IoT development. Skilled in React, React Native, C#, Java, Python, Supabase, and SQL, with experience building full-stack applications, AI-powered systems, and mobile solutions. Strong background in project leadership, UI/UX design, and collaborative software development.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold">Bachelor of Science in Information Technology (BSIT)</h4>
                  <p className={`font-medium ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>University of Cebu - Lapu-Lapu & Mandaue</p>
                  <p className="text-sm text-zinc-500">Aug 2022 - June 2026</p>
                  <p className="text-sm text-zinc-500">Cumulative GPA: 1.361 | Magna Cum Laude</p>
                  <p className="text-sm text-zinc-500">Relevant Coursework: Software Development, Database Management Systems, Web Development, Mobile Application Development, Artificial Intelligence</p>
                </div>
              </div>
            </section>

            {/* Achievements Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Achievements</h2>
                <Link to="/achievements" className="text-sm font-bold text-zinc-500 hover:text-blue-500 transition-colors">View All &rarr;</Link>
              </div>
              <div className="space-y-4">
                {featuredCertifications.map((cert) => (
                  <motion.div
                    key={cert.title}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedCertificate(cert)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${isDarkMode ? "bg-zinc-950/50 border-zinc-800 hover:border-zinc-700" : "bg-neutral-50 border-zinc-100 hover:border-zinc-200"}`}
                  >
                    <h4 className="font-bold">{cert.title}</h4>
                    <p className="text-sm text-zinc-500 mt-1 leading-relaxed line-clamp-2">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column (Primary Content) */}
          <div className="lg:col-span-7 flex flex-col gap-8 h-full">
            
            {/* Experience Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <h2 className="text-2xl font-bold mb-8">Experience</h2>
              <div className="space-y-10">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                       <div 
                        className={`w-3 h-3 rounded-full mt-1.5 ${exp.current ? (isDarkMode ? "bg-white ring-4 ring-white/10" : "bg-zinc-950 ring-4 ring-zinc-900/10") : (isDarkMode ? "bg-zinc-800" : "bg-zinc-200")}`} 
                       />
                       <div className={`flex-1 w-px ${isDarkMode ? "bg-zinc-800" : "bg-zinc-200"} mt-2`} />
                    </div>
                    <div className="flex-1 pb-4">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          <span className="text-sm font-mono text-zinc-500">{exp.year}</span>
                       </div>
                       <p className="text-zinc-500 font-medium">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className={`p-8 rounded-3xl border flex-1 flex flex-col ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Projects</h2>
                <Link to="/projects" className="text-sm font-bold text-zinc-500 hover:text-blue-500 transition-colors">View All &rarr;</Link>
              </div>
              <div className="grid md:grid-cols-2 gap-6 auto-rows-fr flex-1">
                {featuredProjects.map((project) => (
                  <motion.div 
                    key={project.title}
                    whileHover={{ y: -4 }}
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveProjectImage(0);
                    }}
                    className={`group flex h-full flex-col rounded-3xl border overflow-hidden transition-all cursor-pointer ${isDarkMode ? "bg-zinc-950 border-zinc-900 hover:border-zinc-800 shadow-xl shadow-black/40" : "bg-neutral-50 border-zinc-100 hover:border-zinc-200 shadow-sm shadow-zinc-200/50"}`}
                  >
                    <div className="aspect-[5/4] overflow-hidden relative bg-zinc-900">
                       <img 
                        src={project.images?.[0]} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        alt={project.title} 
                       />
                    </div>
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">{project.category}</p>
                       <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors uppercase tracking-tight">{project.title}</h3>
                       <p className="text-sm text-zinc-500 font-medium leading-relaxed line-clamp-2 flex-1">
                          {project.description}
                       </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </div>

        <section className={`mt-8 p-8 md:p-12 rounded-[3.5rem] border overflow-hidden ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold tracking-tight">Tech Stack</h2>
                  <p className="text-zinc-500 font-medium max-w-2xl">
                    Core tools and technologies used across frontend, backend, database, and design workflows.
                  </p>
               </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {TECH_STACK.map((cat, index) => (
                <div
                  key={cat.category}
                  className={`rounded-[1.75rem] border p-6 space-y-5 h-full relative overflow-hidden ${isDarkMode ? "bg-zinc-950/60 border-zinc-800" : "bg-neutral-50 border-zinc-200/70"}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-px ${isDarkMode ? "bg-white/10" : "bg-zinc-300/80"}`} />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">Category</p>
                      <h3 className="mt-2 text-lg font-bold tracking-tight">{cat.category}</h3>
                    </div>
                    <span className={`inline-flex items-center justify-center rounded-2xl border min-w-10 h-10 text-xs font-mono ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-300" : "bg-white border-zinc-200 text-zinc-600"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="h-px bg-zinc-800/10" />
                  <div className="flex flex-wrap gap-2.5 content-start">
                    {cat.skills.map((skill) => (
                      <span key={skill} className={`px-3.5 py-2 rounded-xl text-sm font-bold border transition-all ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800" : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100"}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Full-width Gallery Section */}
        <section className={`mt-8 p-8 md:p-12 rounded-[3.5rem] border overflow-hidden ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold tracking-tight">Gallery</h2>
               </div>
               <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
                    aria-label="Previous gallery image"
                    className={`p-3 rounded-full border transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-800" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setActiveGalleryIndex(prev => (prev + 1) % galleryImages.length)}
                    aria-label="Next gallery image"
                    className={`p-3 rounded-full border transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-800" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
               </div>
            </div>

            <div
              className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden group cursor-pointer touch-pan-y"
              onClick={() => setSelectedGalleryImage(galleryImages[activeGalleryIndex])}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedGalleryImage(galleryImages[activeGalleryIndex]);
                }
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  setActiveGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                }
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Open gallery image"
            >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeGalleryIndex}
                    src={galleryImages[activeGalleryIndex]} 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full object-cover" 
                    alt="Gallery item" 
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                   <p className="text-white font-bold tracking-widest uppercase text-xs">Click to Enlarge</p>
                </div>

                {/* Progress indicators */}
                <div className="absolute bottom-10 left-10 flex gap-2">
                   {galleryImages.map((_, i) => (
                     <button 
                      key={i}
                      aria-label={`Go to gallery image ${i + 1}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveGalleryIndex(i);
                      }}
                      className={`h-1 rounded-full transition-all duration-500 ${activeGalleryIndex === i ? "w-12 bg-white" : "w-4 bg-white/20"}`} 
                     />
                   ))}
                </div>
            </div>
        </section>

        {/* Contact / Footer Info */}
        <div className={`mt-20 p-12 rounded-[3rem] border flex flex-col lg:flex-row justify-between gap-12 ${isDarkMode ? "bg-zinc-900/30 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
            <div className="max-w-md space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight italic">Let's work together.</h2>
              <p className="text-zinc-500 font-medium leading-relaxed">
                Open to UI/UX and software freelance work, bringing hands-on experience in AI, IoT, mobile apps, and full-stack development to help turn ideas into polished, practical products.
              </p>
            </div>
            
            <div className="space-y-4">
               <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Follow Me</p>
               <div className="flex gap-4">
                  {SOCIAL_LINKS.map(link => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl border transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-900" : "bg-white border-zinc-200 hover:bg-zinc-50"}`}
                    >
                       {link.name === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                       {link.name === "GitHub" && <Github className="w-5 h-5" />}
                       {link.name === "Instagram" && <Instagram className="w-5 h-5" />}
                       {link.name === "Facebook" && <Facebook className="w-5 h-5" />}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <div className="flex-1 max-w-lg space-y-4">
             <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Get in Touch</p>
             <a href="mailto:twinkycasidsidx@gmail.com" className={`p-6 rounded-2xl border flex items-center justify-between group cursor-pointer transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-900" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}>
                <div className="flex items-center gap-4">
                   <Mail className="w-6 h-6 text-zinc-500" />
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Email</p>
                      <p className="font-bold">twinkycasidsidx@gmail.com</p>
                   </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-800 opacity-0 group-hover:opacity-100 transition-all" />
             </a>

             <a
                href="/Twinky Casidsid CV.pdf"
                download
                className={`p-6 rounded-2xl border flex items-center justify-between group cursor-pointer transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-900" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}
             >
                <div className="flex items-center gap-4">
                   <Download className="w-6 h-6 text-zinc-500" />
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Curriculum Vitae</p>
                      <p className="font-bold">Download CV</p>
                   </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-800 opacity-0 group-hover:opacity-100 transition-all" />
             </a>
          </div>
        </div>

        {/* Final Footer */}
        <footer className="mt-20 text-center space-y-2">
           <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Â© 2026 Twinky Casidsid. All Rights Reserved.</p>
        </footer>

      </div>

      {/* Floating Interface */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-10 sm:right-10 sm:gap-4">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className={`rounded-full p-3 shadow-2xl transition-all sm:p-4 ${isDarkMode ? "bg-white text-black" : "bg-zinc-950 text-white"}`}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        <button
          onClick={() => setShowChatMaintenance(true)}
          className={`group flex items-center gap-3 rounded-full px-5 py-3 text-sm font-bold tracking-tight shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all sm:px-8 sm:py-4 sm:text-base ${isDarkMode ? "bg-white text-black" : "bg-zinc-950 text-white"}`}
        >
          <MessageCircle className="w-6 h-6" />
          <span>Chat with Twinky</span>
        </button>
      </div>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
        activeImage={activeProjectImage}
        setActiveImage={setActiveProjectImage}
      />

      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative flex h-full max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/95 p-4 pointer-events-auto sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem] sm:p-6"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-4 top-4 z-[160] rounded-full border border-white/10 bg-black/30 p-2.5 text-white transition-all hover:bg-black/50 sm:right-6 sm:top-6 sm:p-3"
                aria-label="Close certificate preview"
              >
                <X className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>

              <div className="min-h-0 flex-1 overflow-auto rounded-[1.25rem] bg-black/30 p-3 pt-12 sm:rounded-[1.5rem] sm:p-4 sm:pt-16">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <img
                    src={selectedCertificate.image}
                    className="w-full h-auto max-h-[65dvh] object-contain rounded-xl shadow-2xl sm:max-h-[72dvh]"
                    alt={selectedCertificate.title}
                  />

                  <div className="mt-6 space-y-2 text-center">
                    <h2 className="text-xl font-bold tracking-tight text-white uppercase sm:text-2xl">{selectedCertificate.title}</h2>
                    <p className="mx-auto max-w-3xl text-sm font-medium leading-relaxed text-zinc-400 sm:text-base">{selectedCertificate.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery Image Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-12">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedGalleryImage(null)}
               className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
             />
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               className="relative w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/95 p-3 sm:rounded-[2rem] sm:p-4"
             >
                <button 
                  onClick={() => setSelectedGalleryImage(null)}
                  className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/40 p-2.5 text-white transition-colors hover:bg-black/60 sm:right-4 sm:top-4 sm:p-3"
                  aria-label="Close gallery preview"
                >
                  <X className="h-6 w-6 sm:h-8 sm:w-8" />
                </button>
                <img 
                  src={selectedGalleryImage} 
                  className="max-h-[calc(100dvh-4rem)] w-full rounded-[1.25rem] object-contain sm:max-h-[calc(100dvh-6rem)] sm:rounded-[1.5rem]" 
                  alt="Enlarged gallery view" 
                />
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showChatMaintenance && (
          <div className="fixed inset-0 z-[220] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChatMaintenance(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              className={`relative w-full max-w-lg rounded-[2rem] border p-8 shadow-2xl ${isDarkMode ? "bg-zinc-950 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"}`}
            >
              <button
                onClick={() => setShowChatMaintenance(false)}
                className={`absolute right-5 top-5 rounded-full border p-2 transition-all ${isDarkMode ? "border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white" : "border-zinc-200 bg-zinc-50 text-zinc-500 hover:text-zinc-900"}`}
                aria-label="Close chat maintenance notice"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div className={`inline-flex items-center rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] ${isDarkMode ? "border-zinc-800 bg-zinc-900 text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-500"}`}>
                  Chat Interface
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-extrabold tracking-tight">Still under maintenance.</h2>
                  <p className={`font-medium leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                    Twinky&apos;s chat desk is currently being fine-tuned behind the scenes. The conversation UI is on pause while responses, workflows, and a few clever details are being polished.
                  </p>
                </div>
                <div className={`rounded-[1.5rem] border p-5 ${isDarkMode ? "border-zinc-800 bg-zinc-900/70" : "border-zinc-200 bg-zinc-50"}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Status Note</p>
                  <p className={`mt-3 text-sm leading-relaxed ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                    Incoming messages are sleeping in draft mode. For now, the fastest way to reach Twinky is still through email.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:twinkycasidsidx@gmail.com"
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold transition-all ${isDarkMode ? "bg-white text-black hover:bg-zinc-100" : "bg-zinc-900 text-white hover:bg-zinc-800"}`}
                  >
                    <Mail className="w-4 h-4" />
                    Email Instead
                  </a>
                  <button
                    onClick={() => setShowChatMaintenance(false)}
                    className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-bold transition-all ${isDarkMode ? "border-zinc-800 text-zinc-300 hover:bg-zinc-900" : "border-zinc-200 text-zinc-700 hover:bg-zinc-50"}`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Calendar, 
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
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCES, TECH_STACK, PROJECTS, CERTIFICATIONS, RECOMMENDATIONS, SOCIAL_LINKS } from "../constants";
import { Certification, Project } from "../types";
import { ProjectModal } from "../components/ProjectModal";

interface HomePageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function HomePage({ isDarkMode, setIsDarkMode }: HomePageProps) {
  const [activeRecommendation, setActiveRecommendation] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
  const [activeProjectImage, setActiveProjectImage] = useState(0);

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const featuredCertifications = CERTIFICATIONS.filter((cert) => cert.featured);

  const galleryImages = [
    "https://images.unsplash.com/photo-1517245385169-46b8b23ad391?w=1200&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    "https://images.unsplash.com/photo-1540317580114-ed684c82b9b2?w=1200&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80"
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
               BSIT Student <span className="mx-2 text-zinc-700">|</span> Software Developer <span className="mx-2 text-zinc-700">|</span> UI/UX Designer <span className="mx-2 text-zinc-700">|</span> AI Enthusiast
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all active:scale-95 ${isDarkMode ? "bg-white text-black hover:bg-zinc-100" : "bg-zinc-900 text-white hover:bg-zinc-800"}`}>
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </button>
              <button className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold border transition-all active:scale-95 ${isDarkMode ? "border-zinc-800 hover:bg-zinc-900 text-zinc-300" : "border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm"}`}>
                <Mail className="w-5 h-5" />
                Send Email
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Left Sidebar-ish) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* About Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <h2 className="text-2xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-zinc-500 font-medium leading-relaxed">
                <p>
                  I'm an IT student at UCLM with a strong foundation in software engineering and design logic. I've learned that a solid foundation is everything, applying structural logic to help build reliable digital tools.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold">Bachelor of Science in Information Technology (BSIT)</h4>
                  <p className={`font-medium ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>UNIVERSITY OF CEBU LAPU-LAPU & MANDAUE</p>
                  <p className="text-sm text-zinc-500">Expected Graduation: May 2026</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold">Senior High School</h4>
                  <p className={`font-medium ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>UNIVERSITY OF CEBU LAPU-LAPU & MANDAUE</p>
                  <p className="text-sm text-zinc-500">Technical Vocational Strand - ICT</p>
                  <p className="text-sm text-zinc-500">Major in Computer Programming</p>
                  <p className="text-sm text-zinc-500">2019 - 2021</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold">9th Grade - 10th Grade</h4>
                  <p className={`font-medium ${isDarkMode ? "text-zinc-300" : "text-zinc-600"}`}>University of Cebu Lapu-Lapu & Mandaue</p>
                  <p className="text-sm text-zinc-500">Major in Computer Hardware Servicing</p>
                  <p className="text-sm text-zinc-500">2014 - 2019</p>
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
                    <p className="text-sm text-zinc-500 mt-1 leading-relaxed line-clamp-3">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
              <div className="space-y-8">
                {TECH_STACK.map((cat) => (
                  <div key={cat.category} className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">{cat.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span key={skill} className={`px-4 py-2 rounded-xl text-sm font-bold border ${isDarkMode ? "bg-zinc-950/50 border-zinc-800" : "bg-white border-zinc-200"}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column (Primary Content) */}
          <div className="lg:col-span-7 space-y-8">
            
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
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Projects</h2>
                <Link to="/projects" className="text-sm font-bold text-zinc-500 hover:text-blue-500 transition-colors">View All &rarr;</Link>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {PROJECTS.map((project, i) => (
                  <motion.div 
                    key={project.title}
                    whileHover={{ y: -4 }}
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveProjectImage(0);
                    }}
                    className={`group flex flex-col rounded-3xl border overflow-hidden transition-all cursor-pointer ${isDarkMode ? "bg-zinc-950 border-zinc-900 hover:border-zinc-800 shadow-xl shadow-black/40" : "bg-neutral-50 border-zinc-100 hover:border-zinc-200 shadow-sm shadow-zinc-200/50"}`}
                  >
                    <div className="aspect-video overflow-hidden relative">
                       <img 
                        src={`https://images.unsplash.com/photo-${[
                          "1460925895917-afdab827c52f",
                          "1498050108023-c5249f4df085",
                          "1555066931-4365d14bab8c",
                          "1517694712202-14dd9538aa97"
                        ][i % 4]}?w=600&q=80`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        alt={project.title} 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                       <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors uppercase tracking-tight">{project.title}</h3>
                       <p className="text-sm text-zinc-500 font-medium leading-relaxed flex-1">
                          {project.description}
                       </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Recommendations Section */}
            <section className={`p-8 rounded-3xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
               <h2 className="text-2xl font-bold mb-8">Recommendations</h2>
               <div className="relative">
                  <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-zinc-950/50 border-zinc-800" : "bg-neutral-50 border-zinc-100"}`}>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeRecommendation}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-6"
                      >
                        <p className={`italic text-lg leading-relaxed text-center ${isDarkMode ? "text-zinc-200" : "text-zinc-700"}`}>
                          "{RECOMMENDATIONS[activeRecommendation].text}"
                        </p>
                        <div className="flex flex-col items-center gap-2">
                           <p className="font-bold text-center">— {RECOMMENDATIONS[activeRecommendation].name}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  <div className="flex justify-center gap-2 mt-10">
                    {RECOMMENDATIONS.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveRecommendation(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${activeRecommendation === i ? "w-8 bg-blue-500" : "w-4 bg-zinc-800 hover:bg-zinc-700"}`}
                      />
                    ))}
                  </div>
               </div>
            </section>

          </div>
        </div>

        {/* Full-width Gallery Section */}
        <section className={`mt-8 p-8 md:p-12 rounded-[3.5rem] border overflow-hidden ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-100 shadow-sm"}`}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold tracking-tight">Gallery</h2>
                  <p className="text-zinc-500 font-medium max-w-md">Highlighting moments from collaborative sessions and technical workshops.</p>
               </div>
               <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
                    className={`p-3 rounded-full border transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-800" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setActiveGalleryIndex(prev => (prev + 1) % galleryImages.length)}
                    className={`p-3 rounded-full border transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-800" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
               </div>
            </div>

            <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden group cursor-pointer" onClick={() => setSelectedGalleryImage(galleryImages[activeGalleryIndex])}>
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
                Available for UI/UX and software freelance projects, with added support in SEO, Google Search Console (GSC), and AI integration.
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
             <div className={`p-6 rounded-2xl border flex items-center justify-between group cursor-pointer transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-900" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}>
                <div className="flex items-center gap-4">
                   <Mail className="w-6 h-6 text-zinc-500" />
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Email</p>
                      <p className="font-bold">twinkycasidsid@gmail.com</p>
                   </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-800 opacity-0 group-hover:opacity-100 transition-all" />
             </div>

             <div className={`p-6 rounded-2xl border flex items-center justify-between group cursor-pointer transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-900" : "bg-neutral-50 border-zinc-200 hover:bg-white"}`}>
                <div className="flex items-center gap-4">
                   <Calendar className="w-6 h-6 text-zinc-500" />
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Let's Talk</p>
                      <p className="font-bold">Schedule a Call</p>
                   </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-800 opacity-0 group-hover:opacity-100 transition-all" />
             </div>
          </div>
        </div>

        {/* Final Footer */}
        <footer className="mt-20 text-center space-y-2">
           <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">© 2026 Twinky Casidsid. All Rights Reserved.</p>
        </footer>

      </div>

      {/* Floating Interface */}
      <div className="fixed bottom-10 right-10 flex flex-col items-end gap-4 z-50">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className={`p-4 rounded-full shadow-2xl transition-all ${isDarkMode ? "bg-white text-black" : "bg-zinc-950 text-white"}`}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        <button className={`flex items-center gap-3 px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all group font-bold tracking-tight ${isDarkMode ? "bg-white text-black" : "bg-zinc-950 text-white"}`}>
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
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12">
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
              className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <img
                src={selectedCertificate.image}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl pointer-events-auto shadow-2xl"
                alt={selectedCertificate.title}
              />

              <div className="mt-8 text-center space-y-2 pointer-events-auto">
                <h2 className="text-2xl font-bold text-white tracking-tight uppercase">{selectedCertificate.title}</h2>
                <p className="text-zinc-400 font-medium leading-relaxed max-w-3xl">{selectedCertificate.description}</p>
              </div>
            </motion.div>

            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-8 right-8 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all border border-white/10 z-[160]"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* Gallery Image Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
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
               className="relative max-w-7xl max-h-[90vh] w-full"
             >
                <img 
                  src={selectedGalleryImage} 
                  className="w-full h-full object-contain rounded-3xl" 
                  alt="Enlarged gallery view" 
                />
                <button 
                  onClick={() => setSelectedGalleryImage(null)}
                  className="absolute -top-8 -right-8 p-3 text-white hover:text-zinc-400 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

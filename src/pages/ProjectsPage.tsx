import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { PROJECTS } from "../constants";
import { Project } from "../types";
import { ProjectModal } from "../components/ProjectModal";

interface ProjectsPageProps {
  isDarkMode: boolean;
}

export default function ProjectsPage({ isDarkMode }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectImage, setActiveProjectImage] = useState(0);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDarkMode ? "bg-zinc-950 text-white" : "bg-neutral-50 text-zinc-900"}`}>
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Header */}
        <header className="space-y-8 mb-20">
          <Link 
            to="/" 
            className={`inline-flex items-center gap-2 text-sm font-bold transition-all ${isDarkMode ? "text-zinc-500 hover:text-white" : "text-zinc-400 hover:text-zinc-900"}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Selected Projects</h1>
            <p className="text-xl text-zinc-500 font-medium max-w-2xl">
              A detailed gallery of my work in full-stack web, AI, IoT, and mobile development.
            </p>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-8 items-start">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.title}
              whileHover={{ y: -4 }}
              onClick={() => {
                setSelectedProject(project);
                setActiveProjectImage(0);
              }}
              className={`group flex flex-col rounded-[2rem] border overflow-hidden transition-all cursor-pointer ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:border-zinc-700 shadow-2xl shadow-black/50" : "bg-white border-zinc-100 hover:border-zinc-200 shadow-sm"}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-zinc-900">
                <img 
                  src={project.images?.[0]} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border backdrop-blur-md ${isDarkMode ? "bg-black/40 text-white border-white/10" : "bg-white/75 text-zinc-700 border-white/30"}`}>
                    {project.category}
                  </span>
                </div>
                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-black/60 text-white border border-white/10 backdrop-blur-md">
                      {String(project.images.length).padStart(2, "0")} Images
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold transition-colors uppercase tracking-tight">{project.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  {project.link && (
                    project.link.startsWith("http") ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800" : "bg-neutral-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200"}`}
                      >
                        View Project
                      </a>
                    ) : (
                      <span className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-300" : "bg-neutral-100 border-zinc-200 text-zinc-600"}`}>
                        {project.link}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info (copied some from home for consistency) */}
        <footer className="mt-40 text-center space-y-2 border-t border-zinc-800/10 pt-20">
           <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">© 2026 Twinky Casidsid. All Rights Reserved.</p>
        </footer>
      </div>

      {/* Floating Chat */}
      <div className="fixed bottom-10 right-10 z-50">
        <button className={`flex items-center gap-3 px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all group font-bold tracking-tight ${isDarkMode ? "bg-white text-black" : "bg-zinc-950 text-white"}`}>
          <MessageCircle className="w-6 h-6" />
          <span>Chat with Ren</span>
        </button>
      </div>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
        activeImage={activeProjectImage}
        setActiveImage={setActiveProjectImage}
      />
    </div>
  );
}

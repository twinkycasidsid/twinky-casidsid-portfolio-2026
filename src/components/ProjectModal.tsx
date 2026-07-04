import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
  activeImage: number;
  setActiveImage: (index: number | ((prev: number) => number)) => void;
}

export function ProjectModal({ project, onClose, isDarkMode, activeImage, setActiveImage }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative flex h-full max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2.5rem] md:max-h-[85vh] lg:flex-row ${isDarkMode ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"}`}
          >
            <button 
              onClick={onClose}
              className={`absolute right-3 top-3 z-[110] rounded-full border p-2.5 shadow-lg transition-all sm:right-6 sm:top-6 sm:p-3 ${isDarkMode ? "bg-zinc-900/80 backdrop-blur-md border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800" : "bg-white/80 backdrop-blur-md border-zinc-200 text-zinc-500 hover:text-black hover:bg-zinc-50"}`}
              aria-label="Close project preview"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="relative flex h-[240px] flex-col overflow-hidden bg-zinc-950 sm:h-[300px] lg:h-full lg:w-2/3">
              <div className="flex-1 relative group flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    src={project.images?.[activeImage]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {(project.images?.length || 0) > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(prev => (prev as number) > 0 ? (prev as number) - 1 : (project.images?.length || 1) - 1);
                      }}
                      className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-100 backdrop-blur-md transition-all hover:bg-black/80 sm:left-6 sm:h-12 sm:w-12 lg:opacity-0 lg:group-hover:opacity-100"
                      aria-label="Previous project image"
                    >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(prev => ((prev as number) + 1) % (project.images?.length || 1));
                      }}
                      className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-100 backdrop-blur-md transition-all hover:bg-black/80 sm:right-6 sm:h-12 sm:w-12 lg:opacity-0 lg:group-hover:opacity-100"
                      aria-label="Next project image"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </>
                )}

                {(project.images?.length || 0) > 1 && (
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
                     <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md sm:gap-3 sm:px-4">
                        <span className="text-[10px] font-bold font-mono text-white tracking-widest">
                           {String(activeImage + 1).padStart(2, '0')} / {String(project.images?.length).padStart(2, '0')}
                        </span>
                        <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                           <motion.div 
                            initial={false}
                            animate={{ width: `${((activeImage + 1) / (project.images?.length || 1)) * 100}%` }}
                            className="h-full bg-white"
                           />
                        </div>
                     </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex h-full flex-col overflow-y-auto overscroll-contain lg:w-1/3">
              <div className="space-y-8 p-6 pt-16 sm:p-8 sm:pt-20 lg:space-y-10 lg:p-12">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">{project.category}</p>
                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h2>
                </div>

                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-500">Overview</h3>
                  <p className={`text-base leading-relaxed sm:text-lg ${isDarkMode ? "text-zinc-300" : "text-zinc-600 font-medium"}`}>
                    {project.overview}
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-500">Key Features</h3>
                  <div className="space-y-5">
                    {project.features?.map((feature, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-xs font-bold font-mono text-zinc-700 mt-1">{String(i + 1).padStart(2, '0')}</span>
                        <p className={`font-bold ${isDarkMode ? "text-zinc-200" : "text-zinc-700"}`}>{feature}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {project.roles && project.roles.length > 0 && (
                  <section className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-500">My Role</h3>
                    <div className="space-y-5">
                      {project.roles.map((role, i) => (
                        <div key={role} className="flex gap-4">
                          <span className="text-xs font-bold font-mono text-zinc-700 mt-1">{String(i + 1).padStart(2, '0')}</span>
                          <p className={`font-bold ${isDarkMode ? "text-zinc-200" : "text-zinc-700"}`}>{role}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-500">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map(tech => (
                      <span key={tech} className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-wider border ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-400" : "bg-neutral-100 border-zinc-200 text-zinc-600"}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

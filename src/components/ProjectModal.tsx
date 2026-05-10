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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
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
            className={`relative w-full max-w-6xl h-full max-h-[85vh] rounded-[2.5rem] overflow-hidden border shadow-2xl flex flex-col lg:flex-row ${isDarkMode ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"}`}
          >
            {/* Fixed Close Button */}
            <button 
              onClick={onClose}
              className={`absolute top-6 right-6 z-[110] p-3 rounded-full transition-all border shadow-lg ${isDarkMode ? "bg-zinc-900/80 backdrop-blur-md border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800" : "bg-white/80 backdrop-blur-md border-zinc-200 text-zinc-500 hover:text-black hover:bg-zinc-50"}`}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Preview Side */}
            <div className="lg:w-2/3 relative h-[300px] lg:h-full bg-zinc-950 flex flex-col overflow-hidden">
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

                {/* Navigation Arrows */}
                {(project.images?.length || 0) > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(prev => (prev as number) > 0 ? (prev as number) - 1 : (project.images?.length || 1) - 1);
                      }}
                      className="absolute left-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(prev => ((prev as number) + 1) % (project.images?.length || 1));
                      }}
                      className="absolute right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Indicators - Numerical Design */}
                {(project.images?.length || 0) > 1 && (
                  <div className="absolute bottom-8 left-8">
                     <div className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3">
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

            {/* Info Side */}
            <div className="lg:w-1/3 flex flex-col h-full overflow-y-auto">
              <div className="p-8 lg:p-12 space-y-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">{project.category}</p>
                  <h2 className="text-4xl font-extrabold tracking-tight">{project.title}</h2>
                </div>

                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-500">Overview</h3>
                  <p className={`text-lg leading-relaxed ${isDarkMode ? "text-zinc-300" : "text-zinc-600 font-medium"}`}>
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

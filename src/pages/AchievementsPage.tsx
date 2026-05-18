import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, X, MessageCircle } from "lucide-react";
import { CERTIFICATIONS } from "../constants";
import { Certification } from "../types";

interface AchievementsPageProps {
  isDarkMode: boolean;
}

export default function AchievementsPage({ isDarkMode }: AchievementsPageProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

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
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Certifications</h1>
            <p className="text-xl text-zinc-500 font-medium max-w-2xl">
              Professional credentials and training in Data Analysis, Python, SQL, AI, Prompt Engineering, and IT Resilience.
            </p>
          </div>
        </header>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {CERTIFICATIONS.map((cert) => (
            <motion.div 
              key={cert.title}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedCert(cert)}
              className={`group flex flex-col rounded-[2rem] border overflow-hidden transition-all cursor-pointer ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:border-zinc-700 shadow-2xl shadow-black/50" : "bg-white border-zinc-100 hover:border-zinc-200 shadow-sm"}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative p-6 bg-zinc-900/10">
                <img 
                  src={cert.image} 
                  className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105" 
                  alt={cert.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold transition-colors uppercase tracking-tight">{cert.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <img 
                src={selectedCert.image} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl pointer-events-auto shadow-2xl" 
                alt={selectedCert.title} 
              />
              
              <div className="mt-8 text-center space-y-2 pointer-events-auto">
                 <h2 className="text-2xl font-bold text-white tracking-tight uppercase">{selectedCert.title}</h2>
                 <p className="text-zinc-400 font-medium leading-relaxed max-w-3xl">{selectedCert.description}</p>
              </div>
            </motion.div>

            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-8 right-8 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all border border-white/10 z-[110]"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

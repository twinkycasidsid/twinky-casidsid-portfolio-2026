import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, MessageCircle, Minus, Plus, RotateCcw, X } from "lucide-react";
import { CERTIFICATIONS } from "../constants";
import { Certification } from "../types";

interface AchievementsPageProps {
  isDarkMode: boolean;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

export default function AchievementsPage({ isDarkMode }: AchievementsPageProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [zoom, setZoom] = useState(MIN_ZOOM);

  const closeModal = () => {
    setSelectedCert(null);
    setZoom(MIN_ZOOM);
  };

  const updateZoom = (nextZoom: number) => {
    setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom)));
  };

  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "+" || event.key === "=") updateZoom(zoom + ZOOM_STEP);
      if (event.key === "-") updateZoom(zoom - ZOOM_STEP);
      if (event.key === "0") updateZoom(MIN_ZOOM);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert, zoom]);

  useEffect(() => {
    if (!selectedCert) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCert]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${isDarkMode ? "bg-zinc-950 text-white" : "bg-neutral-50 text-zinc-900"}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <header className="space-y-8 mb-16 lg:mb-20">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-sm font-bold transition-all ${isDarkMode ? "text-zinc-500 hover:text-white" : "text-zinc-400 hover:text-zinc-900"}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Certifications & Achievements</h1>
            <p className="text-xl text-zinc-500 font-medium max-w-3xl">
              Technical credentials, academic recognitions, and milestone awards presented as a responsive visual archive.
            </p>
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-start">
          {CERTIFICATIONS.map((cert) => (
            <motion.article
              key={`${cert.title}-${cert.image}`}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group overflow-hidden rounded-[2rem] border transition-all ${isDarkMode ? "bg-zinc-950 border-zinc-800 hover:border-zinc-700 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)]" : "bg-white border-zinc-100 hover:border-zinc-200 hover:shadow-lg"}`}
            >
              <button
                type="button"
                onClick={() => {
                  setSelectedCert(cert);
                  setZoom(MIN_ZOOM);
                }}
                className="block w-full text-left"
                aria-label={`Open certificate: ${cert.title}`}
              >
                <div className={`relative aspect-[4/3] overflow-hidden ${isDarkMode ? "bg-zinc-900/60" : "bg-zinc-100/70"}`}>
                  <img
                    src={cert.image}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                    alt={cert.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </button>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  {cert.category && (
                    <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border ${isDarkMode ? "bg-zinc-900 text-zinc-300 border-zinc-800" : "bg-neutral-100 text-zinc-600 border-zinc-200"}`}>
                      {cert.category}
                    </span>
                  )}
                  {cert.year && <span className="text-xs font-mono text-zinc-500">{cert.year}</span>}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight leading-snug">{cert.title}</h3>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed line-clamp-3">{cert.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className="mt-28 text-center space-y-2 border-t border-zinc-800/10 pt-16">
          <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">© 2026 Twinky Casidsid. All Rights Reserved.</p>
        </footer>
      </div>

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-10 sm:right-10">
        <button className={`flex items-center gap-3 rounded-full px-5 py-3 text-sm font-bold tracking-tight shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all group sm:px-8 sm:py-4 sm:text-base ${isDarkMode ? "bg-white text-black" : "bg-zinc-950 text-white"}`}>
          <MessageCircle className="w-6 h-6" />
          <span>Chat with Ren</span>
        </button>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative z-[110] flex max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/95 p-4 sm:max-h-[calc(100dvh-2rem)] sm:rounded-[2rem] sm:p-6 lg:p-8"
              onWheel={(event) => {
                event.preventDefault();
                updateZoom(zoom + (event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
              }}
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4 pr-12 sm:items-center sm:pr-16">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    {selectedCert.category && (
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                        {selectedCert.category}
                      </span>
                    )}
                    {selectedCert.year && <span className="text-xs font-mono text-zinc-500">{selectedCert.year}</span>}
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{selectedCert.title}</h2>
                  <p className="max-w-3xl text-sm font-medium leading-relaxed text-zinc-400 sm:text-base">{selectedCert.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateZoom(zoom - ZOOM_STEP)}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10"
                    aria-label="Zoom out"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => updateZoom(MIN_ZOOM)}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => updateZoom(zoom + ZOOM_STEP)}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10"
                    aria-label="Zoom in"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
                    aria-label="Close certificate"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-auto rounded-[1.25rem] bg-black/40 p-3 sm:rounded-[1.5rem] sm:p-4">
                <div className="flex min-h-[50vh] items-center justify-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-full max-w-full origin-center rounded-xl object-contain shadow-2xl transition-transform duration-200"
                    style={{ transform: `scale(${zoom})` }}
                    onDoubleClick={() => updateZoom(zoom > 1 ? MIN_ZOOM : 2)}
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                Use zoom buttons, mouse wheel, double click, or keyboard keys `+`, `-`, and `0`
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

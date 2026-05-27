import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  scrollToSection: (id: string) => void;
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ scrollToSection, onSelectProject }: ProjectsSectionProps) {
  // Custom category filter for projects
  const [activeWebFilter, setActiveWebFilter] = useState<'all' | 'highlight'>('all');

  // Web infinite slider states
  const [webStartIndex, setWebStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  // Reset slider index when filter changes
  useEffect(() => {
    setWebStartIndex(0);
  }, [activeWebFilter]);

  // Filter projects by category
  const getProjectsByCategory = (cat: ProjectCategory, filter: 'all' | 'highlight') => {
    const list = PROJECTS.filter((p) => p.category === cat);
    if (filter === 'highlight') {
      return list.filter((p) => p.highlighted);
    }
    return list;
  };

  const webProjectsList = getProjectsByCategory('web', activeWebFilter);

  const nextWebSlide = () => {
    if (webProjectsList.length === 0) return;
    setSlideDirection('right');
    setWebStartIndex((prev) => (prev + 1) % webProjectsList.length);
  };

  const prevWebSlide = () => {
    if (webProjectsList.length === 0) return;
    setSlideDirection('left');
    setWebStartIndex((prev) => (prev - 1 + webProjectsList.length) % webProjectsList.length);
  };

  // Get exactly 3 circular projects
  const getVisibleWebProjects = () => {
    if (webProjectsList.length === 0) return [];
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (webStartIndex + i) % webProjectsList.length;
      visible.push({
        ...webProjectsList[idx],
        uniqueKey: `${webProjectsList[idx].id}-${webStartIndex}-${i}`
      });
    }
    return visible;
  };

  const visibleWebProjects = getVisibleWebProjects();

  return (
    <section
      id="section-web"
      className="min-h-screen lg:h-screen w-full shrink-0 flex flex-col justify-between items-center relative py-12 md:py-16 lg:py-20 px-6 md:px-16"
    >
      {/* Header context */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4"
      >
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#764695] font-bold">
            // 02 . WEB DEVELOPMENT & TECHNOLOGY
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#f4f4f4] mt-1.5 tracking-wide">
            next-level interfaces
          </h2>
        </div>
        
        {/* Filter Buttons & Navigation Controllers Side by Side */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Horizontal Filter Buttons */}
          <div className="flex border border-brand-purple/30 rounded-full p-1 bg-brand-dark-card/90">
            <button
              onClick={() => setActiveWebFilter('all')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                activeWebFilter === 'all'
                  ? 'bg-brand-purple text-brand-light shadow'
                  : 'text-brand-light/60 hover:text-brand-light'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveWebFilter('highlight')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeWebFilter === 'highlight'
                  ? 'bg-brand-purple/70 text-brand-light shadow'
                  : 'text-brand-light/60 hover:text-brand-light'
              }`}
            >
              Highlights
            </button>
          </div>

          {/* Slider arrow controls - Enabled/visible on all screens for infinite rolling */}
          <div className="flex gap-1.5">
            <button
              onClick={prevWebSlide}
              className="p-2 border border-brand-purple/20 hover:border-brand-purple rounded-xl bg-brand-dark-card text-brand-light hover:text-brand-lime transition-all cursor-pointer"
              title="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextWebSlide}
              className="p-2 border border-brand-purple/20 hover:border-brand-purple rounded-xl bg-brand-dark-card text-brand-light hover:text-brand-lime transition-all cursor-pointer"
              title="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* WEB Horizontal Slide Projects track - Responsive Grid with exactly 3 visible */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-6xl my-auto relative overflow-visible px-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 pb-10 pt-2 justify-items-center items-stretch">
          <AnimatePresence mode="popLayout" custom={slideDirection}>
            {visibleWebProjects.map((proj, idx) => (
              <motion.div
                key={proj.uniqueKey}
                custom={slideDirection}
                variants={{
                  initial: (dir: 'left' | 'right') => ({
                    opacity: 0,
                    x: dir === 'right' ? 60 : -60,
                    scale: 0.95
                  }),
                  animate: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" }
                  },
                  exit: (dir: 'left' | 'right') => ({
                    opacity: 0,
                    x: dir === 'right' ? -60 : 60,
                    scale: 0.95,
                    transition: { duration: 0.35, ease: "easeIn" }
                  })
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`w-full max-w-[340px] h-full flex flex-col focus:outline-none ${
                  idx === 0
                    ? "flex"
                    : idx === 1
                    ? "hidden md:flex"
                    : "hidden lg:flex"
                }`}
              >
                <ProjectCard
                  project={proj}
                  onSelect={onSelectProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile swipe instruction tip */}
        <div className="flex justify-center mt-2">
          <span className="text-[9px] font-mono tracking-widest text-brand-purple uppercase animate-pulse">
            Use the arrows to scroll
          </span>
        </div>
      </motion.div>

      {/* Go to Contact */}
      <button
        onClick={() => scrollToSection('contact')}
        className="flex flex-col items-center gap-1.5 text-brand-light/50 hover:text-brand-purple transition-all cursor-pointer"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Contact & Wrap-up</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}

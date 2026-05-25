import React, { useState, useEffect, useRef } from 'react';
import { Project } from './types';
import { SECTIONS } from './data';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track active section on scroll based on viewport proximity (fluid, smooth scroll)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      let activeId = '';
      let minDistance = Infinity;
      const rectContainer = container.getBoundingClientRect();
      const centerY = rectContainer.top + rectContainer.height / 2;

      SECTIONS.forEach((section) => {
        const element = document.getElementById(`section-${section.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenterY = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenterY - centerY);
          if (distance < minDistance) {
            minDistance = distance;
            activeId = section.id;
          }
        }
      });

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    container.addEventListener('scroll', handleScroll);
    // Execute once initially
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to target vertical page section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen bg-brand-dark text-brand-light font-sans antialiased overflow-hidden selection:bg-brand-purple selection:text-brand-light">
      
      {/* Background Graphic Grid Ambient Accent (Purple & Slate Primary) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/20 via-[#080b15]/75 to-[#080b15] pointer-events-none z-0" />
      
      {/* Decorative High Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(118,70,149,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(118,70,149,0.04)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0" />

      {/* FIXED HEADER WITH LOGO AND INDICATOR */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-brand-dark/40 backdrop-blur-lg border-b border-brand-purple/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-brand-purple flex items-center justify-center border border-brand-light/30 shadow-lg">
            <span className="font-display font-black text-xs text-brand-light tracking-widest">YA</span>
          </div>
          <div>
            <h1 className="text-sm font-display tracking-wide font-extrabold text-brand-light">
              YURI ACIOLE
            </h1>
            <p className="text-[9px] font-mono tracking-widest uppercase text-brand-purple">
              Creative Studio & Technology
            </p>
          </div>
        </div>

        {/* Live Active Status Indicator (Elegant, Non-Terminal Style with Purple Highlight) */}
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-light font-semibold">
            {SECTIONS.find((s) => s.id === activeSection)?.title || 'STUDIO'}
          </span>
        </div>
      </header>

      {/* FLOAT SIDEBAR DOTS POSITION DOTS */}
      <nav className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center justify-end gap-3 pointer-events-auto"
            aria-label={`Scroll to ${section.title}`}
          >
            <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-mono text-brand-light bg-brand-purple px-2 py-1 rounded border border-brand-light/10">
              {section.title}
            </span>
            <div className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
              activeSection === section.id
                ? 'border-brand-purple bg-brand-purple scale-125 shadow-[0_0_12px_rgba(118,70,149,0.8)]'
                : 'border-brand-purple/40 hover:border-brand-light bg-brand-dark/40 hover:scale-110'
            }`}>
              {activeSection === section.id && (
                <div className="w-1.5 h-1.5 bg-brand-light rounded-full" />
              )}
            </div>
          </button>
        ))}
      </nav>

      {/* MAIN FULLPAGE SCROLL CONTAINER */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto relative z-10 scrollbar-none scroll-smooth"
        id="scroll-container"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        
        <HeroSection scrollToSection={scrollToSection} />

        <AboutSection scrollToSection={scrollToSection} />

        <ProjectsSection
          scrollToSection={scrollToSection}
          onSelectProject={setSelectedProject}
        />

        <ContactSection scrollToSection={scrollToSection} />

      </div>

      {/* DETAILED PROJECT INFO MODAL POPUP BACKDROP CARD */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

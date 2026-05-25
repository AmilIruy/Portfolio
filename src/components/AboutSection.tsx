import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { EXPERIENCES } from '../data';

interface AboutSectionProps {
  scrollToSection: (id: string) => void;
}

export function AboutSection({ scrollToSection }: AboutSectionProps) {
  const [activeExperienceId, setActiveExperienceId] = useState<string>('sobre-mim');

  return (
    <section
      id="section-about"
      className="min-h-screen lg:h-screen w-full shrink-0 flex flex-col justify-between items-center relative py-12 md:py-16 lg:py-20 px-6 md:px-16"
    >
      {/* Accent purple background sphere */}
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-purple/15 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Header Title with correct primary emphasis */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#764695] font-bold">
          // 01 . ABOUT & EXPERIENCE
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#f4f4f4] mt-1.5 tracking-wide">
          PROFESSIONAL PATHWAY & WEB FOCUS
        </h2>
      </motion.div>

      {/* About Interactive Layout Content - Clean vertical separation from the header */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-10 md:mt-14 lg:mt-16 mb-auto items-stretch">
        
        {/* Left selector column (or top row on mobile devices) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-center"
        >
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperienceId(exp.id)}
              className={`flex-1 lg:flex-none px-4 py-2.5 rounded-xl border text-left transition-all duration-300 flex flex-col gap-0.5 cursor-pointer ${
                activeExperienceId === exp.id
                  ? 'bg-[#181229]/95 border-brand-purple text-brand-light shadow-[0_0_15px_rgba(118,70,149,0.25)]'
                  : 'bg-[#101424]/90 border-brand-purple/20 text-brand-light/60 hover:text-brand-light hover:border-brand-purple/40'
              }`}
              id={`experience-tab-${exp.id}`}
            >
              <span className="text-[9px] font-mono tracking-wider uppercase text-brand-purple font-bold">
                {exp.id === 'sobre-mim' && '✦ Profile'}
                {exp.id === 'eletronuclear' && '✦ Corporate Internship'}
                {exp.id === 'vcnaosabia' && '✦ Web Dev'}
                {exp.id === 'freelancer' && '✦ Freelance & Support'}
              </span>
              <span className="text-sm font-display font-bold">
                {exp.company}
              </span>
              <span className="text-[10px] font-mono text-brand-light/40">
                {exp.period}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Right content display card with dynamic animation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <AnimatePresence mode="wait">
            {(() => {
              const activeExp = EXPERIENCES.find((e) => e.id === activeExperienceId) || EXPERIENCES[0];
              return (
                <motion.div
                  key={activeExperienceId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full space-y-3.5 text-left bg-brand-dark-card/60 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-brand-purple/25 shadow-xl flex flex-col justify-between"
                  id={`experience-content-${activeExperienceId}`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-purple/10 pb-4">
                      <div>
                        <h3 className="font-display text-lg md:text-xl font-bold text-brand-light leading-snug">
                          {activeExp.role}
                        </h3>
                        <p className="text-xs font-mono text-brand-purple/90 mt-1 font-semibold uppercase tracking-wider">
                          {activeExp.company} — {activeExp.period}
                        </p>
                      </div>
                      <span className="px-3 py-1 text-[9px] font-mono tracking-wider text-brand-light bg-brand-purple/20 border border-brand-purple/40 rounded-full">
                        {activeExperienceId === 'sobre-mim' ? 'Professional Summary' : 'Relevant Experience'}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-brand-light/90 leading-relaxed font-sans mt-4">
                      {activeExp.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {activeExp.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-light/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 shrink-0" />
                          <span className="leading-relaxed font-sans">{bullet}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="pt-4 border-t border-brand-purple/10 flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[9px] font-mono text-brand-light/40 self-center mr-1">Topics & Technologies:</span>
                    {activeExperienceId === 'sobre-mim' && ['C#', '.NET', 'Angular', 'Python', 'React', 'JavaScript', 'SQL Server', 'Git'].map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-brand-purple/10 text-brand-light/85 border border-brand-purple/20 text-[9px] font-mono">#{t}</span>
                    ))}
                    {activeExperienceId === 'eletronuclear' && ['C#', '.NET', 'SQL Server', 'Angular', 'SharePoint', 'Office 365'].map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-brand-purple/10 text-brand-light/85 border border-brand-purple/20 text-[9px] font-mono">#{t}</span>
                    ))}
                    {activeExperienceId === 'vcnaosabia' && ['HTML/CSS', 'Web Design', 'Info Blog', 'Layouts', 'Usability'].map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-brand-purple/10 text-brand-light/85 border border-brand-purple/20 text-[9px] font-mono">#{t}</span>
                    ))}
                    {activeExperienceId === 'freelancer' && ['STIEPAR', 'Discord Bots', 'JavaScript', 'Hardware Maintenance', 'Servers', 'IT Support'].map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-brand-purple/10 text-brand-light/85 border border-brand-purple/20 text-[9px] font-mono">#{t}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Bottom Down Arrow */}
      <button
        onClick={() => scrollToSection('web')}
        className="flex flex-col items-center gap-1.5 text-brand-light/50 hover:text-brand-purple transition-all cursor-pointer"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">View Web Works</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}

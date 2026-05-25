import React from 'react';
import { motion } from 'motion/react';
import {
  Instagram,
  Linkedin,
  Github,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { SOCIAL_LINKS, PROFILE_PHOTO } from '../data';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="section-hero"
      className="min-h-screen lg:h-screen w-full shrink-0 flex flex-col justify-between items-center relative py-12 md:py-16 lg:py-20 px-6 md:px-16"
    >
      {/* Animated decorative background circle */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-purple/25 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Spacer */}
      <div />

      {/* Main Hero grid layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
        
        {/* Left Content (Yuri's Profile, Roles, Socials & CTA) */}
        <div className="md:col-span-7 flex flex-col justify-center text-left" id="hero-left-contents">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <h2 className="font-display text-5xl md:text-7xl font-extrabold text-brand-light tracking-wide leading-none flex flex-col gap-1.5">
              <span>YURI</span>
              <span className="text-brand-purple">ACIOLE</span>
            </h2>
          </motion.div>

          {/* Roles Badges / Minimal labels list with broad tracking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mt-6 flex flex-wrap gap-2 md:gap-3"
          >
            {[
              { title: 'Web Design', desc: 'Bespoke Interfaces' },
              { title: 'Reactive Systems', desc: 'Speed & Performance' },
              { title: 'Frontend Engineering', desc: 'Clean & Modern Code' },
              { title: 'Efficient UI/UX', desc: 'Fluid Micro-interactions' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col px-4 py-2 bg-brand-dark-card/90 backdrop-blur border border-brand-purple/30 hover:border-brand-purple/60 rounded-xl transition-all duration-300"
              >
                <span className="text-xs font-bold text-brand-light tracking-wide">{item.title}</span>
                <span className="text-[9px] font-mono text-brand-purple/80 mt-1 uppercase tracking-wider">{item.desc}</span>
              </div>
            ))}
          </motion.div>

          {/* Redes Sociais no rodapé do Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="mt-8 pt-6 border-t border-brand-purple/20 flex flex-col items-center sm:items-start gap-4 w-full"
          >
            {/* Social Links Icons Row */}
            <div className="flex items-center gap-4 justify-center sm:justify-start w-full">
              {SOCIAL_LINKS.map((sl) => {
                const getIcon = () => {
                  if (sl.name === 'Instagram') return <Instagram className="w-5 h-5 text-brand-light group-hover:text-brand-dark transition-all duration-300" />;
                  if (sl.name === 'LinkedIn') return <Linkedin className="w-5 h-5 text-brand-light group-hover:text-brand-dark transition-all duration-300" />;
                  if (sl.name === 'GitHub') return <Github className="w-5 h-5 text-brand-light group-hover:text-brand-dark transition-all duration-300" />;
                  if (sl.name === 'WhatsApp') return <MessageCircle className="w-5 h-5 text-brand-light group-hover:text-brand-dark transition-all duration-300" />;
                  return <ExternalLink className="w-5 h-5 text-brand-light group-hover:text-brand-dark transition-all duration-300" />;
                };

                return (
                  <a
                    key={sl.name}
                    href={sl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full bg-[#101424]/95 hover:bg-brand-purple border border-brand-purple/30 hover:border-brand-light/35 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    title={sl.name}
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Content (Yuri's Floating Profile Photo with Soft Yellow Ambient Glow) */}
        <div className="md:col-span-5 flex justify-center items-center relative" id="hero-right-logo">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group w-60 h-60 md:w-76 md:h-76 flex items-center justify-center"
          >
            {/* Soft yellow ambient glow in background */}
            <div className="absolute -inset-6 rounded-full bg-yellow-500/15 group-hover:bg-yellow-500/25 blur-3xl transition-all duration-1000 animate-pulse pointer-events-none" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-yellow-500/10 via-transparent to-amber-400/15 blur-xl group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

            {/* Floating motion container */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full relative"
            >
              <img
                src={PROFILE_PHOTO}
                alt="Yuri Aciole"
              />
              
              {/* Subtle golden reflection overlay on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/0 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Call To Action Button to projects (Perfectly Centered on Screen Layout) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex justify-center w-full"
      >
        <button
          onClick={() => scrollToSection('web')}
          className="px-8.5 py-4 rounded-full bg-brand-purple text-brand-light hover:bg-[#f4f4f4] hover:text-[#080b15] font-extrabold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 group shadow-[0_4px_25px_rgba(118,70,149,0.45)] cursor-pointer"
        >
          <span>View My Projects</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </button>
      </motion.div>

      {/* Scroll bottom arrow */}
      <button
        onClick={() => scrollToSection('about')}
        className="flex flex-col items-center gap-1.5 text-brand-light/50 hover:text-brand-purple transition-all mt-6 cursor-pointer"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Explore Studio</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}

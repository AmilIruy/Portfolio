import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ChevronUp
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

interface ContactSectionProps {
  scrollToSection: (id: string) => void;
}

export function ContactSection({ scrollToSection }: ContactSectionProps) {
  return (
    <section
      id="section-contact"
      className="min-h-screen lg:h-screen w-full shrink-0 flex flex-col justify-between items-center relative py-12 md:py-16 lg:py-20 px-6 md:px-16"
    >
      {/* Cosmic background flares with branding colors */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Spacer */}
      <div />

      {/* Core high-impact typographic statement & Contact block with comfortable tracking */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl text-center space-y-8 my-auto"
        id="contact-impact-block"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple font-semibold">
          // CONTACT & FEEDBACK
        </span>
        
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide leading-none text-brand-light">
          "DESIGN <span className="text-brand-purple">COMMUNICATES</span>,<br />
          TECHNOLOGY <span className="text-brand-light font-medium underline decoration-brand-purple decoration-wavy sm:decoration-2">INTERACTS</span>."
        </h2>
        
        <p className="max-w-2xl mx-auto text-sm md:text-base text-brand-light/75 leading-relaxed font-sans">
          Ready to leverage your brand's presence with fast technology, memorable interfaces with high usability standards, and clean, ultra-fluid frontend development? Let's build the future of your digital ecosystem together.
        </p>

        {/* Custom Interactive Message buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="mailto:yuriaciole@hotmail.com"
            className="px-8 py-4 rounded-full bg-brand-purple text-brand-light hover:bg-[#f4f4f4] hover:text-[#080b15] font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <span>Send Direct Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection('hero')}
            className="px-8 py-4 rounded-full bg-brand-dark-card border border-brand-purple/40 text-brand-light hover:text-brand-purple hover:border-brand-purple/80 font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <ChevronUp className="w-4 h-4 animate-bounce" />
            <span>Back to Top</span>
          </button>
        </div>
      </motion.div>

      {/* Social connections row on Page footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="w-full max-w-6xl pt-6 border-t border-brand-purple/20 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="text-center md:text-left">
          <p className="text-xs font-bold text-brand-light">© 2026 Yuri Aciole</p>
          <p className="text-[9px] font-mono text-brand-purple/75 mt-1.5 uppercase tracking-widest font-semibold">
            Creative Studio • Web Development • UI/UX
          </p>
        </div>

        {/* Large dynamic badge row links */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {SOCIAL_LINKS.map((sl) => (
            <a
              key={sl.name}
              href={sl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#101424]/95 border border-brand-purple/25 hover:border-brand-purple text-brand-light hover:text-brand-purple text-xs transition-all duration-300 flex items-center gap-1.5"
            >
              <span className="font-semibold mr-1">{sl.name}</span>
              <span className="text-[10px] text-brand-light/40">{sl.handle}</span>
            </a>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

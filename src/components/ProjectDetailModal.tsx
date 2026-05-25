import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Users, Award, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-dark/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-[#101424] border border-brand-purple/40 rounded-3xl overflow-y-auto max-h-[90vh] shadow-2xl z-10 my-4 md:my-8"
          id="project-detail-modal"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 text-brand-light/80 hover:text-brand-lime bg-brand-dark/60 hover:bg-brand-dark rounded-full border border-brand-purple/20 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner cover */}
          <div className="relative aspect-[21/9] w-full bg-brand-dark">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101424] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <span className="px-3 py-1 bg-brand-purple text-brand-light font-mono text-[10px] tracking-wider uppercase rounded-full">
                {project.subtitle}
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-brand-light mt-2 tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Grid */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left detail body */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-display text-lg text-brand-lime tracking-tight">About the Project</h3>
                <p className="mt-3 text-brand-light/80 text-sm leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Scope highlights */}
              <div className="bg-brand-dark/50 border border-brand-purple/10 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-mono tracking-wider text-brand-lime uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-purple" />
                  Guarantees of Yuri Aciole
                </h4>
                <p className="text-xs text-brand-light/70 leading-relaxed">
                  Reliable delivery, transparent communication, and solutions designed to combine creativity, technology, and measurable results.
                </p>
              </div>
            </div>

            {/* Right sidebar details */}
            <div className="space-y-6 bg-brand-dark/40 border border-brand-purple/10 rounded-2xl p-6 h-fit">
              <div>
                <h4 className="text-xs font-mono tracking-wider text-brand-light/40 uppercase">Service</h4>
                <p className="text-sm font-semibold text-brand-light mt-1">
                  {project.category === 'web' ? 'Web Development & UI/UX' :
                   project.category === 'video' ? 'Audiovisual Editing & Motion' :
                   'Visual Identity & Graphic'}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono tracking-wider text-brand-light/40 uppercase">Technologies / Specs</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-brand-purple/20 text-brand-light text-xs font-mono border border-brand-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-brand-purple/10">
                <div className="flex items-center gap-3 text-brand-light/70 text-xs">
                  <Calendar className="w-4 h-4 text-brand-purple shrink-0" />
                  <span>Year: 2026</span>
                </div>
                <div className="flex items-center gap-3 text-brand-light/70 text-xs">
                  <Users className="w-4 h-4 text-brand-purple shrink-0" />
                  <span>Client: Corporate / Personal</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={project.link || '#'}
                onClick={(e) => {
                  if (project.link === '#') e.preventDefault();
                }}
                className="w-full text-center bg-brand-purple text-brand-light hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 font-medium text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 mt-4 shadow-md"
              >
                <span>Access Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

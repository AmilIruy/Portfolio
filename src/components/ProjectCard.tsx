import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code, Video, PenTool } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Select icon based on category with brand purple as the primary icon color
  const getCategoryIcon = () => {
    switch (project.category) {
      case 'web':
        return <Code className="w-3.5 h-3.5 text-brand-purple" />;
      case 'video':
        return <Video className="w-3.5 h-3.5 text-brand-purple" />;
      case 'design':
        return <PenTool className="w-3.5 h-3.5 text-brand-purple" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-[#101424]/95 rounded-xl overflow-hidden border border-brand-purple/30 hover:border-brand-purple/70 transition-all duration-500 shadow-lg flex flex-col justify-between w-full h-full"
      id={`project-card-${project.id}`}
    >
      {/* Background card accent glow with brand purple as primary */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/35 to-transparent opacity-80 pointer-events-none" />
      <div className="absolute -inset-px bg-gradient-to-tr from-brand-purple/30 via-transparent to-brand-lime/0 group-hover:to-brand-purple/20 rounded-xl transition-all duration-500 pointer-events-none" />

      <div>
        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-dark">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-750 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Tag Category overlay with brand-purple border rather than lime */}
          <div className="absolute top-3 left-3 bg-brand-dark/95 backdrop-blur-md border border-brand-purple/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
            {getCategoryIcon()}
            <span className="text-[9px] font-mono tracking-wider uppercase text-brand-light">
              {project.subtitle}
            </span>
          </div>

          {/* Hover visual overlay - highlighting purple and light click actions */}
          <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {onSelect && (
              <button
                onClick={() => onSelect(project)}
                className="bg-brand-purple hover:bg-brand-light text-brand-light hover:text-brand-dark font-semibold text-[11px] px-4 py-2 rounded-full flex items-center gap-1.5 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 shadow-xl cursor-pointer"
              >
                Project Details
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Content with relaxed letter spacing */}
        <div className="p-5">
          <h3 className="font-display text-lg text-white font-extrabold tracking-normal group-hover:text-brand-purple transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-white/95 text-xs font-medium leading-relaxed line-clamp-3 font-sans">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer Tags */}
      <div className="p-5 pt-0 mt-auto">
        <div className="flex flex-wrap gap-1 mt-1 border-t border-brand-purple/15 pt-3 border-opacity-50">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-brand-purple/20 text-white font-semibold font-mono text-[10px] border border-brand-purple/30"
            >
              #{tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[8px] font-mono text-brand-lime self-center ml-1">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

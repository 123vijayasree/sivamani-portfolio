import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ImageOff } from 'lucide-react';

export const ProjectCard = ({ project, onViewCaseStudy }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white dark:bg-dark-card rounded-3xl border border-light-border dark:border-dark-border hover:border-brand-600 dark:hover:border-brand-500 shadow-clean hover:shadow-clean-hover transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Cover Image (16:10 ratio) */}
        <div className="relative aspect-[16/10] overflow-hidden bg-light-bg dark:bg-dark-bg">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-500/20 via-purple-500/20 to-emerald-500/20 flex flex-col items-center justify-center p-4 text-center">
              <ImageOff className="w-8 h-8 text-brand-600 mb-2" />
              <span className="text-xs font-mono font-bold text-light-text dark:text-dark-text">{project.title}</span>
              <span className="text-[10px] text-light-muted dark:text-dark-muted font-mono">Gradient Fallback Active</span>
            </div>
          )}

          {/* Concept Cover Tag */}
          <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono font-medium px-2.5 py-1 rounded-md shadow">
            Concept Cover
          </div>

          {/* Category Pill */}
          <div className="absolute top-3 right-3 bg-brand-600 text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md shadow">
            {project.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <h3 className="text-lg font-bold text-light-text dark:text-dark-text group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed line-clamp-2 min-h-[32px]">
            {project.description}
          </p>

          {/* Tool Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono font-semibold bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 border border-brand-100 dark:border-brand-800 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 pt-2 border-t border-light-border dark:border-dark-border flex items-center justify-between gap-2">
        {/* View Case Study */}
        <button
          onClick={() => onViewCaseStudy(project)}
          className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center space-x-1.5"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Case Study</span>
        </button>

        {/* Open in Figma (Hidden if empty) */}
        {project.figmaUrl && (
          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-light-text dark:text-dark-text text-xs font-semibold py-2.5 px-3 rounded-xl border border-light-border dark:border-dark-border transition-all flex items-center space-x-1"
            title="Open Figma Link"
          >
            <ExternalLink className="w-3.5 h-3.5 text-purple-500" />
            <span className="hidden sm:inline">Figma</span>
          </a>
        )}

        {/* View Code (Hidden automatically if empty) */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-light-text dark:text-dark-text text-xs font-semibold py-2.5 px-3 rounded-xl border border-light-border dark:border-dark-border transition-all flex items-center space-x-1"
            title="View GitHub Repository"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Code</span>
          </a>
        )}
      </div>
    </div>
  );
};

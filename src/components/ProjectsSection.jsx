import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { FolderGit2 } from 'lucide-react';

export const ProjectsSection = ({ onViewCaseStudy }) => {
  return (
    <section id="work" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
            UI/UX Case Studies & Featured Work
          </h2>
          <p className="text-sm text-light-muted dark:text-dark-muted">
            Explore interactive mobile app mockups, responsive web solutions, and UX prototypes.
          </p>
        </div>

        {/* 3 Columns Desktop / 2 Tablet / 1 Mobile Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={onViewCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

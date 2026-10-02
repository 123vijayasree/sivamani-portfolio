import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 scroll-mt-20 bg-white dark:bg-dark-card/40 border-y border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
            Internship Experience
          </h2>
          <p className="text-sm text-light-muted dark:text-dark-muted">
            Hands-on professional experience in UI/UX design, wireframing, and responsive web development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-brand-600/30 max-w-4xl mx-auto ml-4 sm:ml-auto space-y-10 pl-6 sm:pl-10 py-2">
          {personalData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark-card border-4 border-brand-600 group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="bg-light-bg dark:bg-dark-card p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border hover:border-brand-600 dark:hover:border-brand-500 shadow-sm transition-all space-y-4">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                    <h3 className="text-xl font-extrabold text-light-text dark:text-dark-text">
                      {exp.role}
                    </h3>
                    <span
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: exp.tagColor }}
                    >
                      {exp.roleTag}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs font-mono text-light-muted dark:text-dark-muted bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-light-border dark:border-dark-border">
                    <Calendar className="w-3.5 h-3.5 text-brand-600" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="flex items-center space-x-3 text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
                  <span className="flex items-center space-x-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1 text-light-muted dark:text-dark-muted font-normal">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 pt-2">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

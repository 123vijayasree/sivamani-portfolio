import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import { Wrench } from 'lucide-react';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-20 bg-white dark:bg-dark-card/40 border-y border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
            Skills & Tools Proficiency
          </h2>
          <p className="text-sm text-light-muted dark:text-dark-muted">
            Grouped technologies and design toolsets with proficiency benchmarks.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalData.skills.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
              className="bg-light-bg dark:bg-dark-card p-6 rounded-3xl border border-light-border dark:border-dark-border shadow-sm hover:border-brand-600 dark:hover:border-brand-500 transition-all"
            >
              {/* Group Header */}
              <div className="flex items-center space-x-3 pb-4 mb-5 border-b border-light-border dark:border-dark-border">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <h3 className="font-extrabold text-base text-light-text dark:text-dark-text">
                  {group.category}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono font-medium">
                      <span className="text-light-text dark:text-dark-text">{skill.name}</span>
                      <span className="text-light-muted dark:text-dark-muted">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: group.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

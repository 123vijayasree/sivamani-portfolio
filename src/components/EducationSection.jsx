import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
            Education & Certifications
          </h2>
          <p className="text-sm text-light-muted dark:text-dark-muted">
            Academic degree qualification and professional design certification.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text flex items-center space-x-2 font-display">
              <Award className="w-5 h-5 text-brand-600" />
              <span>Professional Certification</span>
            </h3>

            {personalData.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-3xl border border-brand-600/40 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono bg-brand-50 dark:bg-brand-900/30 text-brand-600 font-semibold px-3 py-1 rounded-full border border-brand-100 dark:border-brand-800">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h4 className="text-xl font-extrabold text-light-text dark:text-dark-text">
                  {cert.title}
                </h4>

                <p className="text-xs font-mono text-brand-600 font-semibold">
                  Issuer: {cert.issuer}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted px-2.5 py-1 rounded-md border border-light-border dark:border-dark-border"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Academic Degrees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-4"
          >
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text flex items-center space-x-2 font-display">
              <GraduationCap className="w-5 h-5 text-brand-600" />
              <span>Academic Qualifications</span>
            </h3>

            <div className="space-y-4">
              {personalData.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-lg font-bold text-light-text dark:text-dark-text">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
                      Score: {edu.score}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-brand-600 font-semibold flex items-center space-x-2">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="text-light-muted dark:text-dark-muted flex items-center space-x-1 font-normal">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </span>
                  </div>

                  <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

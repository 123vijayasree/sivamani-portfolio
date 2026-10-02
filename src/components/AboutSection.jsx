import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import { User, Download, MapPin, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

export const AboutSection = ({ onDownloadResume }) => {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20 bg-white dark:bg-dark-card/40 border-y border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Avatar & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative p-4 bg-light-bg dark:bg-dark-bg rounded-3xl border border-light-border dark:border-dark-border shadow-sm w-full max-w-sm text-center">
              {/* Face Crop Avatar */}
              <picture>
                <source srcSet={personalData.profileFaceWebp} type="image/webp" />
                <img
                  src={personalData.profileFace}
                  alt="Siva Mani M, UI/UX Designer"
                  loading="lazy"
                  className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-2xl mx-auto shadow-md border-2 border-brand-600/30"
                />
              </picture>

              <div className="mt-4 space-y-1">
                <h3 className="font-extrabold text-lg text-light-text dark:text-dark-text">{personalData.name}</h3>
                <p className="text-xs font-mono text-brand-600 dark:text-brand-500 font-semibold">{personalData.shortTitle}</p>
              </div>

              {/* Quick Facts Card */}
              <div className="mt-5 p-4 bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border space-y-3 text-xs text-left">
                <div className="flex items-center justify-between pb-2 border-b border-light-border dark:border-dark-border">
                  <span className="text-light-muted dark:text-dark-muted font-medium flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-600" />
                    <span>Location:</span>
                  </span>
                  <span className="font-bold text-light-text dark:text-dark-text">{personalData.location}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-light-border dark:border-dark-border">
                  <span className="text-light-muted dark:text-dark-muted font-medium flex items-center space-x-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
                    <span>Education:</span>
                  </span>
                  <span className="font-bold text-light-text dark:text-dark-text">B.Sc. IT (80%)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-light-muted dark:text-dark-muted font-medium flex items-center space-x-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-brand-600" />
                    <span>Role Seeking:</span>
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">UI/UX / Graphic / Front-End</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Summary & Resume CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
                <User className="w-4 h-4" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
                Crafting User-Centered Experiences with Design & Code
              </h2>
            </div>

            {/* Summary Text */}
            <p className="text-base text-light-muted dark:text-dark-muted leading-relaxed">
              {personalData.summary}
            </p>

            {/* Core Values / Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border space-y-1">
                <div className="font-bold text-sm text-light-text dark:text-dark-text flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>UI/UX & Prototyping</span>
                </div>
                <p className="text-xs text-light-muted dark:text-dark-muted">
                  Figma design systems, auto-layout, low/high-fi wireframes & interactive prototypes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border space-y-1">
                <div className="font-bold text-sm text-light-text dark:text-dark-text flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Graphic & Visual Design</span>
                </div>
                <p className="text-xs text-light-muted dark:text-dark-muted">
                  Adobe Photoshop & Illustrator for high-impact visual layouts and creative assets.
                </p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href={personalData.resumeUrl}
                download={personalData.resumeFileName}
                onClick={onDownloadResume}
                className="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all shadow-md active:scale-95 text-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

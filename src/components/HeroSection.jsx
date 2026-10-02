import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Briefcase,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const HeroSection = ({ onContactClick, onProjectsClick, onDownloadResume }) => {
  return (
    <section id="hero" className="relative scroll-mt-20 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to work</span>
            </div>

            {/* Headline & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-light-text dark:text-dark-text leading-tight">
                Hi, I'm <span className="text-brand-600 dark:text-brand-500">{personalData.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-light-muted dark:text-dark-muted font-display">
                {personalData.title}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted max-w-2xl leading-relaxed">
              I design clean, user-friendly interfaces and turn them into responsive web experiences.
            </p>

            {/* Stat Chips Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["UI/UX", "Figma", "2 Internships", "4+ Projects"].map((chip, idx) => (
                <span
                  key={idx}
                  className="bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border text-light-text dark:text-dark-text text-xs px-3 py-1.5 rounded-lg font-mono font-semibold"
                >
                  ⚡ {chip}
                </span>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {/* View My Work */}
              <button
                onClick={onProjectsClick}
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-brand-600/20 transition-all flex items-center space-x-2 text-sm active:scale-95"
              >
                <Briefcase className="w-4 h-4" />
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              {/* Download Resume */}
              <a
                href={personalData.resumeUrl}
                download={personalData.resumeFileName}
                onClick={onDownloadResume}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all flex items-center space-x-2 text-sm shadow-md active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Hire Me */}
              <button
                onClick={onContactClick}
                className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-light-text dark:text-dark-text border border-light-border dark:border-dark-border font-semibold px-6 py-3.5 rounded-2xl transition-all flex items-center space-x-2 text-sm"
              >
                <Mail className="w-4 h-4 text-brand-600" />
                <span>Hire Me</span>
              </button>
            </div>

            {/* Social Icons & Direct Phone */}
            <div className="flex items-center space-x-4 pt-6 border-t border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted text-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-light-text dark:text-dark-text font-semibold">Connect:</span>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl hover:bg-brand-600/10 hover:text-brand-600 transition-colors bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl hover:bg-brand-600/10 hover:text-brand-600 transition-colors bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-brand-600" />
              </a>

              <a
                href={personalData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
              </a>

              <a
                href={`tel:${personalData.phone}`}
                className="p-2.5 rounded-xl hover:bg-brand-600/10 hover:text-brand-600 transition-colors bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border flex items-center space-x-2 font-mono text-xs font-semibold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{personalData.phoneFormatted}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Image Column: Real profile pic in Clean Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm w-full">
              {/* Clean Rounded Card with Soft Grey Background Blending with Photo */}
              <div className="relative rounded-3xl overflow-hidden border border-light-border dark:border-dark-border bg-[#E5E5E5] dark:bg-[#1E1E28] p-3 shadow-2xl transition-all duration-300">
                <picture>
                  <source srcSet={personalData.profilePhotoWebp} type="image/webp" />
                  <img
                    src={personalData.profilePhoto}
                    alt="Siva Mani M, UI/UX Designer"
                    loading="eager"
                    className="w-full h-[480px] sm:h-[520px] object-contain object-top rounded-2xl"
                  />
                </picture>

                {/* Floating Status Bar Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 dark:bg-dark-card/95 backdrop-blur-md p-3.5 rounded-2xl border border-light-border dark:border-dark-border shadow-lg flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-light-text dark:text-dark-text">{personalData.name}</div>
                      <div className="text-[11px] text-light-muted dark:text-dark-muted font-mono">{personalData.shortTitle}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-brand-600/10 text-brand-600 dark:text-brand-500 px-2 py-1 rounded-md">
                    Profile pic
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

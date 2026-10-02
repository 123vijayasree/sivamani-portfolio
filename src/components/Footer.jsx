import React from 'react';
import { personalData } from '../data/personalInfo';
import { Github, Linkedin, Heart, FileText, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer = ({ onDownloadResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-light-border dark:border-dark-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand / Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-bold text-sm flex items-center justify-center shadow-md">
                SM
              </div>
              <div>
                <span className="font-extrabold text-base text-light-text dark:text-dark-text">Siva Mani M</span>
                <p className="text-[11px] font-mono text-light-muted dark:text-dark-muted">UI/UX & Frontend Developer</p>
              </div>
            </div>
            <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed max-w-xs">
              Designing clean, user-friendly interfaces and turning them into responsive web experiences.
            </p>
            <div className="flex items-center space-x-2">
              <a href={personalData.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-muted hover:text-brand-600 hover:border-brand-600 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-muted hover:text-brand-600 hover:border-brand-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalData.email}`}
                className="p-2 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-muted hover:text-brand-600 hover:border-brand-600 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href={`tel:${personalData.phone}`}
                className="p-2 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-light-muted hover:text-brand-600 hover:border-brand-600 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-light-text dark:text-dark-text">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xs text-light-muted dark:text-dark-muted hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-mono"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Resume */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-light-text dark:text-dark-text">Contact & Documents</h4>
            <div className="space-y-2 text-xs font-mono text-light-muted dark:text-dark-muted">
              <div>{personalData.email}</div>
              <div>{personalData.phoneFormatted}</div>
              <div>{personalData.location}</div>
            </div>
            <a
              href={personalData.resumeUrl}
              download={personalData.resumeFileName}
              onClick={onDownloadResume}
              className="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-light-muted dark:text-dark-muted flex items-center space-x-1 font-mono">
            <span>© {year} Designed & built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current mx-0.5" />
            <span>by</span>
            <span className="font-bold text-light-text dark:text-dark-text ml-1">Siva Mani M</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs font-mono text-light-muted dark:text-dark-muted hover:text-brand-600 dark:hover:text-brand-400 transition-colors bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border px-3 py-2 rounded-xl"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AIAgentWidget } from './components/AIAgentWidget';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Correct section order matching the navbar:
// Home(hero) → About → Services → Skills → Work → Experience → Education → Resume → Contact

// Scroll-spy ID list in page order.
// 'skills' is observed but mapped to 'services' highlight in the Navbar
// (skills is a sub-flow of services, not a standalone nav item)
const SECTION_IDS = ['hero', 'about', 'services', 'skills', 'work', 'experience', 'education', 'resume', 'contact'];

// Map section ids that don't have their own nav link → the nav link that should highlight
const SECTION_TO_NAV = {
  hero: 'home',
  about: 'about',
  services: 'services',
  skills: 'services',   // skills sits under services flow
  work: 'work',
  experience: 'experience',
  education: 'experience', // education is part of experience flow
  resume: 'resume',
  contact: 'contact',
};

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [prefilledSubject, setPrefilledSubject] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleDownloadResume = () => showToast('Resume downloaded! 📄');

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Scroll-spy: track which section is in view and highlight the correct nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const navKey = SECTION_TO_NAV[entry.target.id] || entry.target.id;
            setActiveNav(navKey);
          }
        });
      },
      {
        root: null,
        // Top offset: accounts for ~80px sticky navbar. Bottom: triggers when section fills upper third.
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGetQuote = (serviceTitle) => {
    setPrefilledSubject(`Quote Inquiry for ${serviceTitle}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-dark-card text-dark-text px-5 py-3 rounded-2xl shadow-2xl border border-emerald-500/30 flex items-center space-x-2 text-sm font-mono"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeNav={activeNav}
        onDownloadResume={handleDownloadResume}
      />

      {/* ─── Page sections in navbar order ─── */}
      <main>
        {/* 1. Home / Hero */}
        <HeroSection
          onContactClick={() => scrollToSection('contact')}
          onProjectsClick={() => scrollToSection('work')}
          onDownloadResume={handleDownloadResume}
        />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Services */}
        <ServicesSection onGetQuote={handleGetQuote} />

        {/* 3b. Skills — flows naturally after Services */}
        <SkillsSection />

        {/* 4. Work / Projects */}
        <ProjectsSection
          onViewCaseStudy={(project) => setSelectedProject(project)}
        />

        {/* 5. Experience */}
        <ExperienceSection />

        {/* 5b. Education — grouped under Experience flow */}
        <EducationSection />

        {/* 6. Resume */}
        <ResumeSection onDownloadResume={handleDownloadResume} />

        {/* 7. Contact */}
        <ContactSection
          prefilledSubject={prefilledSubject}
          setPrefilledSubject={setPrefilledSubject}
          onDownloadResume={handleDownloadResume}
        />
      </main>

      {/* Footer */}
      <Footer onDownloadResume={handleDownloadResume} />

      {/* Floating AI Assistant */}
      <AIAgentWidget
        isOpen={isAIChatOpen}
        setIsOpen={setIsAIChatOpen}
        onDownloadResume={handleDownloadResume}
      />

      {/* Case Study Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

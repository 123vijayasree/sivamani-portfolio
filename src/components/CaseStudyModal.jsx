import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2,
  Minimize2,
  Palette,
  Layout,
  Smartphone,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'process', 'solution', 'figma'
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    try {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
    } catch (err) {}

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!project) return null;

  const screens = project.caseStudy?.screens || [
    { name: "Main Application Interface", desc: "High fidelity user interface designed in Figma." }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-4xl bg-white dark:bg-[#14141E] text-light-text dark:text-dark-text rounded-3xl border border-light-border dark:border-dark-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Top Modal Header */}
          <div className="bg-light-bg dark:bg-dark-bg px-6 py-4 border-b border-light-border dark:border-dark-border flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono font-semibold text-brand-600 uppercase tracking-wider">
                {project.category} Case Study
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-light-text dark:text-dark-text">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-black/5 dark:bg-white/10 hover:bg-red-500 hover:text-white rounded-xl transition-colors"
              title="Close Modal (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation Bar (Tabs) */}
          <div className="bg-white dark:bg-dark-card px-6 py-3 border-b border-light-border dark:border-dark-border flex items-center space-x-2 text-xs font-mono overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl transition-all font-semibold flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-light-muted dark:text-dark-muted hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Overview & Problem</span>
            </button>

            <button
              onClick={() => setActiveTab('process')}
              className={`px-4 py-2 rounded-xl transition-all font-semibold flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === 'process'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-light-muted dark:text-dark-muted hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Process & Screens</span>
            </button>

            <button
              onClick={() => setActiveTab('solution')}
              className={`px-4 py-2 rounded-xl transition-all font-semibold flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === 'solution'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-light-muted dark:text-dark-muted hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Solution & Specs</span>
            </button>

            {project.figmaUrl && (
              <button
                onClick={() => setActiveTab('figma')}
                className={`px-4 py-2 rounded-xl transition-all font-semibold flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'figma'
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-light-muted dark:text-dark-muted hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5 text-purple-500" />
                <span>Embedded Figma Prototype</span>
              </button>
            )}
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6 text-sm">
                <div className="p-4 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-900/40">
                  <div className="text-xs font-mono text-brand-600 uppercase font-semibold">Tagline</div>
                  <p className="text-base font-bold text-light-text dark:text-dark-text mt-0.5">
                    {project.caseStudy?.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-light-bg dark:bg-dark-bg p-5 rounded-2xl border border-light-border dark:border-dark-border space-y-2">
                    <h4 className="font-bold text-red-500 text-xs font-mono uppercase">⚠️ Problem Statement</h4>
                    <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                      {project.caseStudy?.problem}
                    </p>
                  </div>

                  <div className="bg-light-bg dark:bg-dark-bg p-5 rounded-2xl border border-light-border dark:border-dark-border space-y-2">
                    <h4 className="font-bold text-emerald-500 text-xs font-mono uppercase">💡 Proposed Solution</h4>
                    <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                      {project.caseStudy?.solution}
                    </p>
                  </div>
                </div>

                {/* Scope & Role Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
                    <span className="text-light-muted dark:text-dark-muted">ROLE</span>
                    <div className="font-bold text-light-text dark:text-dark-text mt-1">{project.caseStudy?.role}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
                    <span className="text-light-muted dark:text-dark-muted">CLIENT / PROJECT</span>
                    <div className="font-bold text-light-text dark:text-dark-text mt-1">{project.caseStudy?.client}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border">
                    <span className="text-light-muted dark:text-dark-muted">DURATION</span>
                    <div className="font-bold text-light-text dark:text-dark-text mt-1">{project.caseStudy?.duration}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden bg-black p-4 flex flex-col items-center justify-center min-h-[340px] border border-light-border dark:border-dark-border">
                  <img
                    src={project.image}
                    alt={screens[screenIndex]?.name}
                    className="max-h-[320px] object-contain rounded-xl shadow-2xl"
                  />
                  <div className="mt-4 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold">
                    {screens[screenIndex]?.name} — {screens[screenIndex]?.desc}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-light-text dark:text-dark-text font-mono">Screen Flow Breakdown</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {screens.map((scr, idx) => (
                      <div
                        key={idx}
                        onClick={() => setScreenIndex(idx)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          screenIndex === idx
                            ? 'bg-brand-600 text-white border-brand-600'
                            : 'bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border text-light-text dark:text-dark-text'
                        }`}
                      >
                        <div className="font-semibold text-xs">{idx + 1}. {scr.name}</div>
                        <div className="text-[10px] opacity-80 mt-1">{scr.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div className="space-y-6 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border space-y-4">
                  <h4 className="font-bold text-sm text-light-text dark:text-dark-text font-mono">Design System Tokens</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                    <div className="p-3 bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border">
                      <span className="text-light-muted dark:text-dark-muted text-[10px]">PRIMARY COLOR</span>
                      <div className="font-bold text-light-text dark:text-dark-text mt-1">{project.caseStudy?.designSystem?.primaryColor}</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border">
                      <span className="text-light-muted dark:text-dark-muted text-[10px]">SECONDARY COLOR</span>
                      <div className="font-bold text-light-text dark:text-dark-text mt-1">{project.caseStudy?.designSystem?.secondaryColor}</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border">
                      <span className="text-light-muted dark:text-dark-muted text-[10px]">TYPOGRAPHY</span>
                      <div className="font-bold text-light-text dark:text-dark-text mt-1">{project.caseStudy?.designSystem?.fontFamily}</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border">
                      <span className="text-light-muted dark:text-dark-muted text-[10px]">COMPONENTS</span>
                      <div className="font-bold text-light-text dark:text-dark-text mt-1">{project.caseStudy?.designSystem?.componentsCount}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border space-y-2">
                  <h4 className="font-bold text-xs font-mono text-light-text dark:text-dark-text uppercase">Tools & Methodologies Used</h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.caseStudy?.tools?.map((tool, idx) => (
                      <span key={idx} className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-mono px-3 py-1 rounded-lg border border-brand-100 dark:border-brand-800 text-xs font-semibold">
                        ⚡ {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'figma' && project.figmaUrl && (
              <div className="space-y-4">
                <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-light-border dark:border-dark-border bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.figmaUrl)}`}
                    allowFullScreen
                    title={`${project.title} Figma Embed`}
                  />
                </div>
                <div className="text-center text-xs text-light-muted dark:text-dark-muted">
                  If the embedded preview does not load due to iframe security, click below to open directly in Figma.
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-light-bg dark:bg-dark-bg px-6 py-4 border-t border-light-border dark:border-dark-border flex items-center justify-between text-xs font-mono">
            <span className="text-light-muted dark:text-dark-muted">Designed by Siva Mani M</span>
            <div className="flex items-center space-x-3">
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-4 py-2 rounded-xl transition-all flex items-center space-x-1.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Figma</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-light-text dark:text-dark-text px-4 py-2 rounded-xl transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

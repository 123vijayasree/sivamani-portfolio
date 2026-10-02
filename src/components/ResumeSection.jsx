import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export const ResumeSection = ({ onDownloadResume }) => {
  return (
    <section id="resume" className="py-16 md:py-24 scroll-mt-20 bg-white dark:bg-dark-card/40 border-y border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Official Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
              Resume Document
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            {/* Download PDF Button */}
            <a
              href={personalData.resumeUrl}
              download={personalData.resumeFileName}
              onClick={onDownloadResume}
              className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-5 py-3 rounded-2xl transition-all shadow-md flex items-center space-x-2 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab Button */}
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light-bg dark:bg-dark-card hover:bg-black/5 dark:hover:bg-white/5 text-light-text dark:text-dark-text text-xs font-semibold px-5 py-3 rounded-2xl border border-light-border dark:border-dark-border transition-all flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4 text-brand-600" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full bg-[#525659] rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-2xl min-h-[600px] flex flex-col justify-between"
        >
          <object
            data={personalData.resumeUrl}
            type="application/pdf"
            className="w-full h-[760px] rounded-t-3xl"
          >
            {/* Mobile / Fallback Message */}
            <div className="p-8 text-center text-white bg-[#14141E] flex flex-col items-center justify-center space-y-4 min-h-[400px]">
              <FileText className="w-12 h-12 text-brand-500 animate-bounce" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-200">PDF Inline Viewer</h3>
                <p className="text-xs text-gray-400 max-w-md">
                  If your mobile device does not display inline PDFs, click below to open or download the official resume document.
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={personalData.resumeUrl}
                  download={personalData.resumeFileName}
                  onClick={onDownloadResume}
                  className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Sivamani_M_Resume.pdf</span>
                </a>

                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all flex items-center space-x-2 border border-white/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Fullscreen</span>
                </a>
              </div>
            </div>
          </object>

          {/* PDF Bottom Strip */}
          <div className="bg-[#1E1E28] px-6 py-3 text-xs text-gray-300 border-t border-gray-700 flex items-center justify-between font-mono">
            <span className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Document: Sivamani_M_Resume.pdf</span>
            </span>
            <span className="text-brand-400">Single Source of Truth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

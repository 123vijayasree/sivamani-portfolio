import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import {
  Layout,
  Layers,
  Smartphone,
  Monitor,
  Sparkles,
  Code2,
  Component,
  ArrowRight
} from 'lucide-react';

export const ServicesSection = ({ onGetQuote }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Layers': return Layers;
      case 'Smartphone': return Smartphone;
      case 'Monitor': return Monitor;
      case 'Sparkles': return Sparkles;
      case 'Code2': return Code2;
      case 'Component': return Component;
      default: return Layout;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
            Services & Specialized Capabilities
          </h2>
          <p className="text-sm text-light-muted dark:text-dark-muted">
            End-to-end design and frontend solutions crafted with user-centered thinking and pixel precision.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalData.services.map((service, index) => {
            const Icon = getIcon(service.icon);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white dark:bg-dark-card p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border hover:border-brand-600 dark:hover:border-brand-500 shadow-clean hover:shadow-clean-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-500 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold bg-black/5 dark:bg-white/5 text-light-muted dark:text-dark-muted px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverable Feature Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[11px] font-mono text-light-muted dark:text-dark-muted bg-light-bg dark:bg-dark-bg px-2.5 py-1 rounded-md border border-light-border dark:border-dark-border"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Get a Quote Button */}
                <button
                  onClick={() => onGetQuote(service.title)}
                  className="w-full bg-light-bg dark:bg-dark-bg hover:bg-brand-600 hover:text-white text-light-text dark:text-dark-text font-semibold text-xs py-3 px-4 rounded-xl border border-light-border dark:border-dark-border hover:border-brand-600 transition-all flex items-center justify-center space-x-2 group-hover:shadow-md"
                >
                  <span>Get a quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

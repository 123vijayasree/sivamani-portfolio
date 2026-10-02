import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FigmaFrame = ({
  id,
  frameName,
  dimensions = "1440 × 900",
  children,
  className = "",
  isActive = false,
  commentCount = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const showSelection = isActive || isHovered;

  return (
    <motion.section
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative my-12 md:my-16 scroll-mt-24"
    >
      {/* Figma Frame Label Header */}
      <div className="flex items-center justify-between mb-2 select-none px-1">
        <div className="flex items-center space-x-2">
          {/* Figma Frame Icon */}
          <div className="flex items-center space-x-1.5 bg-figma-blue/10 dark:bg-figma-blue/20 text-figma-blue px-2.5 py-1 rounded text-xs font-mono font-medium border border-figma-blue/30">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H10V10H2V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M0 4H12M0 8H12M4 0V12M8 0V12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
            </svg>
            <span>{frameName}</span>
          </div>

          {/* Size Dimensions Tag */}
          <span className={`text-[11px] font-mono transition-opacity duration-200 ${
            showSelection ? 'opacity-100 text-figma-blue font-semibold' : 'opacity-40 text-figma-text-muted dark:text-figma-text-muted-dark'
          }`}>
            {dimensions}
          </span>
        </div>

        {/* Frame Status Badges */}
        <div className="flex items-center space-x-2">
          {commentCount > 0 && (
            <div className="flex items-center space-x-1 bg-figma-yellow/15 text-yellow-800 dark:text-yellow-300 text-[11px] font-mono px-2 py-0.5 rounded border border-figma-yellow/40">
              <span>💬 {commentCount} note{commentCount > 1 ? 's' : ''}</span>
            </div>
          )}
          <span className="hidden sm:inline-block text-[10px] font-mono text-figma-text-muted dark:text-figma-text-muted-dark bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded">
            Auto-layout ↔
          </span>
        </div>
      </div>

      {/* Main Frame Container with Figma Selection Outline */}
      <div
        className={`relative rounded-xl transition-all duration-200 bg-figma-frame dark:bg-figma-frame-dark border ${
          showSelection
            ? 'border-figma-blue ring-2 ring-figma-blue/20 shadow-figma-hover'
            : 'border-figma-border dark:border-figma-border-dark shadow-figma-card'
        } ${className}`}
      >
        {/* Figma Corner Handle Squares (Visible on Hover/Active) */}
        {showSelection && (
          <>
            {/* Top-Left Handle */}
            <div className="absolute -top-[5px] -left-[5px] w-2.5 h-2.5 bg-white border-2 border-figma-blue rounded-sm z-20" />
            {/* Top-Right Handle */}
            <div className="absolute -top-[5px] -right-[5px] w-2.5 h-2.5 bg-white border-2 border-figma-blue rounded-sm z-20" />
            {/* Bottom-Left Handle */}
            <div className="absolute -bottom-[5px] -left-[5px] w-2.5 h-2.5 bg-white border-2 border-figma-blue rounded-sm z-20" />
            {/* Bottom-Right Handle */}
            <div className="absolute -bottom-[5px] -right-[5px] w-2.5 h-2.5 bg-white border-2 border-figma-blue rounded-sm z-20" />

            {/* Side Midpoint Handles */}
            <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 border-figma-blue rounded-sm z-20" />
            <div className="absolute top-1/2 -right-[5px] -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 border-figma-blue rounded-sm z-20" />
          </>
        )}

        {/* Frame Inner Content */}
        <div className="p-6 md:p-10 lg:p-12">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Check, X } from 'lucide-react';

export const CommentPin = ({
  author = "Siva Mani",
  time = "Just now",
  text,
  position = "top-3 right-3",
  avatarColor = "bg-figma-yellow text-black"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [resolved, setResolved] = useState(false);

  if (resolved) return null;

  return (
    <div className={`absolute ${position} z-20 select-none`}>
      {/* Comment Pin Trigger Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-8 h-8 rounded-full ${avatarColor} flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white dark:border-gray-800 transition-transform cursor-pointer group`}
        title="View Figma Comment Note"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-figma-orange rounded-full animate-ping" />
      </motion.button>

      {/* Popover Comment Tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-10 w-64 bg-[#2C2C2C] text-white p-3.5 rounded-xl shadow-figma-float border border-[#383838] z-30 text-xs"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#383838]">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-figma-blue text-white flex items-center justify-center font-bold text-[10px]">
                  {author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[11px] text-gray-200">{author}</div>
                  <div className="text-[9px] text-gray-400 font-mono">{time}</div>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setResolved(true)}
                  className="p-1 hover:bg-emerald-500/20 text-emerald-400 rounded transition-colors"
                  title="Resolve comment"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 text-gray-400 rounded transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-[11.5px] font-sans">
              {text}
            </p>

            <div className="mt-2.5 pt-2 border-t border-[#383838]/60 flex items-center justify-between text-[10px] text-gray-400 font-mono">
              <span>Figma Comment #104</span>
              <span className="text-figma-blue cursor-pointer hover:underline" onClick={() => setResolved(true)}>
                Mark as Resolved
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

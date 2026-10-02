import React from 'react';
import { motion } from 'framer-motion';

export const MultiplayerCursors = () => {
  // Animated cursor paths simulating multiplayer collaboration in Figma
  const cursors = [
    {
      id: "siva",
      name: "Siva Mani (Owner)",
      color: "#0D99FF",
      badgeBg: "bg-[#0D99FF]",
      initial: { x: 40, y: 120 },
      animate: {
        x: [40, 220, 180, 40],
        y: [120, 180, 60, 120],
      },
      duration: 12,
      status: "Editing Design Tokens 🎨"
    },
    {
      id: "recruiter",
      name: "Recruiter_Viewer",
      color: "#9747FF",
      badgeBg: "bg-[#9747FF]",
      initial: { x: 300, y: 240 },
      animate: {
        x: [300, 150, 320, 300],
        y: [240, 80, 280, 240],
      },
      duration: 15,
      status: "Reviewing Experience & Skills 💼"
    },
    {
      id: "lead",
      name: "Senior_UX_Lead",
      color: "#14AE5C",
      badgeBg: "bg-[#14AE5C]",
      initial: { x: 600, y: 100 },
      animate: {
        x: [600, 480, 650, 600],
        y: [100, 300, 160, 100],
      },
      duration: 18,
      status: "Inspecting Interactive Prototypes 🚀"
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {cursors.map((cursor) => (
        <motion.div
          key={cursor.id}
          initial={cursor.initial}
          animate={cursor.animate}
          transition={{
            duration: cursor.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute hidden md:flex items-start space-x-1"
        >
          {/* Custom Figma Mouse Pointer SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="filter drop-shadow-md transform -rotate-12"
          >
            <path
              d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500001 16.8829L0.500001 1.19841L11.7841 12.3673H5.65376Z"
              fill={cursor.color}
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>

          {/* User Name Tag Badge */}
          <div className="flex flex-col">
            <div
              className={`${cursor.badgeBg} text-white font-mono text-[11px] font-semibold px-2 py-0.5 rounded-r-md rounded-bl-md shadow-md flex items-center space-x-1`}
            >
              <span>{cursor.name}</span>
            </div>
            <div className="bg-black/80 dark:bg-white/90 text-white dark:text-black font-sans text-[10px] px-2 py-0.5 rounded shadow mt-1 opacity-90 backdrop-blur-sm max-w-[180px]">
              {cursor.status}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

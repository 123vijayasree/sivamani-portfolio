import React, { useState } from 'react';
import {
  MousePointer,
  Square,
  PenTool,
  Type,
  Component,
  MessageSquare,
  Hand,
  Sun,
  Moon,
  Sparkles,
  FileText
} from 'lucide-react';

export const FigmaToolbar = ({
  darkMode,
  setDarkMode,
  onCommentClick,
  onPresentAll
}) => {
  const [activeTool, setActiveTool] = useState('move');
  const [tooltip, setTooltip] = useState('');

  const tools = [
    { id: 'move', label: 'Move (V)', icon: MousePointer, key: 'V' },
    { id: 'frame', label: 'Frame (F)', icon: Square, key: 'F' },
    { id: 'pen', label: 'Pen Tool (P)', icon: PenTool, key: 'P' },
    { id: 'text', label: 'Text (T)', icon: Type, key: 'T' },
    { id: 'resume', label: 'Resume PDF (R)', icon: FileText, key: 'R' },
    { id: 'component', label: 'Component (K)', icon: Component, key: 'K' },
    { id: 'comment', label: 'Add Comment (C)', icon: MessageSquare, key: 'C', highlight: true },
    { id: 'hand', label: 'Hand Tool (H)', icon: Hand, key: 'H' }
  ];

  const handleToolClick = (toolId) => {
    setActiveTool(toolId);
    if (toolId === 'comment') {
      onCommentClick();
    } else if (toolId === 'frame') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (toolId === 'text') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (toolId === 'resume') {
      document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none">
      {/* Tooltip Header */}
      {tooltip && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1E1E1E] text-white text-[11px] font-mono px-2.5 py-1 rounded shadow-md whitespace-nowrap pointer-events-none border border-white/10 animate-fade-in">
          {tooltip}
        </div>
      )}

      {/* Main Floating Tool Container */}
      <div className="bg-[#2C2C2C] text-white p-1.5 rounded-xl shadow-figma-float border border-[#383838] flex items-center space-x-1 sm:space-x-1.5 backdrop-blur-md bg-opacity-95">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const isSelected = activeTool === tool.id;

          return (
            <button
              key={tool.id}
              onClick={() => handleToolClick(tool.id)}
              onMouseEnter={() => setTooltip(tool.label)}
              onMouseLeave={() => setTooltip('')}
              className={`relative p-2.5 rounded-lg transition-all ${
                isSelected
                  ? 'bg-figma-blue text-white shadow-sm font-semibold scale-105'
                  : tool.highlight
                  ? 'hover:bg-figma-blue/20 text-figma-yellow font-medium'
                  : 'hover:bg-white/10 text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tool.highlight && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-figma-orange rounded-full border-2 border-[#2C2C2C] animate-ping" />
              )}
            </button>
          );
        })}

        <div className="w-[1px] h-6 bg-[#444444] mx-1" />

        {/* AI Agent Quick Tool */}
        <button
          onClick={() => {
            document.getElementById('ai-agent')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseEnter={() => setTooltip("Ask Siva's AI")}
          onMouseLeave={() => setTooltip('')}
          className="p-2.5 rounded-lg hover:bg-white/10 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        {/* Theme Quick Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          onMouseEnter={() => setTooltip(darkMode ? 'Light Theme' : 'Dark Theme')}
          onMouseLeave={() => setTooltip('')}
          className="p-2.5 rounded-lg hover:bg-white/10 text-amber-400 hover:text-amber-300 transition-colors"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-blue-400" />}
        </button>
      </div>
    </div>
  );
};

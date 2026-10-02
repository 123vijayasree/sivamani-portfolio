import React from 'react';
import { Moon, Sun, Share2, Play, Layers, Sparkles, Check, ChevronDown } from 'lucide-react';

export const CanvasHeader = ({
  darkMode,
  setDarkMode,
  isLayersOpen,
  setIsLayersOpen,
  activeSection,
  onPresentAll
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#2C2C2C] text-white border-b border-[#383838] shadow-md px-3 py-2 flex items-center justify-between text-xs font-sans">
      {/* Left: Figma Logo & File Information */}
      <div className="flex items-center space-x-3">
        {/* Toggle Layers Sidebar Button */}
        <button
          onClick={() => setIsLayersOpen(!isLayersOpen)}
          title="Toggle Layers Sidebar (Cmd + \)"
          className={`p-1.5 rounded transition-colors ${
            isLayersOpen ? 'bg-figma-blue text-white' : 'hover:bg-white/10 text-gray-300'
          }`}
        >
          <Layers className="w-4 h-4" />
        </button>

        {/* Figma Icon */}
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
          <span className="font-semibold text-gray-200 tracking-wide hidden sm:inline-block">
            Siva_Mani_Portfolio.fig
          </span>
        </div>

        {/* File Save Status */}
        <div className="hidden md:flex items-center space-x-1.5 text-gray-400 text-[11px] bg-black/30 px-2 py-0.5 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Auto-Saved to Cloud</span>
        </div>
      </div>

      {/* Middle: Active Frame Indicator */}
      <div className="hidden lg:flex items-center space-x-2 bg-black/40 px-3 py-1 rounded-md border border-white/5">
        <span className="text-gray-400 text-[11px]">Selected Frame:</span>
        <span className="font-mono text-figma-blue font-medium text-xs">
          #{activeSection || 'Hero'}
        </span>
      </div>

      {/* Right: Actions & Controls */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Canvas Dark/Light Mode Switcher */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center space-x-1.5 bg-black/40 hover:bg-black/60 px-2.5 py-1 rounded border border-white/10 text-gray-200 transition-all text-xs"
          title="Toggle Figma Canvas Theme (#E5E5E5 / #1E1E1E)"
        >
          {darkMode ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Light Canvas</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Dark Canvas</span>
            </>
          )}
        </button>

        {/* Zoom Ratio Display */}
        <div className="hidden sm:flex items-center space-x-1 text-gray-300 bg-black/30 px-2 py-1 rounded text-[11px] font-mono">
          <span>100%</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-gray-200 px-2.5 py-1 rounded transition-colors text-xs font-medium"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copied ? 'Link Copied!' : 'Share File'}</span>
        </button>

        {/* Figma Present Prototype Button */}
        <button
          onClick={onPresentAll}
          className="flex items-center space-x-1.5 bg-figma-blue hover:bg-figma-blue-hover text-white px-3 py-1 rounded font-medium shadow-sm transition-all text-xs active:scale-95"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Present</span>
        </button>
      </div>
    </header>
  );
};

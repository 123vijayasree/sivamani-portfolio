import React from 'react';
import {
  Frame,
  Type,
  Component,
  User,
  Wrench,
  Briefcase,
  FolderGit2,
  GraduationCap,
  FileText,
  Bot,
  Mail,
  ChevronRight,
  ChevronDown,
  X
} from 'lucide-react';
import { personalData } from '../data/personalInfo';

export const LayersPanel = ({
  isOpen,
  setIsOpen,
  activeSection,
  setActiveSection
}) => {
  const [expandedItems, setExpandedItems] = React.useState({
    projects: true,
    skills: font => true
  });

  const toggleExpand = (key, e) => {
    e.stopPropagation();
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const layerItems = [
    {
      id: "hero",
      label: "Hero / Desktop - 1440",
      icon: Frame,
      type: "Frame",
      dims: "682 × 1024"
    },
    {
      id: "about",
      label: "Profile Summary & Bio",
      icon: User,
      type: "Frame",
      dims: "1440 × 750"
    },
    {
      id: "resume",
      label: "Resume / A4 Document",
      icon: FileText,
      type: "Document",
      dims: "210 × 297mm"
    },
    {
      id: "services",
      label: "Services (7 Cards)",
      icon: Component,
      type: "Component",
      dims: "1440 × 850",
      subItems: [
        "UI/UX Design",
        "Wireframing & Prototyping",
        "Mobile App UI",
        "Website UI Design",
        "Graphic & Visual",
        "Frontend Dev",
        "Design Systems"
      ]
    },
    {
      id: "skills",
      label: "Skills & Token Variants",
      icon: Wrench,
      type: "Variants",
      dims: "1440 × 800"
    },
    {
      id: "experience",
      label: "Internship Timeline",
      icon: Briefcase,
      type: "Frame",
      dims: "1440 × 800",
      subItems: [
        "Saiket Systems (2026)",
        "Abservetech Pvt Ltd (2025)"
      ]
    },
    {
      id: "projects",
      label: "Project Case Studies",
      icon: FolderGit2,
      type: "Component Set",
      dims: "1440 × 1400",
      subItems: [
        "01 / Rapido-Style Ride App",
        "02 / Food Court App",
        "03 / Online Matrimony App",
        "04 / Smart Parking Sensor"
      ]
    },
    {
      id: "education",
      label: "Certifications & Education",
      icon: GraduationCap,
      type: "Frame",
      dims: "1440 × 650"
    },
    {
      id: "ai-agent",
      label: "Ask Siva's AI Agent",
      icon: Bot,
      type: "Plugin",
      dims: "Widget"
    },
    {
      id: "contact",
      label: "Figma Comment / Contact",
      icon: Mail,
      type: "Frame",
      dims: "1440 × 700"
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <aside className="fixed left-0 top-[45px] bottom-0 w-64 bg-[#F5F5F5] dark:bg-[#252525] border-r border-figma-border dark:border-figma-border-dark z-30 flex flex-col text-xs font-sans shadow-lg select-none transition-all duration-200">
      {/* Sidebar Header with Real Face Avatar */}
      <div className="p-3 border-b border-figma-border dark:border-figma-border-dark flex items-center justify-between bg-white/40 dark:bg-black/20">
        <div className="flex items-center space-x-2">
          <img
            src={personalData.profileFace}
            alt="Siva Mani M, UI/UX Designer"
            className="w-6 h-6 rounded-full border border-figma-blue object-cover"
          />
          <span className="font-semibold text-figma-text dark:text-figma-text-dark text-xs uppercase tracking-wider">
            Layers
          </span>
          <span className="text-[10px] font-mono text-figma-blue bg-figma-blue/10 px-1.5 py-0.5 rounded">
            10 Frames
          </span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 text-figma-text-muted"
          title="Close Sidebar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Pages Section */}
      <div className="px-3 py-2 border-b border-figma-border dark:border-figma-border-dark bg-black/5 dark:bg-white/5">
        <div className="flex items-center space-x-2 text-figma-text dark:text-figma-text-dark font-medium">
          <span className="w-2 h-2 rounded-full bg-figma-blue"></span>
          <span>Page 1: Siva Mani Portfolio</span>
        </div>
      </div>

      {/* Layers Tree List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {layerItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isExpanded = expandedItems[item.id];
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <div key={item.id} className="space-y-0.5">
              {/* Layer Item Row */}
              <div
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-figma-blue text-white shadow-sm font-medium'
                    : 'hover:bg-black/5 dark:hover:bg-white/10 text-figma-text dark:text-figma-text-dark'
                }`}
              >
                <div className="flex items-center space-x-2 truncate">
                  {hasSubItems ? (
                    <button
                      onClick={(e) => toggleExpand(item.id, e)}
                      className="p-0.5 rounded hover:bg-black/20 dark:hover:bg-white/20"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronRight className="w-3 h-3" />
                      )}
                    </button>
                  ) : (
                    <span className="w-3" />
                  )}

                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-white' : 'text-figma-blue'}`} />
                  <span className="truncate text-xs">{item.label}</span>
                </div>

                <span className={`text-[10px] font-mono flex-shrink-0 ml-1 ${
                  isActive ? 'text-white/80' : 'text-figma-text-muted dark:text-figma-text-muted-dark group-hover:text-figma-blue'
                }`}>
                  {item.dims}
                </span>
              </div>

              {/* Sub-Items List */}
              {hasSubItems && isExpanded && (
                <div className="pl-7 space-y-0.5 border-l border-figma-border dark:border-figma-border-dark ml-4 my-1">
                  {item.subItems.map((sub, idx) => (
                    <div
                      key={idx}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-2 px-2 py-1 rounded text-[11px] text-figma-text-muted dark:text-figma-text-muted-dark hover:text-figma-blue hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer truncate"
                    >
                      <Type className="w-3 h-3 text-gray-400" />
                      <span className="truncate">{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      <div className="p-2.5 border-t border-figma-border dark:border-figma-border-dark bg-white/40 dark:bg-black/20 text-[11px] font-mono text-figma-text-muted dark:text-figma-text-muted-dark flex items-center justify-between">
        <span>Canvas: 8px Grid</span>
        <span className="text-figma-blue font-semibold">Figma v12.4</span>
      </div>
    </aside>
  );
};

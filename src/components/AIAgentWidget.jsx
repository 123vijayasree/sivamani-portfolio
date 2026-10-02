import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, RefreshCw, FileText } from 'lucide-react';
import { personalData } from '../data/personalInfo';
import { projects } from '../data/projects';

export const AIAgentWidget = ({ isOpen, setIsOpen, onDownloadResume }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hi there! 👋 I'm Siva Mani's AI Assistant. Ask me anything about his UI/UX designs, resume PDF, internship experience at Saiket Systems & Abservetech, 4 featured projects, technical skills, or how to hire him!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "Download Resume",
    "What are his top skills?",
    "Show his 4 projects",
    "Internship experience?",
    "How to hire him?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Fallback answer engine
  const getFallbackAnswer = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return `📄 You can view or download Siva Mani M's official resume PDF directly here:
👉 **[Download Sivamani_M_Resume.pdf](${personalData.resumeUrl})**

It contains full details on his B.Sc. IT (80%), Besant Technologies UI/UX Certification, Saiket Systems & Abservetech internships, and projects.`;
    }

    if (q.includes('skill') || q.includes('tool') || q.includes('figma') || q.includes('know')) {
      return `Siva Mani is highly skilled in:
• **UI/UX Design:** Figma (Advanced), Wireframing, Prototyping, User-Centered Design, Responsive Design
• **Graphic Design:** Adobe Photoshop, Adobe Illustrator, Visual Design
• **Frontend:** HTML5, CSS3, JavaScript, Tailwind CSS
• **Database & Programming:** SQL, MySQL, Core Python (OOP)
• **Methodologies:** Agile, Requirement Analysis, Usability Testing`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('case study')) {
      return `Siva Mani has 4 featured UI/UX & Web projects:
1. **Rapido-Style Ride Booking App** — Bike & cab booking UI with live map tracking, ride selection, and fare estimation.
2. **Food Court App** — Food ordering mobile app with multi-outlet cart, menu chips, and live order tracking.
3. **Online Marriage Service Application** — Matrimony & wedding vendor platform for halls, catering, and photography.
4. **Smart Remote Parking Sensor (SIH)** — IoT smart parking app with real-time sensor detection & slot reservation.`;
    }

    if (q.includes('experience') || q.includes('intern') || q.includes('work history') || q.includes('saiket') || q.includes('abservetech')) {
      return `Siva Mani has 2 valuable UI/UX Internships:
1. **UI/UX Design & Web Solutions Intern @ Saiket Systems** (2026 - Oct):
   Designed UI screens & prototypes in Figma, and converted approved designs into responsive HTML/CSS/JS web pages.
2. **UI/UX Design Intern @ Abservetech Private Limited** (June 2025):
   Designed passenger & driver modules of a taxi booking app, wireframes, user flows, and ride/fare screens.`;
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return `You can hire or reach Siva Mani M directly:
📧 **Email:** sivamani132419@gmail.com
📞 **Phone / Call:** +91 8825448669
💬 **WhatsApp:** wa.me/918825448669
💼 **LinkedIn:** linkedin.com/in/sivamani24
🐙 **GitHub:** github.com/sivasiva132419-lgtm`;
    }

    return `Siva Mani M is a creative, detail-oriented UI/UX Designer, Graphic Designer, and Frontend Developer. He has strong expertise in Figma, Adobe Suite, HTML/CSS/JS, SQL, and user-centered design. He is open for full-time and internship roles! You can email him at sivamani132419@gmail.com or call +91 8825448669.`;
  };

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    if (query.toLowerCase().includes('download resume')) {
      if (onDownloadResume) onDownloadResume();
    }

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (apiKey && apiKey.trim() !== '' && !apiKey.includes('your_gemini')) {
      try {
        const systemPrompt = `You are Siva's AI Assistant for Siva Mani M's portfolio.
Siva Mani M is a UI/UX Designer, Graphic Designer, and Frontend Developer.
Resume Download URL: /Sivamani_M_Resume.pdf. Always provide direct link when user asks for CV/Resume.
Contact: Email sivamani132419@gmail.com, Phone +91 8825448669.
Answer recruiters professionally and concisely.`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: `${systemPrompt}\n\nUser Question: ${query}` }] }]
            })
          }
        );

        const data = await response.json();
        const aiResponseText =
          data?.candidates?.[0]?.content?.parts?.[0]?.text || getFallbackAnswer(query);

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'ai',
            text: aiResponseText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'ai',
            text: getFallbackAnswer(query),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'ai',
            text: getFallbackAnswer(query),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    setIsLoading(false);
  };

  return (
    <div id="ai-agent" className="fixed bottom-6 right-6 z-50 font-sans select-none">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-figma-blue to-figma-purple text-white px-4 py-3 rounded-full shadow-figma-float border-2 border-white/20 flex items-center space-x-2 text-xs font-semibold hover:shadow-figma-hover transition-all"
        >
          <div className="relative">
            <img
              src={personalData.profileFace}
              alt="Siva Mani M"
              className="w-6 h-6 rounded-full border border-white object-cover"
            />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span>Ask Siva's AI</span>
          <Sparkles className="w-4 h-4 text-amber-300" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 sm:w-96 h-[500px] bg-[#1E1E1E] text-white rounded-2xl border border-[#383838] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#2C2C2C] p-3.5 border-b border-[#383838] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <img
                  src={personalData.profileFace}
                  alt="Siva Mani M, UI/UX Designer"
                  className="w-8 h-8 rounded-full border border-figma-blue object-cover"
                />
                <div>
                  <div className="font-bold text-xs flex items-center space-x-1.5">
                    <span>Ask Siva's AI Assistant</span>
                    <span className="text-[10px] bg-figma-green/20 text-figma-green px-1.5 py-0.2 rounded font-mono">Online</span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">Figma Plugin • Real Photo Verified</div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 text-gray-400 hover:text-white rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Suggested Chips */}
            <div className="p-2 bg-[#252525] border-b border-[#383838] flex flex-wrap gap-1.5">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-[10px] font-mono bg-black/40 hover:bg-figma-blue text-gray-300 hover:text-white border border-white/10 px-2 py-0.5 rounded transition-all truncate max-w-[170px]"
                >
                  💬 {q}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-figma-blue text-white rounded-br-xs'
                        : 'bg-[#2B2B2B] text-gray-200 border border-[#383838] rounded-bl-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line leading-relaxed">
                      {msg.text.includes('/Sivamani_M_Resume.pdf') ? (
                        <div>
                          <p>📄 Download Siva Mani M's official resume PDF:</p>
                          <a
                            href={personalData.resumeUrl}
                            download={personalData.resumeFileName}
                            onClick={onDownloadResume}
                            className="inline-flex items-center space-x-1.5 bg-emerald-600 text-white font-mono px-3 py-1.5 rounded-lg mt-2 text-[11px] hover:bg-emerald-700"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Download Sivamani_M_Resume.pdf</span>
                          </a>
                        </div>
                      ) : (
                        msg.text
                      )}
                    </div>
                    <div className="text-[9px] text-gray-400 text-right mt-1 font-mono">{msg.time}</div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#2B2B2B] p-3 rounded-2xl rounded-bl-xs border border-[#383838] flex items-center space-x-2 text-xs text-gray-400">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-figma-blue" />
                    <span>Siva's AI is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#2C2C2C] border-t border-[#383838] flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about resume, skills, projects..."
                className="flex-1 bg-[#1E1E1E] border border-[#383838] rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-figma-blue transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-2 bg-figma-blue hover:bg-figma-blue-hover disabled:opacity-50 text-white rounded-xl transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

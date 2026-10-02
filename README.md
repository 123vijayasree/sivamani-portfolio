# Siva Mani M - Figma-Style UI/UX & Developer Portfolio

A production-ready, interactive personal portfolio website for **Siva Mani M** designed so that the entire website **FEELS like an active Figma design file**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Figma-Style Visual Features

- **Infinite Canvas & Dot Grid**: Custom light canvas (`#E5E5E5`) and dark canvas (`#1E1E1E`) background with dot grid patterns.
- **Figma Frame Wrappers**: Every section is wrapped in a rounded white card with a blue (`#0D99FF`) selection border, 4 corner handle squares, and size tags (`1440 × 900`).
- **Collapsible Layers Sidebar**: Left sidebar listing sections as Figma layers (`#hero`, `#about`, `#services`, `#skills`, `#experience`, `#projects`, `#education`, `#contact`) with active layer tracking.
- **Floating Bottom Toolbar**: Figma tool bar (`Move [V]`, `Frame [F]`, `Pen [P]`, `Text [T]`, `Comment [C]`, `Hand [H]`). Clicking `Comment [C]` smooth scrolls to the contact section.
- **Multiplayer Cursors**: Animated floating Figma cursors with name tags (`Siva Mani (Owner)`, `Recruiter_Viewer`, `Senior_UX_Lead`).
- **Interactive Comment Pins**: Yellow comment pin bubbles on project cards with popover notes and resolve buttons.
- **Figma Prototype Presenter Mode (`▶ Present`)**: Interactive modal displaying mobile app wireframes, screen flows, and design system tokens.
- **Ask Siva's AI Chatbot**: Floating AI assistant powered by Google Gemini API (with smart fallback engine) context-tuned with Siva's complete profile data.
- **Figma Comment Box Contact Form**: Integrated EmailJS / Web3Forms contact form with spam honeypot, validation, confetti celebration, and direct call/WhatsApp integration.

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Clone & Install Dependencies
```bash
cd sivamani-portfolio
npm install
```

### 2. Configure Environment Variables (`.env`)
Create a `.env` file in the root directory (or copy `.env.example`):
```env
# EmailJS Keys (Optional for direct email delivery to sivamani132419@gmail.com)
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=user_xxxxx

# Web3Forms Alternative (Optional)
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here

# Google Gemini API Key for AI Agent Chatbot
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
> **Note:** If no API key is provided, both the contact form and AI chatbot operate seamlessly using built-in intelligent fallback engines!

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🖼️ How to Update Assets & Profile Data

### 1. Updating Profile Photo & Cover Images
- **Profile Photo**: Replace `public/profile.jpg` with your own image.
- **Project Covers**: Replace files in `public/projects/`:
  - `public/projects/project-1.webp` (Rapido-Style Ride Booking)
  - `public/projects/project-2.webp` (Food Court App)
  - `public/projects/project-3.webp` (Online Marriage Service App)
  - `public/projects/project-4.webp` (Smart Remote Parking Sensor)

### 2. Updating Personal Info & Experience
Edit `src/data/personalInfo.js`:
- Personal details (Name, Title, Phone, Email, GitHub, LinkedIn)
- Internships (Saiket Systems, Abservetech)
- Services & Skills

### 3. Updating Projects
Edit `src/data/projects.js`:
- Project titles, descriptions, tool tags, figmaUrl, githubUrl.
- If `figmaUrl` or `githubUrl` is left empty `""`, the corresponding button is automatically hidden on the card!

---

## 🌐 Deployment to Vercel / Netlify

### Deploying to Vercel
1. Install Vercel CLI or connect your GitHub repository to [Vercel](https://vercel.com).
2. Set root directory to `./`.
3. Add Environment Variables (`VITE_GEMINI_API_KEY`, `VITE_EMAILJS_PUBLIC_KEY`, etc.) in the Vercel Project Settings.
4. Build command: `npm run build`, Output directory: `dist`.

### Deploying to Netlify
1. Drag and drop the `dist` folder after running `npm run build` or connect via GitHub on [Netlify](https://netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.

---

## 🛠️ Tech Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Confetti**: Canvas-Confetti
- **Email Service**: EmailJS / Web3Forms
- **AI Agent**: Google Gemini API

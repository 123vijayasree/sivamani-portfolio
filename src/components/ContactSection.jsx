import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalInfo';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  Copy,
  Check,
  FileText
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS credentials from .env ───────────────────────────────────────────
const EJ_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJ_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJ_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactSection = ({ prefilledSubject, setPrefilledSubject, onDownloadResume }) => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: '',
    reply_to:  '',
    subject:   prefilledSubject || '',
    message:   '',
    honeypot:  ''
  });

  const [loading, setLoading]       = useState(false);
  const [status, setStatus]         = useState(null);   // { type: 'success'|'error', msg: '' }
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync prefilled subject from Services "Get a Quote" button
  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData(prev => ({ ...prev, subject: prefilledSubject }));
    }
  }, [prefilledSubject]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status) setStatus(null); // clear status on edit
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // ─── Validation ────────────────────────────────────────────────────────────
  const validate = () => {
    if (!formData.from_name.trim()) return 'Please enter your name.';
    if (!formData.reply_to.trim())  return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reply_to))
      return 'Please enter a valid email address.';
    if (!formData.message.trim())   return 'Please write a message.';
    if (formData.message.trim().length < 10)
      return 'Message is too short (at least 10 characters).';
    return null;
  };

  // ─── Submit via emailjs.sendForm() ─────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam guard
    if (formData.honeypot) return;

    const validationError = validate();
    if (validationError) {
      setStatus({ type: 'error', msg: validationError });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // sendForm() reads name attributes directly from the DOM form element,
      // so {{from_name}}, {{reply_to}}, {{message}} match exactly.
      await emailjs.sendForm(EJ_SERVICE, EJ_TEMPLATE, formRef.current, EJ_KEY);

      setStatus({
        type: 'success',
        msg: `✅ Message sent! Thanks, ${formData.from_name} — Siva will reply to ${formData.reply_to} shortly.`
      });

      // Reset form
      setFormData({ from_name: '', reply_to: '', subject: '', message: '', honeypot: '' });
      if (setPrefilledSubject) setPrefilledSubject('');

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        msg: `Failed to send. Please email Siva directly at ${personalData.email} or WhatsApp.`
      });
    } finally {
      setLoading(false);
    }
  };

  // ─── Input class helper ────────────────────────────────────────────────────
  const inputCls =
    'w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl px-4 py-3 text-xs text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600/20 transition-all';

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Left Column: Contact Info ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-brand-600 font-mono text-xs font-semibold uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text">
                Let's work together
              </h2>
              <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                Have a project idea, UI/UX design requirement, or internship opportunity? I'm available for full-time and project inquiries.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border shadow-sm space-y-1">
                <div className="text-[11px] font-mono text-light-muted dark:text-dark-muted font-semibold">EMAIL</div>
                <div className="flex items-center justify-between">
                  <a href={`mailto:${personalData.email}`} className="font-mono text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline truncate">
                    {personalData.email}
                  </a>
                  <button onClick={handleCopyEmail} className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-light-muted" title="Copy Email">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${personalData.phone}`}
                  className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold py-3 px-4 rounded-2xl transition-all shadow-md flex items-center justify-center space-x-2 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {personalData.phoneFormatted}</span>
                </a>

                <a
                  href={personalData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3 px-4 rounded-2xl transition-all shadow-md flex items-center justify-center space-x-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social & Resume */}
            <div className="pt-4 border-t border-light-border dark:border-dark-border space-y-3">
              <div className="text-xs font-mono text-light-muted dark:text-dark-muted font-semibold">PROFILES & RESUME</div>
              <div className="flex items-center space-x-3">
                <a
                  href={personalData.resumeUrl}
                  download={personalData.resumeFileName}
                  onClick={onDownloadResume}
                  className="flex-1 p-3 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white text-xs font-mono font-semibold flex items-center justify-center space-x-2 border border-brand-100 dark:border-brand-800 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume PDF</span>
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white dark:bg-dark-card text-light-text dark:text-dark-text text-xs font-mono flex items-center justify-center border border-light-border dark:border-dark-border hover:border-brand-600 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white dark:bg-dark-card text-light-text dark:text-dark-text text-xs font-mono flex items-center justify-center border border-light-border dark:border-dark-border hover:border-brand-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-brand-600" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Contact Form ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border shadow-clean space-y-5"
            >
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                Send a Direct Message
              </h3>

              {/* Status Banner */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl text-xs font-mono flex items-start space-x-2 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.type === 'success'
                    ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    : <AlertCircle  className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  <span>{status.msg}</span>
                </motion.div>
              )}

              {/* Honeypot (hidden from humans, traps bots) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="from_name" className="block text-xs font-mono font-semibold text-light-text dark:text-dark-text">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Recruiter / Client Name"
                    className={inputCls}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="reply_to" className="block text-xs font-mono font-semibold text-light-text dark:text-dark-text">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="reply_to"
                    type="email"
                    name="reply_to"
                    required
                    value={formData.reply_to}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Subject (optional) */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono font-semibold text-light-text dark:text-dark-text">
                  Subject <span className="text-light-muted dark:text-dark-muted font-normal">(optional)</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="UI/UX Design Inquiry"
                  className={inputCls}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono font-semibold text-light-text dark:text-dark-text">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, role, or question..."
                  className={`${inputCls} resize-none`}
                />
                <p className="text-[10px] text-light-muted dark:text-dark-muted font-mono text-right">
                  {formData.message.length} chars
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center space-x-2 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-[10px] font-mono text-light-muted dark:text-dark-muted text-center">
                Your message goes directly to Siva's inbox via EmailJS — no server required.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { X, FileText, CheckCircle, Scale, Shield } from 'lucide-react';

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="surface-card w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-7 space-y-5 border border-white/10 shadow-2xl bg-[#0b1120]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2.5">
            <FileText className="text-amber-400" size={22} />
            <h3 className="font-bold text-lg text-white">
              Terms & Conditions
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong>Imposterd: Christian Edition</strong>. By accessing and playing on this website, you agree to the following terms and conditions:
          </p>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <div className="font-semibold text-slate-100 flex items-center gap-1.5 text-xs">
              <CheckCircle size={14} className="text-amber-400" />
              <span>1. Free Community Fellowship Use</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              This game is provided completely free of charge for churches, youth ministries, small groups, Bible studies, and family gatherings. You are encouraged to share the link freely with friends and community members.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <div className="font-semibold text-slate-100 flex items-center gap-1.5 text-xs">
              <Scale size={14} className="text-amber-400" />
              <span>2. Intellectual Property & Credits</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              Created and maintained by <strong>Paul Miracle</strong>. Biblical texts, references, and themes referenced within the game are utilized for spiritual enrichment, education, and community entertainment.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
            <div className="font-semibold text-slate-100 flex items-center gap-1.5 text-xs">
              <Shield size={14} className="text-amber-400" />
              <span>3. "As-Is" Service</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              The game is provided on an "as-is" and "as-available" basis without warranties of any kind. We strive to maintain continuous availability and accurate biblical references.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs transition"
        >
          Accept & Close
        </button>
      </div>
    </div>
  );
}

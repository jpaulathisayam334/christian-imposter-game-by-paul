import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, Database } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="surface-card w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-7 space-y-5 border border-white/10 shadow-2xl bg-[#0b1120]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="text-amber-400" size={22} />
            <h3 className="font-bold text-lg text-white">
              Privacy Policy
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
            Your privacy is of the utmost importance to us. <strong>Imposterd: Christian Edition</strong> is designed from the ground up to respect your digital privacy.
          </p>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="font-semibold text-slate-100 flex items-center gap-1.5 text-xs">
              <Lock size={14} className="text-emerald-400" />
              <span>100% On-Device & Offline Capable</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              All game configurations, player names, and custom words are stored exclusively inside your browser's local storage (LocalStorage). No personal data or gameplay logs are ever transmitted to any remote servers.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="font-semibold text-slate-100 flex items-center gap-1.5 text-xs">
              <EyeOff size={14} className="text-amber-400" />
              <span>Zero Tracking & No Third-Party Cookies</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              We do not use advertising trackers, marketing pixels, or third-party behavioral analytics. Your fellowship game sessions are completely private.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="font-semibold text-slate-100 flex items-center gap-1.5 text-xs">
              <Database size={14} className="text-blue-400" />
              <span>Data Retention & Control</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              You can clear your stored player names and custom word packs at any time simply by clearing your browser cache or resetting them within the app settings.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs transition"
        >
          Close Privacy Policy
        </button>
      </div>
    </div>
  );
}

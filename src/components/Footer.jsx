import React from 'react';
import { ShieldCheck, FileText, HelpCircle, BookPlus, Smartphone } from 'lucide-react';

export default function Footer({
  onOpenPrivacy,
  onOpenTerms,
  onOpenRules,
  onOpenCustomWords,
  onOpenInstall
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#050810] py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Branding & Creator Credit */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-200">
            <span className="font-cinzel font-bold text-amber-400">IMPOSTERD</span>
            <span className="text-slate-500">•</span>
            <span>Christian Edition</span>
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-1">
            <span>Created with passion & faith by</span>
            <strong className="text-amber-400 font-semibold tracking-wide">Paul Miracle</strong>
          </div>

          <div className="text-[11px] text-slate-500">
            © {currentYear} Imposterd: Christian Edition. All rights reserved.
          </div>
        </div>

        {/* Center / Right: Legal & Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
          <button
            onClick={onOpenInstall}
            className="hover:text-amber-400 transition flex items-center gap-1.5 text-amber-400/90"
          >
            <Smartphone size={14} className="text-amber-400" />
            <span>Install App</span>
          </button>

          <button
            onClick={onOpenPrivacy}
            className="hover:text-amber-400 transition flex items-center gap-1.5"
          >
            <ShieldCheck size={14} className="text-amber-400/80" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={onOpenTerms}
            className="hover:text-amber-400 transition flex items-center gap-1.5"
          >
            <FileText size={14} className="text-amber-400/80" />
            <span>Terms & Conditions</span>
          </button>

          <button
            onClick={onOpenRules}
            className="hover:text-amber-400 transition flex items-center gap-1.5"
          >
            <HelpCircle size={14} className="text-amber-400/80" />
            <span>Game Rules</span>
          </button>

          <button
            onClick={onOpenCustomWords}
            className="hover:text-amber-400 transition flex items-center gap-1.5"
          >
            <BookPlus size={14} className="text-amber-400/80" />
            <span>Custom Words</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

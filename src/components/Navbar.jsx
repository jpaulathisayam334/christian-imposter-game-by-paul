import React, { useState } from 'react';
import { Settings, HelpCircle, Share2, Check, Sparkles } from 'lucide-react';

export default function Navbar({
  onOpenRules,
  onOpenSettings,
  onReturnHome,
  inGame
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Imposterd: Christian Edition',
        text: 'Play the faith-based Bible word deduction game with us!',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="w-full border-b border-white/[0.06] bg-[#070a14]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={onReturnHome}
          className="flex items-center space-x-2.5 text-left group transition"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition">
            <span className="font-cinzel font-bold text-base">✝</span>
          </div>
          <div>
            <div className="font-cinzel text-base font-black tracking-wider text-white group-hover:text-amber-400 transition leading-tight">
              IMPOSTERD
            </div>
            <div className="text-[10px] tracking-widest uppercase font-medium text-slate-400">
              Christian Edition
            </div>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {inGame && (
            <button
              onClick={onReturnHome}
              className="text-xs px-2.5 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] transition font-medium mr-1"
            >
              Exit to Lobby
            </button>
          )}

          <button
            onClick={onOpenRules}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] transition flex items-center gap-1.5 text-xs font-medium"
            title="How to Play"
          >
            <HelpCircle size={16} className="text-amber-400/80" />
            <span className="hidden sm:inline">Rules</span>
          </button>

          <button
            onClick={onOpenSettings}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] transition flex items-center gap-1.5 text-xs font-medium"
            title="Game Settings"
          >
            <Settings size={16} className="text-amber-400/80" />
            <span className="hidden sm:inline">Settings</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl text-slate-300 hover:text-amber-400 hover:bg-white/[0.05] transition"
            title="Share Website"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}

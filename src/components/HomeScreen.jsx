import React, { useState } from 'react';
import { Play, Settings, Users, BookOpen, ShieldAlert, Sparkles, HelpCircle, Share2, Check, Download } from 'lucide-react';
import { CATEGORIES } from '../data/christianWords';

export default function HomeScreen({
  players,
  imposterCount,
  selectedCategory,
  gameMode,
  discussionTime,
  totalWordsAvailable,
  onStartGame,
  onOpenSettings,
  onOpenRules,
  onOpenInstall,
  isInstalled
}) {
  const [copied, setCopied] = useState(false);

  const categoryObj = CATEGORIES.find((c) => c.id === selectedCategory) || {
    name: selectedCategory === 'custom' ? 'Custom Church Pack' : 'All Categories'
  };

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
    <div className="w-full max-w-5xl mx-auto px-4 py-6 sm:py-12 space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Sparkles size={14} />
          <span>Bible & Faith Party Word Game</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          IMPOSTERD
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
          One player does not know the secret Bible word. Listen closely to each clue, test the spirits, and discern the truth together.
        </p>
      </div>

      {/* Main Responsive Grid Layout (Adapts to Laptop, Tablet, Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Card: Active Configuration Overview (7 cols on laptop) */}
        <div className="lg:col-span-7 surface-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Current Game Setup
              </span>
              <button
                onClick={onOpenSettings}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition"
              >
                <Settings size={14} />
                <span>Change Settings</span>
              </button>
            </div>

            {/* Players preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-amber-400" />
                  <strong className="text-slate-200">Players ({players.length}):</strong>
                </span>
                <span>Pass & Play</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {players.map((p, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-slate-200 font-medium"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Config pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] text-slate-400">Topic</div>
                <div className="text-xs font-bold text-amber-300 truncate mt-0.5">
                  {categoryObj.name}
                </div>
                <div className="text-[10px] text-slate-500">{totalWordsAvailable} words</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] text-slate-400">Imposters</div>
                <div className="text-xs font-bold text-red-300 mt-0.5">
                  {imposterCount} {imposterCount === 1 ? 'Player' : 'Players'}
                </div>
                <div className="text-[10px] text-slate-500">Secretly assigned</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-400">Mode</div>
                <div className="text-xs font-bold text-slate-200 capitalize mt-0.5">
                  {gameMode} Imposter
                </div>
                <div className="text-[10px] text-slate-500">
                  {discussionTime > 0 ? `${discussionTime / 60}m timer` : 'No timer'}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 flex items-center justify-between border-t border-white/5">
            <span>Pass one phone around the circle</span>
            <span className="text-amber-400 font-medium">100% Free & Private</span>
          </div>
        </div>

        {/* Right Card: Quick Action Center (5 cols on laptop) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="surface-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-3.5 flex-1 flex flex-col justify-center">
            <button
              onClick={onStartGame}
              className="w-full py-4 sm:py-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-cinzel font-black text-lg tracking-wider shadow-xl shadow-amber-500/15 flex items-center justify-center gap-2.5 transition pressable"
            >
              <Play size={20} className="fill-slate-950" />
              <span>START GAME</span>
            </button>

            <button
              onClick={onOpenSettings}
              className="w-full py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 border border-white/10 transition pressable"
            >
              <Settings size={16} className="text-amber-400" />
              <span>Customize Players & Settings</span>
            </button>

            <button
              onClick={onOpenRules}
              className="w-full py-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 border border-white/5 transition pressable"
            >
              <HelpCircle size={16} />
              <span>How To Play & Rules</span>
            </button>

            {/* Install App button on homepage if not already in standalone mode */}
            {!isInstalled && (
              <button
                onClick={onOpenInstall}
                className="w-full py-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/15 text-amber-400 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 border border-amber-500/20 transition pressable"
              >
                <Download size={15} />
                <span>Install App on Home Screen</span>
              </button>
            )}
          </div>

          {/* Quick share button */}
          <button
            onClick={handleShare}
            className="w-full py-3 rounded-2xl surface-card hover:bg-white/[0.04] text-xs text-slate-300 flex items-center justify-center gap-2 border border-white/10 transition"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} className="text-amber-400" />}
            <span>{copied ? 'Link Copied to Clipboard!' : 'Share Website with Friends'}</span>
          </button>
        </div>
      </div>

      {/* Biblical Quote Card (Official ESV Translation) */}
      <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center text-xs text-slate-300/90 leading-relaxed italic">
        "Beloved, do not believe every spirit, but test the spirits to see whether they are from God, for many false prophets have gone out into the world."
        <div className="text-[11px] font-semibold text-amber-400/90 not-italic mt-1.5 tracking-wide">
          — 1 John 4:1 (ESV)
        </div>
      </div>
    </div>
  );
}

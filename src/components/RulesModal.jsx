import React from 'react';
import { X, BookOpen, Sparkles } from 'lucide-react';

export default function RulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="surface-card w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-7 space-y-5 border border-white/10 shadow-2xl bg-[#0b1120]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-amber-400" size={20} />
            <h3 className="font-bold text-lg text-white">
              How To Play Imposterd
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Steps */}
        <div className="space-y-3.5 text-xs text-slate-200">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
            <div className="w-6 h-6 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold shrink-0">
              1
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-amber-300 text-xs">Pass & Turn the Card</div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Pass the device around so each player turns their card in secret. Every believer receives the exact same Bible word (e.g. <em>"Noah's Ark"</em>). The secret <strong>Imposter</strong> receives <em>"YOU ARE THE IMPOSTER"</em>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
            <div className="w-6 h-6 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold shrink-0">
              2
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-blue-300 text-xs">Give One Clue in Order</div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Going in a circle, each player speaks <strong>one word or short clue</strong> relating to the topic.
                <br /><strong className="text-amber-300">Believers:</strong> Prove you know the word without making it too obvious for the imposter.
                <br /><strong className="text-red-400">Imposter:</strong> Fake a convincing clue based on what others say!
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
            <div className="w-6 h-6 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center font-bold shrink-0">
              3
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-red-300 text-xs">Debate & Accuse The Suspect</div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Once all clues are given, open the floor to debate! Cross-examine suspicious clues, vote on the primary suspect, and convict to reveal their identity.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold shrink-0">
              4
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-emerald-300 text-xs">Imposter's Last Stand</div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                If the group catches the imposter, the imposter gets <strong>one chance</strong> to guess the secret Bible word. If they guess right, the imposter steals the victory!
              </p>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 flex items-center space-x-2">
          <Sparkles size={16} className="shrink-0" />
          <span>
            <strong>Pro Tip:</strong> Try the <em>"Undercover"</em> mode in Settings where the Imposter receives a twin related Bible word (e.g. Moses vs Aaron) for an exciting twist!
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs transition"
        >
          Got It, Let's Play!
        </button>
      </div>
    </div>
  );
}

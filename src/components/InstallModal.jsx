import React from 'react';
import { X, Smartphone, Download, Share, PlusSquare, Monitor, CheckCircle, Sparkles } from 'lucide-react';

export default function InstallModal({
  isOpen,
  onClose,
  installPrompt,
  onDirectInstall,
  isInstalled
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="surface-card w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-7 space-y-5 border border-white/10 shadow-2xl bg-[#0b1120]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Smartphone size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">
                Install Imposterd
              </h3>
              <p className="text-xs text-slate-400">
                Play in full-screen on your phone's home screen
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
          >
            <X size={18} />
          </button>
        </div>

        {isInstalled ? (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
            <CheckCircle size={32} className="text-emerald-400 mx-auto" />
            <h4 className="font-bold text-sm text-emerald-300">Already Installed!</h4>
            <p className="text-xs text-slate-300">
              You are currently playing on the installed version of the app. Enjoy!
            </p>
          </div>
        ) : (
          <>
            {/* If browser supports 1-click install prompt */}
            {installPrompt && (
              <button
                onClick={onDirectInstall}
                className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/15 flex items-center justify-center space-x-2 transition pressable"
              >
                <Download size={18} />
                <span>Install to Home Screen (1 Click)</span>
              </button>
            )}

            {/* Step by Step Guides for Android and iPhone */}
            <div className="space-y-3">
              {/* iPhone Guide */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <span>📱 On iPhone / iPad (Safari)</span>
                </div>
                <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
                  <li>
                    Tap the <strong>Share</strong> button <Share size={13} className="inline mx-1 text-slate-200" /> at the bottom of Safari.
                  </li>
                  <li>
                    Scroll down and tap <strong>"Add to Home Screen"</strong> <PlusSquare size={13} className="inline mx-1 text-slate-200" />.
                  </li>
                  <li>
                    Tap <strong>Add</strong> in the top-right corner. Done!
                  </li>
                </ol>
              </div>

              {/* Android Guide */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <span>🤖 On Android (Chrome)</span>
                </div>
                <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
                  <li>
                    Tap the <strong>3 dots menu (⋮)</strong> in the top-right corner of Chrome.
                  </li>
                  <li>
                    Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.
                  </li>
                  <li>
                    Tap <strong>Install</strong> to confirm!
                  </li>
                </ol>
              </div>

              {/* Laptop Guide */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <Monitor size={14} />
                  <span>On Laptop / Computer (Chrome / Edge)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Click the small <strong>Install App icon (🖥️)</strong> located on the right side of your browser’s URL address bar.
                </p>
              </div>
            </div>

            {/* Why install benefit pill */}
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 flex items-center space-x-2">
              <Sparkles size={16} className="shrink-0" />
              <span>
                Installing gives you a full-screen app view with zero browser toolbars, plus full offline support for youth camps and retreats!
              </span>
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

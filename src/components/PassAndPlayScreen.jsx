import React, { useState, useEffect } from 'react';
import { RotateCw, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export default function PassAndPlayScreen({
  currentPlayerIndex,
  players,
  gameData,
  onPlayerDone
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Keep track of the active player being displayed so identity never changes during flip-out
  const [displayIndex, setDisplayIndex] = useState(currentPlayerIndex);

  useEffect(() => {
    // When currentPlayerIndex changes, ensure card is at front cover
    setDisplayIndex(currentPlayerIndex);
    setIsFlipped(false);
    setHasFlippedOnce(false);
    setIsTransitioning(false);
  }, [currentPlayerIndex]);

  const playerName = players[displayIndex];
  const isImposter = gameData.imposters.includes(playerName);
  const isUndercover = gameData.gameMode === 'undercover';

  // Word assigned to this player
  const assignedWord = (isImposter && isUndercover)
    ? gameData.currentWordObj.undercoverPair || gameData.currentWordObj.word
    : gameData.currentWordObj.word;

  const handleCardClick = () => {
    if (isTransitioning) return;
    setIsFlipped((prev) => !prev);
    if (!hasFlippedOnce) {
      setHasFlippedOnce(true);
    }
  };

  const isLastPlayer = currentPlayerIndex === players.length - 1;

  // Safe Pass to Next Player:
  // If card is currently flipped (showing secret), we flip it back to front FIRST
  // while keeping the current player's data, wait for the flip animation to finish (650ms),
  // and only THEN transition to the next player. This prevents any sneak peeks of the next player's role!
  const handleNextPlayer = () => {
    if (isTransitioning) return;

    if (isFlipped) {
      setIsTransitioning(true);
      setIsFlipped(false); // Flip back to front cover first
      setTimeout(() => {
        onPlayerDone(); // Now advance to next player when front is facing user
      }, 650);
    } else {
      // Already facing front, safe to proceed immediately
      onPlayerDone();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-8 flex flex-col items-center justify-between min-h-[78vh]">
      {/* Top Header & Turn Tracker */}
      <div className="w-full text-center space-y-2 mb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/[0.05] border border-white/10 text-slate-300">
          <span>Turn {displayIndex + 1} of {players.length}</span>
          <span className="w-1 h-1 rounded-full bg-amber-400"></span>
          <span className="text-amber-400 font-bold">{playerName}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Pass Device to <span className="text-amber-400">{playerName}</span>
        </h2>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Ensure other players cannot see the screen, then tap the card to flip and reveal your secret.
        </p>
      </div>

      {/* 3D Flip Card Container with Fixed Height (Zero Layout Jump!) */}
      <div className="w-full max-w-sm sm:max-w-md perspective-1000 my-auto py-2">
        <div
          onClick={handleCardClick}
          className={`relative w-full h-[380px] sm:h-[420px] rounded-3xl transform-style-3d card-flip-transition cursor-pointer no-select shadow-2xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* ================= FRONT OF CARD (Cover) ================= */}
          <div className="absolute inset-0 backface-hidden w-full h-full rounded-3xl surface-card border border-white/10 p-6 sm:p-8 flex flex-col items-center justify-between text-center bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950">
            {/* Top badge */}
            <div className="w-full flex justify-between items-center text-[11px] text-slate-400 font-medium">
              <span>Card {displayIndex + 1}/{players.length}</span>
              <span className="text-amber-400 font-semibold tracking-wide">FAITH & TRUTH</span>
            </div>

            {/* Center Emblem */}
            <div className="flex flex-col items-center space-y-4 my-auto">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 flex items-center justify-center shadow-inner">
                <span className="font-cinzel text-3xl sm:text-4xl text-amber-400 font-black">✝</span>
              </div>
              <div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                  {playerName}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Tap to flip card
                </p>
              </div>
            </div>

            {/* Bottom prompt */}
            <div className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center space-x-2 text-xs text-slate-300">
              <RotateCw size={14} className="text-amber-400" />
              <span>Click to reveal role</span>
            </div>
          </div>

          {/* ================= BACK OF CARD (Secret Identity) ================= */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between text-center bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-white/10">
            {isImposter && !isUndercover ? (
              /* Imposter Reveal */
              <>
                <div className="w-full flex justify-between items-center text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-bold uppercase tracking-wider">
                    Secret Role
                  </span>
                  <span className="text-slate-500">Tap to flip back</span>
                </div>

                <div className="my-auto space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <ShieldAlert size={36} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-red-400 tracking-wide">
                      YOU ARE THE IMPOSTER
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 max-w-xs mx-auto leading-relaxed">
                      You do not know the secret holy word. Listen intently to other players' clues and bluff convincingly!
                    </p>
                  </div>

                  {gameData.gameMode === 'hint' && (
                    <div className="py-1.5 px-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs inline-block">
                      <span className="text-slate-400">Category: </span>
                      <span className="text-amber-300 font-semibold">{gameData.currentWordObj.categoryName}</span>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 flex items-center justify-center space-x-1.5">
                  <RotateCw size={12} />
                  <span>Tap card again to flip back</span>
                </div>
              </>
            ) : (
              /* Believer / Undercover Reveal */
              <>
                <div className="w-full flex justify-between items-center text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold uppercase tracking-wider">
                    {gameData.currentWordObj.categoryName}
                  </span>
                  <span className="text-slate-500">Tap to flip back</span>
                </div>

                <div className="my-auto space-y-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <Sparkles size={28} className="text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      Secret Word
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white tracking-wide mt-1">
                      {assignedWord}
                    </h3>
                    {gameData.currentWordObj.bibleReference && (
                      <p className="text-xs font-medium text-amber-400/90 italic mt-1">
                        {gameData.currentWordObj.bibleReference}
                      </p>
                    )}
                  </div>

                  {isUndercover && (
                    <div className="px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-[11px] text-purple-300 max-w-xs mx-auto">
                      Undercover Mode: Give subtle clues to find your kindred!
                    </div>
                  )}

                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-slate-300 max-w-xs mx-auto">
                    <span className="text-amber-400 font-semibold">Clue Tip: </span>
                    {gameData.currentWordObj.hint}
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center justify-center space-x-1.5">
                  <RotateCw size={12} />
                  <span>Tap card again to flip back</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Action Button Below Card (Never jumps or moves) */}
      <div className="w-full max-w-sm sm:max-w-md pt-4">
        <button
          onClick={handleNextPlayer}
          disabled={!hasFlippedOnce || isTransitioning}
          className={`w-full py-3.5 sm:py-4 rounded-2xl font-semibold text-sm tracking-wide flex items-center justify-center space-x-2 transition pressable ${
            hasFlippedOnce && !isTransitioning
              ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/15 cursor-pointer'
              : 'bg-white/[0.05] text-slate-500 border border-white/5 cursor-not-allowed opacity-50'
          }`}
        >
          <span>
            {isTransitioning
              ? 'Flipping & Preparing Next...'
              : isLastPlayer
              ? 'All Players Ready — Start Clue Round'
              : `I've Seen It — Pass to Next Player`}
          </span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, AlertTriangle, ShieldCheck, ShieldAlert, ArrowRight, Eye, FastForward } from 'lucide-react';

export default function VotingScreen({
  players,
  gameData,
  discussionTime,
  onFinishVoting,
  onSkipVoting,
  onStartNewGame
}) {
  const [timeLeft, setTimeLeft] = useState(discussionTime || 0);
  const [timerRunning, setTimerRunning] = useState(discussionTime > 0);
  const [votes, setVotes] = useState(
    players.reduce((acc, p) => ({ ...acc, [p]: 0 }), {})
  );
  const [accusedPlayer, setAccusedPlayer] = useState(null);
  const [revealedResult, setRevealedResult] = useState(null); // { player, isImposter }

  useEffect(() => {
    let interval = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  const handleVoteChange = (player, delta) => {
    setVotes((prev) => {
      const current = prev[player] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [player]: next };
    });
  };

  const handleAccuse = (player) => {
    setAccusedPlayer(player);
  };

  const handleRevealAccused = () => {
    if (!accusedPlayer) return;
    const isImposter = gameData.imposters.includes(accusedPlayer);

    setRevealedResult({
      player: accusedPlayer,
      isImposter
    });
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      {/* Discussion Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
          <AlertTriangle size={13} /> Accusation & Trial
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Who Is The Imposter?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          Debate suspicious clues, weigh the testimonies, and vote to convict the suspect.
        </p>
      </div>

      {/* Discussion Countdown Timer */}
      {discussionTime > 0 && (
        <div className="surface-card rounded-2xl p-4 sm:p-5 flex items-center justify-between border border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Timer size={19} className={timeLeft <= 10 && timeLeft > 0 ? 'text-red-400 animate-pulse' : 'text-amber-400'} />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                Discussion Time Remaining
              </div>
              <div className={`font-mono text-xl font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>
                {formatTimer(timeLeft)}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/5 transition"
              title={timerRunning ? 'Pause' : 'Start'}
            >
              {timerRunning ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <button
              onClick={() => {
                setTimeLeft(discussionTime);
                setTimerRunning(false);
              }}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/5 transition"
              title="Reset Timer"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Result Reveal Overlay Card if suspect revealed */}
      {revealedResult && (
        <div className="surface-card rounded-3xl p-6 sm:p-8 text-center space-y-4 border border-white/15 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2 border-white/10 bg-white/[0.03]">
            {revealedResult.isImposter ? (
              <ShieldAlert size={40} className="text-red-400" />
            ) : (
              <ShieldCheck size={40} className="text-emerald-400" />
            )}
          </div>

          <div>
            <h3 className="font-cinzel text-3xl font-black text-white">
              {revealedResult.player}
            </h3>
            <div className="mt-2">
              {revealedResult.isImposter ? (
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30">
                  Was The Secret Imposter!
                </span>
              ) : (
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Was An Innocent Believer!
                </span>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
            {revealedResult.isImposter
              ? 'The believers successfully unmasked the imposter! Now let us see if the imposter can deduce the secret word.'
              : 'An innocent believer was convicted! The true wolf is still at large.'}
          </p>

          <button
            onClick={() => onFinishVoting(revealedResult)}
            className="w-full max-w-sm mx-auto py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/15 flex items-center justify-center gap-2 transition"
          >
            <span>Proceed to Final Verdict</span>
            <ArrowRight size={17} />
          </button>
        </div>
      )}

      {/* Accusation Cards (Responsive Grid for Laptop / Tablet / Mobile) */}
      {!revealedResult && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>Select Primary Suspect</span>
            <span className="text-amber-400">Tap to accuse</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {players.map((player) => {
              const isSelected = accusedPlayer === player;
              const voteCount = votes[player] || 0;

              return (
                <div
                  key={player}
                  className={`p-4 rounded-2xl border transition flex items-center justify-between ${
                    isSelected
                      ? 'bg-red-500/10 border-red-500/50 text-white'
                      : 'bg-white/[0.02] border-white/5 text-slate-200 hover:border-white/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleAccuse(player)}
                    className="flex-1 flex items-center space-x-3 text-left"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isSelected ? 'bg-red-500 text-white' : 'bg-white/[0.06] text-amber-400'
                      }`}
                    >
                      {player[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{player}</div>
                      <div className="text-xs text-slate-400">
                        {voteCount > 0 ? `${voteCount} vote${voteCount > 1 ? 's' : ''}` : 'No votes'}
                      </div>
                    </div>
                  </button>

                  {/* Vote +/- counter */}
                  <div className="flex items-center space-x-1.5">
                    <button
                      type="button"
                      onClick={() => handleVoteChange(player, -1)}
                      className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 font-bold flex items-center justify-center transition"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-amber-400">
                      {voteCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleVoteChange(player, 1)}
                      className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 font-bold flex items-center justify-center transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Convict action button */}
          <button
            type="button"
            disabled={!accusedPlayer}
            onClick={handleRevealAccused}
            className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center space-x-2 transition ${
              accusedPlayer
                ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20 cursor-pointer'
                : 'bg-white/[0.04] text-slate-500 border border-white/5 cursor-not-allowed opacity-50'
            }`}
          >
            <ShieldAlert size={18} />
            <span>
              {accusedPlayer ? `Convict & Reveal: ${accusedPlayer}` : 'Select a Suspect to Convict'}
            </span>
          </button>

          {/* Optional: Skip Voting (For groups voting in live person) & Start New Game */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            <button
              type="button"
              onClick={onSkipVoting}
              className="py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white border border-white/5 text-xs font-medium flex items-center justify-center space-x-2 transition pressable"
            >
              <Eye size={15} className="text-amber-400" />
              <span>Skip Voting (Voted in Person) — Reveal Roles</span>
            </button>

            <button
              type="button"
              onClick={onStartNewGame}
              className="py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 hover:text-white border border-white/5 text-xs font-medium flex items-center justify-center space-x-2 transition pressable"
            >
              <RotateCcw size={14} />
              <span>Start New Game</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

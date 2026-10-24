import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, MessageSquare, Timer, AlertCircle, Sparkles, Eye, RotateCcw } from 'lucide-react';

export default function CluePhaseScreen({
  players,
  startingPlayer,
  onProceedToVoting,
  onSkipToReveal,
  onStartNewGame
}) {
  const [completedPlayers, setCompletedPlayers] = useState([]);
  const [timerSeconds, setTimerSeconds] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Reorder player display starting from the randomly selected starting player
  const startIndex = players.indexOf(startingPlayer);
  const orderedPlayers = [
    ...players.slice(startIndex >= 0 ? startIndex : 0),
    ...players.slice(0, startIndex >= 0 ? startIndex : 0)
  ];

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const togglePlayerCheck = (name) => {
    if (completedPlayers.includes(name)) {
      setCompletedPlayers(completedPlayers.filter((p) => p !== name));
    } else {
      setCompletedPlayers([...completedPlayers, name]);
    }
  };

  const handleStartTimer = () => {
    setTimerSeconds(30);
    setIsTimerRunning(true);
  };

  const allCompleted = completedPlayers.length === players.length;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      {/* Starting Speaker Banner */}
      <div className="surface-card rounded-3xl p-6 sm:p-8 text-center space-y-3 border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Sparkles size={13} /> Clue Giving Round
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          <span className="text-amber-400">{startingPlayer}</span> Speaks First
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Go clockwise around the room. Each person gives <strong>ONE word or brief clue</strong> about the secret Bible topic.
        </p>
      </div>

      {/* Clue Rules Reminder */}
      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start space-x-3 text-xs text-slate-300">
        <AlertCircle size={17} className="text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-semibold text-slate-200">The Golden Rule: </span>
          <span>
            Don't make your clue too obvious, or the Imposter will deduce the word. But don't make it too obscure, or believers will suspect you!
          </span>
        </div>
      </div>

      {/* Turn Tracker Checklist (Responsive Grid for Laptop/Tablet/Mobile) */}
      <div className="surface-card rounded-3xl p-5 sm:p-7 space-y-4 border border-white/10">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center space-x-2">
            <MessageSquare size={16} className="text-amber-400" />
            <h3 className="font-bold text-slate-200 text-sm">
              Clue Checklist ({completedPlayers.length}/{players.length})
            </h3>
          </div>
          <button
            onClick={handleStartTimer}
            className="text-xs px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 text-slate-200 flex items-center space-x-1.5 transition"
          >
            <Timer size={13} className={isTimerRunning ? 'text-amber-400' : ''} />
            <span>{isTimerRunning ? `${timerSeconds}s remaining` : '30s Clue Timer'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {orderedPlayers.map((name, i) => {
            const isDone = completedPlayers.includes(name);
            const isStarter = name === startingPlayer;

            return (
              <button
                key={name}
                type="button"
                onClick={() => togglePlayerCheck(name)}
                className={`p-3.5 rounded-2xl border flex items-center justify-between text-left transition ${
                  isDone
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-white/[0.02] border-white/5 text-slate-300 hover:border-white/15'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isDone
                        ? 'bg-emerald-500 text-slate-950'
                        : isStarter
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-white/[0.06] text-slate-400'
                    }`}
                  >
                    {isDone ? <Check size={14} /> : i + 1}
                  </div>
                  <div>
                    <span className="font-semibold text-xs sm:text-sm">{name}</span>
                    {isStarter && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 font-semibold">
                        STARTER
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-[11px] text-slate-500">
                  {isDone ? 'Done' : 'Tap'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Area: Main Voting + Skip Options */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={onProceedToVoting}
          className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/15 flex items-center justify-center space-x-2 transition pressable"
        >
          <span>
            {allCompleted ? 'All Clues Given — Open Floor to Voting' : 'Open Floor to Discussion & Voting'}
          </span>
          <ArrowRight size={18} />
        </button>

        {/* Skip Voting (For groups voting in live person) & Start New Game */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={onSkipToReveal}
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
    </div>
  );
}

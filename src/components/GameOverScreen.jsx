import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, RotateCcw, Settings, BookOpen } from 'lucide-react';

export default function GameOverScreen({
  gameData,
  votingResult,
  score,
  onPlayAgain,
  onOpenSettings
}) {
  const [guessAttempted, setGuessAttempted] = useState(false);
  const [guessSuccess, setGuessSuccess] = useState(false);
  const [selectedGuess, setSelectedGuess] = useState('');

  const secretWord = gameData.currentWordObj.word;
  const isImposterCaught = votingResult?.isImposter;
  const isSkipped = votingResult?.skipped;

  const [guessOptions, setGuessOptions] = useState([]);

  useEffect(() => {
    // Generate distractors
    const allWords = gameData.allWordsPool || [];
    const otherWords = allWords
      .filter((w) => w.word !== secretWord)
      .map((w) => w.word);

    // Shuffle and pick 3
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const combined = [...shuffledOthers, secretWord].sort(() => 0.5 - Math.random());
    setGuessOptions(combined);

    // Visual celebration if believers caught the imposter
    if (isImposterCaught && !isSkipped) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, []);

  const handleGuessSubmit = (option) => {
    setSelectedGuess(option);
    setGuessAttempted(true);
    if (option === secretWord) {
      setGuessSuccess(true);
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
  };

  let winnerText = '';
  let winnerSubtext = '';
  if (isSkipped) {
    winnerText = 'The Truth Revealed!';
    winnerSubtext = 'You voted in person! Here is the holy word and the secret imposter(s).';
  } else if (!isImposterCaught) {
    winnerText = 'The Imposter Escapes!';
    winnerSubtext = 'The believers convicted the wrong person. The imposter prevailed!';
  } else if (guessAttempted && guessSuccess) {
    winnerText = 'Imposter Steals Victory!';
    winnerSubtext = 'Caught, but the imposter correctly deduced the sacred word!';
  } else if (guessAttempted && !guessSuccess) {
    winnerText = 'Believers Triumph!';
    winnerSubtext = 'The imposter was exposed and failed to guess the holy word. Praise the Lord!';
  } else {
    winnerText = 'Imposter Unmasked!';
    winnerSubtext = 'The believers exposed the imposter. Now for the final bluff...';
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      {/* Victory / Defeat Header */}
      <div className="surface-card rounded-3xl p-6 sm:p-8 text-center space-y-3 border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
          <Trophy size={28} className="text-amber-400" />
        </div>
        <div>
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Round Summary
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-wide">
            {winnerText}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
          {winnerSubtext}
        </p>
      </div>

      {/* Imposter's Final Guess Minigame */}
      {!guessAttempted && (
        <div className="surface-card rounded-3xl p-6 space-y-4 border border-amber-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
              Bonus Guess
            </span>
            <h4 className="font-cinzel text-lg font-bold text-white">
              Can the Imposter Guess the Word?
            </h4>
            <p className="text-xs text-slate-400">
              Let the imposter tap what they think the holy word was!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {guessOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleGuessSubmit(opt)}
                className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400 text-slate-200 text-xs sm:text-sm font-semibold transition truncate"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Secret Word & Bible Insight Reveal */}
      <div className="surface-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/10">
        <div className="flex items-center space-x-2 text-amber-400">
          <BookOpen size={18} />
          <h3 className="font-bold text-sm tracking-wide text-white">
            The Holy Word Revealed
          </h3>
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-1.5">
          <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
            {gameData.currentWordObj.categoryName}
          </div>
          <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            {secretWord}
          </div>
          {gameData.currentWordObj.bibleReference && (
            <div className="text-xs sm:text-sm text-amber-300 font-medium italic">
              {gameData.currentWordObj.bibleReference}
            </div>
          )}
          {gameData.currentWordObj.description && (
            <p className="text-xs sm:text-sm text-slate-300 pt-3 border-t border-white/5 mt-3 max-w-lg mx-auto leading-relaxed">
              {gameData.currentWordObj.description}
            </p>
          )}
        </div>

        {/* Imposters identified */}
        <div className="flex items-center justify-between text-xs pt-1 px-1">
          <span className="text-slate-400">Secret Imposter(s):</span>
          <div className="flex gap-1.5">
            {gameData.imposters.map((imp) => (
              <span
                key={imp}
                className="px-3 py-1 rounded-xl bg-red-500/15 text-red-300 font-semibold border border-red-500/30 text-xs"
              >
                {imp}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scoreboard */}
      {!isSkipped && (
        <div className="surface-card rounded-3xl p-5 flex items-center justify-around text-center border border-white/10">
          <div>
            <div className="text-xs uppercase text-slate-400 font-semibold">Believers Score</div>
            <div className="font-cinzel text-3xl font-black text-amber-400 mt-1">{score.believers}</div>
          </div>
          <div className="w-[1px] h-10 bg-white/10"></div>
          <div>
            <div className="text-xs uppercase text-slate-400 font-semibold">Imposters Score</div>
            <div className="font-cinzel text-3xl font-black text-red-400 mt-1">{score.imposters}</div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button
          type="button"
          onClick={onOpenSettings}
          className="py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center space-x-2 border border-white/10 transition"
        >
          <Settings size={16} />
          <span>Game Settings</span>
        </button>

        <button
          type="button"
          onClick={onPlayAgain}
          className="py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/15 transition"
        >
          <RotateCcw size={16} />
          <span>Play Next Round</span>
        </button>
      </div>
    </div>
  );
}

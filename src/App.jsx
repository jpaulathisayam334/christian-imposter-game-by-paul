import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import PassAndPlayScreen from './components/PassAndPlayScreen';
import CluePhaseScreen from './components/CluePhaseScreen';
import VotingScreen from './components/VotingScreen';
import GameOverScreen from './components/GameOverScreen';
import SettingsModal from './components/SettingsModal';
import RulesModal from './components/RulesModal';
import CustomWordsModal from './components/CustomWordsModal';
import PrivacyModal from './components/PrivacyModal';
import TermsModal from './components/TermsModal';
import { CHRISTIAN_WORDS, DEFAULT_PLAYERS } from './data/christianWords';

export default function App() {
  // Navigation / Screen state: 'home' | 'pass_and_play' | 'clue_phase' | 'voting' | 'game_over'
  const [screen, setScreen] = useState('home');

  // Modals state
  const [showSettings, setShowSettings] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showCustomWords, setShowCustomWords] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Persistent Game Configurations
  const [players, setPlayers] = useState(() => {
    try {
      const saved = localStorage.getItem('imposterd_players');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_PLAYERS;
  });

  const [imposterCount, setImposterCount] = useState(() => {
    try {
      const saved = localStorage.getItem('imposterd_imposter_count');
      if (saved) return Number(saved);
    } catch (e) {}
    return 1;
  });

  const [selectedCategory, setSelectedCategory] = useState(() => {
    try {
      const saved = localStorage.getItem('imposterd_category');
      if (saved) return saved;
    } catch (e) {}
    return 'all';
  });

  const [gameMode, setGameMode] = useState(() => {
    try {
      const saved = localStorage.getItem('imposterd_game_mode');
      if (saved) return saved;
    } catch (e) {}
    return 'blind'; // 'blind' | 'hint' | 'undercover'
  });

  const [discussionTime, setDiscussionTime] = useState(() => {
    try {
      const saved = localStorage.getItem('imposterd_timer');
      if (saved !== null) return Number(saved);
    } catch (e) {}
    return 120; // 2 minutes default
  });

  const [customWords, setCustomWords] = useState(() => {
    try {
      const saved = localStorage.getItem('imposterd_custom_words');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  // Active game session data
  const [gameData, setGameData] = useState(null);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [startingPlayer, setStartingPlayer] = useState('');
  const [votingResult, setVotingResult] = useState(null);
  const [score, setScore] = useState({ believers: 0, imposters: 0 });

  // Sync all settings immediately to localStorage
  useEffect(() => {
    localStorage.setItem('imposterd_players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem('imposterd_imposter_count', String(imposterCount));
  }, [imposterCount]);

  useEffect(() => {
    localStorage.setItem('imposterd_category', selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem('imposterd_game_mode', gameMode);
  }, [gameMode]);

  useEffect(() => {
    localStorage.setItem('imposterd_timer', String(discussionTime));
  }, [discussionTime]);

  const handleSaveCustomWords = (newWords) => {
    setCustomWords(newWords);
    localStorage.setItem('imposterd_custom_words', JSON.stringify(newWords));
  };

  // Filter pool of words
  const getWordPool = () => {
    if (selectedCategory === 'custom') {
      return customWords.length > 0 ? customWords : CHRISTIAN_WORDS;
    }
    const combined = [...CHRISTIAN_WORDS, ...customWords];
    if (selectedCategory === 'all') return combined;
    return combined.filter((w) => w.category === selectedCategory);
  };

  // Start fresh game round
  const handleStartGame = () => {
    const pool = getWordPool();
    if (pool.length === 0) {
      alert('No words found in this category. Please select another category in Settings.');
      return;
    }

    // Pick random word
    const randomWordObj = pool[Math.floor(Math.random() * pool.length)];

    // Randomly select Imposters
    const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
    const selectedImposters = shuffledPlayers.slice(0, Math.min(imposterCount, players.length - 1));

    // Randomly select who gives clue first
    const starter = players[Math.floor(Math.random() * players.length)];

    setGameData({
      currentWordObj: randomWordObj,
      imposters: selectedImposters,
      gameMode,
      allWordsPool: pool
    });

    setStartingPlayer(starter);
    setCurrentPlayerIndex(0);
    setVotingResult(null);
    setScreen('pass_and_play');
  };

  // Pass and play transition
  const handlePlayerDone = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setScreen('clue_phase');
    }
  };

  // Clue phase transition
  const handleProceedToVoting = () => {
    setScreen('voting');
  };

  // Voting complete
  const handleFinishVoting = (result) => {
    setVotingResult(result);
    if (result.isImposter) {
      setScore((prev) => ({ ...prev, believers: prev.believers + 1 }));
    } else {
      setScore((prev) => ({ ...prev, imposters: prev.imposters + 1 }));
    }
    setScreen('game_over');
  };

  // Skip voting directly to revealing roles (e.g. for live in-person voting)
  const handleSkipToReveal = () => {
    setVotingResult({
      player: gameData.imposters[0] || 'Unknown',
      isImposter: true,
      skipped: true
    });
    setScreen('game_over');
  };

  // Play next round
  const handlePlayAgain = () => {
    handleStartGame();
  };

  // Exit back to lobby/home
  const handleReturnHome = () => {
    setScreen('home');
  };

  const totalWordsAvailable = getWordPool().length;

  return (
    <div className="min-h-screen bg-[#070a14] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar
        onOpenRules={() => setShowRules(true)}
        onOpenSettings={() => setShowSettings(true)}
        onReturnHome={handleReturnHome}
        inGame={screen !== 'home'}
      />

      {/* Main Dynamic Viewport Container (Fully responsive on Laptop, Tablet, Mobile) */}
      <main className="flex-1 w-full max-w-6xl mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {screen === 'home' && (
          <HomeScreen
            players={players}
            imposterCount={imposterCount}
            selectedCategory={selectedCategory}
            gameMode={gameMode}
            discussionTime={discussionTime}
            totalWordsAvailable={totalWordsAvailable}
            onStartGame={handleStartGame}
            onOpenSettings={() => setShowSettings(true)}
            onOpenRules={() => setShowRules(true)}
          />
        )}

        {screen === 'pass_and_play' && gameData && (
          <PassAndPlayScreen
            currentPlayerIndex={currentPlayerIndex}
            players={players}
            gameData={gameData}
            onPlayerDone={handlePlayerDone}
          />
        )}

        {screen === 'clue_phase' && (
          <CluePhaseScreen
            players={players}
            startingPlayer={startingPlayer}
            onProceedToVoting={handleProceedToVoting}
            onSkipToReveal={handleSkipToReveal}
            onStartNewGame={handleStartGame}
          />
        )}

        {screen === 'voting' && gameData && (
          <VotingScreen
            players={players}
            gameData={gameData}
            discussionTime={discussionTime}
            onFinishVoting={handleFinishVoting}
            onSkipVoting={handleSkipToReveal}
            onStartNewGame={handleStartGame}
          />
        )}

        {screen === 'game_over' && gameData && (
          <GameOverScreen
            gameData={gameData}
            votingResult={votingResult}
            score={score}
            onPlayAgain={handlePlayAgain}
            onOpenSettings={() => setShowSettings(true)}
          />
        )}
      </main>

      {/* Website Footer with Paul Miracle credits and legal links */}
      <Footer
        onOpenPrivacy={() => setShowPrivacy(true)}
        onOpenTerms={() => setShowTerms(true)}
        onOpenRules={() => setShowRules(true)}
        onOpenCustomWords={() => setShowCustomWords(true)}
      />

      {/* Modals */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        players={players}
        setPlayers={setPlayers}
        imposterCount={imposterCount}
        setImposterCount={setImposterCount}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        gameMode={gameMode}
        setGameMode={setGameMode}
        discussionTime={discussionTime}
        setDiscussionTime={setDiscussionTime}
        customWords={customWords}
        onOpenCustomWords={() => setShowCustomWords(true)}
        totalWordsAvailable={totalWordsAvailable}
      />

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />

      <CustomWordsModal
        isOpen={showCustomWords}
        onClose={() => setShowCustomWords(false)}
        customWords={customWords}
        onSaveCustomWords={handleSaveCustomWords}
      />

      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />

      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </div>
  );
}

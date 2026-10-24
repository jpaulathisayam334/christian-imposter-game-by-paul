import React, { useState } from 'react';
import { X, Users, UserPlus, ShieldAlert, Eye, BookOpen, Timer, Shuffle, Plus, Trash2, Check, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/christianWords';

const BIBLICAL_NAME_SUGGESTIONS = [
  'Peter', 'John', 'Paul', 'Esther', 'Mary', 'David', 'Sarah', 
  'Ruth', 'Timothy', 'Lydia', 'James', 'Miriam', 'Daniel', 'Hannah',
  'Joseph', 'Priscilla', 'Luke', 'Stephen', 'Chloe', 'Silas'
];

export default function SettingsModal({
  isOpen,
  onClose,
  players,
  setPlayers,
  imposterCount,
  setImposterCount,
  selectedCategory,
  setSelectedCategory,
  gameMode,
  setGameMode,
  discussionTime,
  setDiscussionTime,
  customWords,
  onOpenCustomWords,
  totalWordsAvailable
}) {
  const [newPlayerName, setNewPlayerName] = useState('');

  if (!isOpen) return null;

  const handleAddPlayer = (e) => {
    e?.preventDefault();
    const trimmed = newPlayerName.trim();
    if (!trimmed) return;
    if (players.includes(trimmed)) {
      alert('A player with this name already exists.');
      return;
    }
    setPlayers([...players, trimmed]);
    setNewPlayerName('');
  };

  const handleRemovePlayer = (index) => {
    if (players.length <= 3) {
      alert('You need at least 3 players to play.');
      return;
    }
    const updated = players.filter((_, i) => i !== index);
    setPlayers(updated);
    if (imposterCount >= updated.length - 1) {
      setImposterCount(Math.max(1, Math.floor((updated.length - 1) / 2)));
    }
  };

  const handleAddRandomBiblicalName = () => {
    const available = BIBLICAL_NAME_SUGGESTIONS.filter((name) => !players.includes(name));
    if (available.length > 0) {
      const randomName = available[Math.floor(Math.random() * available.length)];
      setPlayers([...players, randomName]);
    } else {
      setPlayers([...players, `Disciple ${players.length + 1}`]);
    }
  };

  const maxImposters = Math.max(1, Math.floor((players.length - 1) / 2));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="surface-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-5 sm:p-7 space-y-6 border border-white/10 shadow-2xl bg-[#0b1120]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Game Customization & Settings
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Settings automatically save and persist for all future sessions.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Players Configuration */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Users size={15} className="text-amber-400" />
              <span>Players ({players.length})</span>
            </label>
            <button
              type="button"
              onClick={handleAddRandomBiblicalName}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-1 transition"
            >
              <Shuffle size={12} />
              <span>+ Quick Name</span>
            </button>
          </div>

          {/* Player Chips */}
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-1">
            {players.map((player, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200"
              >
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 text-[10px] flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <span className="font-medium">{player}</span>
                <button
                  type="button"
                  onClick={() => handleRemovePlayer(idx)}
                  className="text-slate-500 hover:text-red-400 transition ml-0.5"
                  title="Remove player"
                >
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>

          {/* Add Player Input */}
          <form onSubmit={handleAddPlayer} className="flex gap-2 pt-1">
            <input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              placeholder="Add friend or disciple name..."
              className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              maxLength={18}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition"
            >
              <Plus size={15} />
              <span>Add</span>
            </button>
          </form>
        </div>

        {/* Imposter Count & Game Mode Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Imposter Count */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <ShieldAlert size={15} className="text-red-400" />
              <span>Number of Imposters</span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((num) => {
                const disabled = num > maxImposters;
                const isSelected = imposterCount === num;
                return (
                  <button
                    key={num}
                    type="button"
                    disabled={disabled}
                    onClick={() => setImposterCount(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                      isSelected
                        ? 'bg-red-500/20 border-red-500 text-red-300'
                        : disabled
                        ? 'opacity-30 border-white/5 bg-transparent text-slate-600 cursor-not-allowed'
                        : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/10'
                    }`}
                  >
                    {num} {num === 1 ? 'Imposter' : 'Imposters'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Imposter Mode */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <Eye size={15} className="text-amber-400" />
              <span>Imposter Mode</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'blind', label: 'Blind', desc: 'No clues' },
                { id: 'hint', label: 'Category', desc: 'Gets topic' },
                { id: 'undercover', label: 'Undercover', desc: 'Twin word' }
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setGameMode(m.id)}
                  className={`py-2 px-1 rounded-xl text-center border transition ${
                    gameMode === m.id
                      ? 'bg-amber-500/15 border-amber-400 text-amber-300'
                      : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/10'
                  }`}
                >
                  <div className="text-xs font-semibold">{m.label}</div>
                  <div className="text-[10px] text-slate-500">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <BookOpen size={15} className="text-amber-400" />
              <span>Bible Topic & Words ({totalWordsAvailable} available)</span>
            </label>
            <button
              type="button"
              onClick={onOpenCustomWords}
              className="text-xs text-amber-400 hover:underline flex items-center gap-1"
            >
              <Sparkles size={12} />
              <span>Manage Custom Words ({customWords.length})</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-2.5 rounded-xl border text-left transition ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400 text-amber-300 font-semibold'
                      : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/10 hover:text-slate-200'
                  }`}
                >
                  <div className="text-xs leading-tight line-clamp-1">{cat.name}</div>
                </button>
              );
            })}
            {customWords.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedCategory('custom')}
                className={`p-2.5 rounded-xl border text-left transition ${
                  selectedCategory === 'custom'
                    ? 'bg-amber-500/15 border-amber-400 text-amber-300 font-semibold'
                    : 'border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/10'
                }`}
              >
                <div className="text-xs text-amber-400">✨ Custom ({customWords.length})</div>
              </button>
            )}
          </div>
        </div>

        {/* Discussion Timer */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <Timer size={14} className="text-amber-400" />
              <span>Discussion Timer</span>
            </div>
            <div className="text-[11px] text-slate-400">Time allowed to debate clues</div>
          </div>
          <div className="flex gap-1.5">
            {[
              { val: 60, label: '1m' },
              { val: 120, label: '2m' },
              { val: 180, label: '3m' },
              { val: 0, label: 'Off' }
            ].map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setDiscussionTime(t.val)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                  discussionTime === t.val
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-white/[0.02] text-slate-400 border-white/5 hover:border-white/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Done / Save Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 transition"
        >
          <Check size={18} />
          <span>Save & Apply Settings</span>
        </button>
      </div>
    </div>
  );
}

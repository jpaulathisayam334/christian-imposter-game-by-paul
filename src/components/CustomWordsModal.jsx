import React, { useState } from 'react';
import { X, Plus, Trash2, BookPlus, Sparkles } from 'lucide-react';

export default function CustomWordsModal({
  isOpen,
  onClose,
  customWords,
  onSaveCustomWords
}) {
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [reference, setReference] = useState('');

  if (!isOpen) return null;

  const handleAddWord = (e) => {
    e?.preventDefault();
    const trimmedWord = word.trim();
    if (!trimmedWord) return;

    const newEntry = {
      word: trimmedWord,
      category: 'custom',
      categoryName: 'Custom Church Pack',
      hint: hint.trim() || 'Custom Faith Word',
      bibleReference: reference.trim() || '',
      description: 'Added by your church / fellowship group.'
    };

    onSaveCustomWords([...customWords, newEntry]);
    setWord('');
    setHint('');
    setReference('');
  };

  const handleRemove = (index) => {
    const updated = customWords.filter((_, i) => i !== index);
    onSaveCustomWords(updated);
  };

  const handleLoadSampleYouthPack = () => {
    const samplePack = [
      {
        word: 'Youth Pastor',
        category: 'custom',
        categoryName: 'Custom Church Pack',
        hint: 'Acoustic Guitar, Coffee, High Energy, Game Master',
        bibleReference: '1 Timothy 4:12',
        description: 'Leader who guides youth in faith and fun.'
      },
      {
        word: 'Church Potluck',
        category: 'custom',
        categoryName: 'Custom Church Pack',
        hint: 'Casseroles, Fellowship Hall, Plates, Leftovers',
        bibleReference: 'Acts 2:46',
        description: 'Feasting together in fellowship after worship service.'
      },
      {
        word: 'Worship Team',
        category: 'custom',
        categoryName: 'Custom Church Pack',
        hint: 'Microphones, Drums, Singing, Soundcheck',
        bibleReference: 'Psalm 100',
        description: 'Musicians leading the congregation in praise and adoration.'
      },
      {
        word: 'Sunday School',
        category: 'custom',
        categoryName: 'Custom Church Pack',
        hint: 'Coloring Pages, Gold Star, Memory Verses, Snacks',
        bibleReference: 'Proverbs 22:6',
        description: 'Learning the stories of Scripture from early childhood.'
      }
    ];

    onSaveCustomWords([...customWords, ...samplePack]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="surface-card w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-7 space-y-5 border border-white/10 shadow-2xl bg-[#0b1120]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-2">
            <BookPlus className="text-amber-400" size={20} />
            <h3 className="font-bold text-lg text-white">
              Custom Word Packs
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-slate-300">
          Add your own church names, pastor names, youth group terms, or sermon topics. Stored locally on this device.
        </p>

        {/* Add Form */}
        <form onSubmit={handleAddWord} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
          <div className="space-y-1">
            <label className="text-[11px] font-semibold uppercase text-slate-400">
              Word or Bible Character *
            </label>
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="e.g. Pastor Mike, Worship Night, Garden Tomb"
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase text-slate-400">
                Hint / Clue Tip
              </label>
              <input
                type="text"
                value={hint}
                onChange={(e) => setHint(e.target.value)}
                placeholder="e.g. Empty, Stone, Angels"
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase text-slate-400">
                Bible Reference (optional)
              </label>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="e.g. John 20:1"
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition"
          >
            <Plus size={15} />
            <span>Add Word to Custom Pack</span>
          </button>
        </form>

        {/* Existing Custom Words List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Your Custom Words ({customWords.length})</span>
            {customWords.length === 0 && (
              <button
                type="button"
                onClick={handleLoadSampleYouthPack}
                className="text-amber-400 hover:underline flex items-center space-x-1"
              >
                <Sparkles size={12} />
                <span>+ Load Sample Youth Pack</span>
              </button>
            )}
          </div>

          {customWords.length === 0 ? (
            <div className="text-center py-6 border border-dashed border-white/10 rounded-2xl text-slate-500 text-xs">
              No custom words added yet.
            </div>
          ) : (
            <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
              {customWords.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-semibold text-slate-200">{item.word}</div>
                    <div className="text-[10px] text-slate-400">
                      Hint: {item.hint} {item.bibleReference ? `• (${item.bibleReference})` : ''}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(idx)}
                    className="p-1 rounded-lg text-slate-500 hover:text-red-400 hover:bg-white/[0.05] transition"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs transition"
        >
          Save & Return
        </button>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

// === Inline SVG Icons ===

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z" fill="currentColor"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 11.3v2.2a1.5 1.5 0 01-1.6 1.5 14.8 14.8 0 01-6.4-2.3A14.6 14.6 0 012 8.1 14.8 14.8 0 01-.3 1.6 1.5 1.5 0 011.2 0h2.2a1.5 1.5 0 011.5 1.3c.1.8.3 1.6.6 2.4a1.5 1.5 0 01-.3 1.6l-.9 1a12 12 0 005.6 5.6l1-.9a1.5 1.5 0 011.5-.3c.8.3 1.6.5 2.4.6a1.5 1.5 0 011.3 1.5z" fill="currentColor"/>
  </svg>
);

// === Data ===

const CONVERSATION_CYCLES = [
  {
    buyerMessage: "I'm not sure if now is the right time to sell...",
    saysoPrompt: 'Ask: "What would make a move worth it for you in the next 6 months?"',
    promptSource: 'Objection handling playbook',
  },
  {
    buyerMessage: "We're thinking about Santa Monica for the schools.",
    saysoPrompt: 'Try: "What\'s most important to you about the location or neighborhood?"',
    promptSource: 'Top performer pattern',
  },
  {
    buyerMessage: "Our current agent charges really high fees...",
    saysoPrompt: 'Say: "Walk me through what good value looks like to you."',
    promptSource: 'Past call with Sarah Chen',
  },
];

// === Subcomponents ===

function CRMInterface() {
  return (
    <div className="absolute inset-0 bg-[#f8f9fa] overflow-hidden">
      {/* CRM Header/Nav */}
      <div className="h-12 bg-[#2d3748] border-b border-gray-700 flex items-center px-4 gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#2367EE] flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="text-white text-sm font-semibold">SaySo CRM</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <button className="text-gray-300 hover:text-white px-2 py-1">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 12a4 4 0 018 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              People
            </span>
          </button>
          <button className="text-gray-400 px-2 py-1">Inbox</button>
          <button className="text-gray-400 px-2 py-1">Tasks</button>
          <button className="text-gray-400 px-2 py-1">Calendar</button>
          <button className="text-gray-400 px-2 py-1">Deals</button>
        </nav>
      </div>

      {/* CRM Content */}
      <div className="p-6 pt-20">
        {/* Contact Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4 v2-comic-border v2-comic-shadow">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2367EE] to-[#1D4871] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl font-bold">JS</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[#1D4871] mb-1">Jane Smith</h1>
              <p className="text-sm text-gray-600 mb-3">Prospect • Santa Monica, CA</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-gray-700">
                  <PhoneIcon />
                  <span>(310) 488-1179</span>
                </div>
                <div className="text-gray-400">•</div>
                <span className="text-gray-600">jane.smith@email.com</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-[#2367EE] text-white text-sm font-semibold v2-comic-btn">
                Log Call
              </button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Relationships */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-lg">👥</span>
              Relationships
            </h3>
            <p className="text-sm text-gray-500">No relationships</p>
          </div>

          {/* Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-lg">📋</span>
              Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Stage</span>
                <span className="font-medium text-gray-900">Agent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Source</span>
                <span className="font-medium text-gray-900">Import</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Agent</span>
                <span className="font-medium text-gray-900">Sales Director</span>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-lg">✓</span>
              Tasks
            </h3>
            <p className="text-sm text-gray-500">No upcoming tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallStatusBar({
  timerSeconds,
  saysoOpen,
  onToggleSayso
}: {
  timerSeconds: number;
  saysoOpen: boolean;
  onToggleSayso: () => void;
}) {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const formatted = `${mins}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="absolute top-12 left-0 right-0 h-14 bg-[#3d4f5f] border-b border-gray-600 flex items-center justify-between px-4 z-20">
      {/* Left: Sayso Toggle Button */}
      <button
        onClick={onToggleSayso}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
          saysoOpen
            ? 'bg-[#FFDE59] text-[#1D4871] v2-comic-border v2-comic-shadow-sm'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        <SparkleIcon />
        <span>Sayso</span>
      </button>

      {/* Center: Call Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2367EE] to-[#1D4871] flex items-center justify-center">
            <span className="text-white text-xs font-bold">JS</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Calling Jane Smith</div>
            <div className="text-xs text-gray-300">(310) 488-1179 (mobile)</div>
          </div>
        </div>

        <div className="h-8 w-px bg-gray-500" />

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-mono font-semibold text-white">{formatted}</span>
        </div>
      </div>

      {/* Right: Call Controls */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm flex items-center gap-1.5 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6 2L3 5l3 3M3 5h7M8 12l3-3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Transfer
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm flex items-center gap-1.5 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v5m0 3v2M4 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 4v1a3 3 0 01-6 0V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Muted
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors v2-comic-btn">
          <PhoneIcon />
          Hang up
        </button>
      </div>
    </div>
  );
}

function ConversationPopup({
  currentCycle,
  showBuyerMessage,
  showPrompt,
  promptText,
  isOpen
}: {
  currentCycle: number;
  showBuyerMessage: boolean;
  showPrompt: boolean;
  promptText: string;
  isOpen: boolean;
}) {
  const cycle = CONVERSATION_CYCLES[currentCycle];

  if (!isOpen) return null;

  return (
    <div className="absolute top-28 left-4 z-30 max-w-[380px] w-full conversation-popup-enter">
      <div className="bg-[#2d3748] rounded-xl border-2 border-[#1D4871] shadow-[8px_8px_0px_rgba(29,72,113,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-600 bg-[#3d4f5f]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2367EE] to-[#1D4871] flex items-center justify-center">
            <span className="text-white text-xs font-bold">JS</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Jane Smith</div>
            <div className="text-xs text-gray-300">On call</div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 min-h-[180px] bg-[#2d3748]">
          {/* Buyer Message */}
          {showBuyerMessage && (
            <div className="flex gap-2 items-start conversation-message-enter">
              <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">JS</span>
              </div>
              <div className="flex-1">
                <div className="bg-[#3d4f5f] rounded-2xl rounded-tl-sm px-4 py-2.5 border border-gray-600">
                  <p className="text-sm text-white leading-relaxed">{cycle.buyerMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Sayso Prompt */}
          {showPrompt && (
            <div className="conversation-prompt-enter">
              <div className="bg-gradient-to-r from-[#FFDE59] to-[#FFD700] rounded-xl px-4 py-3 border-2 border-[#1D4871] shadow-[4px_4px_0px_rgba(29,72,113,0.4)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#1D4871]"><SparkleIcon /></span>
                  <span className="text-xs font-bold text-[#1D4871] uppercase tracking-wide">Sayso suggests</span>
                </div>
                <p className="text-sm font-semibold text-[#1D4871] leading-relaxed">
                  {promptText}
                  {promptText.length < cycle.saysoPrompt.length && (
                    <span className="inline-block w-[2px] h-[14px] bg-[#1D4871] ml-0.5 align-middle animate-pulse" />
                  )}
                </p>
                {promptText === cycle.saysoPrompt && (
                  <div className="mt-2 text-xs text-[#1D4871]/70 conversation-fade-in">
                    📚 {cycle.promptSource}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// === Main Component ===

export function CRMDialerShowcase() {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(0);
  const [showBuyerMessage, setShowBuyerMessage] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [saysoOpen, setSaysoOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const CYCLE_DURATION = 10000; // 10s per cycle

  const startCycle = useCallback(() => {
    setShowBuyerMessage(false);
    setShowPrompt(false);
    setPromptText('');

    // Step 1: Show buyer message after 500ms
    setTimeout(() => setShowBuyerMessage(true), 500);

    // Step 2: Show prompt after 2s and type it out
    setTimeout(() => {
      setShowPrompt(true);
      const fullPrompt = CONVERSATION_CYCLES[currentCycle].saysoPrompt;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        charIndex++;
        setPromptText(fullPrompt.slice(0, charIndex));

        if (charIndex >= fullPrompt.length) {
          clearInterval(typeInterval);
        }
      }, 30); // 30ms per character
    }, 2500);
  }, [currentCycle]);

  // Timer ticking
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Cycle management - only when Sayso is open
  useEffect(() => {
    if (!saysoOpen) return;

    startCycle();

    const cycleInterval = setInterval(() => {
      setCurrentCycle(prev => (prev + 1) % CONVERSATION_CYCLES.length);
    }, CYCLE_DURATION);

    return () => clearInterval(cycleInterval);
  }, [startCycle, saysoOpen]);

  // Restart animation on cycle change
  useEffect(() => {
    if (saysoOpen) {
      startCycle();
    }
  }, [currentCycle, startCycle, saysoOpen]);

  return (
    <div className="w-full rounded-3xl border-2 border-[#1D4871] bg-[#f8f9fa] shadow-[8px_8px_0px_#1D4871] overflow-hidden">
      <div className="aspect-[16/10] relative">
        {/* Layer 1: CRM Interface */}
        <CRMInterface />

        {/* Layer 2: Call Status Bar */}
        <CallStatusBar
          timerSeconds={timerSeconds}
          saysoOpen={saysoOpen}
          onToggleSayso={() => setSaysoOpen(!saysoOpen)}
        />

        {/* Layer 3: Conversation Popup (only when toggled) */}
        <ConversationPopup
          currentCycle={currentCycle}
          showBuyerMessage={showBuyerMessage}
          showPrompt={showPrompt}
          promptText={promptText}
          isOpen={saysoOpen}
        />
      </div>
    </div>
  );
}

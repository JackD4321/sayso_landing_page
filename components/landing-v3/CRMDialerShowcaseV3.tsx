'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

// === Inline SVG Icons ===

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 11.3v2.2a1.5 1.5 0 01-1.6 1.5 14.8 14.8 0 01-6.4-2.3A14.6 14.6 0 012 8.1 14.8 14.8 0 01-.3 1.6 1.5 1.5 0 011.2 0h2.2a1.5 1.5 0 011.5 1.3c.1.8.3 1.6.6 2.4a1.5 1.5 0 01-.3 1.6l-.9 1a12 12 0 005.6 5.6l1-.9a1.5 1.5 0 011.5-.3c.8.3 1.6.5 2.4.6a1.5 1.5 0 011.3 1.5z" fill="currentColor"/>
  </svg>
);

// === Data ===

const CONVERSATION_CYCLES = [
  {
    buyerMessage: "I'm not sure if now is the right time to sell...",
    saysoPrompt: "It's understandable to be unsure right now. What got you thinking about moving, and what do you hope that change would bring you?",
    promptSource: 'Objection handling playbook',
  },
  {
    buyerMessage: "We're thinking about Santa Monica for the schools.",
    saysoPrompt: "It's great you're considering Santa Monica! What's most important to you about the location or neighborhood there?",
    promptSource: 'Top performer pattern',
  },
  {
    buyerMessage: "Our current agent charges really high fees...",
    saysoPrompt: "Walk me through what good value looks like to you in an agent relationship.",
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
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
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
              <button className="px-4 py-2 rounded-lg bg-[#2367EE] text-white text-sm font-semibold">
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

function CallStatusBar({ timerSeconds }: { timerSeconds: number }) {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const formatted = `${mins}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="absolute top-12 left-0 right-0 h-14 bg-[#3d4f5f] border-b border-gray-600 flex items-center justify-between px-4 z-20">
      {/* Left: Live indicator */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-semibold text-green-300">Live</span>
      </div>

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
          <span className="text-sm font-mono font-semibold text-white">{formatted}</span>
        </div>
      </div>

      {/* Right: Call Controls */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
          Transfer
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
          Muted
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors">
          Hang up
        </button>
      </div>
    </div>
  );
}

// NEW: Complete Sayso Widget UI matching the screenshots
export function SaysoWidget({
  currentCycle,
  showPrompt,
  timerSeconds = 0
}: {
  currentCycle: number;
  showBuyerMessage: boolean;
  showPrompt: boolean;
  promptText: string;
  timerSeconds?: number;
}) {
  // Format timer like MM:SS
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const timerDisplay = `${mins}:${String(secs).padStart(2, '0')}`;

  // Track which messages to show (for animation)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  // When showPrompt changes, add messages progressively
  useEffect(() => {
    if (showPrompt) {
      setVisibleMessages([0]); // Show first message
      // Add second message after delay
      const timer = setTimeout(() => {
        setVisibleMessages([0, 1]);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setVisibleMessages([]);
    }
  }, [showPrompt, currentCycle]);

  return (
    <div
      className="w-full rounded-[20px] overflow-hidden"
      style={{
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 18px 45px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Header Bar */}
      <div
        className="h-[52px] flex items-center justify-between px-3 border-b"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.1)',
          background: 'rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Left section: Menu + Avatar */}
        <div className="flex items-center gap-2">
          {/* Grid menu icon */}
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <circle cx="3" cy="3" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="9" cy="3" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="15" cy="3" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="3" cy="9" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="9" cy="9" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="15" cy="9" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="3" cy="15" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="9" cy="15" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="15" cy="15" r="1.5" fill="white" opacity="0.8"/>
            </svg>
          </button>

          {/* Avatar + Buyer label */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#1e3a5f] text-[10px] font-bold">B</span>
            </div>
            <span className="text-white text-xs font-medium">Buyer</span>
          </div>
        </div>

        {/* Right section: Gold icon + Record + Timer + Settings */}
        <div className="flex items-center gap-1.5">
          {/* Gold/Orange circle icon */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" fill="white" opacity="0.9"/>
            </svg>
          </div>

          {/* Red record button */}
          <button className="w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white"/>
          </button>

          {/* Timer */}
          <div className="px-2.5 py-0.5 rounded-full bg-black/20 min-w-[60px] text-center">
            <span className="text-white text-xs font-mono font-medium">{timerDisplay}</span>
          </div>

          {/* Blue settings/eye icon */}
          <button className="w-7 h-7 rounded-full bg-blue-500/80 hover:bg-blue-500 transition-colors flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill="white"/>
              <path d="M8 3C4.5 3 1.5 5.5 1 8c.5 2.5 3.5 5 7 5s6.5-2.5 7-5c-.5-2.5-3.5-5-7-5z" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="px-3 py-3 flex flex-col gap-2.5">
        {/* Message 1 - appears first */}
        {visibleMessages.includes(0) && (
          <div
            className="animate-slideInUp"
            style={{
              animation: 'slideInUp 0.5s ease-out forwards'
            }}
          >
            <div
              className="rounded-xl px-3 py-2.5 shadow-md"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <p className="text-white text-xs leading-[1.5]">
                {CONVERSATION_CYCLES[currentCycle].saysoPrompt}
              </p>
            </div>
          </div>
        )}

        {/* Message 2 - appears after delay */}
        {visibleMessages.includes(1) && (
          <div
            className="animate-slideInUp"
            style={{
              animation: 'slideInUp 0.5s ease-out forwards',
              animationDelay: '0.1s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <div
              className="rounded-xl px-3 py-2.5 shadow-md"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <p className="text-white text-xs leading-[1.5]">
                {CONVERSATION_CYCLES[(currentCycle + 1) % CONVERSATION_CYCLES.length].saysoPrompt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main CRM Component (without the floating widget)
export function CRMDialerShowcaseV3() {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer ticking
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      {/* CRM Interface */}
      <CRMInterface />

      {/* Call Status Bar */}
      <CallStatusBar timerSeconds={timerSeconds} />
    </>
  );
}

// Hook for managing Sayso widget state
export function useSaysoWidget() {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [showBuyerMessage, setShowBuyerMessage] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [timerSeconds, setTimerSeconds] = useState(0);

  const CYCLE_DURATION = 10000; // 10s per cycle

  // Timer ticking
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

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
      }, 30);
    }, 2500);
  }, [currentCycle]);

  // Cycle management
  useEffect(() => {
    startCycle();

    const cycleInterval = setInterval(() => {
      setCurrentCycle(prev => (prev + 1) % CONVERSATION_CYCLES.length);
    }, CYCLE_DURATION);

    return () => clearInterval(cycleInterval);
  }, [startCycle]);

  // Restart animation on cycle change
  useEffect(() => {
    startCycle();
  }, [currentCycle, startCycle]);

  return {
    currentCycle,
    showBuyerMessage,
    showPrompt,
    promptText,
    timerSeconds
  };
}

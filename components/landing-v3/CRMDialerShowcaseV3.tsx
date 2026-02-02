'use client';

import { useEffect, useState, useCallback } from 'react';

// === Data ===

const CONVERSATION_CYCLES = [
  {
    buyerMessage: "I'm not sure if now is the right time to sell...",
    sellerMessage: "I totally understand — what got you thinking about moving in the first place?",
    saysoPrompt: "It's understandable to be unsure right now. What got you thinking about moving, and what do you hope that change would bring you?",
    promptSource: 'Objection handling playbook',
  },
  {
    buyerMessage: "We're thinking about Santa Monica for the schools.",
    sellerMessage: "That's great — what's the most important thing about the neighborhood for your family?",
    saysoPrompt: "It's great you're considering Santa Monica! What's most important to you about the location or neighborhood there?",
    promptSource: 'Top performer pattern',
  },
  {
    buyerMessage: "Our current agent charges really high fees...",
    sellerMessage: "I hear you — what does good value in an agent actually look like for you?",
    saysoPrompt: "Walk me through what good value looks like to you in an agent relationship.",
    promptSource: 'Past call with Sarah Chen',
  },
];

// === Audio Waveform Bars ===

function AudioWaveform({ active, color }: { active: boolean; color: string }) {
  return (
    <div className="flex items-center gap-[3px] h-5">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-[3px] rounded-full transition-all duration-300"
          style={{
            backgroundColor: color,
            height: active ? undefined : '4px',
            animation: active ? `audioBarDialer 0.${6 + i}s ease-in-out ${i * 0.08}s infinite` : 'none',
            opacity: active ? 1 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

// === Participant Avatar ===

function ParticipantAvatar({
  initials,
  color,
  speaking,
  ringColor,
}: {
  initials: string;
  color: string;
  speaking: boolean;
  ringColor: string;
}) {
  return (
    <div className="relative">
      {/* Speaking ring */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-500"
        style={{
          transform: speaking ? 'scale(1.18)' : 'scale(1)',
          background: speaking ? ringColor : 'transparent',
          opacity: speaking ? 0.35 : 0,
          filter: speaking ? 'blur(6px)' : 'none',
        }}
      />
      <div
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300"
        style={{
          background: color,
          borderColor: speaking ? ringColor : 'rgba(255,255,255,0.15)',
          boxShadow: speaking ? `0 0 20px ${ringColor}40` : 'none',
        }}
      >
        <span className="text-white text-lg md:text-xl font-bold">{initials}</span>
      </div>
    </div>
  );
}

// === Speech Bubble (Comic Style) ===

function SpeechBubble({
  text,
  visible,
  side,
}: {
  text: string;
  visible: boolean;
  side: 'buyer' | 'seller';
}) {
  const isBuyer = side === 'buyer';

  return (
    <div
      className="transition-all duration-500 overflow-hidden"
      style={{
        maxHeight: visible ? '200px' : '0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
      }}
    >
      <div
        className="relative mt-3 px-4 py-3 rounded-xl text-sm leading-relaxed"
        style={{
          background: isBuyer ? '#fff' : '#EEF4FF',
          color: '#1D4871',
          border: '2px solid #1D4871',
          boxShadow: '3px 3px 0px #1D4871',
          fontWeight: 500,
        }}
      >
        {/* Bubble tail */}
        <div
          className="absolute -top-[9px] w-0 h-0"
          style={{
            left: isBuyer ? '20px' : undefined,
            right: isBuyer ? undefined : '20px',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: '9px solid #1D4871',
          }}
        />
        <div
          className="absolute -top-[7px] w-0 h-0"
          style={{
            left: isBuyer ? '21px' : undefined,
            right: isBuyer ? undefined : '21px',
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderBottom: `8px solid ${isBuyer ? '#fff' : '#EEF4FF'}`,
          }}
        />
        &ldquo;{text}&rdquo;
      </div>
    </div>
  );
}

// === SaySo Prompt (Glassmorphism) ===

function SaysoPromptBubble({
  text,
  source,
  visible,
}: {
  text: string;
  source: string;
  visible: boolean;
}) {
  return (
    <div
      className="transition-all duration-500 overflow-hidden"
      style={{
        maxHeight: visible ? '250px' : '0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
      }}
    >
      <div className="mt-2">
        {/* Label */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-4 h-4 rounded bg-[#2367EE] flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">S</span>
          </div>
          <span className="text-[11px] font-semibold text-[#2367EE]">SaySo Suggests</span>
        </div>

        {/* Prompt card */}
        <div
          style={{
            borderRadius: '12px',
            padding: '10px 14px',
            background: 'rgba(2, 25, 47, 0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '0.5px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
          }}
        >
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.92)',
              fontSize: '12.5px',
              lineHeight: '1.45',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {text}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px' }}>{source}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// === SaySo Widget Toolbar (preserved from original) ===

export function SaysoWidget({
  currentCycle,
  showPrompt,
  timerSeconds = 0,
}: {
  currentCycle: number;
  showBuyerMessage: boolean;
  showPrompt: boolean;
  promptText: string;
  timerSeconds?: number;
}) {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const timerDisplay = `${mins}:${String(secs).padStart(2, '0')}`;

  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    if (showPrompt) {
      setVisibleMessages([0]);
      const timer = setTimeout(() => {
        setVisibleMessages([0, 1]);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setVisibleMessages([]);
    }
  }, [showPrompt, currentCycle]);

  return (
    <div className="w-full flex flex-col gap-[6px]">
      {/* Main Toolbar */}
      <div
        className="h-[48px] flex items-center justify-between px-3"
        style={{
          borderRadius: '24px',
          background: 'rgba(2, 25, 47, 0.9)',
          backdropFilter: 'blur(200px)',
          WebkitBackdropFilter: 'blur(200px)',
          boxShadow: 'inset 0 1px 0 rgba(114, 126, 137, 0.6)',
        }}
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center text-white text-[20px] opacity-80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="9" cy="5" r="1.5" />
              <circle cx="15" cy="5" r="1.5" />
              <circle cx="9" cy="12" r="1.5" />
              <circle cx="15" cy="12" r="1.5" />
              <circle cx="9" cy="19" r="1.5" />
              <circle cx="15" cy="19" r="1.5" />
            </svg>
          </div>
          <div className="mx-3" style={{ width: '1px', height: '28px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
          <div className="flex items-center">
            <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center z-10">
              <span className="text-black text-sm font-medium">B</span>
            </div>
            <div
              className="h-[30px] flex items-center gap-1.5 pl-[18px] pr-3 -ml-[20px] z-0"
              style={{
                borderTopRightRadius: '100px',
                borderBottomRightRadius: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.234)',
                border: '1px solid #2367EE',
              }}
            >
              <span className="text-white text-sm font-normal">Buyer</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4f46e5' }}>
            <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
              <rect x="1" y="1" width="3.5" height="12" rx="1" />
              <rect x="7.5" y="1" width="3.5" height="12" rx="1" />
            </svg>
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc2626' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
              <rect x="1" y="1" width="10" height="10" rx="1.5" />
            </svg>
          </button>
          <div className="h-8 flex items-center justify-center" style={{ width: '90px', backgroundColor: '#374151', borderRadius: '100px' }}>
            <span className="text-white text-sm font-light">{timerDisplay}</span>
          </div>
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(2, 25, 47, 0.9)',
              backdropFilter: 'blur(200px)',
              WebkitBackdropFilter: 'blur(200px)',
              boxShadow: 'inset 0 1px 0 rgba(114, 126, 137, 0.6)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill="white" />
              <path d="M8 3C4.5 3 1.5 5.5 1 8c.5 2.5 3.5 5 7 5s6.5-2.5 7-5c-.5-2.5-3.5-5-7-5z" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      {/* Insights Container */}
      {visibleMessages.length > 0 && (
        <div
          className="w-full flex flex-col gap-[10px]"
          style={{
            padding: '12px 14px',
            borderRadius: '16px',
            background: 'rgba(2, 25, 47, 0.9)',
            backdropFilter: 'blur(200px)',
            WebkitBackdropFilter: 'blur(200px)',
            boxShadow: 'inset 0 1px 0 rgba(114, 126, 137, 0.6)',
          }}
        >
          {visibleMessages.includes(0) && (
            <div style={{ animation: 'slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
              <div
                className="flex items-center"
                style={{
                  borderRadius: '12px',
                  minHeight: '40px',
                  padding: '10px 14px',
                  border: '0.5px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.11)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
                }}
              >
                <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '13.5px', lineHeight: '1.45', fontWeight: 400, letterSpacing: '-0.01em', margin: 0 }}>
                  {CONVERSATION_CYCLES[currentCycle].saysoPrompt}
                </p>
              </div>
            </div>
          )}
          {visibleMessages.includes(1) && (
            <div style={{ animation: 'slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <div
                className="flex items-center"
                style={{
                  borderRadius: '12px',
                  minHeight: '40px',
                  padding: '10px 14px',
                  border: '0.5px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                }}
              >
                <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '13.5px', lineHeight: '1.45', fontWeight: 400, letterSpacing: '-0.01em', margin: 0 }}>
                  {CONVERSATION_CYCLES[(currentCycle + 1) % CONVERSATION_CYCLES.length].saysoPrompt}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// === Dialer Split View (NEW) ===

function DialerHeader({ timerSeconds }: { timerSeconds: number }) {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const formatted = `${mins}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="h-14 bg-[#1a2332] border-b border-white/10 flex items-center justify-between px-4 md:px-6 flex-shrink-0">
      {/* Left: App branding */}
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#2367EE] flex items-center justify-center">
          <span className="text-white text-xs font-bold">S</span>
        </div>
        <span className="text-white text-sm font-semibold hidden sm:inline">SaySo Dialer</span>
      </div>

      {/* Center: Call status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/30">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-green-300">Connected</span>
        </div>
        <div className="h-6 w-px bg-white/15" />
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
          <span className="text-sm font-mono font-medium text-white">{formatted}</span>
        </div>
      </div>

      {/* Right: Call controls */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-xs transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6" />
            <path d="M17 16.95A7 7 0 015 12v-2m14 0v2c0 .76-.12 1.5-.34 2.18" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-xs transition-colors">
          Transfer
        </button>
        <button className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-semibold transition-colors">
          End
        </button>
      </div>
    </div>
  );
}

function DialerSplitView({
  currentCycle,
  showBuyerMessage,
  showPrompt,
  showSellerMessage,
  buyerSpeaking,
  sellerSpeaking,
}: {
  currentCycle: number;
  showBuyerMessage: boolean;
  showPrompt: boolean;
  showSellerMessage: boolean;
  buyerSpeaking: boolean;
  sellerSpeaking: boolean;
}) {
  const cycle = CONVERSATION_CYCLES[currentCycle];

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Buyer Side (Left) */}
      <div className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-3 md:px-6 bg-gradient-to-b from-[#f0f2f5] to-[#e8eaed] border-r border-gray-200">
        {/* Label */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Buyer</span>
        </div>

        {/* Avatar */}
        <ParticipantAvatar
          initials="JS"
          color="linear-gradient(135deg, #F59E0B, #D97706)"
          speaking={buyerSpeaking}
          ringColor="#F59E0B"
        />

        {/* Name */}
        <div className="mt-3 text-center">
          <p className="text-sm font-bold text-[#1D4871]">Jane Smith</p>
          <p className="text-[11px] text-gray-500">(310) 488-1179</p>
        </div>

        {/* Audio waveform */}
        <div className="mt-3">
          <AudioWaveform active={buyerSpeaking} color="#F59E0B" />
        </div>

        {/* Buyer speech bubble */}
        <div className="w-full mt-2 max-w-[220px]">
          <SpeechBubble
            text={cycle.buyerMessage}
            visible={showBuyerMessage}
            side="buyer"
          />
        </div>
      </div>

      {/* Seller Side (Right) */}
      <div className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-3 md:px-6 bg-gradient-to-b from-[#f7f8fa] to-[#eef1f5]">
        {/* Label */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2367EE' }} />
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">You</span>
        </div>

        {/* Avatar */}
        <ParticipantAvatar
          initials="AW"
          color="linear-gradient(135deg, #2367EE, #1D4871)"
          speaking={sellerSpeaking}
          ringColor="#2367EE"
        />

        {/* Name */}
        <div className="mt-3 text-center">
          <p className="text-sm font-bold text-[#1D4871]">Alex Walker</p>
          <p className="text-[11px] text-gray-500">SaySo Agent</p>
        </div>

        {/* Audio waveform */}
        <div className="mt-3">
          <AudioWaveform active={sellerSpeaking} color="#2367EE" />
        </div>

        {/* Seller speech bubble — aligned left to avoid overlapping SaySo widget */}
        <div className="w-full mt-2 max-w-[180px] self-start ml-2">
          <SpeechBubble
            text={cycle.sellerMessage}
            visible={showSellerMessage}
            side="seller"
          />
        </div>
      </div>
    </div>
  );
}

// === Bottom Bar ===

function DialerBottomBar() {
  return (
    <div className="h-10 bg-[#1a2332] border-t border-white/10 flex items-center justify-center gap-6 flex-shrink-0">
      <button className="text-white/40 text-[11px] flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        Dialpad
      </button>
      <button className="text-white/40 text-[11px] flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
        Notes
      </button>
      <button className="text-white/40 text-[11px] flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
        Activity
      </button>
    </div>
  );
}

// === Main Export: Dialer Showcase ===

export function CRMDialerShowcaseV3() {
  const {
    currentCycle,
    showBuyerMessage,
    showPrompt,
    showSellerMessage,
    buyerSpeaking,
    sellerSpeaking,
    timerSeconds,
  } = useDialerState();

  return (
    <div className="absolute inset-0 flex flex-col bg-[#f0f2f5]">
      <DialerHeader timerSeconds={timerSeconds} />
      <DialerSplitView
        currentCycle={currentCycle}
        showBuyerMessage={showBuyerMessage}
        showPrompt={showPrompt}
        showSellerMessage={showSellerMessage}
        buyerSpeaking={buyerSpeaking}
        sellerSpeaking={sellerSpeaking}
      />
      <DialerBottomBar />
    </div>
  );
}

// === Hook for managing dialer + widget state ===

function useDialerState() {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [showBuyerMessage, setShowBuyerMessage] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showSellerMessage, setShowSellerMessage] = useState(false);
  const [buyerSpeaking, setBuyerSpeaking] = useState(false);
  const [sellerSpeaking, setSellerSpeaking] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(29);

  const CYCLE_DURATION = 12000;

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const startCycle = useCallback(() => {
    // Reset
    setShowBuyerMessage(false);
    setShowPrompt(false);
    setShowSellerMessage(false);
    setBuyerSpeaking(false);
    setSellerSpeaking(false);

    // 0.5s: Buyer starts speaking
    setTimeout(() => setBuyerSpeaking(true), 500);

    // 1.2s: Buyer speech bubble appears
    setTimeout(() => setShowBuyerMessage(true), 1200);

    // 3.5s: Buyer stops speaking
    setTimeout(() => setBuyerSpeaking(false), 3500);

    // 4.0s: SaySo prompt appears for seller
    setTimeout(() => setShowPrompt(true), 4000);

    // 6.0s: Seller starts speaking
    setTimeout(() => setSellerSpeaking(true), 6000);

    // 6.5s: Seller speech bubble appears
    setTimeout(() => setShowSellerMessage(true), 6500);

    // 9.5s: Seller stops speaking
    setTimeout(() => setSellerSpeaking(false), 9500);
  }, []);

  // Cycle management
  useEffect(() => {
    startCycle();

    const interval = setInterval(() => {
      setCurrentCycle((prev) => (prev + 1) % CONVERSATION_CYCLES.length);
    }, CYCLE_DURATION);

    return () => clearInterval(interval);
  }, [startCycle]);

  // Restart on cycle change
  useEffect(() => {
    startCycle();
  }, [currentCycle, startCycle]);

  return {
    currentCycle,
    showBuyerMessage,
    showPrompt,
    showSellerMessage,
    buyerSpeaking,
    sellerSpeaking,
    timerSeconds,
  };
}

// Also export the hook for the floating widget in ProductShowcaseDesktop
export function useSaysoWidget() {
  const state = useDialerState();
  return {
    currentCycle: state.currentCycle,
    showBuyerMessage: state.showBuyerMessage,
    showPrompt: state.showPrompt,
    promptText: CONVERSATION_CYCLES[state.currentCycle].saysoPrompt,
    timerSeconds: state.timerSeconds,
  };
}

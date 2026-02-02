'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DesktopDemoFrame } from '@/components/landing-v3/DesktopDemoFrame';


// === Data ===

const CONVERSATION_CYCLES = [
  {
    buyerMessage: "I'm not sure if now is the right time to sell...",
    sellerMessage: "I totally understand — what got you thinking about moving in the first place?",
    saysoPrompt: "It's understandable to be unsure right now. What got you thinking about moving, and what do you hope that change would bring you?",
  },
  {
    buyerMessage: "We're thinking about Santa Monica for the schools.",
    sellerMessage: "That's great — what's most important about the neighborhood for your family?",
    saysoPrompt: "It's great you're considering Santa Monica! What's most important to you about the location or neighborhood there?",
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
        className="relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
        style={{
          background: color,
          borderColor: speaking ? ringColor : 'rgba(255,255,255,0.15)',
          boxShadow: speaking ? `0 0 20px ${ringColor}40` : 'none',
        }}
      >
        <span className="text-white text-sm font-bold">{initials}</span>
      </div>
    </div>
  );
}

// === Speech Bubble ===

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
        className="relative mt-2 px-3 py-2 rounded-lg text-xs leading-relaxed"
        style={{
          background: isBuyer ? '#fff' : '#EEF4FF',
          color: '#1D4871',
          border: '2px solid #1D4871',
          boxShadow: '3px 3px 0px #1D4871',
          fontWeight: 500,
        }}
      >
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

// === Dialer Header ===

function DialerHeader({ timerSeconds }: { timerSeconds: number }) {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const formatted = `${mins}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="h-10 bg-[#1a2332] border-b border-white/10 flex items-center justify-between px-4 flex-shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-[#2367EE] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 512 512" fill="none">
            <path d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z" fill="white" stroke="white" strokeWidth="38.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white text-xs font-semibold">Dialer</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-semibold text-green-300">Connected</span>
        </div>
        <div className="h-4 w-px bg-white/15" />
        <span className="text-xs font-mono font-medium text-white">{formatted}</span>
      </div>

      <div className="flex items-center gap-1.5">
        <button className="px-2 py-1 rounded bg-white/10 text-white/70">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6" />
            <path d="M17 16.95A7 7 0 015 12v-2m14 0v2c0 .76-.12 1.5-.34 2.18" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </button>
        <button className="px-2 py-1 rounded bg-white/10 text-white/70 text-[10px]">Transfer</button>
        <button className="px-2 py-1 rounded bg-red-600 text-white text-[10px] font-semibold">End</button>
      </div>
    </div>
  );
}

// === Dialer Bottom Bar ===

function DialerBottomBar() {
  return (
    <div className="h-7 bg-[#1a2332] border-t border-white/10 flex items-center justify-center gap-5 flex-shrink-0">
      <button className="text-white/40 text-[9px] flex items-center gap-1">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        Dialpad
      </button>
      <button className="text-white/40 text-[9px] flex items-center gap-1">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
        Notes
      </button>
      <button className="text-white/40 text-[9px] flex items-center gap-1">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
        Activity
      </button>
    </div>
  );
}

// === SaySo Widget Toolbar (matches V3 hero) ===

function SaysoWidgetToolbar({
  active,
  timerSeconds,
  prompts,
}: {
  active: boolean;
  timerSeconds: number;
  prompts: string[];
}) {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const timerDisplay = `${mins}:${String(secs).padStart(2, '0')}`;

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
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {active && (
            <>
              <button className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4f46e5' }}>
                <svg width="10" height="12" viewBox="0 0 12 14" fill="white">
                  <rect x="1" y="1" width="3.5" height="12" rx="1" />
                  <rect x="7.5" y="1" width="3.5" height="12" rx="1" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#dc2626' }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="white">
                  <rect x="1" y="1" width="10" height="10" rx="1.5" />
                </svg>
              </button>
            </>
          )}
          <div className="h-7 flex items-center justify-center flex-shrink-0" style={{ width: '64px', backgroundColor: active ? '#374151' : '#1f2937', borderRadius: '100px' }}>
            <span className={`text-xs font-light ${active ? 'text-white' : 'text-white/40'}`}>{active ? timerDisplay : '0:00'}</span>
          </div>
          <button
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: 'rgba(2, 25, 47, 0.9)',
              boxShadow: 'inset 0 1px 0 rgba(114, 126, 137, 0.6)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill={active ? 'white' : 'rgba(255,255,255,0.3)'} />
              <path d="M8 3C4.5 3 1.5 5.5 1 8c.5 2.5 3.5 5 7 5s6.5-2.5 7-5c-.5-2.5-3.5-5-7-5z" stroke={active ? 'white' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      {/* Insights Container - only when active and prompts exist */}
      <AnimatePresence>
        {active && prompts.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden"
          >
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
              {prompts.map((prompt, i) => (
                <motion.div
                  key={`${prompt}-${i}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                >
                  <div
                    className="flex items-center"
                    style={{
                      borderRadius: '12px',
                      minHeight: '40px',
                      padding: '10px 14px',
                      border: '0.5px solid rgba(255, 255, 255, 0.2)',
                      background: i === 0 ? 'rgba(255, 255, 255, 0.11)' : 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '13.5px', lineHeight: '1.45', fontWeight: 400, letterSpacing: '-0.01em', margin: 0 }}>
                      {prompt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// === Main Scene ===

export default function Scene6StartSession() {
  const [saysoActive, setSaysoActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(29);
  const [currentCycle, setCurrentCycle] = useState(0);
  const [buyerSpeaking, setBuyerSpeaking] = useState(true);
  const [sellerSpeaking, setSellerSpeaking] = useState(false);
  const [showBuyerMessage, setShowBuyerMessage] = useState(true);
  const [showSellerMessage, setShowSellerMessage] = useState(false);
  const [visiblePrompts, setVisiblePrompts] = useState<string[]>([]);

  // Cursor + zoom animation states
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPhase, setCursorPhase] = useState<'idle' | 'moving' | 'clicking' | 'done'>('idle');
  const [zoomPhase, setZoomPhase] = useState<'normal' | 'zooming-in' | 'zoomed' | 'zooming-out'>('normal');

  // Timer ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Initial state: call is already going, buyer is speaking, no SaySo yet
  // After 1.5s, buyer stops. At 2.5s user hits "Launch SaySo". Then prompts flow in.
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // 0s: Buyer is speaking with their message visible (already set via defaults)

    // 1.2s: Buyer stops speaking
    timers.push(setTimeout(() => setBuyerSpeaking(false), 1200));

    // 1.5s: Cursor appears at center of screen
    timers.push(setTimeout(() => {
      setShowCursor(true);
      setCursorPhase('idle');
    }, 1500));

    // 1.7s: Cursor starts moving toward Launch SaySo button
    timers.push(setTimeout(() => setCursorPhase('moving'), 1700));

    // 2.4s: Cursor arrives, click ripple
    timers.push(setTimeout(() => setCursorPhase('clicking'), 2400));

    // 2.6s: Activate SaySo, start zoom in
    timers.push(setTimeout(() => {
      setSaysoActive(true);
      setCursorPhase('done');
      setZoomPhase('zooming-in');
    }, 2600));

    // 3.2s: Zoomed in — hold briefly
    timers.push(setTimeout(() => setZoomPhase('zoomed'), 3200));

    // 3.8s: Zoom back out
    timers.push(setTimeout(() => setZoomPhase('zooming-out'), 3800));

    // 4.4s: Back to normal, hide cursor
    timers.push(setTimeout(() => {
      setZoomPhase('normal');
      setShowCursor(false);
    }, 4400));

    // 4.6s: First prompt appears
    timers.push(setTimeout(() => {
      setVisiblePrompts([CONVERSATION_CYCLES[0].saysoPrompt]);
    }, 4600));

    // 5.8s: Seller starts speaking (using the SaySo prompt)
    timers.push(setTimeout(() => {
      setSellerSpeaking(true);
    }, 5800));

    // 6.3s: Seller speech bubble appears
    timers.push(setTimeout(() => {
      setShowSellerMessage(true);
    }, 6300));

    // 8.5s: Seller stops speaking
    timers.push(setTimeout(() => setSellerSpeaking(false), 8500));

    // 9.5s: Transition to cycle 2 — reset bubbles
    timers.push(setTimeout(() => {
      setShowBuyerMessage(false);
      setShowSellerMessage(false);
      setVisiblePrompts([]);
      setCurrentCycle(1);
    }, 9500));

    // 10.0s: Buyer starts speaking again
    timers.push(setTimeout(() => setBuyerSpeaking(true), 10000));

    // 10.5s: Buyer message appears
    timers.push(setTimeout(() => setShowBuyerMessage(true), 10500));

    // 12.0s: Buyer stops
    timers.push(setTimeout(() => setBuyerSpeaking(false), 12000));

    // 12.7s: New prompt appears
    timers.push(setTimeout(() => {
      setVisiblePrompts([CONVERSATION_CYCLES[1].saysoPrompt]);
    }, 12700));

    // 14.0s: Seller speaks
    timers.push(setTimeout(() => setSellerSpeaking(true), 14000));

    // 14.5s: Seller bubble
    timers.push(setTimeout(() => setShowSellerMessage(true), 14500));

    // 16.5s: Seller stops
    timers.push(setTimeout(() => setSellerSpeaking(false), 16500));

    return () => timers.forEach(clearTimeout);
  }, []);

  const cycle = CONVERSATION_CYCLES[currentCycle];

  const saysoOverlay = (
    <AnimatePresence>
      {!saysoActive ? (
        <motion.div
          key="launch-btn"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer"
            style={{
              background: 'rgba(2, 25, 47, 0.85)',
              backdropFilter: 'blur(200px)',
              WebkitBackdropFilter: 'blur(200px)',
              boxShadow: 'inset 0 1px 0 rgba(114, 126, 137, 0.6), 0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-[#2367EE] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 512 512" fill="none">
                <path d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z" fill="white" stroke="white" strokeWidth="38.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white/50 text-sm font-medium">Launch Say So</span>
            <div className="w-2 h-2 rounded-full bg-white/20 ml-auto" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="widget"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SaysoWidgetToolbar
            active={saysoActive}
            timerSeconds={timerSeconds}
            prompts={visiblePrompts}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Zoom transform based on phase — zoom toward the widget area (top-right)
  const zoomStyle = (() => {
    switch (zoomPhase) {
      case 'zooming-in':
        return { transform: 'scale(1.6) translate(-18%, 5%)', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' };
      case 'zoomed':
        return { transform: 'scale(1.6) translate(-18%, 5%)', transition: 'transform 0.1s ease' };
      case 'zooming-out':
        return { transform: 'scale(1) translate(0%, 0%)', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' };
      default:
        return { transform: 'scale(1) translate(0%, 0%)', transition: 'transform 0.3s ease' };
    }
  })();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Zoom wrapper */}
      <div className="absolute inset-0" style={zoomStyle}>
        <DesktopDemoFrame
          showRecording={true}
          desktopOverlay={saysoOverlay}
          fullscreen={true}
        >
        {/* Dialer content inside the app window */}
        <div className="absolute inset-0 flex flex-col bg-[#f0f2f5]">
          <DialerHeader timerSeconds={timerSeconds} />

          {/* Split View */}
          <div className="flex-1 flex overflow-hidden">
            {/* Buyer Side (Left) */}
            <div className="flex-1 flex flex-col items-center justify-start pt-3 px-3 bg-gradient-to-b from-[#f0f2f5] to-[#e8eaed] border-r border-gray-200">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Buyer</span>
              </div>
              <ParticipantAvatar initials="JS" color="linear-gradient(135deg, #F59E0B, #D97706)" speaking={buyerSpeaking} ringColor="#F59E0B" />
              <div className="mt-1.5 text-center">
                <p className="text-xs font-bold text-[#1D4871]">Jane Smith</p>
                <p className="text-[10px] text-gray-500">(310) 488-1179</p>
              </div>
              <div className="mt-1.5">
                <AudioWaveform active={buyerSpeaking} color="#F59E0B" />
              </div>
              <div className="w-full mt-1 max-w-[180px]">
                <SpeechBubble text={cycle.buyerMessage} visible={showBuyerMessage} side="buyer" />
              </div>
            </div>

            {/* Seller Side (Right) */}
            <div className="flex-1 flex flex-col items-center justify-start pt-3 px-3 bg-gradient-to-b from-[#f7f8fa] to-[#eef1f5]">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2367EE' }} />
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">You</span>
              </div>
              <ParticipantAvatar initials="AW" color="linear-gradient(135deg, #2367EE, #1D4871)" speaking={sellerSpeaking} ringColor="#2367EE" />
              <div className="mt-1.5 text-center">
                <p className="text-xs font-bold text-[#1D4871]">Alex Walker</p>
                <p className="text-[10px] text-gray-500">SaySo Agent</p>
              </div>
              <div className="mt-1.5">
                <AudioWaveform active={sellerSpeaking} color="#2367EE" />
              </div>
              <div className="w-full mt-1 max-w-[160px] self-start ml-1">
                <SpeechBubble text={cycle.sellerMessage} visible={showSellerMessage} side="seller" />
              </div>
            </div>
          </div>

          <DialerBottomBar />
        </div>
      </DesktopDemoFrame>
      </div>

      {/* Animated Cursor */}
      {showCursor && (
        <motion.div
          className="absolute z-[100] pointer-events-none"
          initial={{ top: '55%', left: '55%' }}
          animate={
            cursorPhase === 'idle'
              ? { top: '55%', left: '55%' }
              : cursorPhase === 'moving'
              ? { top: '38%', right: '8%', left: 'auto' }
              : { top: '38%', right: '8%', left: 'auto' }
          }
          transition={{ duration: cursorPhase === 'moving' ? 0.7 : 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ width: 24, height: 24 }}
        >
          {/* macOS-style cursor */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3L5 19.5L9.5 15L14.5 21L17 19.5L12 13.5L18 13.5L5 3Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>

          {/* Click ripple */}
          <AnimatePresence>
            {cursorPhase === 'clicking' && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
                initial={{ width: 0, height: 0, opacity: 0.8 }}
                animate={{ width: 40, height: 40, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

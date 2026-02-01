'use client';

import { ReactNode } from 'react';

// macOS Menu Bar Component
function MacOSMenuBar() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="absolute top-0 left-0 right-0 h-7 bg-black/30 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 z-50">
      {/* Left side - App menu */}
      <div className="flex items-center gap-4 text-white/90 text-[13px]">
        <span className="text-[16px]"></span>
        <span className="font-semibold">Sayso</span>
        <span className="text-white/70">File</span>
        <span className="text-white/70">Edit</span>
        <span className="text-white/70">View</span>
        <span className="text-white/70">Window</span>
        <span className="text-white/70">Help</span>
      </div>

      {/* Right side - Status icons */}
      <div className="flex items-center gap-3 text-white/80 text-[13px]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 6h12M8 2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M1 6c2-3 5-5 7-5s5 2 7 5c-2 3-5 5-7 5s-5-2-7-5z"/>
          <circle cx="8" cy="6" r="2" fill="white"/>
        </svg>
        <span className="font-medium">{currentTime}</span>
      </div>
    </div>
  );
}

// Browser Window Chrome (3 dots + address bar)
function BrowserChrome() {
  return (
    <div className="absolute top-0 left-0 right-0 h-12 bg-[#2d3748] border-b border-gray-700 flex items-center px-4 z-10 rounded-t-2xl">
      {/* Mac window controls */}
      <div className="flex gap-2 mr-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>

      {/* Fake address bar */}
      <div className="flex-1 max-w-xl">
        <div className="bg-[#1a202c] rounded-lg px-4 py-1.5 flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-500">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-xs text-gray-400">app.salescrm.com/contacts/jane-smith</span>
        </div>
      </div>
    </div>
  );
}

// Recording Indicator
function RecordingIndicator({ time }: { time: string }) {
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      <span className="text-xs font-mono text-white/90">{time}</span>
    </div>
  );
}

// Main Desktop Demo Frame
export function DesktopDemoFrame({
  children,
  showRecording = true,
  desktopOverlay
}: {
  children: ReactNode;
  showRecording?: boolean;
  desktopOverlay?: ReactNode;
}) {
  return (
    <div className="w-full relative">
      {/* Desktop container with macOS wallpaper */}
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.4)] border-2 border-[#1D4871]">
        {/* macOS Wallpaper Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* macOS Menu Bar */}
        <MacOSMenuBar />

        {/* Recording Indicator */}
        {showRecording && <RecordingIndicator time="0:17" />}

        {/* Desktop Overlay (e.g., SaySo widget icon) */}
        {desktopOverlay && (
          <div className="absolute top-8 left-4 z-30">
            {desktopOverlay}
          </div>
        )}

        {/* Centered Browser/App Window */}
        <div className="absolute top-[58%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] mt-2 z-10">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 bg-[#f8f9fa]">
            {/* Browser Chrome */}
            <BrowserChrome />

            {/* Product content (CRM showcase) */}
            <div className="absolute inset-0 top-12 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { DesktopDemoFrame } from './DesktopDemoFrame';
import { CRMDialerShowcaseV3, SaysoWidget, useSaysoWidget } from './CRMDialerShowcaseV3';

const DESKTOP_RENDER_WIDTH = 900;

export function ProductShowcaseDesktop() {
  const widgetState = useSaysoWidget();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mobileScale, setMobileScale] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      if (window.innerWidth < 768) {
        setMobileScale(containerRef.current.clientWidth / DESKTOP_RENDER_WIDTH);
      } else {
        setMobileScale(null);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const isScaled = mobileScale !== null;
  const scaledHeight = isScaled
    ? DESKTOP_RENDER_WIDTH * (10 / 16) * mobileScale
    : undefined;

  return (
    <div ref={containerRef} className="relative">
      <div
        style={
          isScaled
            ? { height: scaledHeight, overflow: 'hidden' }
            : undefined
        }
      >
        <div
          style={
            isScaled
              ? {
                  width: DESKTOP_RENDER_WIDTH,
                  transform: `scale(${mobileScale})`,
                  transformOrigin: 'top left',
                }
              : undefined
          }
        >
          <DesktopDemoFrame
            desktopOverlay={
              <div className="w-full">
                <SaysoWidget
                  currentCycle={widgetState.currentCycle}
                  showBuyerMessage={widgetState.showBuyerMessage}
                  showPrompt={widgetState.showPrompt}
                  promptText={widgetState.promptText}
                  timerSeconds={widgetState.timerSeconds}
                />
              </div>
            }
          >
            <div className="relative h-full">
              <CRMDialerShowcaseV3 />
            </div>
          </DesktopDemoFrame>
        </div>
      </div>
    </div>
  );
}

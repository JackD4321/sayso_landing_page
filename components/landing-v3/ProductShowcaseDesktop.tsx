'use client';

import { DesktopDemoFrame } from './DesktopDemoFrame';
import { CRMDialerShowcaseV3, SaysoWidget, useSaysoWidget } from './CRMDialerShowcaseV3';

export function ProductShowcaseDesktop() {
  const widgetState = useSaysoWidget();

  return (
    <div className="relative">
      <DesktopDemoFrame
        showRecording={true}
        desktopOverlay={
          /* Sayso Widget - positioned on desktop, top-left corner below menu bar */
          <div
            className="hidden md:block"
            style={{
              width: 'clamp(260px, 28vw, 360px)'
            }}
          >
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
        {/* CRM/Dialer content inside the browser window */}
        <div className="relative h-full" style={{ '--callbar-h': '56px' } as React.CSSProperties}>
          <CRMDialerShowcaseV3 />
        </div>
      </DesktopDemoFrame>

      {/* Mobile: Show widget below screenshot (not overlaid) */}
      <div className="block md:hidden mt-6 px-4">
        <SaysoWidget
          currentCycle={widgetState.currentCycle}
          showBuyerMessage={widgetState.showBuyerMessage}
          showPrompt={widgetState.showPrompt}
          promptText={widgetState.promptText}
          timerSeconds={widgetState.timerSeconds}
        />
      </div>
    </div>
  );
}

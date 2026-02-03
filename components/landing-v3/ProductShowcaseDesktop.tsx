'use client';

import { DesktopDemoFrame } from './DesktopDemoFrame';
import { CRMDialerShowcaseV3, SaysoWidget, useSaysoWidget } from './CRMDialerShowcaseV3';

export function ProductShowcaseDesktop() {
  const widgetState = useSaysoWidget();

  return (
    <div className="relative">
      <DesktopDemoFrame
        desktopOverlay={
          <div className="hidden md:block w-full">
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
        {/* Dialer content inside the browser window */}
        <div className="relative h-full">
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

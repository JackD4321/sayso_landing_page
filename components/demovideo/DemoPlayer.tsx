'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stage } from './Stage';
import Scene0WhiteScreen from './scenes/Scene0WhiteScreen';
import Scene1Problem from './scenes/Scene1Problem';
import Scene2Consequences from './scenes/Scene2Consequences';
import Scene3Dream from './scenes/Scene3Dream';
import Scene4Reveal from './scenes/Scene4Reveal';
import Scene5Carousel from './scenes/Scene5Carousel';
import Scene6StartSession from './scenes/Scene6StartSession';
import Scene8Signals from './scenes/Scene8Signals';
import Scene9Payoff from './scenes/Scene9Payoff';
import Scene10Transform from './scenes/Scene10Transform';
import Scene11CTA from './scenes/Scene11CTA';
import { fastSceneTransition, sceneTransition } from './utils/motionVariants';

interface Scene {
  id: string;
  durationMs: number;
  Component: React.ComponentType;
  useFastTransition?: boolean;
}

const scenes: Scene[] = [
  { id: 'white-screen', durationMs: 3000, Component: Scene0WhiteScreen },
  { id: 'problem', durationMs: 5000, Component: Scene1Problem, useFastTransition: true },
  { id: 'consequences', durationMs: 5500, Component: Scene2Consequences, useFastTransition: true },
  { id: 'dream', durationMs: 4000, Component: Scene3Dream },
  { id: 'reveal', durationMs: 3500, Component: Scene4Reveal },
  { id: 'carousel', durationMs: 6000, Component: Scene5Carousel },
  { id: 'start-session', durationMs: 11500, Component: Scene6StartSession },
  { id: 'signals', durationMs: 6000, Component: Scene8Signals },
  { id: 'payoff', durationMs: 4500, Component: Scene9Payoff },
  { id: 'transform', durationMs: 4000, Component: Scene10Transform },
  { id: 'cta', durationMs: 7000, Component: Scene11CTA },
];

export default function DemoPlayer() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showSceneNav, setShowSceneNav] = useState(false);

  const currentScene = scenes[currentSceneIndex];
  const isComplete = currentSceneIndex >= scenes.length;

  useEffect(() => {
    if (isComplete || !isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentSceneIndex((prev) => prev + 1);
    }, currentScene.durationMs);

    return () => clearTimeout(timer);
  }, [currentSceneIndex, isComplete, isPlaying, currentScene]);

  const handleReplay = () => {
    setCurrentSceneIndex(0);
    setIsPlaying(true);
  };

  const jumpToScene = (index: number) => {
    if (index >= 0 && index < scenes.length) {
      setCurrentSceneIndex(index);
      setIsPlaying(false); // Pause when jumping to a scene
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Press 'n' to toggle scene navigation overlay
      if (e.key === 'n' || e.key === 'N') {
        setShowSceneNav((prev) => !prev);
      }

      // Press number keys 0-9 to jump to scenes
      const num = parseInt(e.key);
      if (!isNaN(num) && num >= 0 && num <= 9) {
        jumpToScene(num);
      }

      // Press 'p' to toggle play/pause
      if (e.key === 'p' || e.key === 'P') {
        setIsPlaying((prev) => !prev);
      }

      // Press 'r' to restart
      if (e.key === 'r' || e.key === 'R') {
        handleReplay();
      }

      // Arrow keys for next/previous scene
      if (e.key === 'ArrowRight') {
        jumpToScene(currentSceneIndex + 1);
      }
      if (e.key === 'ArrowLeft') {
        jumpToScene(currentSceneIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSceneIndex]);

  return (
    <Stage>
      <div className="relative w-full h-full overflow-hidden">
        {/* Scene Navigation Overlay */}
        {showSceneNav && (
          <div className="absolute top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg shadow-2xl max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm">Scene Navigator</h3>
              <button
                onClick={() => setShowSceneNav(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-1 max-h-96 overflow-y-auto text-xs">
              {scenes.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => jumpToScene(idx)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    idx === currentSceneIndex
                      ? 'bg-[#2367EE] text-white'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <span className="font-mono mr-2">{idx}</span>
                  {scene.id}
                </button>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-400 space-y-1">
              <div>Press <kbd className="bg-gray-700 px-1 rounded">N</kbd> to toggle</div>
              <div>Press <kbd className="bg-gray-700 px-1 rounded">0-9</kbd> to jump</div>
              <div>Press <kbd className="bg-gray-700 px-1 rounded">P</kbd> to play/pause</div>
              <div>Press <kbd className="bg-gray-700 px-1 rounded">←→</kbd> to navigate</div>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setShowSceneNav((prev) => !prev)}
          className="absolute top-4 right-4 z-40 bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg transition-colors"
        >
          {showSceneNav ? 'Hide' : 'Scenes (N)'}
        </button>

        {/* Scene Status Indicator */}
        <div className="absolute top-4 left-4 z-40 bg-black/70 text-white px-3 py-2 rounded-lg text-xs font-mono">
          Scene {currentSceneIndex}: {currentScene?.id || 'Complete'} {!isPlaying && '(Paused)'}
        </div>
        {!isComplete && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene.id}
              {...(currentScene.useFastTransition
                ? fastSceneTransition
                : sceneTransition)}
              className="absolute inset-0"
            >
              <currentScene.Component />
            </motion.div>
          </AnimatePresence>
        )}

        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <motion.button
              onClick={handleReplay}
              className="px-8 py-4 bg-[#2367EE] hover:bg-[#1F5FE0] text-white rounded-full font-semibold text-lg shadow-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ↻ Replay Demo
            </motion.button>
          </motion.div>
        )}
      </div>
    </Stage>
  );
}

'use client';

import { SafeArea } from '../Stage';

export default function Scene0WhiteScreen() {
  return (
    <SafeArea className="flex items-center justify-center">
      <div className="w-full h-full bg-white" />
    </SafeArea>
  );
}

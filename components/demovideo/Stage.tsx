'use client';

import { useEffect, useState } from 'react';

interface StageProps {
  children: React.ReactNode;
}

const STAGE_WIDTH = 1920;
const STAGE_HEIGHT = 1080;

export function Stage({ children }: StageProps) {
  return (
    <div className="w-screen h-screen relative bg-white overflow-hidden">
      {children}
    </div>
  );
}

interface SafeAreaProps {
  children: React.ReactNode;
  className?: string;
}

export function SafeArea({ children, className = '' }: SafeAreaProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '12%',
        paddingBottom: '12%',
      }}
    >
      {children}
    </div>
  );
}

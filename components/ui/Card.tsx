import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white border border-primary/10 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

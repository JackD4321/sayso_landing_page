import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
  id?: string;
}

export function Section({ children, className = '', variant = 'default', id }: SectionProps) {
  const bgColor = variant === 'accent' ? 'bg-accent-bg' : 'bg-background';
  
  return (
    <section id={id} className={`py-16 sm:py-24 ${bgColor} ${className}`}>
      {children}
    </section>
  );
}

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'standard' | 'moment';
  className?: string;
}

export function Badge({ children, variant = 'standard', className = '' }: BadgeProps) {
  const variantStyles = {
    standard: 'bg-accent-bg text-primary border-primary/20',
    moment: 'bg-accent text-primary border-accent',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-small font-bold border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

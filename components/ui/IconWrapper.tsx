import { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconWrapper({ children, size = 'md', className = '' }: IconWrapperProps) {
  const sizeStyles = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
}

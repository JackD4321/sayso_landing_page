import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  variant?: 'hero' | 'h1' | 'h2' | 'h3';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ children, variant = 'h2', className = '', as }: HeadingProps) {
  const variantStyles = {
    hero: 'font-hero text-hero text-primary',
    h1: 'text-3xl sm:text-4xl font-bold text-primary',
    h2: 'text-heading text-primary',
    h3: 'text-base font-bold text-primary',
  };

  const Component = as || (variant === 'hero' ? 'h1' : variant);

  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}

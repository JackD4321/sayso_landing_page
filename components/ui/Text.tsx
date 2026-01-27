import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'muted' | 'small';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export function Text({ children, variant = 'body', className = '', as = 'p' }: TextProps) {
  const variantStyles = {
    body: 'text-body text-primary',
    muted: 'text-body text-primary/70',
    small: 'text-small text-primary/60',
  };

  const Component = as;

  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}

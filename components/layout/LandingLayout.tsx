import { ReactNode } from 'react';
import { NavbarMinimal } from './NavbarMinimal';
import { FooterSimple } from './FooterSimple';

interface LandingLayoutProps {
  children: ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavbarMinimal />
      <main>{children}</main>
      <FooterSimple />
    </div>
  );
}

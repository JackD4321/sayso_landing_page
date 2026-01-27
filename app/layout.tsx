import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

// Load Manrope for hero text
const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sayso',
  description: 'Transform your landing pages',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}

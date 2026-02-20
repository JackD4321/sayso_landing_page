import type { Metadata } from 'next'
import { Manrope, Bangers } from 'next/font/google'
import './globals.css'

// Load Manrope for hero text
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-manrope',
  display: 'swap',
})

// Load Bangers for comic-book headings (v2)
const bangers = Bangers({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bangers',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://asksayso.com'),
  title: 'Sayso',
  description: 'Transform your landing pages',
  icons: {
    icon: '/logo-youtube.png',
    apple: '/logo-youtube.png',
    shortcut: '/logo-youtube.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${bangers.variable}`} style={{ zoom: 0.8 }}>
      <body>{children}</body>
    </html>
  )
}

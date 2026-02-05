import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 1200,
}

export default function V3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

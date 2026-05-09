import type { Metadata, Viewport } from 'next'
import { Orbitron, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Damithrafdo | Robotics Engineer & AI Creator',
  description: 'Pioneering the future of autonomous systems and artificial intelligence. Explore cutting-edge robotics projects and AI-generated artwork.',
  keywords: ['robotics', 'AI', 'artificial intelligence', 'machine learning', 'autonomous systems', 'portfolio'],
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

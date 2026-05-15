import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'ComputeNet | An Open Protocol for Verified Useful Compute',
  description: 'ComputeNet explores a decentralized future where useful computation becomes a verifiable protocol primitive. Research-first, open-source, fair-launch.',
  keywords: ['ComputeNet', 'Proof of Useful Compute', 'PoUC', 'decentralized compute', 'verified computation', 'open protocol'],
  openGraph: {
    title: 'ComputeNet | An Open Protocol for Verified Useful Compute',
    description: 'Exploring decentralized verification of useful compute through Proof of Useful Compute (PoUC).',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

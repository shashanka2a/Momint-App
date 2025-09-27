import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Momint - NFT Marketplace for Creators and Fans',
    template: '%s | Momint'
  },
  description: 'Connect with your favorite creators through exclusive NFTs and unlock premium content. Join the future of creator-fan relationships with blockchain technology.',
  keywords: [
    'NFT marketplace',
    'creator economy',
    'blockchain',
    'digital collectibles',
    'exclusive content',
    'fan engagement',
    'Web3',
    'crypto art',
    'creator tokens',
    'fan tokens'
  ],
  authors: [{ name: 'Momint Team', url: 'https://momint.app' }],
  creator: 'Momint',
  publisher: 'Momint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://momint.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Momint - NFT Marketplace for Creators and Fans',
    description: 'Connect with your favorite creators through exclusive NFTs and unlock premium content. Join the future of creator-fan relationships.',
    url: 'https://momint.app',
    siteName: 'Momint',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Momint - NFT Marketplace for Creators and Fans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momint - NFT Marketplace for Creators and Fans',
    description: 'Connect with your favorite creators through exclusive NFTs and unlock premium content.',
    creator: '@momintapp',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          {children}
          <Toaster 
            theme="dark" 
            position="top-right"
            toastOptions={{
              style: {
                background: 'rgba(168, 85, 247, 0.1)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
              },
            }}
          />
        </AppProvider>
      </body>
    </html>
  )
}

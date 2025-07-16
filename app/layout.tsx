import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency | Professional Web Design & Development',
  description: 'We are a full-service digital agency specializing in web design, development, and digital marketing. Transform your business with our expert team.',
  keywords: ['web design', 'web development', 'digital agency', 'UX/UI design', 'business consulting'],
  authors: [{ name: 'Digital Agency Team' }],
  creator: 'Digital Agency',
  publisher: 'Digital Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Digital Agency | Professional Web Design & Development',
    description: 'We are a full-service digital agency specializing in web design, development, and digital marketing. Transform your business with our expert team.',
    siteName: 'Digital Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency | Professional Web Design & Development',
    description: 'We are a full-service digital agency specializing in web design, development, and digital marketing. Transform your business with our expert team.',
    creator: '@digitalagency',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
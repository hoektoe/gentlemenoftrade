import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    template: '%s - Gentlemen of Trade',
    default: 'Gentlemen of Trade | Plumbing | Gas Services Cape Town',
  },
  description:
    "Cape Town's trusted plumbing and gas experts since 2017. 24/7 emergency services, fully licensed professionals, and quality workmanship for residential and commercial properties.",
  keywords: [
    'plumbing cape town',
    'gas services',
    'emergency plumber',
    'residential plumbing',
    'plumbing repairs',
    'gas installations',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://gentlemenoftrade.co.za',
    title: 'Gentlemen of Trade | Plumbing | Gas Services Cape Town',
    description:
      'Professional plumbing and gas services for Cape Town homes and businesses. 24/7 emergency services available.',
    siteName: 'Gentlemen of Trade',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gentlemen of Trade | Plumbing | Gas Services',
    description:
      'Your trusted Cape Town experts for all plumbing and gas needs. 24/7 emergency services available.',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <WhatsAppButton
          phoneNumber="+27644337043"
          message="Hello, I would like to get a quote or assistance..."
        />
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://enelelectrical.com'),
  title: {
    default: 'E.N.E.L. Electrical Corp. | Licensed Electricians & Lighting Specialists in NYC',
    template: '%s | E.N.E.L. Electrical Corp.',
  },
  description:
    'E.N.E.L. Electrical Corp. is a licensed, bonded and insured electrical contractor serving the five boroughs of New York. Commercial and residential electrical work and lighting specialists. Free estimates. 24/7 emergency service.',
  keywords: [
    'electrician NYC',
    'commercial electrician Brooklyn',
    'lighting specialist New York',
    'electrical contractor five boroughs',
    'emergency electrician',
  ],
  authors: [{ name: site.name }],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enelelectrical.com',
    siteName: site.name,
    title: 'E.N.E.L. Electrical Corp. | Electricians & Lighting Specialists in NYC',
    description:
      'Licensed, bonded and insured electrical contractor serving the five boroughs of New York. Commercial and residential. Free estimates.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#141414',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: site.name,
  description:
    'Licensed, bonded and insured electrical contractor and lighting specialists serving the five boroughs of New York.',
  telephone: site.phone,
  faxNumber: site.fax,
  email: site.email,
  url: 'https://enelelectrical.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: 'US',
  },
  areaServed: site.boroughs.map((b) => ({ '@type': 'City', name: b })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

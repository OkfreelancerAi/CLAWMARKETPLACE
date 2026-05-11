import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClawMarketplace - Scale Your Business Faster',
  description: 'The all-in-one platform to automate your funnel, increase conversions and dominate your revenue.',
  keywords: ['marketplace', 'funnel', 'automation', 'conversions', 'SaaS'],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://clawmarketplace.com',
    title: 'ClawMarketplace',
    description: 'Scale your marketplace faster than ever before.',
    images: [{
      url: 'https://og-image.vercel.app/ClawMarketplace.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arctic Breeze HVAC | Dallas, TX Air Conditioning & Heating Services',
  description: 'Expert AC and heating services in Dallas, TX. Fast, efficient, and reliable HVAC repairs, tune-ups, and installations. Available 24/7 for emergency dispatch.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-ice-white font-body text-slate-deep min-h-screen antialiased flex flex-col selection:bg-arctic-blue selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

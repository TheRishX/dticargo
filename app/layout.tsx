import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'DTICARGO.COM | Premium Logistics & Supply Chain',
  description: 'Fast. Reliable. Nationwide Logistics You Can Trust.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="bg-[#F5F7F2] text-[#1A2E20] font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-950 overflow-x-hidden min-h-screen flex flex-col pt-20" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

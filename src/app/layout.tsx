import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import SideBar from './components/sidebar';
import { themeScript } from './components/theme-toggle';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eric Hernandez',
  description:
    'My name is Eric Hernandez, I\'m a Software Engineer, and this is my silly little website :)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-page text-body" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <div className="max-w-7xl p-6 sm:p-10 md:p-14">
          <div className="flex flex-1">
            <div className="pr-6 sm:pr-10 md:pr-14">
              <SideBar />
            </div>
            <div className="inline-block min-h-[1em] min-w-0.25 self-stretch bg-rule" />
            <div className="pl-6 sm:pl-10 md:pl-14 py-1 relative flex-1 max-w-3xl [contain:inline-size]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

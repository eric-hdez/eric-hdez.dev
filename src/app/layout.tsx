import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import SideBar from './components/navigation/sidebar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eric Hernandez',
  description:
    'My name is Eric Hernandez, I\'m a Software Engineer, and this is my silly little website :)',
};

// dark:bg-[#1e2125]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#fcfcfc] text-[#4a515b]">
      <body className={inter.className}>
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="flex flex-1">
            <SideBar />
            <div className="inline-block min-h-[1em] min-w-0.25 self-stretch bg-[#d8dbdfb3] dark:bg-[#d8dbdfb3]" />
            <div className="px-14 py-1 relative flex-1 max-w-4xl [contain:inline-size]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

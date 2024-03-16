import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ThemeRegistry from './theme-registry';
import { Footer } from './components/navigation/footer';
import { Box, Container, Stack } from '@mui/joy';
import Navigation from './components/navigation/navigation';

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: 'joy' }}>
          <Navigation />
          <Stack direction="row" width="100%" height="100%">
            <Container maxWidth="lg">
              <Box border={2}>{children}</Box>
            </Container>
          </Stack>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

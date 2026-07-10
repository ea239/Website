import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import NavBar from '../components/NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Evan Zhang | Portfolio',
  description: 'University of Waterloo Computer Engineering student focused on backend systems, AI infrastructure, and software engineering internships.',
  openGraph: {
    title: 'Evan Zhang | Portfolio',
    description: 'Backend, distributed systems, and AI infrastructure projects and experience.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

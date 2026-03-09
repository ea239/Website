import './globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Evan Zhang | Portfolio',
  description: 'University of Waterloo Computer Engineering student focused on backend systems, AI infrastructure, and software engineering internships.',
  openGraph: {
    title: 'Evan Zhang | Portfolio',
    description: 'Backend, distributed systems, and AI infrastructure projects and experience.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
} 
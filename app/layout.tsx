import './globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Evan Zhang Portfolio',
  description: 'AI / 软件工程师 Evan Zhang 的个人作品集',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="zh-CN">
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
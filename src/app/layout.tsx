import Footer from './component/FOOTER';
import LogoIntro from './component/LogoIntro';
import Navigation from './component/NAV';
import './globals.css';
import { Roboto, Playfair_Display, Ubuntu } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-playfair' });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-ubuntu' });

export const metadata = {
  title: 'KingTang Portfolio',
  description: 'Frontend Developer | UX Designer | Innovateur Culturel',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${roboto.variable} ${playfair.variable} ${ubuntu.variable}`}>
      <body>
        <LogoIntro />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

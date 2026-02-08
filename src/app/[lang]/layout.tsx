import type { Metadata } from 'next';
import Script from 'next/script';
import Footer from './component/FOOTER';
import LogoIntro from './component/LogoIntro';
import Navigation from './component/NAV';
import '../globals.css';
import { Roboto, Playfair_Display, Ubuntu } from 'next/font/google';
import { i18n } from '../i18n-config';

// --- Configuration des Polices ---
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-playfair' });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-ubuntu' });

// --- Métadonnées SEO ---
export const metadata: Metadata = {
  metadataBase: new URL('https://kingtang.vercel.app'),
  title: {
    default: 'KingTang Portfolio | Full stack Developer & UX Designer',
    template: '%s | KingTang',
  },
  description: "Portfolio de KingTang, développeur frontend spécialisé en React/Next.js et UX Designer. Découvrez mes projets innovants et mon approche de l'innovation culturelle.",
  keywords: ['Full stack Developer', 'UX Designer', 'Next.js', 'React', 'Portfolio', 'KingTang', 'Innovation Culturelle', 'Web Design'],
  authors: [{ name: 'KingTang' }],
  creator: 'KingTang',
  
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://kingtang.vercel.app',
    title: 'KingTang | Portfolio - Full stack & UX Design',
    description: "Explorez l'univers numérique de KingTang. Développement moderne et design centré utilisateur.",
    siteName: 'KingTang Portfolio',
    images: [
      {
        url: '/mascote.png',
        width: 1200,
        height: 630,
        alt: 'Aperçu du Portfolio de KingTang',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'KingTang | Full stack Developer',
    description: 'Full stack Developer & UX Designer passionné par l\'innovation.',
    images: ['/mascote.png'], 
    creator: '@mfalme369',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'KingTang',
  url: 'https://kingtang.vercel.app',
  jobTitle: 'Full stack Developer & UX Designer',
  description: 'Spécialiste en création d’interfaces modernes et innovateur culturel.',
  sameAs: [
    'https://github.com/TangB5', 
    'https://linkedin.com/in/ndoh-yannick-tang-5b004934a', 
    'https://instagram.com/kingtang337'
  ],
  knowsAbout: ['React', 'Next.js', 'UX Design', 'Web Development', 'Tailwind CSS','full stack'],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    
    <html lang={lang} className={`${roboto.variable} ${playfair.variable} ${ubuntu.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>

        <LogoIntro />
        <Navigation />
        
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
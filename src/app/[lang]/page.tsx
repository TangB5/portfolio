import { getDictionary } from '../../../get-dictionary';
import { Locale } from '../i18n-config';
import HomeClient from './component/HomeClient';

// Couleurs centralisées pour éviter les répétitions
const colors = {
  primary: '#E9B826',
  secondary: '#BB141A',
  tertiary: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  border: 'rgba(233, 184, 38, 0.1)'
};

export default async function Home({ params }: { params: { lang: Locale } }) {
  // On récupère le dictionnaire côté serveur
  const dict = await getDictionary(params.lang);

  return (
    <HomeClient 
      dict={dict} 
      colors={colors} 
      lang={params.lang} 
    />
  );
}
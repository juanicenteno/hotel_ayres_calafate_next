import Gallery from "@/components/Gallery/Gallery"
import { metadata as defaultMetadata } from '../layout';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const lang = locale || 'es';

  const titles = {
    es: 'Galería - Ayres de Calafate',
    en: 'Gallery - Ayres de Calafate',
    pt: 'Galeria - Ayres de Calafate',
  }

  const descriptions = {
    es: 'Explorá la galería de Ayres de Calafate y descubrí imágenes de nuestras habitaciones, espacios y vistas al Lago Argentino.',
    en: 'Explore the gallery of Ayres de Calafate and discover images of our rooms, spaces, and views of Lake Argentino.',
    pt: 'Explore a galeria do Ayres de Calafate e descubra imagens de nossos quartos, espaços e vistas para o Lago Argentino.',
  }


  return {
    ...defaultMetadata, 
    title: titles[lang] || titles.es,
    description: descriptions[lang] || descriptions.es,
    alternates: {
      canonical: `https://ayresdecalafate.com/${lang}/gallery`,
    },
  }
}


function Galeria() {
  return (
    <main>
      <Gallery />
    </main>
  )
}

export default Galeria
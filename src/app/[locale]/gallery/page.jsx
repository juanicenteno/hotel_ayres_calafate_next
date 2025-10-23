import Gallery from "@/components/Gallery/Gallery"

export async function generateMetadata({ params }) {
  const { locale } = await params; 

  const lang = locale || 'es';

  const titles = {
    es: 'Galería - Ayres de Calafate',
    en: 'Gallery - Ayres de Calafate',
    pt: 'Galeria - Ayres de Calafate',
  }

  return {
    title: titles[lang] || titles.es,
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
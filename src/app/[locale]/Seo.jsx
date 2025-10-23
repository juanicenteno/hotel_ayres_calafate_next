'use client'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import Head from 'next/head'

export default function SeoTitleCanonical() {
  const pathname = usePathname() // /es/galeria, /en/gallery, etc.
  const locale = useLocale() // 'es', 'en', 'pt'
  const baseUrl = 'https://ayresdecalafate.com'

  // Extraer la ruta principal sin el idioma
  const route = pathname.replace(/^\/(es|en|pt)/, '') || '/'

  // Lista de títulos por ruta e idioma
  const titles = {
    '/': { es: 'Ayres de Calafate', en: 'Ayres de Calafate', pt: 'Ayres de Calafate' },
    '/galeria': { es: 'Galería - Ayres de Calafate', en: 'Gallery - Ayres de Calafate', pt: 'Galeria - Ayres de Calafate' },
    '/habitaciones': { es: 'Habitaciones - Ayres de Calafate', en: 'Rooms - Ayres de Calafate', pt: 'Quartos - Ayres de Calafate' },
    '/restaurante': { es: 'Restaurante - Ayres de Calafate', en: 'Restaurant - Ayres de Calafate', pt: 'Restaurante - Ayres de Calafate' },
    '/contacto': { es: 'Contacto - Ayres de Calafate', en: 'Contact - Ayres de Calafate', pt: 'Contato - Ayres de Calafate' },
  }

  const title = titles[route]?.[locale] || 'Ayres de Calafate'
  const canonicalUrl = `${baseUrl}${pathname}`

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <html lang={locale} />
    </Head>
  )
}

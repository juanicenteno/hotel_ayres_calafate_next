'use client'

import "./flags.css"
import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { useRouter, usePathname } from '@/i18n/routing'

export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [open, setOpen] = useState(false)

  const flags = {
    es: 'https://flagcdn.com/ar.svg',
    en: 'https://flagcdn.com/us.svg',
    pt: 'https://flagcdn.com/br.svg',
  }

  const handleSelect = (nextLocale) => {
    setOpen(false)
    router.replace({ pathname }, { locale: nextLocale })
  }

  return (
    <div className="flagsChange_container">
      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
        className="current_container"
        aria-label="cambiar idioma"
      >
        <div className="image_container_currentFlag">
        <Image
          src={flags[locale] || 'https://flagcdn.com/ar.svg'}
          alt={locale}
          fill
          className="holasoyeste"
          style={{objectFit: "cover"}}
          loading="eager"
          />
          </div>
        {/* <span className="">{locale}</span> */}
        <svg className="arrow_down" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="drop_menu">
          {routing.locales.map((cur) => (
            <button
              key={cur}
              onClick={() => handleSelect(cur)}
              className="image_container_flags"
            >
              <Image
                src={flags[cur] || 'https://flagcdn.com/ar.svg'}
                alt={cur}
                fill
                className=""
                style={{objectFit: "cover"}}
                loading="eager"
              />
              {/* <span className="">{cur}</span> */}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

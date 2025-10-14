'use client'

import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/routing'

export default function LocaleSwitcherSelect({ children, defaultValue, label }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(
        // No se necesita validación de tipos en JSX
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label
      className={(
        "no-pending",
        isPending && 'is-pending'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className=""
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  )
}

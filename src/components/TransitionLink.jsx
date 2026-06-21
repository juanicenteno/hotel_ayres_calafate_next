'use client'; // Necesario en Next.js App Router para manejar eventos del DOM

import { useRouter, Link as IntlLink } from '@/i18n/routing';

export function TransitionLink({ href, children, onClick, ...rest }) {
  const router = useRouter();

  const handleClick = (e) => {
    // 1. Ejecutamos cualquier función onClick que le hayas pasado al componente
    if (onClick) onClick(e);

    // 2. Frenamos el comportamiento por defecto del link
    e.preventDefault();

    // 3. Chequeo de compatibilidad (Safari/iOS viejos no lo soportan)
    if (!document.startViewTransition) {
      router.push(href);
      return;
    }

    // 4. Iniciar la transición y cambiar la ruta
    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <IntlLink href={href} onClick={handleClick} {...rest}>
      {children}
    </IntlLink>
  );
}
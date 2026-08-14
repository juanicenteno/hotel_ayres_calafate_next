import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "404 – Página no encontrada | Ayres de Calafate",
  description: "La página que buscás no existe. Volvé al inicio de Ayres de Calafate.",
};

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.topLine} />

      <div className={styles.content}>
        <Image
          src="/images/ayresnegro2.webp"
          alt="Logo Ayres de Calafate"
          width={160}
          height={60}
          className={styles.logo}
          priority
        />

        <div className={styles.code}>404</div>

        <div className={styles.divider} />

        <h1 className={styles.title}>Página no encontrada</h1>

        <p className={styles.description}>
          La página que estás buscando no existe o fue movida.
          <br />
          Explorá nuestro hotel boutique en la Patagonia desde el inicio.
        </p>

        <Link href="/" className={styles.cta} aria-label="Volver al inicio">
          Volver al inicio
        </Link>
      </div>

      <div className={styles.bottomLine} />
    </main>
  );
}

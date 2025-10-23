import styles from "./page.module.css";
import Carrousel from "@/components/Carrousel_Rooms/Carrousel";
import Image from "next/image";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <section className={styles.header_image}>
        <Image
          src="https://ayresdecalafate.com/img_prueba.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          loading="eager"
        />
        <div className={styles.imageText_container}>
          <div className={styles.lineDivider}></div>
          <small>{t('spa_imagetext')}</small>
          <h1>{t('home_imgText')}</h1>
          <a aria-label="Reservar habitación" href={`https://www.todoalojamiento.com/portal/${locale}?idHotel=3032&forzarLimpiar=true`} target="_blank">{t('reserve')} {t('now')}</a>
        </div>

        <div className={styles.gradient}></div>
      </section>
      <main className={styles.main}>
        <section className={styles.ayresPresentation}>
          <article>
            <small>Ayres de calafate</small>
            <h2>{t('home_title')}</h2>
            <p>{t('home_subtitle')}</p>
            <br /><br />
            <b> <p style={{ textAlign: "center" }}>{t('home_subtitle2')}</p></b>
          </article>
          <div className={styles.image_desktop_container} style={{ position: "relative", width: "40%", height: "100%" }}>
            <Image
              src="https://ayresdecalafate.com/images/webp_new/9.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              loading="eager"
            />
          </div>
        </section>
        <Carrousel />
        <section className={styles.ayresPresentation}>
          <div className={styles.image_desktop_container} style={{ position: "relative", width: "40%", height: "100%", alignSelf: "flex-start" }}>
            <Image
              src="https://ayresdecalafate.com/images/webp_new/44.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              loading="eager"
            />
          </div>
          <article>
            <h3>{t('discover_ayres')}</h3>
            <p>{t('home_discover_text')}</p>
            <a aria-label="reservar ahora" href={`https://www.todoalojamiento.com/portal/${locale}?idHotel=3032&forzarLimpiar=true`} target="_blank">{t('reserve')} {t('now')}</a>
          </article>
        </section>
      </main>
    </>
  );
}

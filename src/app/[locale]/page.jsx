import styles from "./page.module.css";
import Carrousel from "@/components/Carrousel_Rooms/Carrousel";
import Image from "next/image";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import SectionHero from "@/components/SectionHero/SectionHero";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <SectionHero
        imageSrc="/images/img_prueba.jpg"
        label={t('spa_imagetext')}
        title={t('home_imgText')}
        lineDivider
        cta={{
          href: `https://www.todoalojamiento.com/portal/${locale}?idHotel=3032&forzarLimpiar=true`,
          text: `${t('reserve')} ${t('now')}`,
          ariaLabel: "Reservar habitación",
        }}
      />
      <HomeCarousel />
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
              src="/images/webp_new/9.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
            />
          </div>
        </section>
        <Carrousel />
        <section className={styles.ayresPresentation}>
          <div className={styles.image_desktop_container} style={{ position: "relative", width: "40%", height: "100%", alignSelf: "flex-start" }}>
            <Image
              src="/images/webp_new/44.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
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

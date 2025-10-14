import Booking from "@/components/Booking/Booking";
import styles from "./page.module.css";
import Carrousel from "@/components/Carrousel_Rooms/Carrousel";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {
const t = useTranslations();
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
          <small>best place to relax & enjoy</small>
          <h1>Perfect Place to Enjoy Your Life</h1>
          <a href="">{t('reserve')} {t('now')}</a>
        </div>
        <Booking />
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
              src="https://ayresdecalafate.com/images/ayres_gallery/9.webp"
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
              src="https://ayresdecalafate.com/images/ayres_gallery/40.webp"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              loading="eager"
            />
          </div>
          <article>
            <h3>{t('discover_ayres')}</h3>
            <p>{t('home_discover_text')}</p>
            <a href="">{t('reserve')} {t('now')}</a>
          </article>
        </section>
      </main>
    </>
  );
}

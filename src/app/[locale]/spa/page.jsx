import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { metadata as defaultMetadata } from '../layout';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const lang = locale || 'es';

  const titles = {
    es: 'Spa | Ayres de Calafate',
    en: 'Spa | Ayres de Calafate',
    pt: 'Spa | Ayres de Calafate',
  }

  const descriptions = {
    es: 'Relajate en el spa de Ayres de Calafate, con tratamientos exclusivos y un ambiente tranquilo con vistas al Lago Argentino.',
    en: 'Relax at the Ayres de Calafate spa, offering exclusive treatments in a peaceful setting with views of Lake Argentino.',
    pt: 'Relaxe no spa do Ayres de Calafate, com tratamentos exclusivos e um ambiente tranquilo com vista para o Lago Argentino.',
  }


  return {
    ...defaultMetadata,
    title: titles[lang] || titles.es,
    description: descriptions[lang] || descriptions.es,
    alternates: {
      canonical: `https://ayresdecalafate.com/${lang}/spa`,
    },
  }
}

function Spa() {
  const t = useTranslations();
  return (
    <>
      <section className={styles.header_image_spa}>
        <Image
          src="https://simplicitysoftware.site/images/webp_new/59.webp"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          loading="eager"
        />
        <div className={styles.imageText_container}>
          <small>{t('spa_imagetext')}</small>
          <h1>{t('spa_imagetext2')}</h1>
        </div>
        <div className={styles.gradient}></div>
      </section>
      <main className={styles.spa_section}>
        <section className={styles.spa_presentation}>
          <article className={styles.spa_titles}>
            <h1>SPA</h1>
            <h2>{t('spa_subtitle')}</h2>
            <p>{t('spa_text')}</p>
          </article>
          <article className={styles.btn_seemore}>
            <a href="#spa_offers_section" className={styles.btn_seemore_item}>
              {t('our_treatments')}
            </a>
          </article>
        </section>
        <section className={styles.opening_hours}>
          <h3>{t('hour_spa')}</h3>
          <p>{t('hour_spa_text')}</p>
        </section>
        <div id='spa_offers_section' className={styles.spa_offers}>
          <h2>{t('more_solicitated')}</h2>
          <ul className={styles.offers_items}>
            <li>
              <img loading="lazy" src="https://simplicitysoftware.site/images/ayres_webp/spa1.webp" alt="masajes ayres de calafate" />
              <div className={styles.description_masage}>
                <h3>{t('treatment_1')}</h3>
                <p>{t('treatment_1_text')}</p>
                <a aria-label='reservar una sesión de spa' href="https://wa.me/5492966568253?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20sesi%C3%B3n%20en%20el%20spa%20de%20Ayres.%20%C2%BFTienen%20disponibilidad%3F" target='_blank'>{t('reserve')} {t('your')} {t('session')}</a>
              </div>
            </li>
            <li id={styles.spa_card2_desktop}>
              <div className={styles.description_masage}>
                <h3>{t('treatment_2')}</h3>
                <p>{t('treatment_2_text')}</p>
                <a aria-label='reservar una sesión de spa' href="https://wa.me/5492966568253?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20sesi%C3%B3n%20en%20el%20spa%20de%20Ayres.%20%C2%BFTienen%20disponibilidad%3F" target='_blank'>{t('reserve')} {t('your')} {t('session')}</a>
              </div>
              <img loading="lazy" src="https://simplicitysoftware.site/images/ayres_webp/spa4.webp" alt="masajes ayres de calafate" />
            </li>
            <li id={styles.spa_card2_mobile}>
              <img loading="lazy" src="https://simplicitysoftware.site/images/ayres_webp/spa4.webp" alt="masajes ayres de calafate" />
              <div className={styles.description_masage}>
                <h3>{t('treatment_2')}</h3>
                <p>{t('treatment_2_text')}</p>
                <a aria-label='reservar una sesión de spa' href="https://wa.me/5492966568253?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20sesi%C3%B3n%20en%20el%20spa%20de%20Ayres.%20%C2%BFTienen%20disponibilidad%3F" target='_blank'>{t('reserve')} {t('your')} {t('session')}</a>
              </div>
            </li>
            <li>
              <img loading="lazy" src="https://simplicitysoftware.site/images/ayres_webp/spa3.webp" alt="masajes ayres de calafate" />
              <div className={styles.description_masage}>
                <h3>{t('treatment_3')}</h3>
                <p>{t('treatment_3_text')}</p>
                <a aria-label='reservar una sesión de spa' href="https://wa.me/5492966568253?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20sesi%C3%B3n%20en%20el%20spa%20de%20Ayres.%20%C2%BFTienen%20disponibilidad%3F" target='_blank'>{t('reserve')} {t('your')} {t('session')}</a>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Spa
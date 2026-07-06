import React from 'react'
import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import { baseMetadata as defaultMetadata } from '../layout';
import SectionHero from "@/components/SectionHero/SectionHero";
import Image from 'next/image';


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
    <SectionHero
        className={styles.heroSpa}
        imageSrc="/images/webp_new/60.webp"
        title={t('spa_title')}
        subtitle={t('spa_subtitle')}
      />

      <main className={styles.spa_section}>
        <section className={styles.intro_section}>
          <div className={styles.intro_content}>
            <h2 className={styles.section_title}>{t('spa_welcome_title')}</h2>
            <p className={styles.intro_text}>
              {t('spa_welcome_text')}
            </p>
          </div>
        </section>

        <section className={styles.treatments_section}>
          <h2 className={styles.section_title_center}>{t('spa_treatments_title')}</h2>

          <div className={styles.treatment_card}>
            <div className={styles.treatment_image_wrapper}>
              <Image
                src="/images/ayres_webp/spa1.webp"
                alt={t('spa_lavanda_title')}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.treatment_content}>
              <div className={styles.treatment_header}>
                <h3>{t('spa_lavanda_title')}</h3>
                <span className={styles.treatment_badge}>{t('spa_badge_relaxation')}</span>
              </div>
              <p>{t('spa_lavanda_desc')}</p>
              <div className={styles.treatment_footer}>
                <span className={styles.treatment_time}>{t('spa_duration_40')}</span>
                <span className={styles.treatment_price}>{t('spa_price_70k')}</span>
              </div>
              <a
                aria-label={t('spa_reserve_now')}
                href="https://wa.me/5492902405455?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20el%20tratamiento%20de%20Lavanda%20Patag%C3%B3nica.%20%C2%BFTienen%20disponibilidad%3F"
                target='_blank'
                className={styles.btn_reserve}
              >
                {t('spa_reserve_now')}
              </a>
            </div>
          </div>

          <div className={styles.treatment_card}>
            <div className={styles.treatment_image_wrapper}>
              <Image
                src="/images/ayres_webp/spa4.webp"
                alt={t('spa_menta_title')}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.treatment_content}>
              <div className={styles.treatment_header}>
                <h3>{t('spa_menta_title')}</h3>
                <span className={styles.treatment_badge}>{t('spa_badge_energizing')}</span>
              </div>
              <p>{t('spa_menta_desc')}</p>
              <div className={styles.treatment_footer}>
                <span className={styles.treatment_time}>{t('spa_duration_30')}</span>
                <span className={styles.treatment_price}>{t('spa_price_60k')}</span>
              </div>
              <a
                aria-label={t('spa_reserve_now')}
                href="https://wa.me/5492902405455?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20el%20Masaje%20de%20Descanso%20con%20Menta%20del%20Sur.%20%C2%BFTienen%20disponibilidad%3F"
                target='_blank'
                className={styles.btn_reserve}
              >
                {t('spa_reserve_now')}
              </a>
            </div>
          </div>

          <div className={styles.treatment_card}>
            <div className={styles.treatment_image_wrapper}>
              <Image
                src="/images/ayres_webp/spa3.webp"
                alt={t('spa_armonia_title')}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.treatment_content}>
              <div className={styles.treatment_header}>
                <h3>{t('spa_armonia_title')}</h3>
                <span className={styles.treatment_badge}>{t('spa_badge_holistic')}</span>
              </div>
              <p>{t('spa_armonia_desc')}</p>
              <div className={styles.treatment_footer}>
                <span className={styles.treatment_time}>{t('spa_duration_40')}</span>
                <span className={styles.treatment_price}>{t('spa_price_70k')}</span>
              </div>
              <a
                aria-label={t('spa_reserve_now')}
                href="https://wa.me/5492902405455?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20el%20tratamiento%20Armon%C3%ADa%20del%20Calafate.%20%C2%BFTienen%20disponibilidad%3F"
                target='_blank'
                className={styles.btn_reserve}
              >
                {t('spa_reserve_now')}
              </a>
            </div>
          </div>
        </section>

        <section className={styles.info_section}>
          <div className={styles.hours_card}>
            <h3>{t('spa_hours_title')}</h3>
            <p className={styles.hours_text}>{t('spa_hours_schedule')}</p>
            <p className={styles.hours_subtext}>{t('spa_hours_morning')}</p>
            <Image
              src="/images/ayres_webp/spa_hours.webp"
              alt={t('spa_hours_title')}
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className={styles.notes_card}>
            <h3>{t('spa_notes_title')}</h3>
            <ul className={styles.notes_list}>
              <li>{t('spa_note_1hr')}</li>
              <li>{t('spa_note_40min')}</li>
              <li>{t('spa_note_30min')}</li>
              <li>{t('spa_note_turn')}</li>
              <li>{t('spa_note_advance')}</li>
              <li>{t('spa_note_professionals')}</li>
              <li>{t('spa_note_adapt')}</li>
              <li>{t('spa_note_max_duration')}</li>
            </ul>
            <div className={styles.card_warning}>
              <strong>{t('spa_card_payment_warning').split(':')[0]}:</strong> {t('spa_card_payment_warning').split(':')[1]}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Spa
import styles from "./page.module.css";
import Carrousel from "@/components/Carrousel_Rooms/Carrousel";
import Image from "next/image";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import SectionHero from "@/components/SectionHero/SectionHero";
import { TransitionLink } from '@/components/TransitionLink';
import { getBookingUrl } from "@/utils/booking";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      {/* ─── 1. HERO SECTION BOUTIQUE ─── */}
      <SectionHero
        imageSrc="/images/aura.png"
        imageAlt={t('home_imgText')}
        label={t('home_hero_label')}
        title={t('home_imgText')}
        lineDivider
        cta={{
          href: getBookingUrl({ locale }),
          text: `${t('reserve')} ${t('now')}`,
          ariaLabel: t('home_hero_cta_aria'),
        }}
      />

      {/* ─── 2. VALUE PROPS (4 PILARES BOUTIQUE) ─── */}
      <section className={styles.valuePropsBar}>
        <div className={styles.valuePropItem}>
          <div className={styles.valuePropIcon} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
          </div>
          <div className={styles.valuePropText}>
            <h4>{t('vp_lake_title')}</h4>
            <p>{t('vp_lake_desc')}</p>
          </div>
        </div>

        <div className={styles.valuePropItem}>
          <div className={styles.valuePropIcon} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h20M2 16h20M2 8c4 0 6 2 10 2s6-2 10-2" />
            </svg>
          </div>
          <div className={styles.valuePropText}>
            <h4>{t('vp_spa_title')}</h4>
            <p>{t('vp_spa_desc')}</p>
          </div>
        </div>

        <div className={styles.valuePropItem}>
          <div className={styles.valuePropIcon} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
          </div>
          <div className={styles.valuePropText}>
            <h4>{t('vp_dining_title')}</h4>
            <p>{t('vp_dining_desc')}</p>
          </div>
        </div>

        <div className={styles.valuePropItem}>
          <div className={styles.valuePropIcon} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className={styles.valuePropText}>
            <h4>{t('vp_service_title')}</h4>
            <p>{t('vp_service_desc')}</p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        {/* ─── 3. BIENVENIDA / LA EXPERIENCIA AYRES ─── */}
        <section className={styles.ayresPresentation}>
          <article>
            <small>Ayres de Calafate</small>
            <h2>{t('home_title')}</h2>
            <p>{t('home_subtitle')}</p>
            <p className={styles.presentationHighlight}>{t('home_subtitle2')}</p>
          </article>
          <div className={styles.image_desktop_container}>
            <Image
              src="/images/webp_new/9.webp"
              alt={t('home_imgText')}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
            />
          </div>
        </section>

        {/* ─── 4. NUESTRAS HABITACIONES ─── */}
        <Carrousel />

        {/* ─── 5. TEASER DE EXPERIENCIAS (SPA & RESTAURANTE) ─── */}
        <section className={styles.experiencesSection}>
          <header className={styles.experiencesHeader}>
            <small>{t('exp_section_eyebrow')}</small>
            <h2>{t('exp_section_title')}</h2>
          </header>
          <div className={styles.experiencesGrid}>
            <article className={styles.experienceCard}>
              <div className={styles.experienceImageWrapper}>
                <Image
                  src="/images/ayres_webp/spa1.webp"
                  alt={t('exp_spa_title')}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className={styles.experienceContent}>
                <span className={styles.experienceBadge}>{t('exp_spa_badge')}</span>
                <h3>{t('exp_spa_title')}</h3>
                <p>{t('exp_spa_desc')}</p>
                <TransitionLink href="/spa" className={styles.experienceLink}>
                  {t('exp_spa_cta')} →
                </TransitionLink>
              </div>
            </article>

            <article className={styles.experienceCard}>
              <div className={styles.experienceImageWrapper}>
                <Image
                  src="/images/webp_new/42.webp"
                  alt={t('exp_dining_title')}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className={styles.experienceContent}>
                <span className={styles.experienceBadge}>{t('exp_dining_badge')}</span>
                <h3>{t('exp_dining_title')}</h3>
                <p>{t('exp_dining_desc')}</p>
                <TransitionLink href="/restaurant" className={styles.experienceLink}>
                  {t('exp_dining_cta')} →
                </TransitionLink>
              </div>
            </article>
          </div>
        </section>

        {/* ─── 6. DESCUBRE AYRES CON TODAS LAS COMODIDADES ─── */}
        <section className={styles.ayresPresentation}>
          <div className={styles.image_desktop_container}>
            <Image
              src="/images/webp_new/44.webp"
              alt={t('discover_ayres')}
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <article>
            <small>Confort & Serenidad</small>
            <h3>{t('discover_ayres')}</h3>
            <p>{t('home_discover_text')}</p>
            <a aria-label={t('home_discover_cta')} href={getBookingUrl({ locale })} target="_blank" rel="noopener noreferrer">
              {t('home_discover_cta')}
            </a>
          </article>
        </section>

        {/* ─── 7. PROMOS & EXPERIENCIAS (EXPERIENCIA / DORADOS) ─── */}
        <section className={styles.temporalPromos}>
          <HomeCarousel />
        </section>

        {/* ─── 8. ASESORAMIENTO DIRECTO & WHATSAPP PARA RESERVAS ─── */}
        <section className={styles.directContactBanner}>
          <p className={styles.directContactEyebrow}>{t('direct_contact_eyebrow')}</p>
          <h2 className={styles.directContactTitle}>{t('direct_contact_title')}</h2>
          <p className={styles.directContactDesc}>{t('direct_contact_desc')}</p>
          <div className={styles.directContactActions}>
            <a
              className={styles.directWppCta}
              href="https://wa.me/5492902405455?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20por%20disponibilidad%20y%20tarifas%20para%20hospedarme%20en%20Ayres%20de%20Calafate."
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('direct_contact_cta')}
            >
              <svg viewBox="0 0 256 256">
                <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
              </svg>
              <span>{t('direct_contact_cta')}</span>
            </a>
            <span className={styles.directSecondaryText}>{t('direct_contact_secondary')}</span>
          </div>
        </section>
      </main>
    </>
  );
}

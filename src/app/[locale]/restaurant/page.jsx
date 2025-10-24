import Image from 'next/image'
import styles from './page.module.css'
import "./embla_restaurant.css"
import { useTranslations } from 'next-intl';
import Restaurant_carrousel from './Restaurant_carrousel';
import { metadata as defaultMetadata } from '../layout';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const lang = locale || 'es';

  const titles = {
    es: 'Restaurante | Ayres de Calafate',
    en: 'Restaurant | Ayres de Calafate',
    pt: 'Restaurante | Ayres de Calafate',
  }

  const descriptions = {
    es: 'Descubrí el restaurante de Ayres de Calafate, con gastronomía patagónica, vistas al Lago Argentino y un ambiente cálido y acogedor.',
    en: 'Discover the restaurant at Ayres de Calafate, featuring Patagonian cuisine, views of Lake Argentino, and a warm, welcoming atmosphere.',
    pt: 'Descubra o restaurante do Ayres de Calafate, com culinária patagônica, vista para o Lago Argentino e um ambiente acolhedor.',
  }


  return {
    ...defaultMetadata, 
    title: titles[lang] || titles.es,
    description: descriptions[lang] || descriptions.es,
    alternates: {
      canonical: `https://ayresdecalafate.com/${lang}/restaurant`,
    },
  }
}

function page() {
  const t = useTranslations();


  return (
    <>
      <section className={styles.header_image_restaurant}>
        <Image
          src="https://ayresdecalafate.com/images/webp_new/43.webp"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          loading="eager"
        />
        <div className={styles.imageText_container}>
          <article>
            <h1>{t('dining')}</h1>
            <small>{t('dining_description')}</small>
          </article>
        </div>
        <div className={styles.gradient}></div>
      </section>

      <main className={styles.main}>
        <section className={styles.restaurant_text}>
          <article className={styles.restaurant_art}>
            <h1>{t('dining')}</h1>
            <h2>{t('dining_subtitle')}</h2>
            <p>
              {t('dining_text1')}
              <br />
              {t('dining_text2')}
              <br />
              {t('dining_text3')}
            </p>
            <ul className={styles.list_btns}>
              <li><a aria-label='reservar una mesa en el restaurante del hotel ayres de calafate' href="https://wa.me/5492966568253?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20en%20Ayres%20Restaurante.%20%C2%BFTienen%20disponibilidad%3F">{t('book_table')}</a></li>
            </ul>
          </article>
        </section>
        <Restaurant_carrousel />
        <section className={styles.Img_hours}>
          <div className={styles.ImageContainer}>
            <Image
              className={styles.img}
              src="https://ayresdecalafate.com/images/webp_new/42.webp"
              fill
              style={{ objectFit: "cover" }}
              alt='Restaurante Ayres de Calafate'
            />
          </div>
          <article className={styles.hours_description}>
            <h3>{t('ayres_restaurant')}</h3>
            <p>{t('ayres_description')}</p>
            <ul className={styles.list_hours}>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>
                <div className={styles.hours_restaurant}>
                  <span>{t('open_daily')}</span>
                  <span><b>{t('dining_breakfast')}</b> 06:30 AM - 10:30 AM</span>
                  <span><b>{t('dining_lunch')}</b> 12:30 PM – 3:00 PM</span>
                  <span><b>{t('dining_dinner')}</b> 06:30 PM - 10:30 PM</span>
                </div>
              </li>
              <li style={{ alignItems: "center" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                +54 9 2966 56-8253
              </li>
            </ul>
            <ul className={styles.btns_reserve}>
              <li><a aria-label='ver ofertas en el restaurante del hotel ayres de calafate' href="https://www.instagram.com/ayres_restaurante/">{t('view_offers')}</a></li>
              <li><a aria-label='reservar una mesa en el restaurante del hotel ayres de calafate' href="https://wa.me/5492966568253?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20en%20Ayres%20Restaurante.%20%C2%BFTienen%20disponibilidad%3F">{t('book_table')}</a></li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default page
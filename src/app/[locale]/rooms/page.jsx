import styles from "./page.module.css"
import RoomsData from "../../../data/Rooms.json"
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { metadata as defaultMetadata } from '../layout';

import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }) {
    const { locale } = await params;

    const lang = locale || 'es';

    const titles = {
        es: 'Habitaciones | Ayres de Calafate',
        en: 'Rooms | Ayres de Calafate',
        pt: 'Quartos | Ayres de Calafate',
    }

    const descriptions = {
        es: 'Descubrí nuestras habitaciones en Ayres de Calafate, con confort y vistas al Lago Argentino.',
        en: 'Discover our rooms at Ayres de Calafate, offering comfort and views of Lake Argentino.',
        pt: 'Descubra nossos quartos no Ayres de Calafate, com conforto e vista para o Lago Argentino.',
    }

    return {
        ...defaultMetadata,
        title: titles[lang] || titles.es,
        description: descriptions[lang] || descriptions.es,
        alternates: {
            canonical: `https://ayresdecalafate.com/${lang}/rooms`,
        },
    }
}

function Rooms() {
    const t = useTranslations();
    const locale = useLocale();
    return (
        <>
            <main className={styles.rooms_container}>
                {RoomsData.map(item => (
                    <div key={item.id} id={styles.rooms}>
                        <article className={styles.card}>
                            <div className={styles.image_container_rooms}>
                                <Link key={item.id} href={`/rooms/${item.id}`}>
                                    <Image
                                        loading="lazy"
                                        className={styles.room_image}
                                        src={item.thumbnailImage}
                                        fill
                                        alt="imagen de habitacion ayres de calafate"
                                    />
                                </Link>
                            </div>
                            <section className={styles.description_container}>
                                <h1>{item.nombre[locale]}</h1>
                                <p>{item.descripcion[locale]}</p>
                                <ul className={styles.ventajas}>
                                    {Object.entries(item.ventajas[locale]).slice(0, 6).map(([key, text]) => (
                                        <li key={key}>{text}</li>
                                    ))}
                                </ul>
                                <small className={styles.room_price}>{item.precio}/Night</small>
                                <Link aria-label="ver detalles de habitacion" key={item.id} href={`/rooms/${item.id}`} className={styles.reserve_button}>{t('see_more')}</Link>
                            </section>
                        </article>
                        {/* <li key={item.id}>{item.nombre.es}</li> */}
                    </div>
                ))}
            </main>
        </>
    )
}

export default Rooms
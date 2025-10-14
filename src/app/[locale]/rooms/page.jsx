import styles from "./page.module.css"
import RoomsData from "../../../data/Rooms.json"
import Image from "next/image";
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

function Rooms({ params }) {
    const t = useTranslations();
    const { locale } = params;
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
                                    {Object.entries(item.ventajas[locale]).map(([key, text]) => (
                                        <li key={key}>{text}</li>
                                    ))}
                                </ul>
                                <small className={styles.room_price}>{item.precio}/Night</small>
                                <Link key={item.id} href={`/rooms/${item.id}`} className={styles.reserve_button}>{t('see_more')}</Link>
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
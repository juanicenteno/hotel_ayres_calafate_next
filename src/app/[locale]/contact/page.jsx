import React from 'react'
import Contact from '@/components/contact/ContactForm'
import styles from './page.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl';



function Contacto() {
    const t = useTranslations();
    return (
        <>
            <section className={styles.header_image_contact}>
                <Image
                    src="https://ayresdecalafate.com/images/webp_new/78.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    loading="eager"
                />
                <div className={styles.imageText_container}>
                    <article>
                        <h1>{t('contact_us')}</h1>
                        <small>{t('contact_text')}</small>
                    </article>
                </div>
                <div className={styles.gradient}></div>
            </section>
            <main className={styles.main}>
                <h1>{t('have_questions')}</h1>
                <Contact />
            </main>
        </>
    )
}

export default Contacto
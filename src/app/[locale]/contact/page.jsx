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
                <h1 style={{textAlign: "center", marginTop: "4rem"}}>{t('have_questions')}</h1>
            <main className={styles.main}>
                <Contact />
                <iframe className={styles.location_iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2546.3021480693533!2d-72.2829728!3d-50.342269599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb0d2a1e6be6f5%3A0xf291c65915962154!2sAyres%20de%20Calafate%20%7C%20Hotel%20Boutique!5e0!3m2!1ses-419!2sar!4v1761161328659!5m2!1ses-419!2sar" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </main>
        </>
    )
}

export default Contacto
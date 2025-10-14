import React from 'react'
import Faq from '../faq/Faq'
import styles from "./Footer.module.css"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

function Footer() {
  const t = useTranslations();
  return (
    <>
      <Faq />
      <footer className={styles.footer}>
        <section className={styles.footerContainer}>
          <article className={styles.footerImg}>
            <img src="/ayresblanco2.png" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nobis natus expedita neque commodi nostrum voluptas sapiente mollitia, aspernatur repellendus a dolorum laboriosam excepturi magnam cupiditate blanditiis molestias voluptate quod.</p>
            
          </article>
          <section className={styles.footerExtras}>
          <article className={styles.footerNavegation}>
            <h3>{t('navegation')}</h3>
            <ul>
              <Link href="#Body">{t('home')}</Link>
              <Link href="/rooms">{t('rooms')}</Link>
              <Link href="/gallery">{t('gallery')}</Link>
              <Link href="/contact">{t('contact_us')}</Link>
            </ul>
          </article>
          <article className={styles.footerContact}>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                <span>+54 11 1234 5678</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                <span>Freile 2197, El Calafate, Santa Cruz</span>
              </li>
            </article>
            <article className={styles.socialMedia}>
              <h3>{t('follow_us')}</h3>
              <ul>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.27 6c1.01 2.17.78 4.73-.33 6.81c-.94 1.69-2.29 3.12-3.44 4.69c-.5.7-1 1.45-1.37 2.26c-.13.27-.22.55-.32.83s-.19.56-.28.84c-.09.26-.2.57-.53.57c-.39 0-.5-.44-.58-.74c-.24-.73-.48-1.43-.85-2.1c-.42-.79-.95-1.52-1.49-2.23zM9.12 8.42l-3.3 3.92c.61 1.29 1.52 2.39 2.39 3.49c.21.25.42.51.62.78L13 11.67l-.04.01c-1.46.5-3.08-.24-3.66-1.68c-.08-.17-.14-.37-.18-.57a3 3 0 0 1 0-1zm-2.54-3.8l-.01.01c-1.62 2.05-1.9 4.9-.93 7.31L9.63 7.2l-.05-.05zm7.64-2.26L11 6.17l.04-.01c1.34-.46 2.84.12 3.52 1.34c.15.28.27.58.31.88c.06.38.08.65.01 1.02v.01l3.2-3.8a7 7 0 0 0-3.85-3.24zM9.89 6.89l3.91-4.65l-.04-.01C13.18 2.08 12.59 2 12 2c-1.97 0-3.83.85-5.15 2.31l-.02.01z" /></svg></li>
              </ul>
            </article>
          </section>
        </section>
        <article className={styles.copyRight}>
          <span>© 2024 Ayres de Calafate. All rights reserved.</span>
          <span>Developed by Juan Ignacio Centeno</span>
        </article>
      </footer>
    </>
  )
}

export default Footer
"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from '@/i18n/routing';

import styles from './Header.module.css'
import Booking from "../Booking/Booking";

import { usePathname } from "next/navigation";

import { useTranslations } from 'next-intl';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";


function Header() {
    const t = useTranslations();
    const pathname = usePathname();
    // State to manage header visibility
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmenuOpen, setIsOpenSubmenu] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const handleMobileNavClick = () => {
        const body = document.body;
        const overlay = document.querySelector('.overlay')
        body.classList.toggle('no-scroll');
        overlay.classList.toggle('active');
        setIsOpen(prev => !prev);
    };

    // Submenu
    const handleSubMenu = () => {
        setIsOpenSubmenu(prev => !prev);

    };

    // Hide on scroll down, show on scroll up
    const lastScrollY = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header id="Header" className={`${styles.header} ${showHeader ? styles.visible : styles.hidden}`}>
                <div className={styles.burger_container} onClick={handleMobileNavClick}>
                    {/* {
                        (pathname === "/galeria" || pathname.startsWith("/rooms") ?
                            <svg className={styles.burger} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                            :
                            <svg className={styles.burger} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                        )
                    } */}
                    <svg aria-label="Abrir Menú movil" className={styles.burger} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>

                    <small className={styles.burger_small}>{t('menu')}</small>
                </div>
                <div className={styles.content_header}>
                    <Link className={styles.containerLogo} href="/">
                        <img
                            className={styles.logo}
                            src="https://ayresdecalafate.com/images/ayresnegro2.webp"
                            alt="logo del hotel ayres de calafate"
                            loading="eager"
                        />
                    </Link>
                    <nav className={styles.desktop_nav}>
                        <div className={styles.divider}>
                            <div className={styles.opensubmenu}>
                                <Link className={styles.list_item} prefetch={true} href="/rooms">{t('rooms')}</Link>
                                <svg onClick={handleSubMenu} className={`${styles.openBox} ${isSubmenuOpen ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                            <ul className={`${styles.submenu} ${isSubmenuOpen ? 'active' : ''}`}>
                                <li><Link prefetch={true} href="/rooms/doble-estandar">{t('room_doble_standard')}</Link></li>
                                <li><Link prefetch={true} href="/rooms/triple-estandar">{t('room_triple_standard')}</Link></li>
                                <li><Link prefetch={true} href="/rooms/suite">{t('suite')}</Link></li>
                                <li><Link prefetch={true} href="/rooms/doble-superior">{t('room_doble_superior')}</Link></li>
                                <li><Link prefetch={true} href="/rooms/triple-superior">{t('room_triple_superior')}</Link></li>
                            </ul>
                        </div>
                        <Link className={styles.list_item} prefetch={true} href="/gallery">{t('gallery')}</Link>
                        <Link className={styles.list_item} prefetch={true} href="/restaurant">{t('dining')}</Link>
                        <Link className={styles.list_item} prefetch={true} href="/spa">{t('our_spa')}</Link>
                        <a className={styles.list_item} href="#faq2">{t('faq')}</a>
                        <Link prefetch={true} className={styles.list_item} href="/contact">{t('contact')}</Link>
                        <LanguageSwitcher />
                    </nav>
                </div>
                <nav className={`${styles.nav} ${isOpen ? 'active' : ''}`}>
                    <svg
                        onClick={handleMobileNavClick}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={styles.close}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <img className={styles.logo} src="https://ayresdecalafate.com/images/ayresnegro2.webp" alt="logo del hotel ayres de calafate" loading="lazy" />
                    <section className={styles.container}>
                        <h3 className={styles.nav_title}>{t('menu')}</h3>
                        <ul className={styles.nav_list}>
                            <li><Link className={styles.list_item} onClick={handleMobileNavClick} href="/">{t('home')}</Link></li>
                            <li><Link className={styles.list_item} prefetch={true} href="/gallery" onClick={handleMobileNavClick}>{t('gallery')}</Link></li>
                            <li><Link className={styles.list_item} prefetch={true} href="/restaurant" onClick={handleMobileNavClick}>{t('dining')}</Link></li>
                            <li><Link className={styles.list_item} prefetch={true} href="/spa" onClick={handleMobileNavClick}>{t('our_spa')}</Link></li>
                            <li>
                                <div className={styles.divider}>
                                    <div className={styles.opensubmenu}>
                                        <Link className={styles.list_item} prefetch={true} onClick={handleMobileNavClick} href="/rooms">{t('rooms')}</Link>
                                        <svg onClick={handleSubMenu} className={`${styles.openBox} ${isSubmenuOpen ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <ul className={`${styles.submenu} ${isSubmenuOpen ? 'active' : ''}`}>
                                        <li><Link prefetch={true} onClick={handleMobileNavClick} href="/rooms/doble-estandar">{t('room_doble_standard')}</Link></li>
                                        <li><Link prefetch={true} onClick={handleMobileNavClick} href="/rooms/triple-estandar">{t('room_triple_standard')}</Link></li>
                                        <li><Link prefetch={true} onClick={handleMobileNavClick} href="/rooms/suite">{t('suite')}</Link></li>
                                        <li><Link prefetch={true} onClick={handleMobileNavClick} href="/rooms/doble-superior">{t('room_doble_superior')}</Link></li>
                                        <li><Link prefetch={true} onClick={handleMobileNavClick} href="/rooms/triple-superior">{t('room_triple_superior')}</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a onClick={handleMobileNavClick} className={styles.list_item} href="#faq2">{t('faq')}</a></li>
                            <li><Link prefetch={true} onClick={handleMobileNavClick} className={styles.list_item} href="/contact">{t('contact')}</Link></li>
                            <li>
                                <div className={styles.socials_container}>
                                    <a aria-label="visitar instagram del hotel ayres de calafate" className={styles.social_item} href="https://www.instagram.com/ayresdecalafate/">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
                                    </a>
                                    <a aria-label="abrir chat de whatsapp" className={styles.social_item} href="https://wa.me/5492966568253">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#000000"></path> </g></svg>
                                    </a>
                                </div>
                            </li>
                        </ul>

                    </section>
                </nav>
                <div className={styles.switcher_mobile}>
                    <LanguageSwitcher />
                </div>
            </header>
            <div className={styles.container_booking}>
                <Booking />
            </div>
        </>
    )
}

export default Header
"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import './HomeCarousel.css'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from "../EmbaCarousel/EmblaCarouselArrowButtons"
import { useTranslations } from 'next-intl'

const experienceFont = Montserrat({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
})

function HomeCarousel() {
    const t = useTranslations()

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel()

    const onSelect = useCallback(() => {
        if (!emblaMainApi) return

        setPrevBtnDisabled(!emblaMainApi.canScrollPrev())
        setNextBtnDisabled(!emblaMainApi.canScrollNext())
    }, [emblaMainApi])

    useEffect(() => {
        if (!emblaMainApi) return

        onSelect()
        emblaMainApi
            .on('select', onSelect)
            .on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    const onPrevButtonClick = useCallback(() => {
        emblaMainApi?.scrollPrev()
    }, [emblaMainApi])

    const onNextButtonClick = useCallback(() => {
        emblaMainApi?.scrollNext()
    }, [emblaMainApi])

    const pillItems = [
        { key: 'experience_promo_item_night', icon: 'moon' },
        { key: 'experience_promo_item_breakfast', icon: 'coffee' },
        { key: 'experience_promo_item_dinner', icon: 'meal' },
        { key: 'experience_promo_item_people', icon: 'people' },
    ]

    return (
        <div className="embla" id="embla_homep_carousel">
            <div
                className="embla__viewport"
                id="embla_viewport_homep"
                ref={emblaMainRef}
            >
                <div
                    className="embla__container"
                    id="embla__container_homep_detail"
                >
                    <div className="embla__slide" id="embla__slide_homep_detail">
                        <div className="embla__slide__number" id="embla__slide__number_homep_detail">
                            <section className={`experience_promo ${experienceFont.className}`}>
                                <div className="experience_promo__hero">
                                    <Image
                                        src="/images/promo/hero.webp"
                                        alt={t('experience_promo_hero_alt')}
                                        fill
                                        className="experience_promo__heroImg"
                                        sizes="(max-width: 768px) 100vw, 48rem"
                                        priority
                                    />
                                    <div className="experience_promo__heroScrim" aria-hidden />

                                    <div className="experience_promo__heroContent">
                                        <div className="experience_promo__logoRow">
                                            <Image
                                                src="/images/promo/logo.webp"
                                                alt=""
                                                width={200}
                                                height={56}
                                                className="experience_promo__logo"
                                                priority
                                            />
                                        </div>

                                        <div className="experience_promo__body">
                                            <div className="experience_promo__left">
                                                <h2 className="experience_promo__title">
                                                    {t('experience_promo_title')}
                                                </h2>
                                                <ul className="experience_promo__pills">
                                                    {pillItems.map(({ key, icon }) => (
                                                        <li key={key} className="experience_promo__pill">
                                                            <span className="experience_promo__pillIcon" aria-hidden>
                                                                {icon === 'moon' && (
                                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                                                )}
                                                                {icon === 'coffee' && (
                                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
                                                                )}
                                                                {icon === 'meal' && (
                                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                                                                )}
                                                                {icon === 'people' && (
                                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                                                )}
                                                            </span>
                                                            <span>{t(key)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="experience_promo__right">
                                                <div className="experience_promo__badge" aria-label={t('experience_promo_price_subtext')}>
                                                    <span className="experience_promo__price">{t('experience_promo_price')}</span>
                                                    <span className="experience_promo__priceSub">{t('experience_promo_price_subtext')}</span>
                                                </div>
                                                <div className="experience_promo__dots" aria-hidden />
                                            </div>
                                        </div>

                                        <div className="experience_promo__ctaBlock">
                                            <a
                                                className="experience_promo__cta"
                                                href="mailto:comercial@ayresdecalafate.com"
                                            >
                                                {t('experience_promo_cta')}
                                            </a>
                                            <div className="experience_promo__contactLines">
                                                <a href="mailto:comercial@ayresdecalafate.com">comercial@ayresdecalafate.com</a>
                                                <a href="tel:+5492966568253">+54 9 2966 56-8253</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <footer className="experience_promo__footer">
                                    <div className="experience_promo__circles">
                                        <div className="experience_promo__circle">
                                            <Image
                                                src="/images/promo/circle-pool.webp"
                                                alt=""
                                                fill
                                                className="experience_promo__circleImg"
                                                sizes="120px"
                                            />
                                        </div>
                                        <div className="experience_promo__circle">
                                            <Image
                                                src="/images/promo/circle-hotel.webp"
                                                alt=""
                                                fill
                                                className="experience_promo__circleImg"
                                                sizes="120px"
                                            />
                                        </div>
                                        <div className="experience_promo__circle">
                                            <Image
                                                src="/images/promo/circle-room.webp"
                                                alt=""
                                                fill
                                                className="experience_promo__circleImg"
                                                sizes="120px"
                                            />
                                        </div>
                                    </div>
                                    <p className="experience_promo__footerNote">{t('experience_promo_footer')}</p>
                                </footer>
                            </section>
                        </div>
                    </div>
                    <div className="embla__slide" id="embla__slide_homep_detail">
                        <div
                            className="embla__slide__number"
                            id="embla__slide__number_homep_detail"
                        >
                            <section className="ayresdorados_container">
                                <article className="dorados_desc">
                                    <h2>
                                        <span className="known">
                                            {t('dorados_h2_1')}
                                        </span>
                                        <br />
                                        Ayres Dorados | Lodge
                                    </h2>

                                    <p>
                                        {t('dorados_desc1')}<br />
                                        {t('dorados_desc2')}<br />
                                        {t('dorados_desc3')}
                                    </p>

                                    <ul className="amenities_dorados">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                                                <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                                                <path d="M12 4v6" />
                                                <path d="M2 18h20" />
                                            </svg>
                                            <span>20 {t('rooms')}</span>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11.5" cy="12.5" r="3.5" />
                                                <path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
                                            </svg>
                                            <span>{t('breakfast')}</span>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
                                                <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
                                                <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25" />
                                                <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4" />
                                            </svg>
                                            <span>{t('dorados_amenity_1')}</span>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h.01" />
                                                <path d="M2 8.82a15 15 0 0 1 20 0" />
                                                <path d="M5 12.859a10 10 0 0 1 14 0" />
                                                <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                                            </svg>
                                            <span>{t('wifi')}</span>
                                        </li>
                                    </ul>

                                    <a href="https://ayresdorados.com/">
                                        {t('known_dorados')}
                                    </a>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embla__controls" id="embla__controls_homep_detail">
                <div className="embla__buttons" id="embla__buttons_homep_detail">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeCarousel

"use client"
import React, { useState, useEffect, useCallback } from 'react'
import './HomeCarousel.css'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from "../EmbaCarousel/EmblaCarouselArrowButtons"
import { useTranslations } from 'next-intl'

function HomeCarousel() {
    const t = useTranslations()

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const [emblaMainRef, emblaMainApi] = useEmblaCarousel()

    const onSelect = useCallback(() => {
        if (!emblaMainApi) return

        const selected = emblaMainApi.selectedScrollSnap()
        setSelectedIndex(selected)

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

    return (
        <div className="embla" id="embla_room_carousel">
            <div
                className="embla__viewport"
                id="embla_viewport_room"
                ref={emblaMainRef}
            >
                <div
                    className="embla__container"
                    id="embla__container_room_detail"
                >
                    <div className="embla__slide" id="embla__slide_room_detail">
                        <div className="embla__slide__number" id="embla__slide__number_room_detail">
                            <section className='promo_container'>
                                <article className='promo_infoBox promo'>
                                    <h2>
                                        PROMO
                                        <span>3x2</span>
                                    </h2>
                                    <span>Hasta Julio de 2026</span>
                                    <small>Hasta agotar stock*</small>
                                </article>
                                <article className='promo_infoReserve promo'>
                                    <a href="https://wa.me/5492966568253?text=Hola%2C%20%C2%BFqu%C3%A9%20tal%3F%20Me%20interesa%20la%20promoci%C3%B3n%203x2%20y%20quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20Muchas%20gracias.">
                                        RESERVA AHORA</a>
                                    <span>+54 9 2966 56-8253</span>
                                    <span>reservas@ayresdecalafate.com</span>
                                </article>
                            </section>
                        </div>
                    </div>
                    <div className="embla__slide" id="embla__slide_room_detail">
                        <div
                            className="embla__slide__number"
                            id="embla__slide__number_room_detail"
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

            <div className="embla__controls" id="embla__controls_room_detail">
                <div className="embla__buttons" id="embla__buttons_room_detail">
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

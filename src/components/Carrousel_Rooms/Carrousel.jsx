"use client"

import React from 'react'
import Image from 'next/image'
import Styles from './Carrousel.module.css'
import "./embla.css"
import RoomsData from "../../data/Rooms.json"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useMediaQuery } from 'react-responsive';

import { DotButton, useDotButton } from "../EmbaCarousel/EmblaCarouselDotButton"
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "../EmbaCarousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"

function Carrousel() {
    const t = useTranslations();
    const locale = useLocale();
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    // Embla
    const OPTIONS = {
        slidesToScroll: isDesktop ? 2 : 1,
        containScroll: "trimSnaps"
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <section className={Styles.carrouselContainer}>
                <div className={Styles.lineDivider}></div>
                <h3>{t('our_rooms')}</h3>
                <h4>{t('roomsCarousel_subtitle')}</h4>
                <section className="embla" id='embla_home_rooms'>
                    <div className="embla__viewport" id='embla_home_viewport' ref={emblaRef}>
                        <div className="embla__container" id='embla__container_home'>
                            {/* --- SLIDE 1 --- */}
                            {RoomsData.map(room => (
                                <div key={room.id} className="embla__slide" id='embla__slide_home'>
                                    <div >
                                        <div className="embla__slide__number" id='embla__slide__number_home'>
                                            <article className={Styles.textContainer}>
                                                <div className={Styles.imgContainer}>
                                                    <Image
                                                        className={Styles.imgRoom}
                                                        src={room.thumbnailImage}
                                                        alt=""
                                                        fill
                                                        loading="eager"
                                                    />
                                                    <article className={Styles.imgText}>
                                                        <div className={Styles.TitlePrice}>
                                                            <h3>{room.nombre[locale]}</h3>
                                                            <span>{room.price} {t('night')}</span>
                                                        </div>
                                                        <ul className={Styles.amenitiesList}>
                                                            {Object.entries(room.ventajas[locale]).slice(0, 6).map(([key, text]) => (
                                                                <li key={key}>{text}</li>
                                                            ))}
                                                        </ul>
                                                        <ul className={Styles.buttonsList}>
                                                            <Link href={`/rooms/${room.id}`} className={Styles.DetailsButton}>{t('details')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></Link>
                                                            <Link href={`https://www.todoalojamiento.com/portal/${locale}?idHotel=3032&forzarLimpiar=true&idHabitacion=${room.id_ta}`} className={Styles.BookNow} target='_blank'>{t('reserve')} {t('now')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></Link>
                                                        </ul>
                                                    </article>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="embla__controls" id='embla__controls_home'>
                        <div className="embla__buttons" id='embla__buttons_home'>
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div>

                        <div className="embla__dots" id='embla__dots'>
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={"embla__dot".concat(
                                        index === selectedIndex ? " embla__dot--selected" : ""
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Carrousel
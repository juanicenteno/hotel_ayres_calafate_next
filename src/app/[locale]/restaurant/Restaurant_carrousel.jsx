'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import "./embla_restaurant.css"
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const imgCarrusel = [
    "https://ayresdecalafate.com/images/webp_new/44.webp",
    "https://ayresdecalafate.com/images/webp_new/56.webp",
    "https://ayresdecalafate.com/images/webp_new/63.webp",
    "https://ayresdecalafate.com/images/webp_new/58.webp",
    "https://ayresdecalafate.com/images/webp_new/82.webp"
]


const OPTIONS = {
    loop: "true",
    containScroll: "trimSnaps"
}

function Restaurant_carrousel() {
    const autoplay = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false }) // 3 segundos por slide
    )
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [autoplay.current])

    // Iniciar autoplay automáticamente
    useEffect(() => {
        if (!emblaApi) return
        const autoplayPlugin = emblaApi.plugins().autoplay
        if (autoplayPlugin) autoplayPlugin.play()
    }, [emblaApi])

    return (
        <>
            <section className="carruselContainer">
                <div className="embla" id='embla_dining_carousel'>
                    {/* Slider principal */}
                    <div className="embla__viewport" id='embla_viewport_dining' ref={emblaRef}>
                        <div className="embla__container" id='embla__container_dining_detail'>
                            {imgCarrusel.map((i, index) => (
                                <div key={index} id='embla__slide_dining_detail' className="embla__slide">
                                    <div className="embla__slide__number" id='embla__slide__number_dining_detail'>
                                        <Image
                                            fill
                                            alt="slide"
                                            src={i}
                                            loading="lazy"
                                            className="embla__slide__img"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Restaurant_carrousel
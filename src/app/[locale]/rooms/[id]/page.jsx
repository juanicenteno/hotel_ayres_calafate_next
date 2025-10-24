"use client"
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from '../../../../components/EmbaCarousel/EmblaCarouselThumbsButton'
// import "../../../components/EmbaCarousel/embla.css"
import rooms from "../../../../data/Rooms.json"
import "./page.css"
import Image from 'next/image'

import { PrevButton, NextButton } from "../../../../components/EmbaCarousel/EmblaCarouselArrowButtons"
import { useTranslations } from 'next-intl';

export default function RoomDetail({ params }) {
    const t = useTranslations();

    // Buscar la habitación por id
    const paramsData = React.use(params); // <-- esto "desempaqueta" el promise

    const locale = paramsData.locale;
    const room = rooms.find(r => r.id === paramsData.id);

    if (!room) return <p>Habitación no encontrada</p>

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
    })

    // Click en miniaturas
    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    // Actualizar slide seleccionado y thumbs
    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return

        const selected = emblaMainApi.selectedScrollSnap()
        setSelectedIndex(selected)
        emblaThumbsApi.scrollTo(selected)

        setPrevBtnDisabled(!emblaMainApi.canScrollPrev())
        setNextBtnDisabled(!emblaMainApi.canScrollNext())
    }, [emblaMainApi, emblaThumbsApi])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    // Botones de navegación
    const onPrevButtonClick = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollPrev()
    }, [emblaMainApi])

    const onNextButtonClick = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollNext()
    }, [emblaMainApi])


    const icons = {
        ac:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-80v-166L310-118l-56-56 186-186v-80h-80L174-254l-56-56 128-130H80v-80h166L118-650l56-56 186 186h80v-80L254-786l56-56 130 128v-166h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H714l128 130-56 56-186-186h-80v80l186 186-56 56-130-128v166h-80Z" /></svg>,
        safe:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-240q69-17 114.5-79.5T640-458v-102l-160-80-160 80v102q0 76 45.5 138.5T480-240ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z" /></svg>,
        bathroom:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-640q-33 0-56.5-23.5T200-720q0-33 23.5-56.5T280-800q33 0 56.5 23.5T360-720q0 33-23.5 56.5T280-640ZM160-80q-33 0-56.5-23.5T80-160v-320h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q7 8 15 15t17 13h434v320q0 33-23.5 56.5T800-80H160Zm560-480 4-24q5-25-3.5-48.5T694-674q-29-29-43-67.5t-9-80.5l2-18h76l-4 24q-4 24 3.5 47.5T744-728q30 30 44.5 69t9.5 81l-2 18h-76Zm-160 0 4-24q5-25-3.5-48.5T534-674q-29-29-43-67.5t-9-80.5l2-18h76l-4 24q-5 24 3 47.5t25 40.5q30 30 44.5 69t9.5 81l-2 18h-76Zm120 400h80v-240h-80v240Zm-160 0h80v-240h-80v240Zm-160 0h80v-240h-80v240Zm-160 0h80v-240h-80v240Z" /></svg>,
        tv:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" /></svg>,
        capacity:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" /></svg>,
        minibar:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-640v-120h80v120h-80Zm0 360v-200h80v200h-80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-360H240v360Zm0-440h480v-200H240v200Z" /></svg>,
        housekeeping:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-80v-240h-64q-40 0-68-28t-28-68q0-29 16-53.5t42-36.5l262-116v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85h-80q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720t28.5 11.5Q520-697 520-680v58l262 116q26 12 42 36.5t16 53.5q0 40-28 68t-68 28h-64v240H280Zm-64-320h64v-40h400v40h64q7 0 11.5-5t4.5-13q0-5-2.5-8.5T750-432L480-552 210-432q-5 2-7.5 5.5T200-418q0 8 4.5 13t11.5 5Zm144 240h240v-200H360v200Zm0-200h240-240Z" /></svg>,
        wifi:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z" /></svg>,
        lock:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-40q-117 0-198.5-81.5T200-320v-320q0-117 81.5-198.5T480-920q117 0 198.5 81.5T760-640v320q0 117-81.5 198.5T480-40Zm0-80q83 0 141.5-58.5T680-320v-320q0-83-58.5-141.5T480-840q-83 0-141.5 58.5T280-640v320q0 83 58.5 141.5T480-120Zm0-520q25 0 42.5-17.5T540-700q0-25-17.5-42.5T480-760q-25 0-42.5 17.5T420-700q0 25 17.5 42.5T480-640ZM360-480q17 0 28.5-11.5T400-520q0-17-11.5-28.5T360-560q-17 0-28.5 11.5T320-520q0 17 11.5 28.5T360-480Zm120 0q17 0 28.5-11.5T520-520q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520q0 17 11.5 28.5T480-480Zm120 0q17 0 28.5-11.5T640-520q0-17-11.5-28.5T600-560q-17 0-28.5 11.5T560-520q0 17 11.5 28.5T600-480ZM360-360q17 0 28.5-11.5T400-400q0-17-11.5-28.5T360-440q-17 0-28.5 11.5T320-400q0 17 11.5 28.5T360-360Zm240 0q17 0 28.5-11.5T640-400q0-17-11.5-28.5T600-440q-17 0-28.5 11.5T560-400q0 17 11.5 28.5T600-360Zm-120 0q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360ZM360-240q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240Zm240 0q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240Zm-120 0q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-240Z" /></svg>,
        dryer:
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M200,88a32,32,0,1,0-32,32A32,32,0,0,0,200,88Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,168,104Zm9.42,102.62L209,137.07A64,64,0,0,0,168,24a8.4,8.4,0,0,0-1.32.11L29.37,47A16,16,0,0,0,16,62.78v50.44A16,16,0,0,0,29.37,129L128,145.44V200a16,16,0,0,0,16,16,40,40,0,0,0,40,40h16a8,8,0,0,0,0-16H184a24,24,0,0,1-24-24h2.85A16,16,0,0,0,177.42,206.62ZM32,62.78,168.64,40a48,48,0,0,1,0,96L32,113.23Zm134.68,89.11A8.4,8.4,0,0,0,168,152a63.9,63.9,0,0,0,17.82-2.54l-23,50.54H144V148.11Z"></path></svg>,
        breakfast:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M234-160h172q14 0 25-8t14-22l13-50H182l13 50q3 14 14 22t25 8Zm-74-280H80v-120h80v120Zm215-89-85-85 56-56 85 85-56 56ZM120-640H80v-80h40q50 0 85-35t35-85v-40h80v40q0 83-58.5 141.5T120-640Zm400-160H400v-80h120v80ZM40-80v-80h80q-1-3-1.5-5.5T117-171L80-320h480l-37 149q-1 3-1.5 5.5T520-160h246l27-320H567l7 80h-81l-13-160h400l-33 400h73v80H40Zm40-800Zm600 720Zm-360 0Z" /></svg>,
        pool:
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M88,149.39a8,8,0,0,0,8-8V128h64v15.29a8,8,0,0,0,16,0V32a8,8,0,0,0-16,0V48H96V32a8,8,0,0,0-16,0V141.39A8,8,0,0,0,88,149.39ZM96,112V96h64v16Zm64-48V80H96V64ZM24,168a8,8,0,0,1,8-8c14.42,0,22.19,5.18,28.44,9.34C66,173.06,70.42,176,80,176s14-2.94,19.56-6.66c6.24-4.16,14-9.34,28.43-9.34s22.2,5.18,28.44,9.34c5.58,3.72,10,6.66,19.57,6.66s14-2.94,19.56-6.66c6.25-4.16,14-9.34,28.44-9.34a8,8,0,0,1,0,16c-9.58,0-14,2.94-19.56,6.66-6.25,4.16-14,9.34-28.44,9.34s-22.2-5.18-28.44-9.34C142,178.94,137.57,176,128,176s-14,2.94-19.56,6.66c-6.24,4.16-14,9.34-28.43,9.34s-22.19-5.18-28.44-9.34C46,178.94,41.58,176,32,176A8,8,0,0,1,24,168Zm208,40a8,8,0,0,1-8,8c-9.58,0-14,2.94-19.56,6.66-6.25,4.16-14,9.34-28.44,9.34s-22.2-5.18-28.44-9.34C142,218.94,137.57,216,128,216s-14,2.94-19.56,6.66c-6.24,4.16-14,9.34-28.43,9.34s-22.19-5.18-28.44-9.34C46,218.94,41.58,216,32,216a8,8,0,0,1,0-16c14.42,0,22.19,5.18,28.44,9.34C66,213.06,70.42,216,80,216s14-2.94,19.56-6.66c6.24-4.16,14-9.34,28.43-9.34s22.2,5.18,28.44,9.34c5.58,3.72,10,6.66,19.57,6.66s14-2.94,19.56-6.66c6.25-4.16,14-9.34,28.44-9.34A8,8,0,0,1,232,208Z"></path></svg>,
        parking:
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm8-136H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24a36,36,0,0,0,0-72Zm0,56H112V96h24a20,20,0,0,1,0,40Z"></path></svg>

    };

    return (
        <>
            <main className='main_room_detail'>

                <h1>{room.nombre[locale]}</h1>
                <div className="container_room_detail">
                    <div className="embla" id='embla_room_carousel'>
                        <p className='price_customers'>
                            {t('from')}
                            <span> {room.precio}</span>
                            /{t('night')}
                        </p>
                        <p className='quantity_customers'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            {room.cantidadPersonas}
                        </p>

                        {/* Slider principal */}
                        <div className="embla__viewport" id='embla_viewport_room' ref={emblaMainRef}>
                            <div className="embla__container" id='embla__container_room_detail'>
                                {room.images.map((src, index) => (
                                    <div id='embla__slide_room_detail' className="embla__slide" key={index}>
                                        <div className="embla__slide__number" id='embla__slide__number_room_detail'>
                                            <Image
                                                fill
                                                alt={`Slide ${index + 1}`}
                                                src={src}
                                                loading="lazy"
                                                className="embla__slide__img"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="embla-thumbs">
                            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                                <div className="embla-thumbs__container">
                                    {room.images.map((src, index) => (
                                        <Thumb
                                            key={index}
                                            onClick={() => onThumbClick(index)}
                                            selected={index === selectedIndex}
                                            src={src}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Botones prev/next */}
                        <div className="embla__controls" id='embla__controls_room_detail'>
                            <div className="embla__buttons" id='embla__buttons_room_detail'>
                                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                            </div>
                        </div>
                    </div>

                    <section className='description_room'>
                        <p>{room.descripcion[locale]}</p>
                        <ul>
                            {Object.entries(room.ventajas[locale]).map(([key, text]) => (
                                <li key={key}>
                                    {icons[key]} {text}
                                </li>
                            ))}
                        </ul>
                        <a aria-label='reservar habitación' href={`https://www.todoalojamiento.com/portal/${locale}?idHotel=3032&forzarLimpiar=true&idHabitacion=${room.id_ta}`} target='_blank' className='reserve_btn'>{t('reserve')} {t('now')}</a>
                    </section>
                </div>
            </main>
        </>
    )
}

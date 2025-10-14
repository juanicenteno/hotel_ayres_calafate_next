"use client";

import React, { useRef, useState } from 'react';
import styles from "./contact.module.css"
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslations } from 'next-intl';


const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

function Contact() {
    const t = useTranslations();
    console.log("Contact renderizado");
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Activamos el estado de carga

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
        )
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                form.current.reset();
                setIsLoading(false);
                setTimeout(() => setMessageSent(false), 3000);
                toast.success("Se ha enviado el mensaje correctamente", {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                })
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                toast.error("Ha ocurrido un error", {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                })
            });
    };

    return (
        <>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <article className={styles.contactForm_inputs}>
                    <div className={styles.contactForm_input_container}>
                        <span>{t('name')}
                            <small>*</small>
                        </span>
                        <input type="text" name="user_name" placeholder='Jhon Perez' required />
                    </div>
                    <div className={styles.contactForm_input_container}>
                        <span>Email
                            <small>*</small>
                        </span>
                        <input type="email" name="user_email" placeholder='ayresdecalafate@gmail.com' required />
                    </div>
                    <div className={styles.contactForm_input_container}>
                        <span>{t('phone')}
                            <small>*</small>
                        </span>
                        <input type="tel" name="user_phone" placeholder='+549123654489' required />
                    </div>
                    <div className={styles.contactForm_input_container}>
                        <span>{t('message')}
                            <small>*</small>
                        </span>
                        <textarea name="message" placeholder='Esribe tu mensaje aquí...' required></textarea>
                    </div>
                    <div className={styles.contactForm_input_container}>
                        <span>{t('date_in')}</span>
                        <input name="user_checkin" type="date" />
                    </div>
                    <div className={styles.contactForm_input_container}>
                        <span>{t('date_out')}</span>
                        <input name="user_checkout" type="date" />
                    </div>
                </article>
                {!isLoading ? (
                    <div className={styles.contactForm_input_container_submit}>
                        <input type="submit" value={t('send')} style={{ cursor: "pointer" }} />
                    </div>
                ) : (
                    <div className={styles.spinner}>
                        <svg className={styles.throbber} viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#63271c33" />   {/* tono más transparente */}
                                    <stop offset="40%" stopColor="#63271ccc" />  {/* tono medio */}
                                    <stop offset="100%" stopColor="#63271c" />   {/* tono sólido */}
                                </linearGradient>
                            </defs>
                            <circle
                                className={styles.arc}
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="url(#grad1)"
                                fill="none"
                            />
                        </svg>

                    </div>
                )}
            </form>
            {/* {messageSent && (
                <CustomToast
                    id="contactform-id"
                    title="Formulario enviado."
                    description="Nos contactaremos contigo lo antes posible."
                    status="success"
                    duration={5000}
                    position="top-right"
                />
            )} */}
            <Toaster
                position="bottom-center"
            />
        </>
    )
}

export default Contact
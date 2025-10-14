"use client"
import { useState } from "react";
import styles from "./faq.module.css";
import { useTranslations } from 'next-intl';

export default function FAQ() {
    const t = useTranslations();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "¿What is the check-in and check-out time?",
            answer: "Check-in is from 3:00 PM to 11:00 PM, and check-out is until 12:00 PM.",
        },
        {
            question: "¿Is breakfast included in the room rate?",
            answer: "Yes, breakfast is included in the price of the room.",
        },
        {
            question: "¿Is breakfast included in the room rate?",
            answer: "Yes, breakfast is included in the price of the room.",
        },
        {
            question: "¿Is breakfast included in the room rate?",
            answer: "Yes, breakfast is included in the price of the room.",
        },
    ];

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <h3 id="faq2" className={styles.FaqTitle}>{t('faq')}</h3>
            <ul className={styles.faq}>
                {faqs.map((item, index) => (
                    <li key={index}>
                        <div
                            className={styles.question}
                            onClick={() => toggleQuestion(index)}
                        >
                            {item.question}
                            {activeIndex === index ?
                                <svg style={{transform: "rotate(90deg)"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-color-b)"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-color-b)"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                            }
                        </div>
                        {activeIndex === index && (
                            <div className={styles.answer}>{item.answer}</div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
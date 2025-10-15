"use client"
import { useState } from "react";
import styles from "./faq.module.css";
import { useTranslations } from 'next-intl';

export default function FAQ() {
    const t = useTranslations();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: t('question1'),
            answer: t('answ1'),
        },
        {
            question: t('question2'),
            answer: t('answ2'),
        },
        {
            question: t('question3'),
            answer: t('answ3'),
        },
        {
            question: t('question4'),
            answer: t('answ4'),
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
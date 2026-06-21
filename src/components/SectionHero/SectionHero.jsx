import Image from "next/image";
import styles from "./SectionHero.module.css";

export default function SectionHero({
  imageSrc,
  imageAlt = "",
  label,
  title,
  subtitle,
  lineDivider = false,
  cta,
  className = "",
  labelClassName = "",
  titleClassName = "",
  priority = true,
}) {
  return (
    <section className={`${styles.hero} ${className}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        style={{ objectFit: "cover" }}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 90vw"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        {lineDivider && <div className={styles.lineDivider} />}
        {label && <small className={`${styles.label} ${labelClassName}`}>{label}</small>}
        {title && <h1 className={`${styles.title} ${titleClassName}`}>{title}</h1>}
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
        {cta && (
          <a
            className={styles.cta}
            href={cta.href}
            target={cta.target || "_blank"}
            aria-label={cta.ariaLabel}
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  );
}

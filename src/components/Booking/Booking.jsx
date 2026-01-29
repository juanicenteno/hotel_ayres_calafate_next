"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Booking.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

function Booking() {
  const locale = useLocale();
  const t = useTranslations();
  const hoy = new Date();
  const formatFecha = (d) => d.toISOString().split('T')[0];
  const fechaFormateada = formatFecha(hoy);
  const maxDateObj = new Date(hoy); // ahora dinámico
  maxDateObj.setFullYear(hoy.getFullYear() + 2);
  const fechaMax = formatFecha(maxDateObj);

  const [date1, setDate1] = useState(fechaFormateada);
  const [date2, setDate2] = useState("");
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showGuestsMenu, setShowGuestsMenu] = useState(false);

  // animación al abrir/cerrar buscador mobile
  useEffect(() => {
    let timer;
    if (searchOpen) {
      timer = setTimeout(() => setShowContent(true), 200);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timer);
  }, [searchOpen]);

  const notifyError = (msg) =>
  toast.error(msg, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });


  const generarEnlaceReserva = () => {
    if (!date1 || !date2) return notifyError("Debes completar fecha de entrada y salida.");
    if (adultsCount === 0) return notifyError("Debes seleccionar al menos 1 adulto.");

    const params = new URLSearchParams({
      idHotel: 3032,
      forzarLimpiar: true,
      fechaDesde: date1,
      fechaHasta: date2,
      adultos: adultsCount,
      ninios: childrenCount,
    });

    const url = `https://www.todoalojamiento.com/portal/${locale}?${params.toString()}`;
    window.open(url, "_blank");
  };

  // ---- Componentes pequeños reutilizables ----
  const DatePicker = ({ label, value, onChange, min, max }) => (
    <article className={styles.datePicker}>
      <span>{label}</span>
      <input
        label="check-in & check-out"
        type="date"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => e.target.showPicker()}
      />
    </article>
  );

  const GuestsSelector = ({ label, count, setCount }) => (
    <div className={styles.AdultsMenu}>
      <span>{label}</span>
      <div className={styles.AddDelete}>
        <svg
          onClick={() => setCount((prev) => Math.max(0, prev - 1))}
          viewBox="0 0 24 24"
          fill="none"
          aria-label={`Restar ${label}`}
        >
          <path d="M6 12L18 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <small>{count}</small>
        <svg
          onClick={() => setCount((prev) => prev + 1)}
          viewBox="0 0 24 24"
          fill="none"
          aria-label={`Sumar ${label}`}
        >
          <path
            d="M6 12H18M12 6V18"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );

  const guestsMenuRef = useRef(null);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestsMenuRef.current && !guestsMenuRef.current.contains(event.target)) {
        setShowGuestsMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  // ---- Render principal ----
  return (
    <>
      <Toaster position="bottom-center" />

      {/* --- Booking Mobile --- */}
      <div className={`${styles.disponibilidad} ${searchOpen ? "active" : ""}`}>
        <span className={styles.span} onClick={() => setSearchOpen(!searchOpen)}>
          {t('search')} {t('disponibility')}
          <svg
            className={`${styles.openBox} ${searchOpen ? "active" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="rgb(255 204 153)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {showContent && (
          <>
            <section className={styles.calendars}>
              <DatePicker
                label={t('check_in')}
                value={date1}
                onChange={setDate1}
                min={fechaFormateada}
                max={fechaMax}
              />
              <DatePicker
                label={t('check_out')}
                value={date2}
                onChange={setDate2}
                min={date1}
                max={fechaMax}
              />
            </section>

            <section className={styles.guests}>
              <GuestsSelector label={t('adults')} count={adultsCount} setCount={setAdultsCount} />
              <GuestsSelector label={t('children')} count={childrenCount} setCount={setChildrenCount} />
            </section>

            <button className={styles.dateSaveButton} onClick={generarEnlaceReserva}>
              {t('search')}
            </button>
          </>
        )}
      </div>

      {/* --- Booking Desktop --- */}
      <section className={styles.bookingDesktop}>
        <section className={styles.calendars}>
          <DatePicker
            label="CHECK-IN"
            value={date1}
            onChange={setDate1}
            min={fechaFormateada}
            max={fechaMax}
          />
          <DatePicker
            label="CHECK-OUT"
            value={date2}
            onChange={setDate2}
            min={date1}
            max={fechaMax}
          />
        </section>

        <section className={styles.guestsDesktop}>
          <span className={styles.guestsDesktopSpan} onClick={() => setShowGuestsMenu(!showGuestsMenu)}>
            {adultsCount} {t('adults')}, {childrenCount} {t('children')}
            <svg
              className={`${styles.openBox} ${showGuestsMenu ? "active" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 7L15 12L10 17"
                stroke="rgb(255 204 153)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {showGuestsMenu && (
            <div ref={guestsMenuRef} className={styles.guestsMenu}>
              <GuestsSelector label={t('adults')} count={adultsCount} setCount={setAdultsCount} />
              <GuestsSelector label={t('children')} count={childrenCount} setCount={setChildrenCount} />
            </div>
          )}
        </section>

        <button onClick={generarEnlaceReserva}>{t('search')}</button>
      </section>
    </>
  );
}

export default Booking;

"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Booking.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { getBookingUrl } from "@/utils/booking";

// ---- Componente DatePicker ----
const DatePicker = ({ label, value, onChange, min, max }) => (
  <article className={styles.datePicker}>
    <span>{label}</span>
    <input
      aria-label={label}
      type="date"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={(e) => e.target.showPicker && e.target.showPicker()}
    />
  </article>
);

// ---- Componente GuestsSelector ----
const GuestsSelector = ({ label, count, setCount, min = 0 }) => (
  <div className={styles.AdultsMenu}>
    <span>{label}</span>
    <div className={styles.AddDelete}>
      <svg
        role="button"
        tabIndex={0}
        onClick={() => setCount((prev) => Math.max(min, prev - 1))}
        onKeyDown={(e) => e.key === "Enter" && setCount((prev) => Math.max(min, prev - 1))}
        viewBox="0 0 24 24"
        fill="none"
        aria-label={`Restar ${label}`}
      >
        <path d="M6 12L18 12" stroke="#BF9766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <small>{count}</small>
      <svg
        role="button"
        tabIndex={0}
        onClick={() => setCount((prev) => prev + 1)}
        onKeyDown={(e) => e.key === "Enter" && setCount((prev) => prev + 1)}
        viewBox="0 0 24 24"
        fill="none"
        aria-label={`Sumar ${label}`}
      >
        <path
          d="M6 12H18M12 6V18"
          stroke="#BF9766"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

// ---- Helper ----
const formatDate = (d) => d.toISOString().split("T")[0];

// ---- Componente principal ----
function Booking() {
  const locale = useLocale();
  const t = useTranslations();

  const hoy = new Date();
  const manana = new Date(hoy);
  manana.setDate(hoy.getDate() + 1);

  const maxDateObj = new Date(hoy);
  maxDateObj.setFullYear(hoy.getFullYear() + 2);

  const fechaHoy    = formatDate(hoy);
  const fechaManana = formatDate(manana);
  const fechaMax    = formatDate(maxDateObj);

  const [date1, setDate1]                 = useState(fechaHoy);
  const [date2, setDate2]                 = useState(fechaManana); // ✅ checkout con default mañana
  const [adultsCount, setAdultsCount]     = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const [searchOpen, setSearchOpen]       = useState(false);
  const [showContent, setShowContent]     = useState(false);
  const [showGuestsMenu, setShowGuestsMenu] = useState(false);

  // Animación drawer mobile
  useEffect(() => {
    let timer;
    if (searchOpen) {
      timer = setTimeout(() => setShowContent(true), 250);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timer);
  }, [searchOpen]);

  // Toast con paleta del hotel
  const notifyError = (msg) =>
    toast.error(msg, {
      style: {
        fontFamily: "inherit",
        background: "hsl(154, 26%, 20%)",
        border: "1px solid rgba(191,151,102,0.4)",
        color: "#f4ede0",
        fontSize: "0.85rem",
      },
      iconTheme: {
        primary: "#BF9766",
        secondary: "hsl(154, 26%, 20%)",
      },
    });

  // Generar URL y abrir Booking.com
  const generarEnlaceReserva = () => {
    if (!date1 || !date2) return notifyError(t("error_dates") ?? "Completá la fecha de entrada y salida.");
    if (adultsCount === 0) return notifyError(t("error_adults") ?? "Seleccioná al menos 1 adulto.");
    if (date2 <= date1) return notifyError(t("error_date_order") ?? "La salida debe ser posterior al ingreso.");

    const url = getBookingUrl({
      locale,
      checkin: date1,
      checkout: date2,
      adults: adultsCount,
      children: childrenCount,
    });
    window.open(url, "_blank");
  };

  // Click-outside con ref dual (trigger + menú)
  const guestsMenuRef    = useRef(null);
  const guestsTriggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        guestsMenuRef.current &&
        !guestsMenuRef.current.contains(event.target) &&
        guestsTriggerRef.current &&
        !guestsTriggerRef.current.contains(event.target)
      ) {
        setShowGuestsMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-corrección de fecha checkout al cambiar check-in
  const handleCheckinChange = (val) => {
    setDate1(val);
    if (date2 && val >= date2) {
      const next = new Date(val);
      next.setDate(next.getDate() + 1);
      setDate2(formatDate(next));
    }
  };

  // Min para checkout: siempre un día después del checkin
  const minCheckout = (() => {
    const d = new Date(date1);
    d.setDate(d.getDate() + 1);
    return formatDate(d);
  })();

  return (
    <>
      <Toaster position="bottom-center" />

      {/* ─── Booking Mobile (drawer fijo en bottom) ─── */}
      <div className={`${styles.disponibilidad} ${searchOpen ? "active" : ""}`}>
        <span className={styles.span} onClick={() => setSearchOpen(!searchOpen)}>
          {t("search")} {t("disponibility")}
          <svg
            className={`${styles.openBox} ${searchOpen ? "active" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="currentColor"
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
                label={t("check_in")}
                value={date1}
                onChange={handleCheckinChange}
                min={fechaHoy}
                max={fechaMax}
              />
              <DatePicker
                label={t("check_out")}
                value={date2}
                onChange={setDate2}
                min={minCheckout}
                max={fechaMax}
              />
            </section>

            <section className={styles.guests}>
              <GuestsSelector label={t("adults")} count={adultsCount} setCount={setAdultsCount} min={1} />
              <GuestsSelector label={t("children")} count={childrenCount} setCount={setChildrenCount} min={0} />
            </section>

            <button className={styles.dateSaveButton} onClick={generarEnlaceReserva}>
              {t("search")}
            </button>
          </>
        )}
      </div>

      {/* ─── Booking Desktop (barra fija en bottom) ─── */}
      <section className={styles.bookingDesktop}>
        <section className={styles.calendars}>
          <DatePicker
            label="CHECK-IN"
            value={date1}
            onChange={handleCheckinChange}
            min={fechaHoy}
            max={fechaMax}
          />
          <DatePicker
            label="CHECK-OUT"
            value={date2}
            onChange={setDate2}
            min={minCheckout}
            max={fechaMax}
          />
        </section>

        <section className={styles.guestsDesktop}>
          <span
            ref={guestsTriggerRef}
            className={styles.guestsDesktopSpan}
            onClick={() => setShowGuestsMenu((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={showGuestsMenu}
          >
            <span className={styles.guestText}>
              {adultsCount} {t("adults")}{childrenCount > 0 ? `, ${childrenCount} ${t("children")}` : ""}
            </span>
            <svg
              className={`${styles.openBox} ${showGuestsMenu ? "active" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 7L15 12L10 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {showGuestsMenu && (
            <div ref={guestsMenuRef} className={styles.guestsMenu}>
              <GuestsSelector label={t("adults")} count={adultsCount} setCount={setAdultsCount} min={1} />
              <GuestsSelector label={t("children")} count={childrenCount} setCount={setChildrenCount} min={0} />
            </div>
          )}
        </section>

        <button onClick={generarEnlaceReserva}>
          <span>{t("search")}</span>
        </button>
      </section>
    </>
  );
}

export default Booking;

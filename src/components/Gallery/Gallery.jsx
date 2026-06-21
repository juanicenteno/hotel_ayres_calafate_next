"use client";

import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Image from "next/image";
import { useTranslations } from "next-intl";

import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";

export default function Gallery() {
  const t = useTranslations();
  const totalImages = 87;

  // Generamos e identificamos la categoría de las imágenes
  const getCategory = (idx) => {
    const fileNum = idx + 1;
    if (fileNum >= 10 && fileNum <= 25) return "rooms";
    if (fileNum >= 41 && fileNum <= 46) return "dining";
    if (fileNum >= 58 && fileNum <= 65) return "spa";
    return "exterior";
  };

  const images = Array.from({ length: totalImages }, (_, i) => ({
    src: `/images/webp_new/${i + 1}.webp`,
    thumbnail: `/images/thumbnails_new/${i + 1}.png`,
    category: getCategory(i),
    width: 1920,
    height: 1080,
  }));

  const [activeCategory, setActiveCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Filtrado de imágenes
  const filteredImages = images.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  // Paginación
  const IMAGES_PER_PAGE = 18;
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

  // Reiniciar la paginación cada vez que cambie la categoría
  useEffect(() => {
    setVisibleCount(IMAGES_PER_PAGE);
  }, [activeCategory]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = filteredImages.length > visibleCount;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + IMAGES_PER_PAGE, filteredImages.length));
  };

  // Categorías con sus traducciones
  const categoriesList = [
    { key: "all", label: t("gallery_all") },
    { key: "rooms", label: t("rooms") },
    { key: "dining", label: t("dining") },
    { key: "spa", label: t("our_spa") },
    { key: "exterior", label: t("gallery_exterior") },
  ];

  return (
    <div className="gallery_section_container">
      {/* Barra de Filtros */}
      <nav className="filter_bar" aria-label="Categorías de la galería">
        {categoriesList.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`filter_button ${activeCategory === cat.key ? "active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Grid de Miniaturas */}
      <main className="gallery_grid_container">
        {visibleImages.map((img, i) => (
          <article
            key={img.src}
            className="gallery_card"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <div className="thumbImage_container">
              <Image
                src={img.thumbnail}
                alt={t("home_imgText")}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 480px) 150px, (max-width: 768px) 200px, 300px"
                loading="lazy"
              />
            </div>
            <div className="gallery_card_overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </article>
        ))}
      </main>

      {/* Botón Cargar Más */}
      {hasMore && (
        <div className="load_more_container">
          <button className="load_more_button" onClick={loadMore}>
            {t("see_more")}
          </button>
        </div>
      )}

      {/* Lightbox para ver a pantalla completa */}
      {open && (
        <Lightbox
          slides={filteredImages.map((img) => ({ src: img.src }))}
          plugins={[Download, Share, Slideshow]}
          index={index}
          open={open}
          close={() => setOpen(false)}
        />
      )}
    </div>
  );
}

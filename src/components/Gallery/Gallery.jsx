// Gallery.jsx
"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css'

export default function Gallery() {
  const totalImages = 82;

  // Generamos miniaturas + full
  const images = Array.from({ length: totalImages }, (_, i) => ({
    src: `https://simplicitysoftware.site/images/webp_new/${i + 1}.webp`, // imagen full
    thumbnail: `https://simplicitysoftware.site/images/thumbnails_new/${i + 1}.png`, // miniatura
    width: 1920,
    height: 1080,
  }));

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      {/* Grid de miniaturas */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", margin:"11rem auto", width:"95%"}}>
        {images.map((img, i) => (
          <div
            key={i}
            style={{ width: 120, height: 200, position: "relative", cursor: "pointer" }}
            onClick={() => { setIndex(i); setOpen(true); }}
            className="thumbImage_container"
          >
            <Image
              src={img.thumbnail}
              alt="imagen ayres de calafate"
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
              sizes="120px"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          slides={images.map(img => ({ src: img.src }))}
          plugins={[Download, Share, Slideshow]}
          index={index}
          open={open}
          close={() => setOpen(false)}
        />
      )}
    </div>
  );
}

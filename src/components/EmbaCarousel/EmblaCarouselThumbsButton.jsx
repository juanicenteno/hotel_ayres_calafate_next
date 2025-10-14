import React from 'react'
import Image from 'next/image'
export const Thumb = ({ selected, src, onClick }) => (
  <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
    <button
      id='embla__slide_room_detail_thumb'
      onClick={onClick}
      type="button"
      className="embla-thumbs__slide__number"
    >
      {/* <img src={src} alt="Thumbnail" className="embla-thumbs__slide__img" /> */}
      <Image
        // fill
        alt="Thumbnail"
        src={src}
        loading="lazy"
        className="embla-thumbs__slide__img"
        fill
        style={{ objectFit: "cover" }}
        // placeholder="blur"
      />
    </button>
  </div>
)
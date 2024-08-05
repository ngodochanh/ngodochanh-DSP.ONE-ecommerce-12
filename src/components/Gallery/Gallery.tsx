'use client';

import Image from 'next/image';
import { GALLERY_LIST } from './constants';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Gallery() {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1536: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {GALLERY_LIST.map((gallery) => (
        <SwiperSlide key={gallery.key}>
          <div className='relative h-[300px]'>
            <Image
              src={gallery.image}
              alt={gallery.alt}
              fill
              sizes='(max-width: 640px) 100vw, 50vw'
              loading='lazy'
              className='object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Gallery;

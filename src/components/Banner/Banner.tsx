'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { BANNER_IMAGES } from './constants';
import Image from 'next/image';

function Banner() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {BANNER_IMAGES.map((image) => (
        <SwiperSlide key={image.alt}>
          <div className="relative mt-[1px] pt-[44.271%]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={true}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;

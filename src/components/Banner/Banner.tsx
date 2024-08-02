'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { IMAGES_BANNER } from './constants';
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
      {IMAGES_BANNER.map((image) => (
        <SwiperSlide key={image.alt}>
          <div className='relative' style={{ paddingTop: '44.271%' }}>
            <Image src={image.src} alt={image.alt} layout='fill' objectFit='cover' loading='lazy' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;

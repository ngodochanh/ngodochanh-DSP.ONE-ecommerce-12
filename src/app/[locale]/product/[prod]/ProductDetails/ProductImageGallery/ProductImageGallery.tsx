'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';
import { Button } from '@nextui-org/react';
import { SvgChevronRight } from '@/components/Svgs';
import { PRODUCT_GALLERY_LIST } from '@/constantsProduct';

export default function ProductImageGallery({ id }: { id: number }) {
  const swiperRef = useRef<SwiperType>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const result = PRODUCT_GALLERY_LIST.reduce<{ id: number; image: string }[]>((accumulator, currentValue) => {
    if (currentValue.id === id) {
      accumulator.push(currentValue);
    }

    return accumulator;
  }, []);

  return (
    <>
      {result.length === 0 ? (
        <div>Không có hình ảnh</div>
      ) : (
        <>
          <Swiper
            loop={result.length >= 2}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='relative h-4/5 w-full'
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {result.map((item) => (
              <SwiperSlide
                key={item.image}
                className='relative min-h-[450px] w-full h-full select-none rounded-lg overflow-hidden'
              >
                <Image
                  sizes='(max-width: 640px) 100vw, 50vw'
                  fill
                  alt=''
                  className='block w-full h-full object-cover'
                  src={item.image}
                  priority
                />
              </SwiperSlide>
            ))}

            <div className='absolute bottom-[3%] right-[3%] z-10'>
              <Button
                radius='full'
                className='min-w-fit h-9 w-9 px-1 bg-white data-[focus-visible=true]:outline-none mr-2'
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <SvgChevronRight className='rotate-180' />
              </Button>
              <Button
                radius='full'
                className='min-w-fit h-9 w-9 px-1 bg-white data-[focus-visible=true]:outline-none'
                onClick={() => swiperRef.current?.slideNext()}
              >
                <SvgChevronRight />
              </Button>
            </div>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={result.length >= 2}
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 4 },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className=' h-1/5 w-full !pb-0 !pt-[15px] box-border mySwiper'
          >
            {result.map((item) => (
              <SwiperSlide
                key={item.image}
                className='w-full h-full min-h-[250px] opacity-40 relative rounded-lg overflow-hidden  cursor-pointer'
              >
                <Image
                  sizes='(max-width: 640px) 100vw, 50vw'
                  fill
                  alt=''
                  className='block w-full h-full object-cover'
                  src={item.image}
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
}

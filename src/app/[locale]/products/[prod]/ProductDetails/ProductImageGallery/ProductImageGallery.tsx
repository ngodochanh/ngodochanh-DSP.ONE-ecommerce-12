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
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { PRODUCT_GALLERY_LIST } from '@/data';

export default function ProductImageGallery({ id }: { id: string | string }) {
  const swiperRef = useRef<SwiperType>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const result = PRODUCT_GALLERY_LIST.reduce<{ id: string; image: string }[]>((accumulator, currentValue) => {
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
            className="relative h-4/5 w-full"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {result.map((item) => (
              <SwiperSlide
                key={item.image}
                className="relative h-full min-h-[450px] w-full select-none overflow-hidden rounded-lg"
              >
                <Image
                  sizes="(max-width: 640px) 100vw, 50vw"
                  fill
                  alt=""
                  className="block h-full w-full object-cover"
                  src={item.image}
                  priority
                />
              </SwiperSlide>
            ))}

            <div className="absolute bottom-[3%] right-[3%] z-10">
              <Button
                radius="full"
                className="mr-2 h-9 w-9 min-w-fit bg-white px-1 data-[focus-visible=true]:outline-none"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <IoIosArrowBack />
              </Button>
              <Button
                radius="full"
                className="h-9 w-9 min-w-fit bg-white px-1 data-[focus-visible=true]:outline-none"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <IoIosArrowForward />
              </Button>
            </div>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: result.length > 1 ? 2 : 1, loop: result.length >= 2 },
              640: {
                slidesPerView: result.length > 1 ? (result.length > 2 ? (result.length > 3 ? 4 : 3) : 2) : 1,
                loop: result.length >= 2,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper box-border h-1/5 w-full !pb-0 !pt-[15px]"
          >
            {result.map((item) => (
              <SwiperSlide
                key={item.image}
                className="relative h-full min-h-[250px] w-full cursor-pointer overflow-hidden rounded-lg opacity-40"
              >
                <Image
                  sizes="(max-width: 640px) 100vw, 50vw"
                  fill
                  alt=""
                  className="block h-full w-full object-cover"
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

'use client';

import Segment from '@/components/Segment';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductType } from '@/type';
import Link from 'next/link';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import Image from 'next/image';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import ProductNotFound from '@/components/ProductNotFound';

function RelatedProducts({ title, productList }: { title: string; productList: ProductType[] }) {
  return (
    <div className="pb-[60px] pt-[30px]">
      <Segment title={title} className="mb-10" />
      {productList.length === 0 ? (
        <ProductNotFound />
      ) : (
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 16,
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 16,
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="pt-5"
        >
          {productList.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={getLocalizedPath(`${process.env.PRODUCT}/${product.slug}-${product.id}.html`)}
                className="group flex h-full flex-col"
              >
                <div className="relative mb-[15px] h-[430px] overflow-hidden rounded-[10px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-grow flex-col">
                  <h5 className="mb-[15px] line-clamp-1 flex-grow text-clamp-24 font-semibold transition-colors duration-300 ease-in-out group-hover:text-orange-bright">
                    {product.title}
                  </h5>
                  <div className="flex items-center justify-between gap-x-5">
                    <strong className="text-clamp-32 text-red-bright">{formatCurrencyVND(product.price)}</strong>
                    <div className="text-clamp-16">
                      <p className="text-gray-mute line-through">
                        {product.originalPrice !== 0 && formatCurrencyVND(product.originalPrice)}
                      </p>
                      <p className="text-red-bright">
                        {product.originalPrice !== 0 &&
                          'Khuyến mãi ' + calculateDiscountPercentage(product.price, product.originalPrice)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default RelatedProducts;

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
    <div className='pt-[30px] pb-[60px]'>
      <Segment title={title} className='mb-10' />
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
          className='pt-5'
        >
          {productList.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={getLocalizedPath(`${process.env.PRODUCT}/${product.slug}-${product.id}.html`)}
                className='group flex flex-col h-full'
              >
                <div className='relative h-[430px] rounded-[10px] overflow-hidden mb-[15px]'>
                  <Image
                    src={product.image}
                    alt={product.title}
                    sizes='(max-width: 640px) 100vw, 50vw'
                    fill
                    loading='lazy'
                    className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                </div>
                <div className='flex flex-col flex-grow'>
                  <h5 className='font-semibold text-clamp-24 mb-[15px] group-hover:text-orange-bright transition-colors duration-300 ease-in-out flex-grow line-clamp-1'>
                    {product.title}
                  </h5>
                  <div className='flex gap-x-5 justify-between items-center'>
                    <strong className='text-clamp-32 text-red-bright'>{formatCurrencyVND(product.price)}</strong>
                    <div className='text-clamp-16'>
                      <p className='line-through text-gray-mute'>
                        {product.originalPrice !== 0 && formatCurrencyVND(product.originalPrice)}
                      </p>
                      <p className='text-red-bright'>
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

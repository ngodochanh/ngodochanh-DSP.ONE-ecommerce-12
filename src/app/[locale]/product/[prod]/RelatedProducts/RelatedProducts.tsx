'use client';

import Segment from '@/components/Segment';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductNotFound from '@/components/ProductNotFound';
import { IProduct } from '@/models';
import ProductItem from '@/components/ProductItem';

type RelatedProductsProps = { title: string; productList: IProduct[] };

function RelatedProducts({ title, productList }: RelatedProductsProps) {
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
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default RelatedProducts;

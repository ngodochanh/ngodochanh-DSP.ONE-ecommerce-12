'use client';

import ContentHeader from '@/components/ContentHeader';
import { BLOG_LIST } from './constants';
import BlogsItem from './BlogItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useTranslations } from 'next-intl';

function Blogs() {
  const t = useTranslations('blogs');
  return (
    <ContentHeader title={t('text')}>
      <div className="mt-[50px]">
        <Swiper
          breakpoints={{
            0: {
              spaceBetween: 16,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 16,
              slidesPerView: 3,
            },
            1536: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {BLOG_LIST.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogsItem blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContentHeader>
  );
}

export default Blogs;

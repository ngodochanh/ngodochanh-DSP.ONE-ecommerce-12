import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SvgClose, SvgFilter } from '@/components/Svgs';
import { FilterType } from '@/app/[locale]/product/type';
import { KEY_PRODUCT_FILTER } from '@/app/[locale]/product/constants';
import { memo } from 'react';

type ProductFilterSidebarProps = {
  prodFilterList: FilterType;
  handleToggleFilter: () => void;
  handleRemoveFilter: (keyProductFilter: string, value: string) => void;
};

function ProductFilterSidebar({ prodFilterList, handleToggleFilter, handleRemoveFilter }: ProductFilterSidebarProps) {
  const { gender, color, size, price } = prodFilterList;
  return (
    <div className='max-container  lg:flex items-center gap-x-[26px] py-5'>
      <div className='flex justify-between'>
        <span className='font-normal text-clamp-16'>Bộ lọc đã chọn:</span>

        <div className='grid grid-cols-[auto_24px] gap-x-[6px] lg:hidden'>
          <span className=' text-clamp-16 font-medium'>Lọc:</span>
          <div className='p-[3px] h-6 lg:none cursor-pointer' onClick={handleToggleFilter}>
            <SvgFilter />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView='auto'
        spaceBetween={24}
        pagination={false}
        className='flex-1 gap-x-6 cursor-pointer h-[42px]'
      >
        {gender.map((item) => (
          <SwiperSlide key={item.value} className='!w-fit'>
            <div className='inline-flex items-center gap-4 py-2 px-4 rounded-full border-1 border-solid '>
              <strong className='font-normal line-clamp-1'>{item.label}</strong>
              <div onClick={() => handleRemoveFilter(KEY_PRODUCT_FILTER.gender, item.value)}>
                <SvgClose className='w-clamp-24' />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {color.map((item) => (
          <SwiperSlide key={item.value} className='!w-fit'>
            <div className='inline-flex items-center gap-4 py-2 px-4 rounded-full border-1 border-solid '>
              <strong className='font-normal line-clamp-1'>{item.label}</strong>
              <div onClick={() => handleRemoveFilter(KEY_PRODUCT_FILTER.color, item.value)}>
                <SvgClose className='w-clamp-24' />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {size.map((item) => (
          <SwiperSlide key={item.value} className='!w-fit'>
            <div className='inline-flex items-center gap-4 py-2 px-4 rounded-full border-1 border-solid '>
              <strong className='font-normal line-clamp-1 uppercase'>{item.label}</strong>
              <div onClick={() => handleRemoveFilter(KEY_PRODUCT_FILTER.size, item.value)}>
                <SvgClose className='w-clamp-24' />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {price.map((item) => (
          <SwiperSlide key={item.value} className='!w-fit'>
            <div className='inline-flex items-center gap-4 py-2 px-4 rounded-full border-1 border-solid '>
              <strong className='font-normal line-clamp-1'>{item.label}</strong>
              <div onClick={() => handleRemoveFilter(KEY_PRODUCT_FILTER.price, item.value)}>
                <SvgClose className='w-clamp-24' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(ProductFilterSidebar);

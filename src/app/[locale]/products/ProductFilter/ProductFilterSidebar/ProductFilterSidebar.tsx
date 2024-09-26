import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CgClose } from 'react-icons/cg';
import { FiFilter } from 'react-icons/fi';
import { KEY_PRODUCT_FILTER } from '@/app/[locale]/products/constants';
import { memo } from 'react';
import { IFilters } from '@/models';

type ProductFilterSidebarProps = {
  prodFilterList: IFilters;
  onToggleFilter: () => void;
  onRemoveFilter: (keyProductFilter: string, value: string) => void;
};

function ProductFilterSidebar({ prodFilterList, onToggleFilter, onRemoveFilter }: ProductFilterSidebarProps) {
  const { gender, color, size, price } = prodFilterList;
  return (
    <div className="items-center gap-x-[26px] py-5 lg:flex">
      <div className="mb-[10px] flex justify-between lg:mb-0">
        <span className="text-clamp-16 font-normal">Bộ lọc đã chọn:</span>

        <div className="grid grid-cols-[auto_24px] gap-x-[6px] lg:hidden">
          <span className="text-clamp-16 font-medium">Lọc:</span>

          <FiFilter className="lg:none h-full w-clamp-24 cursor-pointer" onClick={onToggleFilter} />
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        pagination={false}
        className="h-[42px] flex-1 cursor-pointer gap-x-6"
      >
        {gender.map((item) => (
          <SwiperSlide key={item.value} className="!w-fit">
            <div className="inline-flex items-center gap-4 rounded-full border-1 border-solid px-4 py-2">
              <strong className="line-clamp-1 font-normal">{item.label}</strong>
              <div onClick={() => onRemoveFilter(KEY_PRODUCT_FILTER.gender, item.value)}>
                <CgClose className="h-full w-clamp-24" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {color.map((item) => (
          <SwiperSlide key={item.value} className="!w-fit">
            <div className="inline-flex items-center gap-4 rounded-full border-1 border-solid px-4 py-2">
              <strong className="line-clamp-1 font-normal">{item.label}</strong>
              <div onClick={() => onRemoveFilter(KEY_PRODUCT_FILTER.color, item.value)}>
                <CgClose className="h-full w-clamp-24" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {size.map((item) => (
          <SwiperSlide key={item.value} className="!w-fit">
            <div className="inline-flex items-center gap-4 rounded-full border-1 border-solid px-4 py-2">
              <strong className="line-clamp-1 font-normal uppercase">{item.label}</strong>
              <div onClick={() => onRemoveFilter(KEY_PRODUCT_FILTER.size, item.value)}>
                <CgClose className="h-full w-clamp-24" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {price.map((item) => (
          <SwiperSlide key={item.value} className="!w-fit">
            <div className="inline-flex items-center gap-4 rounded-full border-1 border-solid px-4 py-2">
              <strong className="line-clamp-1 font-normal">{item.label}</strong>
              <div onClick={() => onRemoveFilter(KEY_PRODUCT_FILTER.price, item.value)}>
                <CgClose className="h-full w-clamp-24" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(ProductFilterSidebar);

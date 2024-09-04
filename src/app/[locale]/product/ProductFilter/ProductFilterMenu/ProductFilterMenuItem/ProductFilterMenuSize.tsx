import { useProductStore } from '@/components/ProductStore';
import { ProductFilterMenuTypeProps } from '@/app/[locale]/product/type';
import { memo } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { PER_PAGE } from '@/app/[locale]/product/constants';

function ProductFilterMenuSize({
  keyProductFilter,
  productFilterList,
  handleChangeFilter,
}: ProductFilterMenuTypeProps) {
  const { state } = useProductStore();
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className='grid grid-cols-4 gap-3'>
      {productFilterList.map((item) => (
        <div
          key={item.value}
          className={`h-[40px] rounded-sm border-1 border-solid border-gray-light-mid flex items-center justify-center cursor-pointer uppercase hover:bg-default-100 hover:text-black ${
            state.filter.size.some((s) => s.value === item.value)
              ? 'bg-yellow-bright text-white border-yellow-bright '
              : ''
          }`}
          onClick={() => {
            router.push(`/${locale}/${process.env.PRODUCT!}/?page=${Number(1)}&per_page=${PER_PAGE}`, {
              scroll: false,
            });
            handleChangeFilter(keyProductFilter, item);
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default memo(ProductFilterMenuSize);

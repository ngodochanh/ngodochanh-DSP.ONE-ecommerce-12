import { useProductStore } from '@/components/ProductStore';
import { ProductFilterMenuTypeProps } from '@/app/[locale]/product/type';
import { memo } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { PER_PAGE } from '@/app/[locale]/product/constants';

function ProductFilterMenuSize({
  keyProductFilter,
  productFilterList,
  handleChangeFilter,
}: ProductFilterMenuTypeProps) {
  const { state } = useProductStore();
  const router = useRouter();
  const locale = useLocale();

  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  return (
    <div className="grid grid-cols-4 gap-3">
      {productFilterList.map((item) => (
        <div
          key={item.value}
          className={`flex h-[40px] cursor-pointer items-center justify-center rounded-sm border-1 border-solid border-gray-light-mid uppercase hover:bg-default-100 hover:text-black ${
            state.filter.size.some((s) => s.value === item.value)
              ? 'border-yellow-bright bg-yellow-bright text-white'
              : ''
          }`}
          onClick={() => {
            router.push(
              `/${locale}/${process.env.PRODUCT!}/?page=${Number(1)}&per_page=${PER_PAGE}${
                search ? `&search=${search}` : ''
              }`,
              {
                scroll: false,
              },
            );
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

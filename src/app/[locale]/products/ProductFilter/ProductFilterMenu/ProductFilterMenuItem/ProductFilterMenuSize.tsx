import { ProductFilterMenuTypeProps } from '@/app/[locale]/products/type';
import { memo } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { PER_PAGE } from '@/app/[locale]/products/constants';
import { useStore } from '@/components/Store';

function ProductFilterMenuSize({ keyProductFilter, productFilterList, onChangeFilter }: ProductFilterMenuTypeProps) {
  const {
    state: { filter },
  } = useStore();
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
            filter.size.some((s) => s.value === item.value) ? 'border-orange-bright bg-orange-bright text-white' : ''
          }`}
          onClick={() => {
            router.push(
              `/${locale}/${process.env.PRODUCTS!}/?page=${Number(1)}&per_page=${PER_PAGE}${
                search ? `&search=${search}` : ''
              }`,
              {
                scroll: false,
              },
            );
            onChangeFilter(keyProductFilter, item);
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default memo(ProductFilterMenuSize);

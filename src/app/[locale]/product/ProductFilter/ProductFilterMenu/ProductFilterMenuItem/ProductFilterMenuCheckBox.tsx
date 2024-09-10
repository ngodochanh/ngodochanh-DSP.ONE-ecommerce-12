'use client';

import { CheckboxGroup, Checkbox } from '@nextui-org/react';
import { ProductFilterMenuTypeProps } from '@/app/[locale]/product/type';
import { memo } from 'react';
import { useProductStore } from '@/components/ProductStore';
import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { PER_PAGE } from '@/app/[locale]/product/constants';

function ProductFilterMenuCheckBox({
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
    <CheckboxGroup value={state.filter[keyProductFilter].map((item) => item.value)}>
      {productFilterList.map((item) => {
        return (
          <Checkbox
            key={item.value}
            radius='none'
            value={item.value}
            defaultSelected={state.filter[keyProductFilter].some((s) => s.value === item.value)}
            onChange={() => {
              router.push(
                `/${locale}/${process.env.PRODUCT!}/?page=${Number(1)}&per_page=${PER_PAGE}${
                  search ? `&search=${search}` : ''
                }`,
                {
                  scroll: false,
                }
              );
              handleChangeFilter(keyProductFilter, item);
            }}
            classNames={{
              icon: ' text-yellow-bright !w-clamp-16 !h-clamp-16',
              wrapper: 'bg-transparent !w-clamp-28 !h-clamp-28 before:border-gray-light-mid after:bg-transparent mr-4 ',
              label: 'font-normal !text-clamp-16',
            }}
          >
            {item.label}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
}

export default memo(ProductFilterMenuCheckBox);

'use client';

import { CheckboxGroup, Checkbox } from '@nextui-org/react';
import { ProductFilterMenuTypeProps } from '@/app/[locale]/products/type';
import { memo } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { PER_PAGE } from '@/app/[locale]/products/constants';
import { useStore } from '@/components/Store';

function ProductFilterMenuCheckBox({
  keyProductFilter,
  productFilterList,
  onChangeFilter,
}: ProductFilterMenuTypeProps) {
  const {
    state: { filter },
  } = useStore();
  const router = useRouter();
  const locale = useLocale();

  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  return (
    <CheckboxGroup value={filter[keyProductFilter].map((item) => item.value)}>
      {productFilterList.map((item) => {
        return (
          <Checkbox
            key={item.value}
            radius="none"
            value={item.value}
            defaultSelected={filter[keyProductFilter].some((s) => s.value === item.value)}
            onChange={() => {
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
            classNames={{
              icon: ' text-orange-bright !w-clamp-16 !h-clamp-16',
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

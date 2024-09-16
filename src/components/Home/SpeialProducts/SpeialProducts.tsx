'use client';

// Components
import ContentHeader from '@/components/ContentHeader';
import ProductList from '@/components/ProductList';
//
import { Tabs, Tab } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';
import { CATEGORY_LIST, PRODUCT_LIST } from '@/constantsProduct';
import { IProduct } from '@/types';

const PRODUCT_T_SHIRT = PRODUCT_LIST.reduce<IProduct[]>((acc, currentValue) => {
  if (currentValue.category === CATEGORY_LIST.t_shirt.value) {
    acc.push(currentValue);
  }
  return acc;
}, []);

const PRODUCT_SHIRT = PRODUCT_LIST.reduce<IProduct[]>((acc, currentValue) => {
  if (currentValue.category === CATEGORY_LIST.shirt.value) {
    acc.push(currentValue);
  }
  return acc;
}, []);

const PRODUCT_PANTS = PRODUCT_LIST.reduce<IProduct[]>((acc, currentValue) => {
  if (currentValue.category === CATEGORY_LIST.pants.value) {
    acc.push(currentValue);
  }
  return acc;
}, []);

const PRODUCT_JACKET = PRODUCT_LIST.reduce<IProduct[]>((acc, currentValue) => {
  if (currentValue.category === CATEGORY_LIST.jacket.value) {
    acc.push(currentValue);
  }
  return acc;
}, []);

function SpeialProducts() {
  // Dịch ngôn ngữ
  const t = useTranslations('specialProducts');

  const CATEGORY_PRODUCT_LIST = [
    {
      id: CATEGORY_LIST.t_shirt.value,
      label: CATEGORY_LIST.t_shirt.label,
      path: PRODUCT_T_SHIRT,
    },
    {
      id: CATEGORY_LIST.shirt.value,
      label: CATEGORY_LIST.shirt.label,
      path: PRODUCT_SHIRT,
    },
    {
      id: CATEGORY_LIST.pants.value,
      label: CATEGORY_LIST.pants.label,
      path: PRODUCT_PANTS,
    },
    {
      id: CATEGORY_LIST.jacket.value,
      label: CATEGORY_LIST.jacket.label,
      path: PRODUCT_JACKET,
    },
  ];

  return (
    <ContentHeader title={t('text')}>
      <Tabs
        items={CATEGORY_PRODUCT_LIST}
        classNames={{
          base: 'flex justify-center items-center',
          tabList: 'rounded-none bg-transparent p-0 pt-5 gap-0',
          tab: 'text-black-dark font-medium text-clamp-18 rounded-none px-[6px] sm:px-6 py-3 h-fit transition-none opacity-100 data-[disabled=true]:opacity-100 data-[focus-visible=true]:outline-none data-[focus-visible=true]:outline-offset-0 data-[focus-visible=true]:outline-transparent data-[focus-visible=true]:outline-0 data-[hover-unselected=true]:opacity-100 data-[hover-unselected=true]:text-orange-bright',
          cursor: 'bg-transparent rounded-none drop-shadow-none relative',
          tabContent:
            'font-medium !text-clamp-18 capitalize text-black-dark hover:text-orange-bright group-data-[selected=true]:text-orange-bright transition-none',
          panel: 'p-0',
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <ProductList productList={item.path} />
          </Tab>
        )}
      </Tabs>
    </ContentHeader>
  );
}

export default SpeialProducts;

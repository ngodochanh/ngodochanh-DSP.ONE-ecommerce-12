'use client';

// Components
import ContentHeader from '@/components/ContentHeader';
import Products from '@/components/Products';
//
import { MEN_PRODUCT_LIST, SPEIAL_PRODUCT_LIST, WOMEN_PRODUCT_LIST } from './constants';
//
import { Tabs, Tab } from '@nextui-org/tabs';
import { useTranslations } from 'next-intl';

function SpeialProducts() {
  // Dịch ngôn ngữ
  const t = useTranslations('specialProducts');

  const CATEGORY_PRODUCT_LIST = [
    {
      id: 'all',
      label: t('items.all'),
      path: SPEIAL_PRODUCT_LIST,
    },
    {
      id: 'men',
      label: t('items.men'),
      path: MEN_PRODUCT_LIST,
    },
    {
      id: 'women',
      label: t('items.women'),
      path: WOMEN_PRODUCT_LIST,
    },
    {
      id: 'kids',
      label: t('items.kids'),
      path: [],
    },
  ];

  return (
    <ContentHeader title={t('text')}>
      <Tabs
        items={CATEGORY_PRODUCT_LIST}
        classNames={{
          base: 'flex justify-center items-centery-center items-centery-center items-center',
          tabList: 'rounded-none bg-transparent p-0 pt-5 gap-0',
          tab: 'text-black-dark font-medium text-clamp-18 rounded-none px-3 sm:px-6 py-3 h-fit transition-none opacity-100 data-[disabled=true]:opacity-100 data-[focus-visible=true]:outline-none data-[focus-visible=true]:outline-offset-0 data-[focus-visible=true]:outline-transparent data-[focus-visible=true]:outline-0 data-[hover-unselected=true]:opacity-100 data-[hover-unselected=true]:text-orange-bright',
          cursor: 'bg-transparent rounded-none drop-shadow-none relative',
          tabContent:
            'font-medium text-clamp-18 text-black-dark hover:text-orange-bright group-data-[selected=true]:text-orange-bright transition-none',
          panel: 'p-0',
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Products productList={item.path} />
          </Tab>
        )}
      </Tabs>
    </ContentHeader>
  );
}

export default SpeialProducts;

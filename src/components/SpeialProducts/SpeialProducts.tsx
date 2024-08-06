'use client';

// Components
import HeaderSection from '@/components/HeaderSection';
import Products from '@/components/Products';
//
import { CATEGORY_PRODUCT_LIST } from './constants';
//
import { Tabs, Tab } from '@nextui-org/tabs';

function SpeialProducts() {
  return (
    <HeaderSection title='Speial Products'>
      <Tabs
        items={CATEGORY_PRODUCT_LIST}
        classNames={{
          base: 'flex-center',
          tabList: 'rounded-none bg-transparent p-0 py-5 gap-0 mt-5',
          tab: 'text-black-dark text-navigation rounded-none px-5 sm:px-6 py-3 h-fit transition-none opacity-100 data-[disabled=true]:opacity-100 data-[focus-visible=true]:outline-none data-[focus-visible=true]:outline-offset-0 data-[focus-visible=true]:outline-transparent data-[focus-visible=true]:outline-0 data-[hover-unselected=true]:opacity-100 data-[hover-unselected=true]:text-orange-bright',
          cursor: 'bg-transparent rounded-none drop-shadow-none relative',
          tabContent:
            'text-navigation text-black-dark hover:text-orange-bright group-data-[selected=true]:text-orange-bright transition-none',
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Products productList={item.path} />
          </Tab>
        )}
      </Tabs>
    </HeaderSection>
  );
}

export default SpeialProducts;

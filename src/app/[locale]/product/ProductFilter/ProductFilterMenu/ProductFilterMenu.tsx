import { ProductFilterMenuCheckBox, ProductFilterMenuSize } from './ProductFilterMenuItem';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { SvgCloseCircle, SvgMdArrowDropleft } from '@/components/Svgs';
import { memo, useCallback, useState } from 'react';
import { PRODUCT_FILTER_LIST } from '@/app/[locale]/product/constants';
import { FuncHandleChangeType } from '@/app/[locale]/product/type';
import { Button } from '@nextui-org/button';
import { actions, useProductStore } from '@/app/[locale]/product/ProductStore';
import type { Selection } from '@nextui-org/react';

type ProductFilterMenuProps = {
  isFilterEnabled: boolean;
  handleToggleFilter: () => void;
  handleChangeFilter: FuncHandleChangeType;
};

function ProductFilterMenu({ isFilterEnabled, handleToggleFilter, handleChangeFilter }: ProductFilterMenuProps) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(PRODUCT_FILTER_LIST.map((product) => product.id))
  );
  const { state, dispatch } = useProductStore();
  const totalCount = Object.values(state.filter).reduce((acc, array) => acc + array.length, 0);

  const handleResetFilter = useCallback(() => {
    dispatch(actions.resetFilter());
  }, []);

  return (
    <>
      <div
        className={`${
          isFilterEnabled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        } px-2 lg:px-0 transition-transform-opacity ease-in-out delay-300 bg-white shadow-sm lg:shadow-none lg:visible lg:opacity-100 lg:translate-y-0 fixed lg:relative bottom-[65.6px] sm:bottom-[73.6px] lg:bottom-0 left-2 sm:left-4 lg:left-0 right-2 sm:right-4 lg:right-0 z-30 lg:z-0 max-h-product-filter-menu lg:max-h-full overflow-y-auto scroll-smooth overscroll-y-contain`}
      >
        <div className='ml-auto w-[33px] lg:hidden pt-5 pb-1 cursor-pointer' onClick={handleToggleFilter}>
          <SvgCloseCircle />
        </div>

        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          selectionMode='multiple'
          showDivider={false}
          className='px-0 '
          itemClasses={{ base: 'mb-[40px]', trigger: 'py-0 pb-4', title: '!text-clamp-24 font-normal' }}
        >
          {PRODUCT_FILTER_LIST.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.title}
              title={item.title}
              indicator={<SvgMdArrowDropleft className='text-black h-auto w-clamp-28' />}
            >
              {item.type === 'checkbox' ? (
                <ProductFilterMenuCheckBox
                  keyProductFilter={item.id}
                  productFilterList={item.children}
                  handleChangeFilter={handleChangeFilter}
                />
              ) : item.type === 'size' ? (
                <ProductFilterMenuSize
                  keyProductFilter={item.id}
                  productFilterList={item.children}
                  handleChangeFilter={handleChangeFilter}
                />
              ) : (
                <></>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div
        className={`bg-black opacity-80 fixed inset-0 z-20 transition-transform-opacity ease-in-out delay-300 lg:hidden ${
          isFilterEnabled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full delay-200'
        }`}
        onClick={handleToggleFilter}
      ></div>

      <div
        className={`px-2 sm:px-4 bg-white fixed left-0 right-0 bottom-0 z-30 transition-transform-opacity ease-in-out delay-300 flex justify-between gap-x-2 sm:gap-x-3 border-1 border-gray-lightest border-solid py-2 sm:py-3 lg:hidden ${
          isFilterEnabled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full delay-200'
        }`}
      >
        <Button className='rounded-md flex-1 bg-gray-light-mid h-12 !text-clamp-24' onClick={handleResetFilter}>
          Xóa bộ lọc
        </Button>
        <Button className='rounded-md flex-1 bg-yellow-bright h-12 !text-clamp-24' onClick={handleToggleFilter}>
          Áp dụng {totalCount > 0 && `(${totalCount})`}
        </Button>
      </div>
    </>
  );
}

export default memo(ProductFilterMenu);

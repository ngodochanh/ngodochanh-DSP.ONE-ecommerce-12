import { ProductFilterMenuCheckBox, ProductFilterMenuSize } from './ProductFilterMenuItem';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { GoTriangleLeft } from 'react-icons/go';
import { memo, useCallback, useState } from 'react';
import { PRODUCT_FILTER_LIST } from '@/app/[locale]/products/constants';
import { Button } from '@nextui-org/button';
import type { Selection } from '@nextui-org/react';
import { actions, useStore } from '@/components/Store';
import { IFuncHandleChangeFilter } from '@/app/[locale]/products/type';
import { IFilter } from '@/models';

type ProductFilterMenuProps = {
  isFilterEnabled: boolean;
  onToggleFilter: () => void;
  onChangeFilter: IFuncHandleChangeFilter;
};

function ProductFilterMenu({ isFilterEnabled, onToggleFilter, onChangeFilter }: ProductFilterMenuProps) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(PRODUCT_FILTER_LIST.map((product) => product.id)),
  );
  const {
    state: { filter },
    dispatch,
  } = useStore();
  const totalCount = Object.values(filter).reduce((acc, array: IFilter[]) => acc + array.length, 0);

  const handleResetFilter = useCallback(() => {
    dispatch(actions.resetFilter());
  }, []);

  return (
    <>
      <div
        className={`${
          isFilterEnabled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        } fixed bottom-[65.6px] left-2 right-2 z-40 max-h-product-filter-menu overflow-y-auto overscroll-y-contain scroll-smooth bg-white px-2 shadow-sm delay-300 ease-in-out transition-transform-opacity sm:bottom-[73.6px] sm:left-4 sm:right-4 lg:visible lg:relative lg:bottom-0 lg:left-0 lg:right-0 lg:z-0 lg:max-h-full lg:translate-y-0 lg:px-0 lg:opacity-100 lg:shadow-none`}
      >
        <div></div>
        <IoCloseCircleOutline
          className="mb-1 ml-auto mt-5 h-full w-[33px] cursor-pointer hover:opacity-60 lg:hidden"
          onClick={onToggleFilter}
        />

        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          selectionMode="multiple"
          showDivider={false}
          className="px-0"
          itemClasses={{ base: 'mb-[40px]', trigger: 'py-0 pb-4', title: '!text-clamp-24 font-normal' }}
        >
          {PRODUCT_FILTER_LIST.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.title}
              title={item.title}
              indicator={<GoTriangleLeft className="h-auto w-clamp-24 text-black" />}
            >
              {item.type === 'checkbox' ? (
                <ProductFilterMenuCheckBox
                  keyProductFilter={item.id}
                  productFilterList={item.children}
                  onChangeFilter={onChangeFilter}
                />
              ) : item.type === 'size' ? (
                <ProductFilterMenuSize
                  keyProductFilter={item.id}
                  productFilterList={item.children}
                  onChangeFilter={onChangeFilter}
                />
              ) : (
                <></>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-black opacity-80 delay-300 ease-in-out transition-transform-opacity lg:hidden ${
          isFilterEnabled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 delay-200'
        }`}
        onClick={onToggleFilter}
      ></div>

      <div
        className={`fixed bottom-0 left-0 right-0 z-30 flex justify-between gap-x-2 border-1 border-solid border-gray-lightest bg-white px-2 py-2 delay-300 ease-in-out transition-transform-opacity sm:gap-x-3 sm:px-4 sm:py-3 lg:hidden ${
          isFilterEnabled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 delay-200'
        }`}
      >
        <Button className="h-12 flex-1 rounded-md bg-gray-light-mid !text-clamp-24" onClick={handleResetFilter}>
          Xóa bộ lọc
        </Button>
        <Button className="h-12 flex-1 rounded-md bg-orange-bright !text-clamp-24" onClick={onToggleFilter}>
          Áp dụng {totalCount > 0 && `(${totalCount})`}
        </Button>
      </div>
    </>
  );
}

export default memo(ProductFilterMenu);

'use client';

import ProductFilterSidebar from './ProductFilterSidebar';
import ProductFilterMenu from './ProductFilterMenu';
import ProductCatalog from './ProductCatalog';
import { useCallback, useState } from 'react';
import { KEY_PRODUCT_FILTER } from '@/app/[locale]/product/constants';
import { actions, useStore } from '@/components/Store';
import { IFilter } from '@/types';

function ProductFilter() {
  const [isFilterEnabled, setIsFilterEnabled] = useState(false);
  const {
    state: { filter },
    dispatch,
  } = useStore();

  const handleToggleFilter = useCallback(() => {
    setIsFilterEnabled((prevIsFilterEnabled) => !prevIsFilterEnabled);
  }, []);

  const handleToggleGender = useCallback((item: IFilter) => {
    dispatch(actions.toggleGender(item));
  }, []);

  const handleToggleColor = useCallback((item: IFilter) => {
    dispatch(actions.toggleColor(item));
  }, []);

  const handleToggleSize = useCallback((item: IFilter) => {
    dispatch(actions.toggleSize(item));
  }, []);

  const handleTogglePrice = useCallback((item: IFilter) => {
    dispatch(actions.togglePrice(item));
  }, []);

  const handleDeleteGender = useCallback((item: string) => {
    dispatch(actions.deleteGender(item));
  }, []);

  const handleDeleteColor = useCallback((item: string) => {
    dispatch(actions.deleteColor(item));
  }, []);

  const handleDeleteSize = useCallback((item: string) => {
    dispatch(actions.deleteSize(item));
  }, []);

  const handleDeletePrice = useCallback((item: string) => {
    dispatch(actions.deletePrice(item));
  }, []);

  const handleChangeFilter = useCallback((keyProductFilter: string, value: IFilter) => {
    if (keyProductFilter === KEY_PRODUCT_FILTER.gender) {
      handleToggleGender(value);
    } else if (keyProductFilter === KEY_PRODUCT_FILTER.color) {
      handleToggleColor(value);
    } else if (keyProductFilter === KEY_PRODUCT_FILTER.size) {
      handleToggleSize(value);
    } else if (keyProductFilter === KEY_PRODUCT_FILTER.price) {
      handleTogglePrice(value);
    }
  }, []);

  const handleRemoveFilter = useCallback((keyProductFilter: string, value: string) => {
    if (keyProductFilter === KEY_PRODUCT_FILTER.gender) {
      handleDeleteGender(value);
    } else if (keyProductFilter === KEY_PRODUCT_FILTER.color) {
      handleDeleteColor(value);
    } else if (keyProductFilter === KEY_PRODUCT_FILTER.size) {
      handleDeleteSize(value);
    } else if (keyProductFilter === KEY_PRODUCT_FILTER.price) {
      handleDeletePrice(value);
    }
  }, []);

  return (
    <>
      <ProductFilterSidebar
        prodFilterList={filter}
        onToggleFilter={handleToggleFilter}
        onRemoveFilter={handleRemoveFilter}
      />

      <div className="mb-[120px] mt-[10px] grid grid-cols-1 gap-x-4 lg:mt-[30px] lg:grid-cols-[250px_auto] xl:grid-cols-[300px_auto] 2xl:grid-cols-[343px_auto] 2xl:gap-x-[60px]">
        <ProductFilterMenu
          isFilterEnabled={isFilterEnabled}
          onToggleFilter={handleToggleFilter}
          onChangeFilter={handleChangeFilter}
        />
        <ProductCatalog prodFilterList={filter} />
      </div>
    </>
  );
}

export default ProductFilter;

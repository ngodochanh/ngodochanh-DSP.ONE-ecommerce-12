import { useSearchParams } from 'next/navigation';
import PaginationProduct from './PaginationProduct';
import ProductItem from './ProductItem';
import { PER_PAGE, PRICE_LIST } from '@/app/[locale]/product/constants';
import { FilterType, ProductFilterMenuType, ProductType } from '@/app/[locale]/product/type';
import { memo, useMemo } from 'react';
import { PRODUCT_LIST } from '@/constantsProduct';

type ProductListProps = {
  prodFilterList: FilterType;
};

type PriceRangeKey = (typeof PRICE_LIST)[keyof typeof PRICE_LIST];

const priceRangeMap: Map<PriceRangeKey, (price: number) => boolean> = new Map([
  [PRICE_LIST.p_below_350k, (price) => price < 350000],
  [PRICE_LIST.p_350k_to_750k, (price) => price >= 350000 && price <= 750000],
  [PRICE_LIST.p_above_750k, (price) => price > 750000],
]);

const filterProductsByPrice = (price: number, priceRanges: ProductFilterMenuType[]) => {
  return priceRanges.some((priceRange) => {
    const checkPrice = priceRangeMap.get(priceRange.value);
    return checkPrice ? checkPrice(price) : false;
  });
};

const matchesGender = (product: ProductType, genderFilter: FilterType['gender']) =>
  genderFilter.length === 0 || genderFilter.every((item) => product.gender.includes(item.value));

const matchesSize = (product: ProductType, sizeFilter: FilterType['size']) =>
  sizeFilter.length === 0 || sizeFilter.every((item) => product.size.includes(item.value));

const matchesPrice = (product: ProductType, priceFilter: FilterType['price']) =>
  priceFilter.length === 0 || filterProductsByPrice(product.price, priceFilter);

const filterProducts = (products: ProductType[], filter: FilterType) =>
  products.filter(
    (product) =>
      matchesGender(product, filter.gender) && matchesSize(product, filter.size) && matchesPrice(product, filter.price)
  );

function ProductList({ prodFilterList }: ProductListProps) {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? PER_PAGE;
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const filteredProducts = useMemo(() => filterProducts(PRODUCT_LIST, prodFilterList), [prodFilterList]);
  const entries = useMemo(() => filteredProducts.slice(start, end), [filteredProducts, start, end]);

  return (
    <div>
      <ul className='flex flex-wrap gap-x-2 sm:gap-x-4 2xl:gap-x-5 gap-y-[50px]'>
        {entries.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>

      <PaginationProduct total={filteredProducts.length} page={page} />
    </div>
  );
}

export default memo(ProductList);

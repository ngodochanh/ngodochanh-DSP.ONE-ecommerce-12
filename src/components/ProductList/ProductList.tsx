import { useTranslations } from 'next-intl';
import ProductItem from './ProductItem';
import { ProductType } from '@/type';

type ProductsProps = {
  productList: ProductType[];
};

function ProductList({ productList }: ProductsProps) {
  // Dịch ngôn ngữ
  const t = useTranslations('product');

  return (
    <div className='mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[16px] gap-y-[50px] 2xl:gap-x-[30px]'>
      {productList.length === 0 ? (
        <h1 className='text-center font-bold text-clamp-28'>{t('status')}</h1>
      ) : (
        productList.map((prod) => <ProductItem key={prod.id} prod={prod} />)
      )}
    </div>
  );
}

export default ProductList;

import ContentHeader from '@/components/ContentHeader';
import { useTranslations } from 'next-intl';
import { PRODUCT_LIST } from '@/constantsProduct';
import { IProduct } from '@/types';
import ProductNotFound from '@/components/ProductNotFound';
import ProductItem from '@/components/ProductItem';

function TrendyProducts() {
  const t = useTranslations('trendyProducts');
  const result = PRODUCT_LIST.reduce<IProduct[]>((acc, value) => {
    if (value.isTrending && acc.length < 8) {
      acc.push(value);
    }

    return acc;
  }, []);

  return (
    <ContentHeader title={t('text')}>
      <ul className="mt-[50px] grid grid-cols-1 gap-x-[16px] gap-y-[50px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-x-[30px]">
        {result.length === 0 ? (
          <ProductNotFound />
        ) : (
          result.map((prod) => (
            <li key={prod.id}>
              <ProductItem product={prod} />
            </li>
          ))
        )}
      </ul>
    </ContentHeader>
  );
}

export default TrendyProducts;

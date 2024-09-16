import ContentHeader from '@/components/ContentHeader';
import ProductList from '@/components/ProductList';
import { useTranslations } from 'next-intl';
import { PRODUCT_LIST } from '@/constantsProduct';
import { IProduct } from '@/types';

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
      <ProductList productList={result} />
    </ContentHeader>
  );
}

export default TrendyProducts;

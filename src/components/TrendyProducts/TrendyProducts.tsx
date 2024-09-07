import ContentHeader from '@/components/ContentHeader';
import Products from '@/components/Products';
import { useTranslations } from 'next-intl';
import { PRODUCT_LIST } from '@/constantsProduct';
import { ProductType } from '@/type';

function TrendyProducts() {
  const t = useTranslations('trendyProducts');
  const result = PRODUCT_LIST.reduce<ProductType[]>((acc, value) => {
    if (value.isTrending && acc.length < 8) {
      acc.push(value);
    }

    return acc;
  }, []);

  return (
    <ContentHeader title={t('text')}>
      <Products productList={result} />
    </ContentHeader>
  );
}

export default TrendyProducts;

import ContentHeader from '@/components/ContentHeader';
import Products from '@/components/Products';
import { TRENDY_PRODUCT_LIST } from './constants';
import { useTranslations } from 'next-intl';

function TrendyProducts() {
  const t = useTranslations('trendyProducts');
  return (
    <ContentHeader title={t('text')}>
      <Products productList={TRENDY_PRODUCT_LIST} />
    </ContentHeader>
  );
}

export default TrendyProducts;

import HeaderSection from '@/components/HeaderSection';
import Products from '@/components/Products';
import { TRENDY_PRODUCT_LIST } from './constants';

function TrendyProducts() {
  return (
    <HeaderSection title='Trendy Products'>
      <Products productList={TRENDY_PRODUCT_LIST} />
    </HeaderSection>
  );
}

export default TrendyProducts;

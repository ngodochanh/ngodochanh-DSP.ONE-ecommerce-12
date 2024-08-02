import HeaderSection from '@/components/HeaderSection';
import Products from '@/components/Products';
import { TRENDY_PRODUCTS } from './constants';

function TrendyProducts() {
  return (
    <HeaderSection title='Trendy Products'>
      <Products productList={TRENDY_PRODUCTS} />
    </HeaderSection>
  );
}

export default TrendyProducts;

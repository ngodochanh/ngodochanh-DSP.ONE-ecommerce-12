import { useTranslations } from 'next-intl';

import Breadcrumb from '@/components/Breadcrumb';
import Segment from '@/components/Segment';

import ProductFilte from './ProductFilter';
import { ProductStore } from '@/app/[locale]/product/ProductStore';

function Products() {
  const t = useTranslations('header');

  const BREADCRUMB_LIST = [
    {
      id: 'home',
      label: t('navigation.home'),
      path: process.env.HOME!,
    },
    {
      id: 'product',
      label: t('navigation.product'),
      path: process.env.PRODUCT!,
    },
  ];

  return (
    <>
      <Breadcrumb breadCrumbList={BREADCRUMB_LIST} />
      <Segment title={t('navigation.product')} />
      <ProductStore>
        <ProductFilte />
      </ProductStore>
    </>
  );
}

export default Products;

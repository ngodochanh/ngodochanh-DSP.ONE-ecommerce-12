import { useTranslations } from 'next-intl';

import Breadcrumb from '@/components/Breadcrumb';
import Segment from '@/components/Segment';
import Banner from '@/components/Banner';

import ProductFilter from './ProductFilter';

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
      <Banner />
      <div className='max-container'>
        <Breadcrumb breadCrumbList={BREADCRUMB_LIST} />
        <Segment title={t('navigation.product')} className='py-5' />
        <ProductFilter />
      </div>
    </>
  );
}

export default Products;

import ProductDetails from './ProductDetails';
import ProductInfo from './ProductInfo';
import Breadcrumb from '@/components/Breadcrumb';
import { PRODUCT_LIST } from '@/constantsProduct';

import type { Metadata, ResolvingMetadata } from 'next';
import { useTranslations } from 'next-intl';

type Props = {
  params: { prod: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const prod = params.prod;

  // const product = await fetch(`https://.../${prod}`).then((res) => res.json());

  return {
    title: prod,
  };
}

// id, image, title, price, originalPrice, gender, color, size, slug

function Prod({ params }: { params: { prod: string } }) {
  const t = useTranslations('header');
  const product = PRODUCT_LIST.find((item) => item.id === Number(params.prod));

  const BREADCRUMB_LISTS = [
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
    {
      id: 'KEY',
      label: product?.title || 'loading...',
      path: process.env.HOME!,
    },
  ];

  return (
    <>
      <Breadcrumb breadCrumbList={BREADCRUMB_LISTS} />
      <div className='max-container '>
        <ProductDetails product={product} />
        <ProductInfo />
      </div>
    </>
  );
}

export default Prod;

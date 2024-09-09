import RelatedProducts from './RelatedProducts';
import ProductDetails from './ProductDetails';
import ProductInfo from './ProductInfo';
import Breadcrumb from '@/components/Breadcrumb';
import { PRODUCT_LIST } from '@/constantsProduct';
import { useTranslations } from 'next-intl';
import { ProductType } from '@/type';
import RecentlyViewedProducts from '@/app/[locale]/product/[prod]/RecentlyViewedProducts/RecentlyViewedProducts';

type Props = {
  params: { prod: string };
};

function Prod({ params }: Props) {
  const t = useTranslations('header');
  const product = PRODUCT_LIST.find((item) => item.id === Number(params.prod));

  const similarProducts = PRODUCT_LIST.reduce<ProductType[]>((acc, currentValue) => {
    if (currentValue.category === product?.category && currentValue.id !== product.id) {
      acc.push(currentValue);
    }
    return acc;
  }, []);

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
      <div className='max-container '>
        <Breadcrumb breadCrumbList={BREADCRUMB_LISTS} />
        <ProductDetails product={product} />
        <ProductInfo />
        <RelatedProducts title='sản phẩm tương tự' productList={similarProducts} />
        <RecentlyViewedProducts product={product} />
      </div>
    </>
  );
}

export default Prod;

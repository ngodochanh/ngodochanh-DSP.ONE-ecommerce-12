import type { Metadata } from 'next';
import RelatedProducts from './RelatedProducts';
import ProductDetails from './ProductDetails';
import ProductInfo from './ProductInfo';
import Breadcrumb from '@/components/Breadcrumb';
import { PRODUCT_LIST } from '@/data';
import { useTranslations } from 'next-intl';
import RecentlyViewedProducts from '@/app/[locale]/product/[prod]/RecentlyViewedProducts/RecentlyViewedProducts';
import { extractIdFromUrl } from '@/utils/extractIdFromUrl';
import { IProduct } from '@/models';

type Props = {
  params: { prod: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = extractIdFromUrl(params.prod);
  const prod = PRODUCT_LIST.find((item) => item.id === id);

  return {
    title: prod?.title,
    description: prod?.description,

    openGraph: {
      title: prod?.title,
      description: prod?.description,
      type: 'website',
      images: [`${prod?.image}`],
    },
  };
}

function Prod({ params }: { params: { prod: string } }) {
  const t = useTranslations('header');
  // Lấy ID của sản phẩm từ URL (URL có thể dùng để SEO)
  const id = extractIdFromUrl(params.prod);
  // Tìm sản phẩm theo ID
  const product = PRODUCT_LIST.find((item) => item.id === id);

  // Tìm các sản phẩm tương tự
  const similarProducts = PRODUCT_LIST.reduce<IProduct[]>((acc, currentValue) => {
    if (currentValue.category === product?.category && currentValue.id !== product.id) {
      acc.push(currentValue);
    }
    return acc;
  }, []);

  // Danh sách breadcrumb
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
      <div className="max-container">
        {/* Thanh điều hướng breadcrumb */}
        <Breadcrumb breadCrumbList={BREADCRUMB_LISTS} />
        {/* Chi tiết sản phẩm */}
        <ProductDetails product={product} />
        {/* Thông tin sản phẩm */}
        <ProductInfo />
        {/* Sản phẩm tương tự */}
        <RelatedProducts title="sản phẩm tương tự" productList={similarProducts} />
        {/* Sản phẩm đã xem gần đây */}
        <RecentlyViewedProducts product={product} />
      </div>
    </>
  );
}

export default Prod;

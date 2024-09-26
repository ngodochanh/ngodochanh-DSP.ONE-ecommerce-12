import type { Metadata } from 'next';
import RelatedProducts from './RelatedProducts';
import ProductDetails from './ProductDetails';
import ProductInfo from './ProductInfo';
import Breadcrumb from '@/components/Breadcrumb';
import { PRODUCT_LIST } from '@/data';
import { useTranslations } from 'next-intl';
import RecentlyViewedProducts from '@/app/[locale]/products/[prod]/RecentlyViewedProducts/RecentlyViewedProducts';
import { extractIdFromUrl } from '@/utils/extractIdFromUrl';
import { IProduct } from '@/models';

type ProdProps = { params: { locale: string; prod: string } };

export async function generateMetadata({ params: { locale, prod } }: ProdProps): Promise<Metadata> {
  const id = extractIdFromUrl(prod);
  const product = PRODUCT_LIST.find((item) => item.id === id);

  return {
    title: product?.title,
    description: product?.description,

    openGraph: {
      title: product?.title,
      description: product?.description,
      type: 'website',
      images: [`${product?.image}`],
    },
  };
}

export async function generateStaticParams() {
  return PRODUCT_LIST.map((product) => ({
    slug: product.slug,
  }));
}

function Prod({ params: { locale, prod } }: ProdProps) {
  const t = useTranslations('header');
  // Lấy ID của sản phẩm từ URL (URL có thể dùng để SEO)
  const id = extractIdFromUrl(prod);
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
      path: process.env.PRODUCTS!,
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
        <Breadcrumb locale={locale} breadCrumbList={BREADCRUMB_LISTS} />
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

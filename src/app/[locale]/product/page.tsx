import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Segment from '@/components/Segment';
import Banner from '@/components/Banner';

import ProductFilter from './ProductFilter';

export const metadata: Metadata = {
  title: 'Sản Phẩm',
  description:
    'Khám phá sản phẩm chất lượng cao với thiết kế hiện đại và tính năng vượt trội. Được làm từ các vật liệu bền bỉ, sản phẩm này mang lại trải nghiệm tuyệt vời và sự tiện ích tối đa cho người dùng. Thích hợp cho nhiều mục đích sử dụng, từ công việc hàng ngày đến các hoạt động giải trí. Đặt hàng ngay hôm nay để tận hưởng chất lượng và phong cách hoàn hảo.',
};

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
      <div className="max-container">
        <Breadcrumb breadCrumbList={BREADCRUMB_LIST} />
        <Segment title={t('navigation.product')} className="py-5" />

        <ProductFilter />
      </div>
    </>
  );
}

export default Products;

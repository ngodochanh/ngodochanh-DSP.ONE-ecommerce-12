import CartDetails from '@/app/[locale]/cart/CartDetails';
import CartTransaction from '@/app/[locale]/cart/CartTransaction';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeader from '@/components/SectionHeader';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Giỏ Hàng | DSP.ONE',
  description:
    'Xem và quản lý các sản phẩm trong giỏ hàng của bạn trên DSP.ONE. Chúng tôi cung cấp các sản phẩm chất lượng với giá tốt nhất.',
};

function Cart({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const BREADCRUMB_LIST = [
    {
      id: 'home',
      label: 'trang chủ',
      path: process.env.HOME!,
    },
    {
      id: 'product',
      label: 'giỏ hàng',
      path: process.env.CART!,
    },
  ];

  return (
    <div className="max-container mb-14">
      <Breadcrumb locale={locale} breadCrumbList={BREADCRUMB_LIST} />

      <SectionHeader title="giỏ hàng" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <CartDetails />
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <CartTransaction />
        </div>
      </div>
    </div>
  );
}

export default Cart;

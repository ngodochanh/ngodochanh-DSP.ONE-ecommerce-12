

import CartDetails from '@/app/[locale]/cart/CartDetails';
import CartTransaction from '@/app/[locale]/cart/CartTransaction';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeader from '@/components/SectionHeader';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

function Cart() {
  const t = useTranslations('header');

  const BREADCRUMB_LIST = [
    {
      id: 'home',
      label: t('navigation.home'),
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
      <Breadcrumb breadCrumbList={BREADCRUMB_LIST} />

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

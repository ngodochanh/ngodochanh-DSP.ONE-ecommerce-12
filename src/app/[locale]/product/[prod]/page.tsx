import Breadcrumb from '@/components/Breadcrumb';
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

function Prod({ params }: { params: { prod: string } }) {
  const t = useTranslations('header');

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
      label: params.prod,
      path: process.env.HOME!,
    },
  ];
  return (
    <div className=''>
      <Breadcrumb breadCrumbList={BREADCRUMB_LISTS} />
      Product: {params.prod}
    </div>
  );
}

export default Prod;

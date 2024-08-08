import { SvgPayment, SvgRiRefund, SvgSupport, SvgTruckDelivery } from '@/components/Svgs';
import ServiceItem from './ServiceItem';
import { useTranslations } from 'next-intl';

function Services() {
  const t = useTranslations('services');

  const SERVICE_LIST = [
    {
      key: 'free_shipping',
      title: t('free_shipping.title'),
      desc: t('free_shipping.desc'),
      Icon: SvgTruckDelivery,
    },
    {
      key: 'secure_payments',
      title: t('secure_payments.title'),
      desc: t('secure_payments.desc'),
      Icon: SvgPayment,
    },
    {
      key: 'ri_refund',
      title: t('ri_refund.title'),
      desc: t('ri_refund.desc'),
      Icon: SvgRiRefund,
    },
    {
      key: 'support',
      title: t('support.title'),
      desc: t('support.desc'),
      Icon: SvgSupport,
    },
  ];

  return (
    <div className='max-container flex justify-between flex-wrap gap-y-[16px] gap-x-[32px] my-[60px]'>
      {SERVICE_LIST.map((service) => (
        <ServiceItem key={service.key} service={service} />
      ))}
    </div>
  );
}

export default Services;

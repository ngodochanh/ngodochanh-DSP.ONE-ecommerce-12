import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlinePayment } from 'react-icons/md';
import { MdSupportAgent } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';

import ServiceItem from './ServiceItem';
import { useTranslations } from 'next-intl';

function Services() {
  const t = useTranslations('services');

  const SERVICE_LIST = [
    {
      key: 'free_shipping',
      title: t('free_shipping.title'),
      desc: t('free_shipping.desc'),
      Icon: TbTruckDelivery,
    },
    {
      key: 'secure_payments',
      title: t('secure_payments.title'),
      desc: t('secure_payments.desc'),
      Icon: MdOutlinePayment,
    },
    {
      key: 'ri_refund',
      title: t('ri_refund.title'),
      desc: t('ri_refund.desc'),
      Icon: RiRefund2Fill,
    },
    {
      key: 'support',
      title: t('support.title'),
      desc: t('support.desc'),
      Icon: MdSupportAgent,
    },
  ];

  return (
    <div className="my-[60px] flex flex-wrap justify-between gap-x-[32px] gap-y-[16px]">
      {SERVICE_LIST.map((service) => (
        <ServiceItem key={service.key} service={service} />
      ))}
    </div>
  );
}

export default Services;

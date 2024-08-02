import { Payment, RiRefund, Support, TruckDelivery } from '@/components/Svgs';

const SERVICE_LIST = [
  {
    key: 'free_shipping',
    title: 'free shipping',
    desc: 'Capped at $10 per order',
    Icon: TruckDelivery,
  },
  {
    key: 'secure_payments',
    title: 'secure payments',
    desc: 'Up to 6 months installments',
    Icon: Payment,
  },
  {
    key: 'ri_refund',
    title: '15-DAYS RETURNS',
    desc: 'Shop with fully confidence',
    Icon: RiRefund,
  },
  {
    key: 'support',
    title: '24X7 FULLY SUPPORT',
    desc: 'Get friendly support',
    Icon: Support,
  },
];

export { SERVICE_LIST };

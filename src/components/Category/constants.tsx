import { Accessory, KidWear, MenWear, Pants, Shoes, Women } from '@/components/Svgs';

const CATEGORIES = [
  {
    key: 'shoes',
    icon: Shoes,
    label: "Men's Shoes",
  },
  {
    key: 'pants',
    icon: Pants,
    label: "Men's Pants",
  },
  {
    key: 'menwear',
    icon: MenWear,
    label: "Men's Wear",
  },
  {
    key: 'kidwear',
    icon: KidWear,
    label: "Kid's Wear",
  },
  {
    key: 'accessory',
    icon: Accessory,
    label: 'Accessories',
  },
  {
    key: 'women',
    icon: Women,
    label: 'Women',
  },
];

export { CATEGORIES };

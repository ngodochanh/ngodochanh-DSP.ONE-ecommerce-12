import ContentHeader from '@/components/ContentHeader';
import { SvgAccessory, SvgKidWear, SvgMenWear, SvgPants, SvgShoes, SvgWomen } from '@/components/Svgs';
import CategoryItem from './CategoryItem';
import { useTranslations } from 'next-intl';

function Category() {
  // Dịch ngôn ngữ
  const t = useTranslations('category');

  const CATEGORY_LIST = [
    {
      key: 'shoes',
      icon: SvgShoes,
      label: t('items.shoes'),
    },
    {
      key: 'pants',
      icon: SvgPants,
      label: t('items.pants'),
    },
    {
      key: 'menwear',
      icon: SvgMenWear,
      label: t('items.menwear'),
    },
    {
      key: 'kidwear',
      icon: SvgKidWear,
      label: t('items.kidwear'),
    },
    {
      key: 'accessory',
      icon: SvgAccessory,
      label: t('items.accessory'),
    },
    {
      key: 'women',
      icon: SvgWomen,
      label: t('items.women'),
    },
  ];

  return (
    <ContentHeader title={t('text')}>
      <div className='mt-[50px] grid grid-cols-auto-fit-category gap-x-4 gap-y-[50px] sm:gap-[50px]'>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.key} Icon={category.icon} label={category.label} />
        ))}
      </div>
    </ContentHeader>
  );
}

export default Category;

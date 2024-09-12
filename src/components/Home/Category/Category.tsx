import ContentHeader from '@/components/ContentHeader';

import CategoryItem from './CategoryItem';
import { useTranslations } from 'next-intl';
import { CATEGORY_LIST } from '@/constantsProduct';

function Category() {
  // Dịch ngôn ngữ
  const t = useTranslations('category');
  const CATEGORIES = Object.values(CATEGORY_LIST);
  return (
    <ContentHeader title={t('text')}>
      <div className="mt-[50px] grid grid-cols-auto-fit-category gap-x-4 gap-y-[50px] sm:gap-[50px]">
        {CATEGORIES.map(
          (category) =>
            category.isVisible && <CategoryItem key={category.value} Icon={category.icon} label={category.label} />,
        )}
      </div>
    </ContentHeader>
  );
}

export default Category;

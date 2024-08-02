import HeaderSection from '@/components/HeaderSection';
import CategoryItem from './CategoryItem';
import { CATEGORY_LIST } from './constants';

function Category() {
  return (
    <HeaderSection title='our categories'>
      <div className='max-container mt-[50px] flex justify-between flex-wrap gap-x-[16px] gap-y-[50px] sm:gap-[50px]'>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.key} Icon={category.icon} label={category.label} />
        ))}
      </div>
    </HeaderSection>
  );
}

export default Category;

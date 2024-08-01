import HeaderSection from '@/components/HeaderSection';
import CategoryItem from './CategoryItem';
import { CATEGORIES } from './constants';

function Category() {
  return (
    <HeaderSection title='our categories'>
      <div className='max-container flex justify-between flex-wrap gap-x-[16px] gap-y-[50px] sm:gap-[50px]'>
        {CATEGORIES.map((category) => (
          <CategoryItem key={category.key} Icon={category.icon} label={category.label} />
        ))}
      </div>
    </HeaderSection>
  );
}

export default Category;

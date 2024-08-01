import CategoryItem from './CategoryItem';
import { CATEGORIES } from './constants';

function Category() {
  return (
    <div className='py-20'>
      <h1 className='title-large mb-[50px]'>our categories</h1>

      <div className='max-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-[50px]'>
        {CATEGORIES.map((category) => (
          <CategoryItem key={category.key} Icon={category.icon} label={category.label} />
        ))}
      </div>
    </div>
  );
}

export default Category;

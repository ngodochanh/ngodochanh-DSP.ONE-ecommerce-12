import Link from 'next/link';

type CategoryItemProps = {
  Icon: React.ElementType;
  label: string;
};

function CategoryItem({ Icon, label }: CategoryItemProps) {
  return (
    <Link href='/' className='hover:text-orange-bright group '>
      <div className=' text-clamp-80 w-clamp-150 h-clamp-150 border rounded-[500px] mx-auto grid group-hover:border-orange-bright transition-colors duration-300 '>
        <Icon className='place-self-center w-clamp-80 h-clamp-80' />
      </div>
      <p className='font-medium text-clamp-24 mt-7 text-center  transition-colors duration-300'>{label}</p>
    </Link>
  );
}

export default CategoryItem;

import Link from 'next/link';

type CategoryItemProps = {
  Icon: React.ElementType;
  label: string;
};

function CategoryItem({ Icon, label }: CategoryItemProps) {
  return (
    <Link href='/' className='hover:text-orange-bright'>
      <div className=' text-clamp-80 w-clamp-150 h-clamp-150 border rounded-[500px] mx-auto grid hover:border-orange-bright'>
        <Icon className='place-self-center w-clamp-80 h-clamp-80' />
      </div>
      <p className='font-medium text-clamp-24 mt-7 text-center'>{label}</p>
    </Link>
  );
}

export default CategoryItem;

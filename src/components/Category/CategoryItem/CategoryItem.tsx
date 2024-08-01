import Link from 'next/link';

type CategoryItemProps = {
  Icon: React.ElementType;
  label: string;
};

function CategoryItem({ Icon, label }: CategoryItemProps) {
  return (
    <Link href='/' className='hover:text-orange-bright'>
      <div className='w-[150px] h-[150px] border rounded-[500px] mx-auto grid hover:border-orange-bright'>
        <Icon className='place-self-center' />
      </div>
      <p className='font-medium text-2xl mt-7 text-center'>{label}</p>
    </Link>
  );
}

export default CategoryItem;

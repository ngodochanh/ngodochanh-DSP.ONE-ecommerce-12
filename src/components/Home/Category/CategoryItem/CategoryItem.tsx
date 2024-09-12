import Link from 'next/link';

type CategoryItemProps = {
  Icon: React.ElementType;
  label: string;
};

function CategoryItem({ Icon, label }: CategoryItemProps) {
  return (
    <Link href="/" className="group hover:text-orange-bright">
      <div className="text-clamp-80 mx-auto grid h-clamp-150 w-clamp-150 rounded-[500px] border transition-colors duration-300 group-hover:border-orange-bright">
        <Icon className="h-clamp-80 w-clamp-80 place-self-center" />
      </div>
      <p className="mt-7 text-center text-clamp-24 font-medium capitalize transition-colors duration-300">{label}</p>
    </Link>
  );
}

export default CategoryItem;

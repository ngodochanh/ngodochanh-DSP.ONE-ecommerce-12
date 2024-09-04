type ProductServiceProps = {
  description: string;
  Icon: React.ElementType;
};

function ProductService({ description, Icon }: ProductServiceProps) {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='w-clamp-22 h-clamp-24'>
        <Icon className='w-full h-full object-contain' />
      </div>
      <p className='text-clamp-16 font-normal'>{description}</p>
    </div>
  );
}

export default ProductService;

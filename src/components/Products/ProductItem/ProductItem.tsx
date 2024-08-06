import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@/components/Svgs';
import { Product } from '../Products';

type ProductItemProps = {
  prod: Product;
};

const formatPrice = (price: string | number): string => {
  const numberPrice = typeof price === 'number' ? price : parseFloat(price);
  const formattedPrice = numberPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return `€ ${formattedPrice}`;
};

function ProductItem({ prod }: ProductItemProps) {
  const { id, path, image, title, price } = prod;
  const formattedPrice = formatPrice(price);

  return (
    <Link href={path} className='block  w-full'>
      <div className='relative h-[430px] rounded-[10px] mb-[13.41px] overflow-hidden'>
        <Image
          src={image}
          alt={'product ' + title}
          sizes='(max-width: 640px) 100vw, 50vw'
          fill
          loading='lazy'
          className='object-cover'
        />
      </div>

      <div className='flex-between-center'>
        <div>
          <h4 className='font-semibold text-clamp-28 text-gray-deep capitalize leading-[38px] mb-[10px] line-clamp-1'>
            {title}
          </h4>
          <p className='font-normal text-clamp-22 text-gray-medium leading-[30px]'>{formattedPrice}</p>
        </div>

        <ArrowRight className='text-gray-dark w-clamp-18' />
      </div>
    </Link>
  );
}

export default ProductItem;

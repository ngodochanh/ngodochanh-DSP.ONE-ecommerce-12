import Image from 'next/image';
import Link from 'next/link';

import getLocalizedPath from '@/utils/getLocalizedPath ';
import { SvgArrowRight } from '@/components/Svgs';
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
  const { id, image, title, price } = prod;
  const formattedPrice = formatPrice(price);

  return (
    <Link href={getLocalizedPath(`${process.env.PRODUCT}/${id}`)} className='block w-full group'>
      <div className='relative h-[430px] rounded-[10px] mb-[13.41px] overflow-hidden'>
        <Image
          src={image}
          alt={'product ' + title}
          sizes='(max-width: 640px) 100vw, 50vw'
          fill
          loading='lazy'
          className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
        />
      </div>

      <div className='flex justify-between items-center'>
        <div>
          <h4 className='font-semibold text-clamp-28 text-gray-deep capitalize leading-[38px] mb-[10px] line-clamp-1 group-hover:text-orange-bright transition-colors duration-300 ease-in-out'>
            {title}
          </h4>
          <p className='font-normal text-clamp-22 text-gray-medium leading-[30px]'>{formattedPrice}</p>
        </div>

        <SvgArrowRight className='text-gray-dark w-clamp-18' />
      </div>
    </Link>
  );
}

export default ProductItem;

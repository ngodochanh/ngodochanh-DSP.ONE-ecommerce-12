import Image from 'next/image';
import Link from 'next/link';

import getLocalizedPath from '@/utils/getLocalizedPath ';
import { SvgArrowRight } from '@/components/Svgs';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import { ProductType } from '@/type';

type ProductItemProps = {
  prod: ProductType;
};

function ProductItem({ prod }: ProductItemProps) {
  const { id, image, title, price, originalPrice } = prod;

  return (
    <Link href={getLocalizedPath(`${process.env.PRODUCT}/${id}`)} className='flex flex-col w-full group'>
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

      <div className='flex-grow grid grid-cols-[auto_18px] gap-x-2'>
        <div className='h-full flex flex-col'>
          <h4 className='font-semibold text-clamp-28 text-gray-deep capitalize mb-[10px]  group-hover:text-orange-bright transition-colors duration-300 ease-in-out flex-1 overflow-hidden line-clamp-2'>
            {title}
          </h4>
          <div className='flex gap-x-5 justify-between items-center'>
            <strong className='text-clamp-32 text-red-bright'>{formatCurrencyVND(price)}</strong>
            <div className='text-clamp-16'>
              <p className='line-through text-gray-mute'>{originalPrice !== 0 && formatCurrencyVND(originalPrice)}</p>
              <p className='text-red-bright'>
                {originalPrice !== 0 && 'Khuyến mãi ' + calculateDiscountPercentage(price, originalPrice)}
              </p>
            </div>
          </div>
        </div>

        <SvgArrowRight className='text-gray-dark my-auto' />
      </div>
    </Link>
  );
}

export default ProductItem;

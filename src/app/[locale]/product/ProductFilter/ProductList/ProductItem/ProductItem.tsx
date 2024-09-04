import { ProductType } from '@/type';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import Image from 'next/image';
import Link from 'next/link';

function ProductItem({ id, image, title, price, originalPrice, slug }: ProductType) {
  return (
    <li className='flex-1 min-w-72'>
      <Link href={getLocalizedPath(process.env.PRODUCT + '/' + id)} className='group'>
        <div className='relative h-[430px] rounded-[10px] overflow-hidden mb-[15px]'>
          <Image
            src={image}
            alt={title}
            sizes='(max-width: 640px) 100vw, 50vw'
            fill
            loading='lazy'
            className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
          />
        </div>
        <div>
          <h5 className='line-clamp-2 font-semibold text-clamp-24 pb-[15px] group-hover:text-orange-bright transition-colors duration-300 ease-in-out overflow-hidden'>
            {title}
          </h5>
          <div className='flex gap-x-5 justify-between'>
            <strong className='text-clamp-32 text-red-bright leading-[43px]'>{formatCurrencyVND(price)}</strong>
            <div className='text-clamp-16'>
              <p className='line-through text-gray-muted leading-4 mb-1'>{formatCurrencyVND(originalPrice)}</p>
              <p className='text-red-bright leading-4'>
                Khuyến mãi {calculateDiscountPercentage(price, originalPrice)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;

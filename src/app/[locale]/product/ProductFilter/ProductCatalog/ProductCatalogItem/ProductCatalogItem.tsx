import { ProductType } from '@/type';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import Image from 'next/image';
import Link from 'next/link';

function ProductCatalogItem(product: ProductType) {
  return (
    <li>
      <Link
        href={getLocalizedPath(`${process.env.PRODUCT}/${product.slug}-${product.id}.html`)}
        className='group flex flex-col h-full'
      >
        <div className='relative h-[430px] rounded-[10px] overflow-hidden mb-[15px]'>
          <Image
            src={product.image}
            alt={product.title}
            sizes='(max-width: 640px) 100vw, 50vw'
            fill
            loading='lazy'
            className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
          />
        </div>
        <div className='flex flex-col flex-grow'>
          <h5 className='font-semibold text-clamp-24 mb-[15px] group-hover:text-orange-bright transition-colors duration-300 ease-in-out flex-grow line-clamp-2'>
            {product.title}
          </h5>
          <div className='flex gap-x-5 justify-between items-center'>
            <strong className='text-clamp-32 text-red-bright'>{formatCurrencyVND(product.price)}</strong>
            <div className='text-clamp-16'>
              <p className='line-through text-gray-mute'>
                {product.originalPrice !== 0 && formatCurrencyVND(product.originalPrice)}
              </p>
              <p className='text-red-bright'>
                {product.originalPrice !== 0 &&
                  'Khuyến mãi ' + calculateDiscountPercentage(product.price, product.originalPrice)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCatalogItem;

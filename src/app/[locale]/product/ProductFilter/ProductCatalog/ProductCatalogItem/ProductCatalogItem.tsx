import { IProduct } from '@/types';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import Image from 'next/image';
import Link from 'next/link';

function ProductCatalogItem(product: IProduct) {
  return (
    <li>
      <Link
        href={getLocalizedPath(`${process.env.PRODUCT}/${product.slug}-${product.id}.html`)}
        className="group flex h-full flex-col"
      >
        <div className="relative mb-[15px] h-[430px] overflow-hidden rounded-[10px]">
          <Image
            src={product.image}
            alt={product.title}
            sizes="(max-width: 640px) 100vw, 50vw"
            fill
            loading="lazy"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-grow flex-col">
          <h5 className="mb-[15px] line-clamp-2 flex-grow text-clamp-24 font-semibold transition-colors duration-300 ease-in-out group-hover:text-orange-bright">
            {product.title}
          </h5>
          <div className="flex items-center justify-between gap-x-5">
            <strong className="text-clamp-32 text-red-bright">{formatCurrencyVND(product.price)}</strong>
            <div className="text-clamp-16">
              <p className="text-gray-mute line-through">
                {product.originalPrice !== 0 && formatCurrencyVND(product.originalPrice)}
              </p>
              <p className="text-red-bright">
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

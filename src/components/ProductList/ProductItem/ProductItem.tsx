import Image from 'next/image';
import Link from 'next/link';

import { SvgArrowRight } from '@/components/Svgs';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import { ProductType } from '@/type';
import getLocalizedPath from '@/utils/getLocalizedPath ';

type ProductItemProps = {
  product: ProductType;
};

function ProductItem({ product }: ProductItemProps) {
  // Xử lý đường dẫn sản phẩm với kiểm tra lỗi
  const productPath = getLocalizedPath(`${process.env.PRODUCT}/${product.slug}-${product.id}.html`);

  // Kiểm tra hình ảnh sản phẩm hợp lệ
  const productImage = product.image ?? '/default-product-image.jpg';

  // Tính toán giá hiển thị
  const displayPrice = formatCurrencyVND(product.price);
  const originalPriceDisplay = product.originalPrice ? formatCurrencyVND(product.originalPrice) : '';
  const discountDisplay = product.originalPrice
    ? `Khuyến mãi ${calculateDiscountPercentage(product.price, product.originalPrice)}`
    : '';

  return (
    <Link href={productPath} className='flex flex-col w-full group'>
      <div className='relative h-[430px] rounded-[10px] mb-[13.41px] overflow-hidden'>
        <Image
          src={productImage}
          alt={`product ${product.title}`}
          sizes='(max-width: 640px) 100vw, 50vw'
          fill
          loading='lazy'
          className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
        />
      </div>

      <div className='flex-grow grid grid-cols-[auto_18px] gap-x-2'>
        <div className='h-full flex flex-col'>
          <h4 className='font-semibold text-clamp-28 text-gray-deep capitalize mb-[10px] group-hover:text-orange-bright transition-colors duration-300 ease-in-out flex-1 overflow-hidden line-clamp-2'>
            {product.title}
          </h4>
          <div className='flex gap-x-5 justify-between items-center'>
            <strong className='text-clamp-32 text-red-bright'>{displayPrice}</strong>
            <div className='text-clamp-16'>
              {product.originalPrice !== 0 && (
                <>
                  <p className='line-through text-gray-mute'>{originalPriceDisplay}</p>
                  <p className='text-red-bright'>{discountDisplay}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <SvgArrowRight className='text-gray-dark my-auto' />
      </div>
    </Link>
  );
}

export default ProductItem;

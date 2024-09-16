import Image from 'next/image';
import Link from 'next/link';

import { IoIosArrowRoundForward } from 'react-icons/io';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import { IProduct } from '@/types';
import getLocalizedPath from '@/utils/getLocalizedPath ';

type ProductItemProps = {
  product: IProduct;
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
    <Link href={productPath} className="group flex w-full flex-col">
      <div className="relative mb-[13.41px] h-[430px] overflow-hidden rounded-[10px]">
        <Image
          src={productImage}
          alt={`product ${product.title}`}
          sizes="(max-width: 640px) 100vw, 50vw"
          fill
          loading="lazy"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="grid flex-grow grid-cols-[auto_18px] gap-x-2">
        <div className="flex h-full flex-col">
          <h4 className="mb-[10px] line-clamp-2 flex-1 overflow-hidden text-clamp-28 font-semibold capitalize text-gray-deep transition-colors duration-300 ease-in-out group-hover:text-orange-bright">
            {product.title}
          </h4>
          <div className="flex items-center justify-between gap-x-5">
            <strong className="text-clamp-32 text-red-bright">{displayPrice}</strong>
            <div className="text-clamp-16">
              {product.originalPrice !== 0 && (
                <>
                  <p className="text-gray-mute line-through">{originalPriceDisplay}</p>
                  <p className="text-red-bright">{discountDisplay}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <IoIosArrowRoundForward className="my-auto h-full w-clamp-32 text-gray-dark" />
      </div>
    </Link>
  );
}

export default ProductItem;

import { ProductType } from '@/type';
import { PRODUCT_SERVICE_LIST } from '@/app/[locale]/product/constants';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import StarRating from '@/components/StarRating';
import ProductService from './ProductService';
import ProductWrapper from '@/app/[locale]/product/[prod]/ProductWrapper';
import ProductAddToCart from './ProductAddToCart';
import ProductImageGallery from '@/app/[locale]/product/[prod]/ProductDetails/ProductImageGallery';

function ProductDetails({ product }: { product: ProductType | undefined }) {
  return (
    <ProductWrapper>
      {product ? (
        <div className='flex flex-col lg:flex-row gap-[50px] text-dark-charcoal'>
          <div className='space-y-[15px] flex-1'>
            {/* Tiêu đề */}
            <h1 className='font-bold text-clamp-32'>{product.title}</h1>
            {/* Đánh giá */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-x-[10px]'>
                <StarRating initialRating={product.rating} isInteractive={false} />
                <span>
                  ({product.rating} / {product.total_reviews} đáng giá)
                </span>
              </div>

              <div></div>
            </div>
            {/* Tình trạng */}
            <p className='text-clamp-15 font-normal'>
              Tình trạng: <span className='font-semibold text-red-bright'>Còn hàng</span>
            </p>
            {/* Giá */}
            <div className='flex gap-x-5 justify-between'>
              <strong className='text-clamp-32 text-red-bright leading-[43px]'>
                {formatCurrencyVND(product?.price)}
              </strong>
              <div className='text-clamp-16'>
                <p className='line-through text-gray-muted leading-4 mb-1'>
                  {formatCurrencyVND(product?.originalPrice)}
                </p>
                <p className='text-red-bright leading-4'>
                  Khuyến mãi {calculateDiscountPercentage(product.price, product.originalPrice)}
                </p>
              </div>
            </div>
            {/* Mã */}
            <p>Mã sản phẩm: {product.id}</p>
            {/* Mô tả */}
            <article className='prose lg:prose-xl text-justify'>{product.description}</article>
            {/*  Dịch vụ */}
            <div className='space-y-[15px]'>
              {PRODUCT_SERVICE_LIST.map((item) => (
                <ProductService key={item.id} {...item} />
              ))}
            </div>
            {/* Form */}
            <ProductAddToCart product={product} />
          </div>

          <div className='flex-1 overflow-hidden'>
            <ProductImageGallery id={product.id} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </ProductWrapper>
  );
}

export default ProductDetails;

import { PRODUCT_SERVICE_LIST } from '@/app/[locale]/products/constants';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import StarRating from '@/components/StarRating';
import ProductService from './ProductService';
import ProductWrapper from '@/app/[locale]/products/[prod]/ProductWrapper';
import ProductAddToCart from './ProductAddToCart';
import ProductImageGallery from '@/app/[locale]/products/[prod]/ProductDetails/ProductImageGallery';
import { IProduct } from '@/models';

function ProductDetails({ product }: { product: IProduct | undefined }) {
  return (
    <ProductWrapper>
      {product ? (
        <div className="flex flex-col gap-[50px] text-dark-charcoal lg:flex-row">
          <div className="flex-1 space-y-[15px]">
            {/* Tiêu đề */}
            <h1 className="text-clamp-32 font-bold">{product.title}</h1>
            {/* Đánh giá */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-[10px]">
                <StarRating initialRating={product.rating} isInteractive={false} />
                <span>
                  ({product.rating} / {product.total_reviews} đáng giá)
                </span>
              </div>

              <div></div>
            </div>
            {/* Tình trạng */}
            <p className="text-clamp-15 font-normal">
              Tình trạng: <span className="font-semibold text-red-bright">Còn hàng</span>
            </p>
            {/* Giá */}
            <div className="flex justify-between gap-x-5">
              <strong className="text-clamp-32 text-red-bright">{formatCurrencyVND(product?.price)}</strong>
              <div className="text-clamp-16">
                <p className="mb-1 text-gray-muted line-through">
                  {product?.originalPrice !== 0 && formatCurrencyVND(product?.originalPrice)}
                </p>
                <p className="text-red-bright">
                  {product?.originalPrice !== 0 &&
                    ' Khuyến mãi ' + calculateDiscountPercentage(product.price, product.originalPrice)}
                </p>
              </div>
            </div>
            {/* Mã */}
            <p>Mã sản phẩm: {product.id}</p>
            {/* Mô tả */}
            <p className="prose lg:prose-xl text-justify">{product.description}</p>
            {/*  Dịch vụ */}
            <div className="space-y-[15px]">
              {PRODUCT_SERVICE_LIST.map((item) => (
                <ProductService key={item.id} {...item} />
              ))}
            </div>
            {/* Form */}
            <ProductAddToCart product={product} />
          </div>

          <div className="flex-1 overflow-hidden">
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

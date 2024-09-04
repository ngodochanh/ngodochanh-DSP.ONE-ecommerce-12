import ProductService from '@/app/[locale]/product/[prod]/ProductService';
import { PRODUCT_SERVICE_LIST } from '@/app/[locale]/product/constants';
import Breadcrumb from '@/components/Breadcrumb';
import StarRating from '@/components/StarRating';
import { SvgMinus, SvgPlus } from '@/components/Svgs';
import { PRODUCT_LIST } from '@/constantsProduct';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import { Button } from '@nextui-org/react';
import type { Metadata, ResolvingMetadata } from 'next';
import { useTranslations } from 'next-intl';

type Props = {
  params: { prod: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const prod = params.prod;

  // const product = await fetch(`https://.../${prod}`).then((res) => res.json());

  return {
    title: prod,
  };
}

// id, image, title, price, originalPrice, gender, color, size, slug

function Prod({ params }: { params: { prod: string } }) {
  const t = useTranslations('header');
  const product = PRODUCT_LIST.find((item) => item.id === Number(params.prod));

  const BREADCRUMB_LISTS = [
    {
      id: 'home',
      label: t('navigation.home'),
      path: process.env.HOME!,
    },
    {
      id: 'product',
      label: t('navigation.product'),
      path: process.env.PRODUCT!,
    },
    {
      id: 'KEY',
      label: product?.title || 'loading...',
      path: process.env.HOME!,
    },
  ];

  return (
    <>
      <Breadcrumb breadCrumbList={BREADCRUMB_LISTS} />
      {product ? (
        <div className='max-container flex text-dark-charcoal'>
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
            <form className='space-y-[15px]'>
              <div className='py-[15px] flex gap-x-[29px] items-center'>
                <span className='text-clamp-24 font-semibold'>Số lượng</span>
                <div className='border-1 border-solid border-gray-very-light max-w-[158px] w-full flex items-center'>
                  <Button className='min-w-fit w-[46px] bg-transparent p-0 border-r-1 rounded-none hover:bg-default-100'>
                    <SvgMinus className='w-clamp-16' />
                  </Button>

                  <span className='flex-1 text-clamp-16 font-semibold text-center'>1</span>

                  <Button className='min-w-fit w-[46px] bg-transparent p-0 border-l-1 rounded-none hover:bg-default-100'>
                    <SvgPlus className='w-clamp-16' />
                  </Button>
                </div>
              </div>
              <div className='flex gap-x-[5px]'>
                <Button className='rounded-md flex-1 bg-yellow-bright text-white h-12 !text-clamp-18'>Mua ngay</Button>
                <Button className='rounded-md flex-1 bg-white border-dark-charcoal border-1 border-solid h-12 !text-clamp-18 hover:bg-default-100'>
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </form>
          </div>

          <div className='flex-1'></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Prod;

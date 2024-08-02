import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@/components/Svgs';

type Product = {
  id: string;
  image: string;
  title: string;
  price: string | number;
};

const formatPrice = (price: string | number): string => {
  const numberPrice = typeof price === 'number' ? price : parseFloat(price);
  const formattedPrice = numberPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return `€ ${formattedPrice}`;
};

function ProductItem({ prod }: { prod: Product }) {
  const { id, image, title, price } = prod;
  const formattedPrice = formatPrice(price);

  return (
    <Link href='/' className='block  w-full'>
      <div className='relative h-[430px] rounded-[10px] mb-[13.41px] overflow-hidden'>
        <Image src={image} alt={'product ' + title} layout='fill' objectFit='cover' loading='lazy' />
      </div>

      <div className='flex-between-center'>
        <div>
          <h4 className='font-semibold text-[28px] text-gray-deep capitalize leading-[38px] mb-[10px] line-clamp-1'>
            {title}
          </h4>
          <p className='font-normal text-[22px] text-gray-medium leading-[30px]'>{formattedPrice}</p>
        </div>

        <ArrowRight className='text-gray-dark' />
      </div>
    </Link>
  );
}

export default ProductItem;

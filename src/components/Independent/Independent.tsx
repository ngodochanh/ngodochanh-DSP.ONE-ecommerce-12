import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from '@/components/Svgs';

function Independent() {
  return (
    <div className='flex flex-col lg:flex-row-reverse py-[60px] gap-[50px] lg:gap-[100px] xl:gap-[135px]'>
      {/* Image */}
      <div className='relative lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1011px] w-full aspect-[16/9]'>
        <Image
          src='/images/independent/hand-bones-say-hi.png'
          alt="Hand bones say hi women's classic t-shirt"
          layout='fill'
          objectFit='cover'
          loading='lazy'
        />
      </div>

      {/* Content */}
      <div className='my-auto pl-4 pr-4 lg:pr-0'>
        <h3 className='font-semibold text-[40px] mb-[15px] text-gray-deepest text-center lg:text-left'>
          Women's Fashion
        </h3>

        <p className='font-normal text-lg text-justify lg:max-w-[531px] w-full leading-[25.2px] mb-12'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>

        <Link
          href='/'
          className='flex-center gap-x-[5px] rounded max-w-[184px] w-full border-2 border-solid border-black py-4 px-[35px]'
        >
          Shop now
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}

export default Independent;

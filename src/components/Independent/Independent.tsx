import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from '@/components/Svgs';

function Independent() {
  return (
    <div className='max-container flex flex-col-reverse lg:flex-row py-[60px] gap-[50px] lg:gap-[100px] 2xl:gap-0 '>
      {/* Content */}
      <div className='my-auto lg:pr-0'>
        <h3 className='font-semibold text-clamp-40 mb-[15px] text-gray-deepest text-center lg:text-left'>
          Women's Fashion
        </h3>

        <p className='font-normal text-clamp-18 text-justify lg:max-w-[531px] 2xl:w-[531px] w-full leading-[25.2px] mb-12'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>

        <Link
          href='/'
          className='flex-center gap-x-[5px] rounded max-w-[184px] w-full border-2 border-solid border-black py-4 px-[35px]'
        >
          Shop now
          <ChevronRight className='w-clamp-24' />
        </Link>
      </div>

      {/* Image */}
      <div className='relative 2xl:right-[calc(-50vw+50%)] 3xl:-right-[242px] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1011px] w-full aspect-[16/9] overflow-hidden'>
        <Image
          src='/images/independent/hand-bones-say-hi.png'
          alt="Hand bones say hi women's classic t-shirt"
          layout='fill'
          objectFit='cover'
          loading='lazy'
        />
      </div>
    </div>
  );
}

export default Independent;

import Image from 'next/image';
import Link from 'next/link';
import { SvgChevronRight } from '@/components/Svgs';
import { useTranslations } from 'next-intl';

function Independent() {
  const t = useTranslations('independent');

  return (
    <div className='2xl:overflow-x-hidden'>
      <div className='max-container flex flex-col-reverse lg:flex-row py-[60px] gap-[50px] lg:gap-[100px] 2xl:gap-0 '>
        {/* Content */}
        <div className='my-auto lg:pr-0'>
          <h3 className='font-semibold text-clamp-40 mb-[15px] text-gray-deepest text-center lg:text-left'>
            {t('text')}
          </h3>

          <p className='font-normal text-clamp-18 text-justify lg:max-w-[531px] 2xl:w-[531px] w-full mb-12 line-clamp-6'>
            {t('description')}
          </p>

          <Link
            href='/'
            className='flex justify-center items-center gap-x-[5px] rounded max-w-[184px] w-full border-2 border-solid border-black py-4 px-[35px] bg-orange-bright duration-500 z-10 hover:text-white relative before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:origin-left before:transition-transform before:duration-500 before:ease-in-out before:scale-x-100 hover:before:origin-right hover:before:duration-500 hover:before:ease-in-out hover:before:scale-x-0'
          >
            {t('button.text')}
            <SvgChevronRight className='w-clamp-24' />
          </Link>
        </div>

        {/* Image */}
        <div className='relative 2xl:right-[calc(-50vw+50%)] 3xl:-right-[242px] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1011px] w-full aspect-[16/9] overflow-hidden'>
          <Image
            src='/images/independent/hand-bones-say-hi.png'
            alt="Hand bones say hi women's classic t-shirt"
            fill
            sizes='(max-width: 640px) 100vw, 50vw'
            loading='lazy'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default Independent;

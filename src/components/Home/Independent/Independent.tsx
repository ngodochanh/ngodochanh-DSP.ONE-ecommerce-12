import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { useTranslations } from 'next-intl';

function Independent() {
  const t = useTranslations('independent');

  return (
    <div className="2xl:overflow-x-hidden">
      <div className="max-container flex flex-col-reverse gap-[50px] py-[60px] lg:flex-row lg:gap-[100px] 2xl:gap-0">
        {/* Content */}
        <div className="my-auto lg:pr-0">
          <h3 className="mb-[15px] text-center text-clamp-40 font-semibold text-gray-deepest lg:text-left">
            {t('text')}
          </h3>

          <p className="mb-12 line-clamp-6 w-full text-justify text-clamp-18 font-normal lg:max-w-[531px] 2xl:w-[531px]">
            {t('description')}
          </p>

          <Link
            href="/"
            className='relative z-10 flex w-full max-w-[184px] items-center justify-center gap-x-[5px] rounded border-2 border-solid border-black bg-orange-bright px-[35px] py-4 duration-500 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-left before:scale-x-100 before:bg-white before:transition-transform before:duration-500 before:ease-in-out before:content-[""] hover:text-white hover:before:origin-right hover:before:scale-x-0 hover:before:duration-500 hover:before:ease-in-out'
          >
            {t('button.text')}
            <IoIosArrowForward className="h-full w-clamp-16" />
          </Link>
        </div>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden lg:max-w-[800px] xl:max-w-[900px] 2xl:right-[calc(-50vw+50%)] 2xl:max-w-[1011px] 3xl:-right-[242px]">
          <Image
            src="/images/independent/hand-bones-say-hi.png"
            alt="Hand bones say hi women's classic t-shirt"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Independent;

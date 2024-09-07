import { SvgSearch } from '@/components/Svgs';
import { useTranslations } from 'next-intl';
import { memo } from 'react';

function HeaderSearch({ isSearchOpen, onCloseSearch }: { isSearchOpen: boolean; onCloseSearch: () => void }) {
  const t = useTranslations('header');
  return (
    <>
      {/* Overlay header search */}
      <div
        className={`absolute top-full left-0 right-0 h-screen bg-black/50 z-20 ${
          isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        } transition-all ease-in-out duration-500 sm:w-0`}
        onClick={() => onCloseSearch()}
      ></div>

      <form
        action=''
        className={`bg-gray-lightest text-gray-light rounded-[500px] sm:max-w-[220px] md:max-w-[276px] lg:max-w-[180px] xl:max-w-[220px] xl:w-[276px] absolute lg:static top-full left-0 sm:top-2/4 sm:left-2/4  ${
          isSearchOpen ? 'w-full opacity-100' : ' w-0 opacity-0'
        } transition-all ease-in-out duration-500 flex sm:w-full sm:opacity-100 sm:-translate-x-2/4 lg:translate-x-0 sm:-translate-y-2/4 lg:translate-y-0 z-40 shadow-inner sm:shadow-none`}
      >
        <div className='py-3 pl-5 lg:pl-2 xl:pl-5 pr-3 lg:pr-2 xl:pr-3 cursor-pointer'>
          <SvgSearch className='w-clamp-20' />
        </div>
        <input
          type='text'
          placeholder={t('search.placeholder')}
          className='bg-transparent outline-none w-full pr-5 text-clamp-16'
        />
      </form>
    </>
  );
}

export default memo(HeaderSearch);

import dynamic from 'next/dynamic';
import { SvgLanguage, SvgPhoneCall } from '@/components/Svgs';
const Language = dynamic(() => import('./Language'), { ssr: false });

import { LANGUAGES } from './constants';
import { useTranslations } from 'next-intl';

export type LanguageType = {
  key: string;
  name: string;
};

function TopBar() {
  const t = useTranslations('topBar');

  return (
    <div className='bg-black py-[1.5px] text-clamp-14 font-normal'>
      <div className='max-container flex-between-center text-white '>
        {/* Hotline  */}
        <div className='flex-center gap-x-[5px]'>
          <SvgPhoneCall className='w-clamp-14' />
          <p>
            <span className='hidden sm:inline'>{t('hotline')}:</span> (+84) 903883083
          </p>
        </div>

        {/* Follow Us */}
        <p className='hidden md:block'>{t('follow_us')}</p>

        {/* Language  */}
        <div className='flex-center gap-x-[5px]'>
          <SvgLanguage className='w-clamp-14' />
          {t('language.text')}:
          <Language inputPlaceholder={t('language.placeholder')} languageList={LANGUAGES} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

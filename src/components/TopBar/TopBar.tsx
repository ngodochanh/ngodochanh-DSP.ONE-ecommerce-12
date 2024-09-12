import dynamic from 'next/dynamic';
import { MdLanguage } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';

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
    <div className="z-40 bg-black py-[1.5px] text-clamp-14 font-normal">
      <div className="max-container flex items-center justify-between text-white">
        {/* Hotline  */}
        <div className="flex items-center justify-center gap-x-[5px]">
          <BiSolidPhoneCall className="h-full w-clamp-16" />
          <p>
            <span className="hidden sm:inline">{t('hotline')}:</span> (+84) 903883083
          </p>
        </div>

        {/* Follow Us */}
        <p className="hidden md:block">{t('follow_us')}</p>

        {/* Language  */}
        <div className="flex items-center justify-center gap-x-[5px]">
          <MdLanguage className="h-full w-clamp-16" />
          {t('language.text')}:
          <Language inputPlaceholder={t('language.placeholder')} languageList={LANGUAGES} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

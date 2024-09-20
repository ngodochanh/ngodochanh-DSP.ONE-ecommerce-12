import Logo from '@/components/Logo';
import { LINK_LIST, SOCIAL_LIST } from './constants';
import Link from 'next/link';
import Image from 'next/image';

import AppStore from '/public/images/app_download/app_store.png';
import GooglePlay from '/public/images/app_download/google_play.png';
import { BsEnvelopeFill } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('footer');
  return (
    <div className="-translate-y-[1px] bg-black text-clamp-16 text-white">
      <div className="max-container flex flex-col flex-wrap justify-between gap-x-12 gap-y-[60px] pb-[81px] pt-[61px] lg:flex-row">
        {/* Logo and contacts */}
        <div>
          <Logo textColor="text-white" className="mb-9 mt-2" />

          {/* Info */}
          <div className="mb-[10px]">
            <p className="sm:inline-block sm:w-fit">{t('info.address.street')},</p>{' '}
            <p className="sm:inline-block sm:w-fit">{t('info.address.ward')},</p>{' '}
            <p className="sm:inline-block sm:w-fit">
              {t('info.address.district')}, {t('info.address.city')}, {t('info.address.country')}
            </p>
          </div>

          <p className="mb-[10px]">
            Email:{' '}
            <a href="mailto:info@dspone.com" className="hover:text-orange-bright">
              info@dspone.com
            </a>
          </p>

          <p className="mb-5">
            {t('info.hotline')}:{' '}
            <a href="tel:+84985909720" className="hover:text-orange-bright">
              (+84) 985 909 720
            </a>
          </p>

          {/* Social */}
          <div className="flex gap-5">
            {SOCIAL_LIST.map((social) => {
              const { key, href, Icon } = social;
              return (
                <Link
                  href={href}
                  key={key}
                  className="h-clamp-35 w-clamp-35 rounded-full bg-white text-blue-strong hover:text-orange-bright"
                >
                  <Icon className="mx-auto h-full w-clamp-18" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-x-8 gap-y-[60px] xl:gap-x-12">
          {/* Introduce */}
          <ul className="space-y-[6px]">
            <li>
              <h5 className="font-semibold">{t('introduce.text')}</h5>
            </li>
            {LINK_LIST.map((item) => (
              <li key={item.key} className="font-normal capitalize hover:text-orange-bright">
                <Link href={item.href}>{t(`introduce.item.${item.key}`)}</Link>
              </li>
            ))}
          </ul>

          {/* App download */}
          <div>
            <h5 className="pb-3 font-semibold">{t('app_download.text')}</h5>

            <Link href="/" className="block pb-[10px]">
              <Image
                src={AppStore}
                alt="Download App Store"
                width={150}
                height={43.33}
                loading="lazy"
                className="h-[43.33px] w-auto"
              />
            </Link>

            <Link href="/" className="block pb-[10px]">
              <Image
                src={GooglePlay}
                alt="Download Google Play"
                width={150}
                height={43.33}
                loading="lazy"
                className="h-[43.33px] w-auto"
              />
            </Link>
          </div>

          {/* Send gmail */}
          <div className="w-full max-w-[382px]">
            <h5 className="pb-3 font-semibold">{t('send_gmail.title')}</h5>

            <form
              action=""
              className="mb-3 flex h-[48px] items-center justify-between rounded bg-white-25 px-4 py-[10px]"
            >
              <input
                type="text"
                className="flex-grow bg-transparent outline-none"
                placeholder={t('send_gmail.input.placeholder')}
              />
              <button
                type="submit"
                className="text-blue-strong transition-colors duration-500 ease-in-out hover:text-white"
              >
                <BsEnvelopeFill />
              </button>
            </form>

            <p className="text-clamp-14 font-light">{t('send_gmail.description')}</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-5 text-center font-normal">{t('copyright')}</p>
    </div>
  );
}

export default Footer;

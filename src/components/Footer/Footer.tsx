import Logo from '@/components/Logo';
import { LINK_LIST, SOCIAL_LIST } from './constants';
import Link from 'next/link';
import Image from 'next/image';

import AppStore from '/public/images/app_download/app_store.png';
import GooglePlay from '/public/images/app_download/google_play.png';
import { SvgEnvelope } from '@/components/Svgs';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('footer');
  return (
    <div className='bg-black text-white text-clamp-16 -translate-y-[1px]'>
      <div className='max-container pt-[61px] pb-[81px] flex justify-between flex-wrap gap-x-12 gap-y-[60px]'>
        {/* Logo and contacts */}
        <div>
          <Logo textColor='text-white' className='mb-9 mt-2' />

          {/* Info */}
          <div className='mb-[10px] leading-[18.2px]'>
            <p className='sm:w-fit sm:inline-block'>{t('info.address.street')},</p>{' '}
            <p className='sm:w-fit sm:inline-block'>{t('info.address.ward')},</p>{' '}
            <p className='sm:w-fit sm:inline-block'>
              {t('info.address.district')}, {t('info.address.city')}, {t('info.address.country')}
            </p>
          </div>

          <p className='mb-[10px]'>
            Email: <a href='mailto:info@dspone.com'>info@dspone.com</a>
          </p>

          <p className='mb-5'>
            {t('info.hotline')}: <a href='tel:+84985909720'>(+84) 985 909 720</a>
          </p>

          {/* Social */}
          <div className='flex gap-5'>
            {SOCIAL_LIST.map((social) => {
              const { key, href, Icon } = social;
              return (
                <Link
                  href={href}
                  key={key}
                  className='text-blue-strong h-clamp-35 w-clamp-35 bg-white rounded-full grid'
                >
                  <Icon className='place-self-center w-clamp-15' />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Introduce */}
        <ul className='space-y-[6px]'>
          <li>
            <h5 className='font-semibold'>{t('introduce.text')}</h5>
          </li>
          {LINK_LIST.map((item) => (
            <li key={item.key} className='font-normal capitalize'>
              <Link href={item.href}>{t(`introduce.item.${item.key}`)}</Link>
            </li>
          ))}
        </ul>

        {/* App download */}
        <div>
          <h5 className='font-semibold pb-3'>{t('app_download.text')}</h5>

          <Link href='/' className='block pb-[10px]'>
            <Image
              src={AppStore}
              alt='Download App Store'
              width={150}
              height={43.33}
              loading='lazy'
              className='h-[43.33px] w-auto'
            />
          </Link>

          <Link href='/' className='block pb-[10px]'>
            <Image
              src={GooglePlay}
              alt='Download Google Play'
              width={150}
              height={43.33}
              loading='lazy'
              className='h-[43.33px] w-auto'
            />
          </Link>
        </div>

        {/* Send gmail */}
        <div className='w-[382px]'>
          <h5 className='font-semibold pb-3'>{t('send_gmail.title')}</h5>

          <form action='' className='flex-between-center h-[48px] px-4 py-[10px] rounded bg-white-25 mb-3'>
            <input
              type='text'
              className=' bg-transparent outline-none flex-grow'
              placeholder={t('send_gmail.input.placeholder')}
            />
            <button type='submit' className='text-blue-strong'>
              <SvgEnvelope />
            </button>
          </form>

          <p className='font-light text-clamp-14 leading-[18.2px]'>{t('send_gmail.description')}</p>
        </div>
      </div>

      {/* Copyright */}
      <p className='text-center font-normal py-5'>{t('copyright')}</p>
    </div>
  );
}

export default Footer;

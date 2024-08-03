import Logo from '@/components/Logo';
import { LINK_LIST, SOCIAL_LIST } from './constants';
import Link from 'next/link';
import Image from 'next/image';

import AppStore from '/public/images/app_download/app_store.png';
import GooglePlay from '/public/images/app_download/google_play.png';
import { Envelope } from '@/components/Svgs';

function Footer() {
  return (
    <div className='bg-black text-white text-base -translate-y-[1px]'>
      <div className='max-container pt-[61px] pb-[81px] flex justify-between flex-wrap gap-x-12 gap-y-[60px]'>
        {/* Logo and contacts */}
        <div>
          <Logo textColor='text-white' className='mb-9 mt-2' />

          {/* Info */}
          <div className='mb-[10px] leading-[18.2px]'>
            <p className='sm:w-fit sm:inline-block'>434 Lien Phuong Street,</p>{' '}
            <p className='sm:w-fit sm:inline-block'> Phuoc Long B Ward,</p>{' '}
            <p className='sm:w-fit sm:inline-block'>District 9, HCMC, Vietnam</p>
          </div>

          <p className='mb-[10px]'>
            Email: <a href='mailto:info@dspone.com'>info@dspone.com</a>
          </p>

          <p className='mb-5'>
            Hotline: <a href='tel:+84985909720'>(+84) 985 909 720</a>
          </p>

          {/* Social */}
          <div className='flex gap-5'>
            {SOCIAL_LIST.map((social) => {
              const { key, href, Icon } = social;
              return (
                <Link href={href} key={key} className='text-blue-strong h-[35px] w-[35px] bg-white rounded-full grid'>
                  <Icon className='place-self-center' />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Link */}
        <ul className='space-y-[6px]'>
          <li>
            <h5 className='font-semibold'>Về chúng tôi</h5>
          </li>
          {LINK_LIST.map((item) => (
            <li key={item.key} className='font-normal capitalize'>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* App download */}
        <div>
          <h5 className='font-semibold pb-3'>Tải ứng dụng</h5>

          <Image
            src={AppStore}
            alt='Download App Store'
            width={150}
            height={43.33}
            loading='lazy'
            className='pb-[10px]'
          />

          <Image src={GooglePlay} alt='Download Google Play' width={150} height={43.33} loading='lazy' />
        </div>

        {/* Send gmail */}
        <div className='w-[382px]'>
          <h5 className='font-semibold pb-3'>Đăng ký nhận tin</h5>

          <form action='' className='flex-between-center h-[48px] px-4 py-[10px] rounded bg-white-25 mb-3'>
            <input type='text' className=' bg-transparent outline-none flex-grow' placeholder='Enter your email' />
            <button type='submit' className='text-blue-strong'>
              <Envelope />
            </button>
          </form>

          <p className='font-light text-sm leading-[18.2px]'>
            Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest
            products, special promotions, and exciting updates. Join our community of like-minded individuals who share
            a passion for [your niche/industry].
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className='text-center font-normal py-5'>© 2023 All rights reserved</p>
    </div>
  );
}

export default Footer;

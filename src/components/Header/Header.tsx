'use client';

// Components
import Logo from '@/components/Logo';
import getLocalizedPath from '@/utils/getLocalizedPath ';
// Icon
import { SvgBuy, SvgHeart, SvgSearch, SvgUser, SvgMenu, SvgClose } from '@/components/Svgs';
//
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

type NavItem = {
  path: string;
  id: string;
  label: string;
};

function Header() {
  // Bất tắt mobile nav
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Lấy đường dẫn để đánh dấu ở trang nào
  const path = usePathname();
  // Dịch ngôn ngữ
  const t = useTranslations('header');

  // Nav list
  const NAVIGATION_LIST = [
    {
      id: 'home',
      label: t('navigation.home'),
      path: process.env.HOME!,
    },
    {
      id: 'about',
      label: t('navigation.about'),
      path: process.env.ABOUT!,
    },
    {
      id: 'product',
      label: t('navigation.product'),
      path: process.env.PRODUCT!,
    },
    {
      id: 'blogs',
      label: t('navigation.blogs'),
      path: process.env.BLOGS!,
    },
    {
      id: 'policy',
      label: t('navigation.policy'),
      path: process.env.POLICY!,
    },
    {
      id: 'contact',
      label: t('navigation.contact'),
      path: process.env.CONTACT!,
    },
  ];

  return (
    <div className='max-container bg-white flex-between-center py-[7px] sticky top-0 left-0 right-0 lg:relative  backdrop-filter backdrop-blur-sm bg-opacity-30 z-40'>
      <div className='flex lg:gap-[8px] xl:gap-[16px] 2xl:gap-[80px] z-10'>
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav
          className={`bg-white transition-transform-fast absolute lg:static top-full left-0 max-w-[375px] lg:max-w-none w-full lg:w-auto h-screen lg:h-auto shadow-md lg:shadow-none ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <ul className='flex flex-col lg:flex-row gap-x-[2px] xl:gap-x-[10px] h-full'>
            {NAVIGATION_LIST.map((item: NavItem) => {
              console.log(item.path, path);
              return (
                <li className='grid' key={item.id}>
                  <Link
                    href={getLocalizedPath(item.path)}
                    className={`text-navigation block py-[10px] lg:px-[5px] xl:px-[15px] lg:my-auto cursor-pointer w-full text-center self-center ${
                      getLocalizedPath(item.path) === path ? 'text-black font-bold' : 'text-gray-light'
                    } hover:text-black`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className='lg:grow-0 flex 2xl:gap-x-[20px]'>
        {/* Search */}
        <form
          action=''
          className={`bg-gray-lightest text-gray-light rounded-[500px]  w-full max-w-[220px] md:max-w-[276px] lg:max-w-[180px] xl:max-w-[220px] xl:w-[276px] absolute lg:static  top-full sm:top-2/4 sm:left-2/4  ${
            isSearchOpen ? 'animate-slideInRight right-0 flex' : 'animate-slideOutRight hidden'
          } sm:flex sm:animate-none sm:-translate-x-2/4 lg:translate-x-0 sm:-translate-y-2/4 lg:translate-y-0 z-10 shadow-inner sm:shadow-none`}
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
        {/* Action */}
        <div className='flex items-center 2xl:gap-[10px] text-orange-bright'>
          <div
            className='sm:hidden cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex-center'
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
            }}
          >
            <SvgSearch className='w-clamp-24' />
          </div>
          <div className='cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex-center'>
            <SvgHeart className='w-clamp-24' />
          </div>
          <div className='cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex-center'>
            <SvgBuy className='w-clamp-24' />
          </div>
          <div className='cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex-center'>
            <SvgUser className='w-clamp-24' />
          </div>
          <div
            className={`
              cursor-pointer w-6 sm:w-10 h-full flex-center lg:hidden transition-transform-fast 
              ${isMenuOpen ? 'rotate-180' : 'rotate-0'}
              `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <SvgClose className='w-clamp-24' /> : <SvgMenu className='w-clamp-24' />}
          </div>
        </div>
      </div>

      {/* {isMenuOpen && <div className='fixed inset-0 bg-black/50 z-40' onClick={() => setIsMenuOpen(false)} />} */}
    </div>
  );
}

export default Header;

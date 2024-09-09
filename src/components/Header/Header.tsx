'use client';

// Components
import Logo from '@/components/Logo';
import getLocalizedPath from '@/utils/getLocalizedPath ';
// Icon
import { SvgBuy, SvgHeart, SvgSearch, SvgUser, SvgMenu, SvgClose } from '@/components/Svgs';
//
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import HeaderSearch from '@/components/Header/HeaderSearch';

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

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleCloseSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  return (
    <>
      <div className='max-container bg-white flex justify-between items-center py-2 sticky top-0 left-0 right-0 lg:relative backdrop-filter backdrop-blur-sm bg-opacity-30 z-20'>
        <div className='flex lg:gap-[8px] xl:gap-[16px] 2xl:gap-[80px]'>
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
                const localizedPath = getLocalizedPath(item.path);
                const isActive = path === localizedPath || (localizedPath !== '/vi' && path.startsWith(localizedPath));

                return (
                  <li className='grid' key={item.id}>
                    <Link
                      href={localizedPath}
                      className={`font-medium text-clamp-18 block py-[10px] lg:px-[5px] xl:px-[15px] lg:my-auto cursor-pointer w-full text-center self-center ${
                        isActive ? 'text-black font-bold' : 'text-gray-light'
                      } hover:text-black`}
                      onClick={() => handleCloseMenu()}
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
          <HeaderSearch isSearchOpen={isSearchOpen} onCloseSearch={handleCloseSearch} />
          {/* Action */}
          <div className='flex items-center 2xl:gap-[10px] text-orange-bright'>
            <div
              className='sm:hidden cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex justify-center items-center'
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
            >
              <SvgSearch className='w-clamp-24' />
            </div>
            <div className='cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex justify-center items-center'>
              <SvgHeart className='w-clamp-24' />
            </div>
            <div className='cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex justify-center items-center'>
              <SvgBuy className='w-clamp-24' />
            </div>
            <div className='cursor-pointer w-6 sm:w-10 lg:w-8 xl:w-10 h-full flex justify-center items-center'>
              <SvgUser className='w-clamp-24' />
            </div>
            <div
              className={`
              cursor-pointer w-6 sm:w-10 h-full flex justify-center  items-center lg:hidden transition-transform-fast 
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
    </>
  );
}

export default Header;

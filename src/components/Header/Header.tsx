'use client';

// Components
import Logo from '@/components/Logo';
import getLocalizedPath from '@/utils/getLocalizedPath ';
// Icon
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegCircleUser } from 'react-icons/fa6';

import { FaBarsStaggered } from 'react-icons/fa6';
import { RiCloseLargeLine } from 'react-icons/ri';

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
      <div className="max-container sticky left-0 right-0 top-0 z-20 flex items-center justify-between bg-white bg-opacity-30 py-2 backdrop-blur-sm backdrop-filter lg:relative">
        <div className="flex lg:gap-[8px] xl:gap-[16px] 2xl:gap-[80px]">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <nav
            className={`transition-transform-fast absolute left-0 top-full h-screen w-full max-w-[375px] bg-white shadow-md lg:static lg:h-auto lg:w-auto lg:max-w-none lg:shadow-none ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
          >
            <ul className="flex h-full flex-col gap-x-[2px] lg:flex-row xl:gap-x-[10px]">
              {NAVIGATION_LIST.map((item: NavItem) => {
                const localizedPath = getLocalizedPath(item.path);
                const isActive = path === localizedPath || (localizedPath !== '/vi' && path.startsWith(localizedPath));

                return (
                  <li className="grid" key={item.id}>
                    <Link
                      href={localizedPath}
                      className={`block w-full cursor-pointer self-center py-[10px] text-center text-clamp-18 font-medium lg:my-auto lg:px-[5px] xl:px-[15px] ${
                        isActive ? 'font-bold text-black' : 'text-gray-light'
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

        <div className="flex lg:grow-0 2xl:gap-x-[20px]">
          {/* Search */}
          <HeaderSearch isSearchOpen={isSearchOpen} onCloseSearch={handleCloseSearch} />
          {/* Action */}
          <div className="flex items-center gap-[2px] text-orange-bright 2xl:gap-[10px]">
            <div
              className="h-full w-6 cursor-pointer sm:hidden"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
            >
              <FaMagnifyingGlass className="mx-auto h-full w-clamp-24" />
            </div>
            <div className="h-full w-6 cursor-pointer sm:w-10 lg:w-8 xl:w-10">
              <FaRegHeart className="mx-auto h-full w-clamp-24" />
            </div>

            <div className="h-full w-6 cursor-pointer sm:w-10 lg:w-8 xl:w-10">
              <FiShoppingCart className="mx-auto h-full w-clamp-24" />
            </div>

            <div className="h-full w-6 cursor-pointer sm:w-10 lg:w-8 xl:w-10">
              <FaRegCircleUser className="mx-auto h-full w-clamp-24" />
            </div>
            <div
              className={`transition-transform-fast h-full w-6 cursor-pointer sm:w-10 lg:hidden ${isMenuOpen ? 'rotate-180' : 'rotate-0'} `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <RiCloseLargeLine className="mx-auto h-full w-clamp-24" />
              ) : (
                <FaBarsStaggered className="mx-auto h-full w-clamp-24" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

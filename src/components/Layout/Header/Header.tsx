'use client';

// Icon
import { FaMagnifyingGlass, FaRegHeart, FaRegCircleUser, FaBarsStaggered } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { RiCloseLargeLine } from 'react-icons/ri';
//
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ACCOUNT_LIST, AUTH_LIST } from '@/components/Layout/Header/constants';
import Logo from '@/components/Logo';
import HeaderSearch from './HeaderSearch';
import ShoppingCart from './ShoppingCart';
import NavigationMenu from './NavigationMenu';
import { useStore } from '@/components/Store';
import useScrollLock from '@/hooks/useScrollLock';

function Header({ locale }: { locale: string }) {
  const {
    state: { carts, profile },
  } = useStore();
  // Kiểm tra đăng nhập
  const isLoggin = profile.id ? true : false;
  // Toggle mobile nav
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle search
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Dịch ngôn ngữ
  const t = useTranslations('header');

  // Khóa cuộn khi mở nav menu
  useScrollLock(isMenuOpen);
  // Khóa cuộn khi mở search
  useScrollLock(isSearchOpen);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleCloseSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  return (
    <>
      <header className="sticky left-0 right-0 top-0 z-20 bg-white bg-opacity-30 py-2 backdrop-blur-sm backdrop-filter">
        <div className="max-container flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Navigation menu */}
          <NavigationMenu locale={locale} isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />

          <div className="flex gap-[2px] lg:grow-0 2xl:gap-x-[20px]">
            {/* Read Only Search */}
            <div className="absolute left-2/4 top-2/4 hidden max-w-[200px] -translate-x-2/4 -translate-y-2/4 rounded-full bg-gray-lightest text-gray-light sm:flex sm:w-full md:max-w-[226px] lg:static lg:max-w-[175px] lg:translate-x-0 lg:translate-y-0 xl:w-[276px] xl:max-w-[220px]">
              <button className="cursor-pointer py-3 pl-5 pr-3 lg:pl-3 lg:pr-2 xl:pl-5 xl:pr-3">
                <FaMagnifyingGlass className="h-full w-clamp-16" />
              </button>

              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full bg-transparent pr-2 text-clamp-16 outline-none"
                value=""
                readOnly
                onClick={() => setIsSearchOpen(true)}
              />
            </div>
            {/* Action */}
            <div className="flex items-center gap-[2px] text-orange-bright 2xl:gap-[10px]">
              <div
                className="h-10 w-6 cursor-pointer sm:hidden"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                }}
              >
                <FaMagnifyingGlass className="mx-auto h-full w-clamp-24" />
              </div>
              <div className="h-10 w-6 cursor-pointer sm:w-10 lg:w-8 xl:w-10">
                <FaRegHeart className="mx-auto h-full w-clamp-24" />
              </div>
              <div className="group relative h-10 w-6 cursor-pointer sm:w-10 lg:w-8 xl:w-10">
                <FiShoppingCart className="mx-auto h-full w-clamp-24" />
                {/* Số lượng trong giỏ hàng */}
                {carts.length > 0 && (
                  <div className="absolute -right-[20%] top-[5%] h-clamp-18 w-clamp-18 rounded-full border-solid border-white bg-orange-bright sm:right-0 lg:top-[2%]">
                    <p className="absolute left-1/2 -translate-x-1/2 text-clamp-12 text-white">{carts.length}</p>
                  </div>
                )}
                {/* Giỏ hàng */}
                <ShoppingCart locale={locale} />
              </div>

              <div className="group relative h-10 w-6 cursor-pointer sm:w-10 lg:w-8 xl:w-10">
                <FaRegCircleUser className="mx-auto h-full w-clamp-24" />
                <ul className="h-scrollable invisible fixed right-[5%] top-full w-60 origin-top-right scale-0 transform cursor-default rounded-lg bg-white opacity-0 shadow-sm duration-300 ease-out before:absolute before:-top-7 before:right-0 before:block before:h-7 before:w-[25%] before:content-[''] group-hover:visible group-hover:scale-100 group-hover:opacity-100 sm:right-[6%] lg:absolute lg:right-0 lg:mt-[19px]">
                  {isLoggin ? (
                    <>
                      {ACCOUNT_LIST.map((item) => (
                        <li key={item.id}>
                          {item.path ? (
                            <Link
                              href={`/${locale}${item.path}`}
                              className="block px-2 py-[10px] text-black hover:bg-gray-lightest sm:px-4"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <div className="cursor-pointer px-2 py-[10px] text-black hover:bg-gray-lightest sm:px-4">
                              {item.label}
                            </div>
                          )}
                        </li>
                      ))}
                    </>
                  ) : (
                    <>
                      {AUTH_LIST.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={`/${locale}${item.path}`}
                            className="block px-2 py-[10px] text-black hover:bg-gray-lightest sm:px-4"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
              <div
                className={`h-10 w-6 cursor-pointer transition-transform duration-300 ease-in-out sm:w-10 lg:hidden ${isMenuOpen ? 'rotate-180' : 'rotate-0'} `}
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
      </header>

      {/* Search */}
      <HeaderSearch isSearchOpen={isSearchOpen} onCloseSearch={handleCloseSearch} />
    </>
  );
}

export default Header;

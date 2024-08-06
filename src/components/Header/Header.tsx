'use client';

// Components
import Logo from '@/components/Logo';
// Icon
import { Buy, Heart, Search, User, Menu, Close } from '@/components/Svgs';
//
import { NAVIGATION_LIST } from './constants';
//
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type NavItem = {
  path: string;
  id: string;
  label: string;
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  return (
    <div
      className='max-container bg-white flex-between-center py-[7px] sticky top-0 left-0 right-0 lg:relative  backdrop-filter backdrop-blur-sm bg-opacity-30 z-40'
      style={{ height: 'var(--header-height)' }}
    >
      <div className='flex lg:gap-[20px] xl:gap-[60px] 2xl:gap-[80px] z-10'>
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav
          className={`bg-white transition-transform-fast absolute lg:static top-full left-0 max-w-[375px] lg:max-w-none w-full lg:w-auto h-screen lg:h-auto shadow-md lg:shadow-none ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <ul className='flex flex-col lg:flex-row gap-x-[10px] h-full'>
            {NAVIGATION_LIST.map((item: NavItem) => (
              <li className='grid' key={item.id}>
                <Link
                  href={item.path}
                  className={`text-navigation block py-[10px] lg:px-[5px] xl:px-[15px] lg:my-auto cursor-pointer w-full text-center self-center ${
                    path === item.path ? 'text-black font-bold' : 'text-gray-light'
                  } hover:text-black`}
                  style={{ height: 'var(--menu-item-height)' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='lg:grow-0 flex lg:gap-x-[10px] xl:gap-x-[20px]'>
        {/* Search */}
        <form
          action=''
          className={`transition-transform-fast bg-gray-lightest text-gray-light sm:rounded-[500px] flex w-full max-w-[375px] sm:max-w-[254px] md:max-w-[330px] lg:max-w-[220px] xl:max-w-[267px] xl:w-[276px] absolute lg:static left-0 sm:left-2/4 top-[338px] sm:top-2/4 ${
            !isMenuOpen && '-translate-x-full'
          } sm:-translate-x-2/4 lg:translate-x-0 sm:-translate-y-2/4 lg:translate-y-0 z-10`}
        >
          <div className='py-3 pl-5 pr-3 cursor-pointer'>
            <Search className='w-clamp-20' />
          </div>
          <input
            type='text'
            placeholder='Searching'
            className='bg-transparent outline-none flex-1 pr-5 text-clamp-16'
          />
        </form>

        {/* Action */}
        <div className='flex items-center lg:gap-[5px] xl:gap-[10px] text-orange-bright'>
          <div className='cursor-pointer w-10 h-full flex-center'>
            <Heart className='w-clamp-24' />
          </div>
          <div className='cursor-pointer w-10 h-full flex-center'>
            <Buy className='w-clamp-24' />
          </div>
          <div className='cursor-pointer w-10 h-full flex-center'>
            <User className='w-clamp-24' />
          </div>
          <div
            className={`
              cursor-pointer w-10 h-full flex-center lg:hidden transition-transform-fast 
              ${isMenuOpen ? 'rotate-180' : 'rotate-0'}
              `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Close className='w-clamp-24' /> : <Menu className='w-clamp-24' />}
          </div>
        </div>
      </div>

      {/* {isMenuOpen && <div className='fixed inset-0 bg-black/50 z-40' onClick={() => setIsMenuOpen(false)} />} */}
    </div>
  );
}

export default Header;

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { memo } from 'react';

function NavigationMenu({
  locale,
  isMenuOpen,
  onCloseMenu,
}: {
  locale: string;
  isMenuOpen: boolean;
  onCloseMenu: () => void;
}) {
  const t = useTranslations('header');
  // Lấy đường dẫn để đánh dấu ở trang nào
  const path = usePathname();

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
      path: process.env.PRODUCTS!,
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
    <>
      {/* Overlay nav mobile */}
      <div
        className={`fixed left-0 right-0 top-0 z-20 h-screen bg-black/50 transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        } `}
        onClick={onCloseMenu}
      ></div>

      {/* Navigation */}
      <nav
        className={`fixed left-0 top-0 z-40 h-screen w-full max-w-[360px] bg-white shadow-md transition-transform duration-500 ease-in-out lg:static lg:h-auto lg:w-auto lg:max-w-none lg:bg-transparent lg:shadow-none ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="mb-32 lg:hidden">
          <div className="mt-6 text-3xl">
            <IoClose className="ml-auto mr-2 cursor-pointer hover:text-orange-bright sm:mr-4" onClick={onCloseMenu} />
          </div>
        </div>

        <ul className="flex h-full flex-col gap-x-[2px] lg:flex-row xl:gap-x-[10px]">
          {NAVIGATION_LIST.map((item) => {
            const localizedPath = `/${locale}${item.path === '/' ? '' : item.path}`;
            const isActive =
              path === localizedPath || (path.startsWith(localizedPath) && localizedPath !== `/${locale}`);
            return (
              <li className="grid" key={item.id}>
                <Link
                  href={localizedPath}
                  className={`block w-full cursor-pointer self-center py-[10px] text-center text-clamp-18 font-medium lg:my-auto lg:px-[5px] xl:px-[15px] ${
                    isActive ? 'font-bold text-black' : 'text-gray-light'
                  } hover:text-black`}
                  onClick={() => onCloseMenu()}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default memo(NavigationMenu);

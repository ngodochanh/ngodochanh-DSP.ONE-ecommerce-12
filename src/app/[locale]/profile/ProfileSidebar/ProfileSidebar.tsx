'use client';

import { CgCloseO } from 'react-icons/cg';
import { useStore } from '@/components/Store';
import Link from 'next/link';
import { MENU_LIST } from '@/app/[locale]/profile/constants';
import { Avatar } from '@nextui-org/react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function ProfileSidebar({ locale }: { locale: string }) {
  // Lấy đường dẫn hiện tại
  const path = usePathname();
  //
  const {
    state: { profile },
  } = useStore();
  // Bật tắt menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Nút để bật menu */}
      <div
        className="fixed right-2 top-1/3 cursor-pointer rounded bg-orange-bright p-2 text-2xl text-white hover:bg-orange-bright-5 sm:right-4 xl:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <HiMiniBars3BottomRight />
      </div>

      {/* Overlay sidebar */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-all duration-500 ease-in-out xl:hidden ${
          isMenuOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        } `}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-30 col-span-12 bg-white px-2 transition-all duration-500 ease-in-out sm:w-full sm:max-w-96 sm:px-4 md:right-[unset] xl:pointer-events-auto xl:static xl:inset-[unset] xl:z-0 xl:col-span-3 xl:translate-x-0 xl:px-0 xl:opacity-100 ${isMenuOpen ? 'w-full opacity-100' : 'pointer-events-none w-0 opacity-0'}`}
      >
        {/* Floating menu */}
        <div
          className="mb-7 ml-auto mt-8 cursor-pointer text-3xl hover:text-orange-bright xl:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <CgCloseO className="ml-auto" />
        </div>

        {/* Customer Info */}
        <div className="mb-4 flex gap-x-4">
          <Avatar src={profile.image} classNames={{ base: 'w-clamp-70 h-clamp-70' }} />

          <div className="mt-auto h-fit flex-1">
            <p className="text-clamp-16 font-normal">Tài khoản của</p>
            <h3 className="line-clamp-1 text-clamp-24 font-medium capitalize">
              {profile.fullname ? profile.fullname : 'Chưa có tên'}
            </h3>
          </div>
        </div>

        {/* Menu */}
        <ul>
          {MENU_LIST.map((item) => {
            const Comp = item.icon;
            const localizedPath =
              item.path === process.env.PROFILE! ? item.path : `${process.env.PROFILE!}${item.path}`;
            const isActive = path === `/${locale}${localizedPath}`;
            return (
              <li key={item.id} className="border-b border-b-black last:border-b-0">
                <Link
                  href={`/${locale}${localizedPath}`}
                  className={`flex items-center gap-x-4 py-[17px] text-clamp-16 font-normal ${isActive ? 'text-orange-bright' : ''}`}
                >
                  <Comp className="text-clamp-20" />
                  <p>{item.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ProfileSidebar;

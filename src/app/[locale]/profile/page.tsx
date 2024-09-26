'use client';

import ProfileSidebar from './ProfileSidebar';
import { useState } from 'react';
import ProfileSettings from './ProfileSettings';

export default function Profile({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-container pb-12 pt-16 md:flex md:h-[calc(100vh-117px)] md:items-center md:justify-center md:py-0">
      {/* Overlay sidebar */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-all duration-500 ease-in-out xl:hidden ${
          isMenuOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        } `}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className="grid w-full grid-cols-12 gap-6">
        {/* Sidebar */}
        <div
          className={`fixed inset-0 z-30 col-span-12 bg-white px-2 transition-all duration-500 ease-in-out sm:w-full sm:max-w-96 sm:px-4 md:right-[unset] xl:static xl:inset-[unset] xl:z-0 xl:col-span-3 xl:translate-x-0 xl:px-0 xl:opacity-100 ${isMenuOpen ? 'w-full opacity-100' : 'pointer-events-none w-0 opacity-0'}`}
        >
          <ProfileSidebar setIsMenuOpen={setIsMenuOpen} />
        </div>

        <div className="col-span-12 xl:col-span-9 xl:col-start-4">
          <ProfileSettings setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </div>
  );
}

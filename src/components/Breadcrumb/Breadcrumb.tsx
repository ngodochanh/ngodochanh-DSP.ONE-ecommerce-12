'use client';

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import { useRouter } from 'next/navigation';

function Breadcrumb({ breadCrumbList }: { breadCrumbList: { id: string; label: string; path: string }[] }) {
  const router = useRouter();

  return (
    <Breadcrumbs
      classNames={{
        list: 'rounded-none py-5',
      }}
      itemClasses={{
        item: 'capitalize !text-clamp-16 font-normal text-dark-charcoal data-[current=true]:text-yellow-vivid hover:text-black hover:opacity-100',
        separator: 'text-gray-neutral',
      }}
    >
      {breadCrumbList.map((item, index) => {
        const path = getLocalizedPath(item.path);
        return (
          <BreadcrumbItem
            key={item.id}
            onClick={() => router.push(path)}
            isCurrent={breadCrumbList.length - 1 === index}
          >
            {item.label}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;

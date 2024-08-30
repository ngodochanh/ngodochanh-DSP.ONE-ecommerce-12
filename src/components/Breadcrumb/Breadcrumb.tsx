'use client';

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import getLocalizedPath from '@/utils/getLocalizedPath ';

function Breadcrumb({ breadCrumbList }: { breadCrumbList: { id: string; label: string; path: string }[] }) {
  return (
    <Breadcrumbs
      classNames={{
        base: 'max-container',
        list: 'rounded-none py-5',
      }}
      itemClasses={{
        item: 'capitalize  !text-clamp-16 font-normal text-dark-charcoal data-[current=true]:text-yellow-vivid hover:text-black hover:opacity-100',
        separator: 'text-gray-neutral',
      }}
    >
      {breadCrumbList.map((item, index) => {
        return (
          <BreadcrumbItem
            key={item.id}
            href={getLocalizedPath(item.path)}
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

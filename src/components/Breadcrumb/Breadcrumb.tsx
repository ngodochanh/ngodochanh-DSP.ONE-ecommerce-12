'use client';

import { ILanguage } from '@/models';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type IBreadcrumbs = {
  locale: ILanguage['name'];
  breadCrumbList: { id: string; label: string; path: string }[];
};

function Breadcrumb({ locale, breadCrumbList }: IBreadcrumbs) {
  const router = useRouter();

  return (
    <Breadcrumbs
      classNames={{
        list: 'rounded-none py-5',
      }}
      itemClasses={{
        item: 'capitalize !text-clamp-16 font-normal text-dark-charcoal data-[current=true]:text-orange-bright hover:text-black hover:opacity-100',
        separator: 'text-gray-neutral',
      }}
    >
      {breadCrumbList.map((item, index) => {
        return (
          <BreadcrumbItem
            key={item.id}
            onClick={() => router.push(`/${locale}${item.path}`)}
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

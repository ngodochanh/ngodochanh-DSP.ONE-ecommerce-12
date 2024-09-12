import { Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { PER_PAGE } from '@/app/[locale]/product/constants';

function PaginationProduct({ total, page }: { total: number; page: string }) {
  const [siblings, setSiblings] = useState(0);
  const [boundaries, setBoundaries] = useState(0);
  const router = useRouter();
  const locale = useLocale();

  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    const updatePaginationSettings = () => {
      const width = window.innerWidth;

      if (width < 600) {
        setSiblings(() => 0);
        setBoundaries(() => 1);
      } else {
        setSiblings(() => 1);
      }
    };

    // Set initial values
    updatePaginationSettings();

    // Update values on window resize
    window.addEventListener('resize', updatePaginationSettings);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updatePaginationSettings);
  }, []);

  return (
    <div className="mt-[50px] overflow-hidden">
      <Pagination
        total={Math.ceil(total / PER_PAGE)}
        page={Number(page)}
        siblings={siblings}
        boundaries={boundaries}
        loop={true}
        radius="none"
        showControls={true}
        variant="bordered"
        isCompact={true}
        classNames={{
          base: 'py-[10px]  ',
          wrapper: 'gap-x-[10px] ml-auto shadow-none',
          prev: 'font-medium !text-clamp-14 border-solid border-1 border-black w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] xl:w-[46px] xl:h-[46px]',
          next: 'font-medium !text-clamp-14 border-solid border-1 border-black w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] xl:w-[46px] xl:h-[46px]',
          item: 'font-medium !text-clamp-14 border-1 border-black w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] xl:w-[46px] xl:h-[46px]',
          cursor:
            'font-medium !text-clamp-14 bg-yellow-bright border-1 border-yellow-bright text-white w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] xl:w-[46px] xl:h-[46px] z-0',
        }}
        onChange={(page: number) => {
          router.push(
            `/${locale}/${process.env.PRODUCT!}/?page=${Number(page)}&per_page=${PER_PAGE}${
              search ? `&search=${search}` : ''
            }`,
          );
        }}
      />
    </div>
  );
}

export default PaginationProduct;

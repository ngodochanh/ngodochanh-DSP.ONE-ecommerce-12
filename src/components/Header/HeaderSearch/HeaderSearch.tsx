'use client';

import { FaMagnifyingGlass } from 'react-icons/fa6';
import { PRODUCT_LIST } from '@/constantsProduct';
import useDebounce from '@/hooks/useDebounce';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useEffect, useState } from 'react';
import { IProduct } from '@/types';
import { Input, Spinner } from '@nextui-org/react';
import Logo from '@/components/Logo';
import { calculateDiscountPercentage, formatCurrencyVND } from '@/utils/currency';
import ProductItem from '@/components/ProductItem';

function HeaderSearch({ isSearchOpen, onCloseSearch }: { isSearchOpen: boolean; onCloseSearch: () => void }) {
  const t = useTranslations('header');

  // Tìm kiếm
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [results, setResults] = useState<IProduct[]>([]);
  const [query, setQuery] = useState<string>('');

  // Sử dụng debounce để giảm tần suất tìm kiếm
  const debouncedQuery = useDebounce(query, 700);

  // Xử lý lấy kết quả tìm kiếm
  const fetchSearchResults = async () => {
    setIsSearching(true);

    try {
      setTimeout(() => {
        const result = PRODUCT_LIST.filter(
          (product) =>
            product.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(debouncedQuery.toLowerCase()),
        ).slice(0, 3);

        setIsSearching(false);
        setResults(result);
      }, 1000);
    } catch (error) {
      setIsSearching(false);
    }
  };

  // Xử lý xóa kết quả tìm kiếm và focus vào ô input
  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
  };

  // Thực hiện tìm kiếm khi query thay đổi và không trống
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([]);
      return;
    }

    fetchSearchResults();
  }, [debouncedQuery]);

  return (
    <>
      {/* Overlay header search */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-all duration-500 ease-in-out ${
          isSearchOpen ? 'h-full opacity-100' : 'h-0 opacity-0'
        } `}
        onClick={() => {
          onCloseSearch();
          handleClearSearch();
        }}
      ></div>
      {/* Form search */}
      <div
        className={`fixed inset-0 z-30 bg-white transition-all duration-500 ease-in-out ${
          isSearchOpen ? 'h-full opacity-100' : 'h-0 opacity-0'
        } ${results?.length > 0 ? 'h-screen' : 'h-1/4'}`}
      >
        <form className="max-container flex items-center justify-between gap-4 border-b-1 border-solid border-gray-lightest py-2">
          {/* Logo */}
          <div className="hidden sm:block">
            <Logo />
          </div>
          {/* Input */}
          <Input
            isClearable
            radius="full"
            size="md"
            placeholder={t('search.placeholder')}
            classNames={{
              base: 'sm:max-w-[436px]',
              innerWrapper: 'text-clamp-16 text-gray-light',
              input: 'bg-gray-lightest',
            }}
            startContent={<FaMagnifyingGlass />}
            value={query}
            onValueChange={(value: string) => {
              setQuery(value.trimStart());
            }}
            endContent={
              isSearching && (
                <Spinner size="sm" classNames={{ circle1: 'border-b-gray-light', circle2: 'border-b-gray-light' }} />
              )
            }
          />
          {/* Close */}
          <p
            className="cursor-pointer text-clamp-18 hover:text-yellow-vivid"
            onClick={() => {
              onCloseSearch();
              handleClearSearch();
            }}
          >
            Đóng
          </p>
        </form>

        {/* Hiển thị kết quả tìm kiếm */}
        <div
          className={`max-container mb-20 mt-12 grid max-h-scrollable grid-cols-3 gap-4 overflow-hidden overflow-y-auto overscroll-y-contain scroll-smooth transition-all duration-500 ease-in-out 2xl:gap-[30px] ${results?.length > 0 ? 'h-full' : 'h-0'}`}
        >
          {/* Lịch sử tìm kiếm hoặc gợi ý tìm kiếm */}
          <div className="col-span-3 sm:col-span-1"></div>
          {/* Danh sách sản phẩm */}
          <ul className="col-span-3 grid grid-cols-1 gap-4 sm:col-span-2 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-[30px]">
            {results.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
          {/* Link để xem tất cả kết quả tìm kiếm */}
          <div className="col-span-2 col-start-2">
            <Link
              href={getLocalizedPath(process.env.PRODUCT + '?search=' + debouncedQuery)}
              className="mx-auto flex h-12 max-w-40 cursor-pointer items-center justify-center rounded-lg bg-yellow-vivid text-white hover:text-black hover:opacity-85"
              onClick={() => {
                onCloseSearch();
                handleClearSearch();
              }}
            >
              Xem tất cả
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(HeaderSearch);

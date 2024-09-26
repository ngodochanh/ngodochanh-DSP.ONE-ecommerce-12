'use client';

import { FaMagnifyingGlass } from 'react-icons/fa6';
import { PRODUCT_LIST } from '@/data';
import useDebounce from '@/hooks/useDebounce';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { memo, useEffect, useRef, useState } from 'react';
import { IProduct } from '@/models';
import { Input, Spinner } from '@nextui-org/react';
import Logo from '@/components/Logo';
import ProductItem from '@/components/ProductItem';

function HeaderSearch({ isSearchOpen, onCloseSearch }: { isSearchOpen: boolean; onCloseSearch: () => void }) {
  const t = useTranslations('header');
  const locale = useLocale();

  // Tham chiếu tới input để có thể focus
  const inputRef = useRef<HTMLInputElement>(null);

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

  // Focus vào ô input khi component mở
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

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
          isSearchOpen ? 'opacity-100' : 'pointer-events-none h-0 opacity-0'
        } ${results?.length > 0 ? 'h-screen' : 'h-1/4'}`}
      >
        {/* Form search */}
        <div className="border-b-1 border-solid border-gray-lightest py-3 sm:py-2">
          <form className="max-container flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="hidden sm:block">
              <Logo />
            </div>
            {/* Input */}
            <Input
              ref={inputRef}
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
              className="cursor-pointer text-clamp-18 hover:text-orange-bright"
              onClick={() => {
                onCloseSearch();
                handleClearSearch();
              }}
            >
              Đóng
            </p>
          </form>
        </div>

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
              href={`/${locale}${process.env.PRODUCTS}?search=${debouncedQuery}`}
              className="mx-auto flex h-12 max-w-40 cursor-pointer items-center justify-center rounded-lg bg-orange-bright text-white hover:text-black hover:opacity-85"
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

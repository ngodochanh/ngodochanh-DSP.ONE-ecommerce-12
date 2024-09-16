'use client';

import { ImSpinner8 } from 'react-icons/im';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { CATEGORY_LIST, GENDER_LIST, PRODUCT_LIST } from '@/constantsProduct';
import useDebounce from '@/hooks/useDebounce';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, memo, useEffect, useRef, useState } from 'react';
import { IProduct } from '@/types';

function HeaderSearch({ isSearchOpen, onCloseSearch }: { isSearchOpen: boolean; onCloseSearch: () => void }) {
  const t = useTranslations('header');

  // Tìm kiếm
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [results, setResults] = useState<IProduct[]>([]);
  const [query, setQuery] = useState<string>('');

  const searchRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
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

  // Xử lý thay đổi input tìm kiếm
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setQuery(value);
  };

  // Xử lý xóa kết quả tìm kiếm và focus vào ô input
  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
  };

  const handleClearSearchAndFocus = () => {
    setQuery('');
    setResults([]);
    searchRef.current?.focus();
  };

  // Xử lý khi submit form tìm kiếm
  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchSearchResults();
  };

  // Focus vào input ở dạng mobile khi nhấn vào icon search
  useEffect(() => {
    const handleFocusOnMobile = () => {
      // Kiểm tra kích thước màn hình
      if (window.innerWidth < 640 && isSearchOpen) {
        searchRef.current?.focus();
      }
    };

    handleFocusOnMobile();
  }, [isSearchOpen]);

  // Đóng tìm kiếm khi click ra ngoài form
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        handleClearSearch();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Xóa kết quả tìm kiếm khi scroll
  useEffect(() => {
    const handleScroll = () => {
      handleClearSearch();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Thực hiện tìm kiếm khi query thay đổi và không trống
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setResults([]);
      setIsSearching(false);
      return;
    }

    fetchSearchResults();
  }, [debouncedQuery]);

  return (
    <>
      {/* Overlay header search */}
      <div
        className={`absolute left-0 right-0 top-full z-20 h-screen bg-black/50 ${
          isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        } transition-all duration-500 ease-in-out sm:w-0`}
        onClick={() => {
          onCloseSearch();
          handleClearSearch();
        }}
      ></div>
      {/* Form tìm kiếm */}
      <form
        ref={formRef}
        className={`absolute left-1/2 top-[calc(100%+16px)] rounded-[500px] bg-gray-lightest text-gray-light sm:left-2/4 sm:top-1/2 sm:w-full sm:max-w-[230px] md:max-w-[276px] lg:static lg:max-w-[180px] xl:w-[276px] xl:max-w-[220px] ${
          isSearchOpen ? 'w-[calc(100%-16px)] opacity-100' : 'w-0 opacity-0'
        } z-40 flex -translate-x-1/2 shadow-inner transition-all duration-500 ease-in-out sm:-translate-y-1/2 sm:opacity-100 sm:shadow-none lg:translate-x-0 lg:translate-y-0`}
        onSubmit={handleSubmitSearch}
      >
        <button type="submit" className="cursor-pointer py-3 pl-5 pr-3 lg:pl-3 lg:pr-2 xl:pl-5 xl:pr-3">
          <FaMagnifyingGlass className="h-full w-clamp-16" />
        </button>

        <input
          type="text"
          placeholder={t('search.placeholder')}
          className="w-full bg-transparent pr-2 text-clamp-16 outline-none"
          ref={searchRef}
          value={query}
          onChange={handleSearchChange}
        />
        {/* Nút xóa input và loading dữ liệu */}
        {query && (
          <div
            className="my-auto mr-3 flex h-full w-clamp-20 cursor-pointer items-center justify-center text-gray-light"
            onClick={handleClearSearchAndFocus}
          >
            {isSearching ? (
              <ImSpinner8 className="h-full w-full animate-spin" />
            ) : (
              <AiFillCloseCircle className="h-full w-full" />
            )}
          </div>
        )}

        {/* Hiển thị kết quả tìm kiếm */}
        {results?.length > 0 && (
          <div className="absolute top-full mt-4 max-h-scrollable w-full overflow-hidden overflow-y-auto overscroll-y-contain scroll-smooth rounded-xl bg-white shadow-md sm:left-1/2 sm:w-[640px] sm:-translate-x-1/2 lg:left-full lg:-translate-x-full">
            <div className="relative w-full">
              {results.map((item) => (
                <Link
                  href={getLocalizedPath(`${process.env.PRODUCT}/${item.slug}-${item.id}.html`)}
                  onClick={() => {
                    onCloseSearch();
                    handleClearSearch();
                  }}
                  className="flex cursor-pointer gap-4 p-2 hover:bg-gray-lightest"
                >
                  <div className="relative h-clamp-96 w-clamp-96">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="block h-full w-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="line-clamp-1 text-clamp-18 font-bold">{item.title}</h3>
                    <p>
                      <strong>Giới tính: </strong>

                      {item.gender.map((g, index) =>
                        g in GENDER_LIST ? (
                          <span key={g} className="capitalize">
                            {GENDER_LIST[g as keyof typeof GENDER_LIST].label}
                            {index < item.gender.length - 1 ? ', ' : ''}
                          </span>
                        ) : (
                          <span key={g}>Không xác định</span>
                        ),
                      )}
                    </p>

                    <p className="capitalize">
                      <strong>Loại áo: </strong>

                      {CATEGORY_LIST[item.category as keyof typeof CATEGORY_LIST].label}
                    </p>
                  </div>
                </Link>
              ))}
              {/* Link để xem tất cả kết quả tìm kiếm */}
              <Link
                href={getLocalizedPath(process.env.PRODUCT + '?search=' + debouncedQuery)}
                className="sticky bottom-0 flex h-10 w-full cursor-pointer items-center justify-center rounded-b-xl bg-yellow-vivid text-white hover:text-black hover:opacity-85"
                onClick={() => {
                  onCloseSearch();
                  handleClearSearch();
                }}
              >
                Xem tất cả
              </Link>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default memo(HeaderSearch);

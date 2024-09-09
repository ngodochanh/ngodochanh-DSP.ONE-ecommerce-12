'use client';

import { SvgCloseCircle, SvgSearch, SvgSpinner } from '@/components/Svgs';
import { PRODUCT_LIST } from '@/constantsProduct';
import useDebounce from '@/hooks/useDebounce';
import { ProductType } from '@/type';
import getLocalizedPath from '@/utils/getLocalizedPath ';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, memo, useEffect, useRef, useState } from 'react';

function HeaderSearch({ isSearchOpen, onCloseSearch }: { isSearchOpen: boolean; onCloseSearch: () => void }) {
  const t = useTranslations('header');

  // Tìm kiếm
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [results, setResults] = useState<ProductType[]>([]);
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
            product.title.toLowerCase().includes(debouncedQuery) ||
            product.category.toLowerCase().includes(debouncedQuery)
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
        className={`absolute top-full left-0 right-0 h-screen bg-black/50 z-20 ${
          isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        } transition-all ease-in-out duration-500 sm:w-0`}
        onClick={() => {
          onCloseSearch();
          handleClearSearch();
        }}
      ></div>
      {/* Form tìm kiếm */}
      <form
        ref={formRef}
        className={`bg-gray-lightest text-gray-light rounded-[500px] sm:w-full sm:max-w-[230px] md:max-w-[276px] lg:max-w-[180px] xl:max-w-[220px] xl:w-[276px] absolute lg:static top-[calc(100%+16px)] sm:top-1/2 left-1/2 sm:left-2/4  ${
          isSearchOpen ? 'w-[calc(100%-16px)]  opacity-100' : 'w-0 opacity-0'
        } transition-all ease-in-out duration-500 flex sm:opacity-100 -translate-x-1/2 lg:translate-x-0 sm:-translate-y-1/2 lg:translate-y-0 z-40 shadow-inner sm:shadow-none`}
        onSubmit={handleSubmitSearch}
      >
        <button type='submit' className='py-3 pl-5 lg:pl-3 xl:pl-5 pr-3 lg:pr-2 xl:pr-3 cursor-pointer'>
          <SvgSearch className='w-clamp-20' />
        </button>

        <input
          type='text'
          placeholder={t('search.placeholder')}
          className='bg-transparent outline-none w-full pr-2 text-clamp-16'
          ref={searchRef}
          value={query}
          onChange={handleSearchChange}
        />
        {/* Nút xóa input và loading dữ liệu */}
        {query && (
          <div
            className='w-clamp-20 h-full flex my-auto items-center justify-center mr-3 cursor-pointer text-black'
            onClick={handleClearSearchAndFocus}
          >
            {isSearching ? <SvgSpinner className='animate-spin' /> : <SvgCloseCircle />}
          </div>
        )}

        {/* Hiển thị kết quả tìm kiếm */}
        {results?.length > 0 && (
          <div className='absolute top-full w-full sm:left-1/2 sm:w-[640px] sm:-translate-x-1/2 lg:-translate-x-full lg:left-full mt-4 bg-white rounded-xl overflow-hidden max-h-scrollable overflow-y-auto scroll-smooth overscroll-y-contain shadow-md '>
            <div className='relative w-full'>
              {results.map((item) => (
                <Link
                  href={getLocalizedPath(process.env.PRODUCT + '/' + item.id)}
                  onClick={() => {
                    onCloseSearch();
                    handleClearSearch();
                  }}
                  className='flex gap-4 p-2 hover:bg-gray-lightest  cursor-pointer'
                >
                  <div className='relative w-clamp-96 h-clamp-96'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className='block w-full h-full object-cover rounded-xl'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-bold text-clamp-18 line-clamp-1'>{item.title}</h3>
                    <p>
                      <strong>Giới tính: </strong>

                      {item.gender.map((g) => (
                        <span>{g}</span>
                      ))}
                    </p>

                    <p className=''>
                      <strong>Loại: </strong>

                      {item.category}
                    </p>
                  </div>
                </Link>
              ))}
              {/* Link để xem tất cả kết quả tìm kiếm */}
              <Link
                href={getLocalizedPath(process.env.PRODUCT + '?search=' + debouncedQuery)}
                className='cursor-pointer sticky bottom-0 w-full h-10 flex justify-center items-center rounded-b-xl bg-yellow-vivid text-white hover:opacity-85 hover:text-black'
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

'use client';

import { useEffect, useState, useTransition } from 'react';
import { IoSearch } from 'react-icons/io5';
import { GoTriangleDown } from 'react-icons/go';
import { LanguageType } from '../TopBar';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

type LanguageProps = {
  inputPlaceholder: string;
  languageList: LanguageType[];
};

function Language({ inputPlaceholder, languageList }: LanguageProps) {
  // Lưu trữ danh sách các mục
  const [items, setItems] = useState<LanguageType[]>(languageList);
  // Giá trị input
  const [inputValue, setInputValue] = useState('');
  // Mục được chọn
  const [selectedItem, setSelectedItem] = useState<LanguageType | null>(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      try {
        const parsedLanguage = storedLanguage ? JSON.parse(storedLanguage) : null;
        // Kiểm tra xem parsedLanguage có phải là LanguageType hợp lệ không
        if (parsedLanguage && languageList.some((lang) => lang.key === parsedLanguage.key)) {
          return parsedLanguage;
        } else {
          return languageList[0];
        }
      } catch {
        return languageList[0];
      }
    } else {
      return languageList[0];
    }
  });
  // Theo dõi việc mở/đóng danh sách
  const [open, setOpen] = useState(false);
  //
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  useEffect(() => {
    // Cập nhật danh sách các mục từ props data
    setItems(languageList);
  }, [languageList]);

  useEffect(() => {
    if (localActive) {
      setSelectedItem(() => {
        const matchingLanguage = languageList.find((lang) => lang.key === localActive);
        if (matchingLanguage) {
          return matchingLanguage;
        }
        return languageList[0];
      });
    }
  }, [localActive, languageList]);

  const handleSelect = (item: LanguageType) => {
    // Cập nhật mục được chọn
    setSelectedItem(item);
    // Đóng danh sách khi chọn mục
    setOpen(false);
    // Đặt lại giá trị input
    setInputValue('');
    // Đưa mục được chọn lên đầu danh sách
    setItems((prevItems) => [item, ...prevItems.filter((i) => i.key !== item.key)]);
    startTransition(() => {
      router.replace(`/${item.key}`);
    });

    // Lưu mục được chọn vào localStorage
    localStorage.setItem('language', JSON.stringify(item));
  };

  return (
    <div className={`relative z-30 cursor-pointer font-medium text-white`}>
      {/* Hiển thị mục được chọn hoặc 'Select' nếu chưa có mục nào được chọn */}
      {languageList.length !== 0 && (
        <>
          <div
            className={`flex w-full items-center justify-between gap-x-[2px] rounded bg-black py-2 ${!selectedItem && 'text-gray-700'} ${isPending && 'cursor-not-allowed opacity-50'}`}
            // Mở/đóng danh sách khi nhấn vào
            onClick={() => !isPending && setOpen(!open)}
          >
            {selectedItem
              ? selectedItem.name.length > 25
                ? selectedItem.name.substring(0, 25) + '...'
                : selectedItem.name
              : 'Loading...'}
            <GoTriangleDown className={`transition-transform-fast h-full text-clamp-16 ${open && 'rotate-180'}`} />
          </div>
          {/* Hiển thị hoặc ẩn các mục với open */}
          <ul
            className={`absolute right-0 top-full mt-2 max-h-60 min-w-48 origin-top-right animate-growAndFadeIn overflow-y-auto rounded bg-white text-black shadow-md ${open ? 'block' : 'hidden'} `}
          >
            {/* <div className='flex justify-center items-center px-2 sticky top-0 bg-white'>
              <div className='w-10 '>
                <IoSearch className='mx-auto w-clamp-24 ' />
              </div>

              <input
                type='text'
                value={inputValue}

                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder={inputPlaceholder}
                className='placeholder:text-gray-700 p-2 outline-none grow'
              />
            </div> */}
            {/* Hiển thị danh sách các mục */}
            {items.map((item: LanguageType) => (
              <li
                key={item.key}
                // Tìm kiếm và đánh dấu mục được chọn
                className={`p-2 text-clamp-14 transition-colors hover:bg-orange-bright hover:text-white ${item.name.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'} ${item.name.toLowerCase() === selectedItem?.name.toLowerCase() && 'bg-orange-bright text-white'}`}
                // Chọn mục khi nhấn vào
                onClick={() => handleSelect(item)}
              >
                {item.name.length > 25 ? item.name.substring(0, 25) + '...' : item.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Language;

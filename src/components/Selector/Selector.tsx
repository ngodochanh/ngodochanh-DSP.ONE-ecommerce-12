'use client';

import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { GoTriangleDown } from 'react-icons/go';

type IItem = {
  key: string;
  name: string;
};

type SelectorProps = {
  inputPlaceholder: string;
  data: IItem[];
  selected?: IItem;
  colorText?: string; // Màu sắc của chữ hiển thị
  bgColor?: string; // Background của select
  width?: string; // Chiều dài của select
  left?: boolean; // Hướng của absolute cho danh sách
  right?: boolean; // Hướng của absolute cho danh sách
  saveToLocalStorage?: boolean; // Lưu vào localStorage
  localStorageKey?: string; // Key lưu vào localStorage
};

function Selector({
  inputPlaceholder,
  data,
  selected,
  colorText = 'text-black',
  bgColor = 'bg-white',
  width,
  left = false,
  right = false,
  saveToLocalStorage = false,
  localStorageKey = 'selectedItem',
}: SelectorProps) {
  // Lưu trữ danh sách các mục
  const [items, setItems] = useState<IItem[]>([]);
  // Giá trị input
  const [inputValue, setInputValue] = useState('');
  // Mục được chọn
  const [selectedItem, setSelectedItem] = useState<IItem | null>(selected ?? null);
  // Theo dõi việc mở/đóng danh sách
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Cập nhật danh sách các mục từ props data
    setItems(data);
  }, [data]);

  useEffect(() => {
    if (selected) {
      setSelectedItem(selected);
    }
  }, [selected]);

  const handleSelect = (item: IItem) => {
    // Cập nhật mục được chọn
    setSelectedItem(item);
    // Đóng danh sách khi chọn mục
    setOpen(false);
    // Đặt lại giá trị input
    setInputValue('');
    // Đưa mục được chọn lên đầu danh sách
    setItems((prevItems) => [item, ...prevItems.filter((i) => i.key !== item.key)]);

    if (saveToLocalStorage) {
      localStorage.setItem(localStorageKey, JSON.stringify(item));
    }
  };

  return (
    <div className={`w-[${width}] w-fit font-medium ${colorText} relative z-20 cursor-pointer`}>
      {/* Hiển thị mục được chọn hoặc 'Select' nếu chưa có mục nào được chọn */}
      <div
        className={`flex w-full items-center justify-between gap-x-[2px] rounded py-2 ${!selectedItem && 'text-gray-700'} ${bgColor} `}
        // Mở/đóng danh sách khi nhấn vào
        onClick={() => setOpen(!open)}
      >
        {selectedItem
          ? selectedItem.name.length > 25
            ? selectedItem.name.substring(0, 25) + '...'
            : selectedItem.name
          : 'Select'}
        <GoTriangleDown
          className={`transition-transform duration-300 ease-in-out ${open && 'rotate-180'} w-clamp-18`}
        />
      </div>
      {/* Hiển thị hoặc ẩn các mục với open */}
      <ul
        className={`absolute top-full mt-2 min-w-72 overflow-y-auto bg-white text-black shadow-md ${left && 'left-0'} ${right && 'right-0'} ${open ? 'max-h-60' : 'max-h-0'} `}
      >
        <div className="sticky top-0 flex items-center justify-center bg-white px-2">
          <div className="w-10">
            <IoSearch className="mx-auto w-clamp-24" />
          </div>
          {/* Input để tìm kiếm mục */}
          <input
            type="text"
            value={inputValue}
            // Cập nhật giá trị input
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={inputPlaceholder}
            className="grow p-2 outline-none placeholder:text-gray-700"
          />
        </div>
        {/* Hiển thị danh sách các mục */}
        {items.map((item) => (
          <li
            key={item.key}
            // Tìm kiếm và đánh dấu mục được chọn
            className={`p-2 text-clamp-14 hover:bg-orange-bright hover:text-white ${item.name.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'} ${item.name.toLowerCase() === selectedItem?.name.toLowerCase() && 'bg-orange-bright text-white'} `}
            // Chọn mục khi nhấn vào
            onClick={() => handleSelect(item)}
          >
            {item.name.length > 25 ? item.name.substring(0, 25) + '...' : item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Selector;

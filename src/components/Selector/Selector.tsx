'use client';

import { useEffect, useState } from 'react';
import { ArrowDropDown, Search } from '@/components/Svgs';

type Item = {
  key: string;
  name: string;
};

type SelectorProps = {
  data: Item[];
  selected?: Item;
  colorText?: string; // Màu sắc của chữ hiển thị
  bgColor?: string; // Background của select
  width?: string; // Chiều dài của select
  left?: boolean; // Hướng của absolute cho danh sách
  right?: boolean; // Hướng của absolute cho danh sách
};

function Selector({
  data,
  selected,
  colorText = 'text-black',
  bgColor = 'bg-white',
  width,
  left = false,
  right = false,
}: SelectorProps) {
  // Lưu trữ danh sách các mục
  const [items, setItems] = useState<Item[]>([]);
  // Giá trị input
  const [inputValue, setInputValue] = useState('');
  // Mục được chọn
  const [selectedItem, setSelectedItem] = useState<Item | null>(selected ?? null);
  // Theo dõi việc mở/đóng danh sách
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Cập nhật danh sách các mục từ props data
    setItems(data);
  }, [data]);

  const handleSelect = (item: Item) => {
    // Cập nhật mục được chọn
    setSelectedItem(item);
    // Đóng danh sách khi chọn mục
    setOpen(false);
    // Đặt lại giá trị input
    setInputValue('');
    // Đưa mục được chọn lên đầu danh sách
    setItems((prevItems) => [item, ...prevItems.filter((i) => i.key !== item.key)]);
  };

  return (
    <div className={`w-[${width}] w-fit font-medium ${colorText} cursor-pointer relative z-20`}>
      {/* Hiển thị mục được chọn hoặc 'Select' nếu chưa có mục nào được chọn */}
      <div
        className={`
          flex-between-center w-full py-2 gap-x-[2px] rounded 
          ${!selectedItem && 'text-gray-700'}
          ${bgColor}
        `}
        // Mở/đóng danh sách khi nhấn vào
        onClick={() => setOpen(!open)}
      >
        {selectedItem
          ? selectedItem.name.length > 25
            ? selectedItem.name.substring(0, 25) + '...'
            : selectedItem.name
          : 'Select'}
        <ArrowDropDown className={`transition-transform-fast ${open && 'rotate-180'} w-clamp-18`} />
      </div>
      {/* Hiển thị hoặc ẩn các mục với open */}
      <ul
        className={`bg-white text-black overflow-y-auto min-w-72 absolute top-full mt-2 shadow-md  
          ${left && 'left-0'} 
          ${right && 'right-0'}
          ${open ? 'max-h-60' : 'max-h-0'} 
          `}
      >
        <div className='flex-center px-2 sticky top-0 bg-white'>
          <div className='w-10 '>
            <Search className='mx-auto w-clamp-24' />
          </div>
          {/* Input để tìm kiếm mục */}
          <input
            type='text'
            value={inputValue}
            // Cập nhật giá trị input
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder='Enter item name'
            className='placeholder:text-gray-700 p-2 outline-none grow'
          />
        </div>
        {/* Hiển thị danh sách các mục */}
        {items.map((item: Item) => (
          <li
            key={item.key}
            // Tìm kiếm và đánh dấu mục được chọn
            className={` 
              p-2 text-clamp-14 hover:bg-orange-bright hover:text-white 
              ${item.name.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}    
              ${item.name.toLowerCase() === selectedItem?.name.toLowerCase() && 'bg-orange-bright text-white'}
            `}
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

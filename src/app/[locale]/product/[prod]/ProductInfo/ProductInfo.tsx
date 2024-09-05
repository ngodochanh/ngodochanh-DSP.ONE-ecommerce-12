'use client';

import { Avatar, Button, Textarea } from '@nextui-org/react';
import { Chip } from '@nextui-org/chip';
import ProductInfoItem from './ProductInfoItem';
import { SvgChevronRight, SvgDislike, SvgLike } from '@/components/Svgs';
import ProductWrapper from '@/app/[locale]/product/[prod]/ProductWrapper';
import { useCallback, useState } from 'react';
import ProductInfoTitle from './ProductInfoTitle';

function ProductInfo() {
  const [activeTab, setActiveTab] = useState<boolean>(false);

  const handleToggleActiveTab = useCallback(() => {
    setActiveTab((prevState) => !prevState);
  }, []);

  return (
    <ProductWrapper>
      <div className='font-normal text-clamp-20 flex justify-between select-none capitalize mb-10'>
        <p>Mô tả</p>
        <p>Giới thiệu</p>
        <p>Nhận xét sản phẩm</p>
      </div>

      <article className='prose lg:prose-xl space-y-5'>
        <ProductInfoItem title='mô tả' markdown='' />

        {/* Nút mở rộng */}
        <div
          className='lg:hidden flex justify-center gap-x-[6px] font-medium text-clamp-16 text-yellow-vivid cursor-pointer'
          onClick={() => handleToggleActiveTab()}
        >
          <span className='relative inline-block overflow-hidden w-20'>
            <span
              className={`absolute left-0 top-0 w-full transition-all duration-300 ${
                activeTab ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Xem thêm
            </span>
            <span
              className={`absolute left-0 top-0 w-full transition-all duration-300 ${
                activeTab ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              Thu gọn
            </span>
          </span>

          <div className='w-clamp-24'>
            <SvgChevronRight
              className={`mt-[2.6px] ${
                activeTab ? 'rotate-[90deg]' : '-rotate-[90deg]'
              } transition-transform duration-300`}
            />
          </div>
        </div>

        <ProductInfoItem
          title='giới thiệu'
          markdown=''
          className={`${
            activeTab ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } transition-all duration-300 ease-in-out overflow-hidden lg:max-h-full lg:opacity-100`}
        />

        <div
          className={`${
            activeTab ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } transition-all duration-300 ease-in-out overflow-hidden lg:max-h-full lg:opacity-100`}
        >
          <ProductInfoTitle title='nhận xét sản phẩm' />

          <p className='font-bold text-clamp-18 mb-5'>1 bình luận</p>

          <div className='flex flex-col lg:flex-row gap-[27px]'>
            <div className='space-y-[9px] flex-1'>
              <h5 className='font-bold text-clamp-18 '>Nguyễn Hữu Tiến</h5>
              <p className='font-normal text-clamp-14'>
                Really hydrating and full coverage! A little goes a long way. I have dry skin and it did not accentuate
                any dry patches or wrinkles. I also love the shade range this product offers.Really hydrating and full
                coverage! Review by Chi Posted on 11/7/19
              </p>

              <div className='font-normal text-clamp-14'>
                <span className='mr-[25px] text-blue-cobalt'>Trả lời</span>
                <span className='text-gray-ash'>2023-06-20 14:12</span>
              </div>

              <div className='ml-[63px] flex px-[15px] py-5 gap-x-[15px] bg-gray-extra-light rounded'>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' className='w-clamp-60 h-fit' />

                <div className='space-y-[3px]'>
                  <div className='flex gap-x-6'>
                    <h5>Lâm Thành Huy</h5>
                    <Chip
                      classNames={{
                        base: ' border-small border-0 bg-yellow-vivid shadow-none',
                        content: 'drop-shadow shadow-black text-white',
                      }}
                    >
                      Quản trị viên
                    </Chip>
                  </div>
                  <p className='font-normal text-clamp-14'>
                    Really hydrating and full coverage! A little goes a long way. I have dry skin and it did not
                    accentuate any dry patches or wrinkles. I also love the shade range this product offers.Really
                    hydrating and full coverage! Review by Chi Posted on 11/7/19
                  </p>

                  <div className='flex gap-x-[25px] font-normal text-clamp-14'>
                    <span className='text-blue-cobalt'>Trả lời</span>
                    <div className='flex items-center gap-x-[5px] text-blue-cobalt w-fit'>
                      <div className='w-clamp-14'>
                        <SvgLike />
                      </div>
                      <p>Hài lòng</p>
                    </div>

                    <div className='flex items-center gap-x-[5px] text-blue-cobalt w-fit'>
                      <div className='w-clamp-14'>
                        <SvgDislike />
                      </div>
                      <p>Không hài lòng</p>
                    </div>

                    <span className='text-gray-ash'>2023-06-20 14:12</span>
                  </div>
                </div>
              </div>
            </div>

            <form action='' className='flex flex-col gap-y-[9px]  lg:max-w-[533px] w-full'>
              <h5 className='font-bold text-clamp-18 '>Đánh giá hoặc bình luận sản phẩm</h5>
              <div className='space-x-[9px] py-[5px]'>
                <Button radius='full' className='bg-yellow-vivid min-w-[104px] text-white shadow-none'>
                  Bình luận
                </Button>
                <Button radius='full' className='min-w-[104px] bg-gray-light-mid'>
                  Đánh giá
                </Button>
              </div>
              <Textarea
                placeholder='Gửi đánh giá hoặc bình luận của bạn'
                classNames={{
                  base: 'w-full flex-1',
                  inputWrapper: 'bg-white shadow-none border-1 border-gray-light-mid py-[15px] px-5 !h-full',
                  input: 'font-normal text-clamp-14 ',
                }}
              />
            </form>
          </div>
        </div>
      </article>
    </ProductWrapper>
  );
}

export default ProductInfo;

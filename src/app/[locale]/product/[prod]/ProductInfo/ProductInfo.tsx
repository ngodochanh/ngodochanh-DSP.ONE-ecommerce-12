'use client';

import { Avatar, Button, Textarea } from '@nextui-org/react';
import { Chip } from '@nextui-org/chip';
import ProductInfoItem from './ProductInfoItem';
import { IoIosArrowDown } from 'react-icons/io';
import { BiSolidLike } from 'react-icons/bi';
import { BiSolidDislike } from 'react-icons/bi';
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
      <div className="mb-10 flex select-none justify-between text-clamp-20 font-normal capitalize">
        <p>Mô tả</p>
        <p>Giới thiệu</p>
        <p>Nhận xét sản phẩm</p>
      </div>

      <article className="prose lg:prose-xl space-y-5">
        <ProductInfoItem title="mô tả" markdown="" />

        {/* Nút mở rộng */}
        <div
          className="flex cursor-pointer justify-center gap-x-[6px] text-clamp-16 font-medium text-yellow-vivid lg:hidden"
          onClick={() => handleToggleActiveTab()}
        >
          <span className="relative inline-block h-6 w-20 overflow-hidden">
            <span
              className={`absolute left-0 top-0 w-full transition-all duration-300 ${
                activeTab ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              Thu gọn
            </span>
            <span
              className={`absolute left-0 top-0 w-full transition-all duration-300 ${
                activeTab ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              Xem thêm
            </span>
          </span>

          <IoIosArrowDown
            className={`mt-[2.6px] ${activeTab ? '' : '-rotate-[90deg]'} h-full w-clamp-20 transition-transform duration-300`}
          />
        </div>

        <ProductInfoItem
          title="giới thiệu"
          markdown=""
          className={`${
            activeTab ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-300 ease-in-out lg:max-h-full lg:opacity-100`}
        />

        <div
          className={`${
            activeTab ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-300 ease-in-out lg:max-h-full lg:opacity-100`}
        >
          <ProductInfoTitle title="nhận xét sản phẩm" />

          <p className="mb-5 text-clamp-18 font-bold">1 bình luận</p>

          <div className="flex flex-col gap-[27px] lg:flex-row">
            <div className="flex-1 space-y-[9px]">
              <h5 className="text-clamp-18 font-bold">Nguyễn Hữu Tiến</h5>
              <p className="text-clamp-14 font-normal">
                Really hydrating and full coverage! A little goes a long way. I have dry skin and it did not accentuate
                any dry patches or wrinkles. I also love the shade range this product offers.Really hydrating and full
                coverage! Review by Chi Posted on 11/7/19
              </p>

              <div className="text-clamp-14 font-normal">
                <span className="mr-[25px] text-blue-cobalt">Trả lời</span>
                <span className="text-gray-ash">2023-06-20 14:12</span>
              </div>

              <div className="ml-2 flex gap-x-2 rounded bg-gray-extra-light px-2 py-5 sm:ml-[30px] sm:gap-x-[15px] sm:px-[15px] xl:ml-[63px]">
                <div className="w-clamp-60">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </div>

                <div className="space-y-[3px]">
                  <div className="flex gap-x-6">
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
                  <p className="text-clamp-14 font-normal">
                    Really hydrating and full coverage! A little goes a long way. I have dry skin and it did not
                    accentuate any dry patches or wrinkles. I also love the shade range this product offers.Really
                    hydrating and full coverage! Review by Chi Posted on 11/7/19
                  </p>

                  <div className="gap-x-2 text-clamp-14 font-normal sm:gap-x-[25px]">
                    <div className="flex space-x-2">
                      <span className="text-blue-cobalt">Trả lời</span>

                      <div className="flex w-fit items-center gap-x-[5px] text-blue-cobalt">
                        <div className="w-clamp-14">
                          <BiSolidLike />
                        </div>
                        <p>Hài lòng</p>
                      </div>

                      <div className="flex w-fit items-center gap-x-[5px] text-blue-cobalt">
                        <div className="w-clamp-14">
                          <BiSolidDislike />
                        </div>
                        <p>Không hài lòng</p>
                      </div>
                    </div>

                    <span className="w-full text-gray-ash sm:w-fit">2023-06-20 14:12</span>
                  </div>
                </div>
              </div>
            </div>

            <form action="" className="flex w-full flex-col gap-y-[9px] lg:max-w-[433px] xl:max-w-[533px]">
              <h5 className="text-clamp-18 font-bold">Đánh giá hoặc bình luận sản phẩm</h5>
              <div className="space-x-[9px] py-[5px]">
                <Button radius="full" className="min-w-[104px] bg-yellow-vivid text-white shadow-none">
                  Bình luận
                </Button>
                <Button radius="full" className="min-w-[104px] bg-gray-light-mid">
                  Đánh giá
                </Button>
              </div>
              <Textarea
                placeholder="Gửi đánh giá hoặc bình luận của bạn"
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

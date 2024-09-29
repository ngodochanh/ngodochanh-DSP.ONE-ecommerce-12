'use client';

import { actions, useStore } from '@/components/Store';
import { Avatar, Button, DatePicker, Input, Radio, RadioGroup } from '@nextui-org/react';
import { CUSTOMER_LIST, GENDER_LIST } from '@/data';
import { useForm } from 'react-hook-form';
import { profileInfoSchema, IProfileInfoSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useState } from 'react';
import { DateValue, parseDate } from '@internationalized/date';
import { FaCamera } from 'react-icons/fa';
import TitleHeader from '@/components/TitleHeader';

export default function Profile({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const {
    state: { profile },
    dispatch,
  } = useStore();
  // Quản lý giá trị ngày sinh
  const [birthday, setBirthday] = useState<DateValue | null>(
    profile.birthday
      ? parseDate(
          `${profile.birthday.getFullYear()}-${(profile.birthday.getMonth() + 1).toString().padStart(2, '0')}-${profile.birthday.getDate().toString().padStart(2, '0')}`,
        )
      : null,
  );
  // Xem trước hình ảnh hồ sơ
  const [previewImage, setPreviewImage] = useState(profile.image);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IProfileInfoSchema>({
    defaultValues: profile,
    resolver: zodResolver(profileInfoSchema),
  });

  // Hàm xử lý thay đổi hình ảnh
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (previewImage) {
        URL.revokeObjectURL(previewImage); // Giải phóng URL hình ảnh cũ để tiết kiệm bộ nhớ
      }

      const originalName = file.name; // Tên tệp gốc
      const extension = originalName.split('.').pop(); // Lấy phần mở rộng
      const baseName = originalName.replace(`.${extension}`, '').replace(/\s+/g, '_'); // Xóa phần mở rộng và thay thế khoảng trắng
      const newFileName = `${baseName}_${Date.now()}.${extension}`; // Tạo tên mới

      setPreviewImage(URL.createObjectURL(file)); // Tạo URL xem trước cho tệp đã chọn
      setValue('image', newFileName);
    }
  };

  // Hàm xác thực dữ liệu hồ sơ so với dữ liệu trên máy chủ
  const validateProfileData = (data: IProfileInfoSchema) => {
    let hasError = false;

    // Kiểm tra nếu số điện thoại đã tồn tại
    if (CUSTOMER_LIST.some((item) => item.phone === data.phone && item.id !== profile.id)) {
      setError('phone', { type: 'manual', message: 'Số điện thoại đã tồn tại' });
      hasError = true;
    }

    // Kiểm tra nếu email đã tồn tại
    if (CUSTOMER_LIST.some((item) => item.email === data.email && item.id !== profile.id)) {
      setError('email', { type: 'manual', message: 'Email đã tồn tại' });
      hasError = true;
    }

    return hasError; // Trả về liệu có lỗi xác thực hay không
  };

  // Hàm xử lý khi gửi form
  const onSubmit = (data: IProfileInfoSchema) => {
    if (!validateProfileData(data)) {
      const newInfo = {
        ...data,
        id: profile.id,
        score: profile.score,
        password: profile.password,
        // Giả lập cuộc gọi API, nên chúng ta đặt hình ảnh thành previewImage
        image: previewImage,
        birthday: birthday ? new Date(birthday.year, birthday.month - 1, birthday.day) : null,
      };
      console.log(newInfo);
      dispatch(actions.setProfile(newInfo)); // Cập nhật hồ sơ trong store
    }
  };

  return (
    <>
      <TitleHeader title="Thông tin tài khoản" />

      {/* Form thông tin hồ sơ */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 flex items-center gap-[38px]">
          <label
            htmlFor="image"
            className="relative block cursor-pointer rounded-full transition-transform duration-500 ease-in-out hover:scale-90"
          >
            <Avatar src={previewImage} classNames={{ base: 'w-clamp-100 h-clamp-100 rounded-full' }} />

            <div className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-gray-light p-2 text-clamp-16">
              <FaCamera />
            </div>
          </label>

          <input id="image" className="hidden" type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="mb-6 flex flex-col gap-6 md:flex-row">
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-[128px_auto] items-center md:grid-cols-[100px_auto] lg:grid-cols-[128px_auto]">
              <label htmlFor="fullname" className="cursor-pointer text-clamp-16 font-bold">
                Họ tên
              </label>

              <Input
                id="fullname"
                aria-label="Nhập họ và tên"
                radius="sm"
                type="text"
                placeholder="Nhập họ và tên"
                classNames={{
                  base: 'w-full',
                  inputWrapper:
                    'bg-transparent shadow-none border-1 border-solid border-gray-light-mid min-h-9 h-9 rounded-md',
                }}
                isInvalid={!!errors.fullname}
                errorMessage={errors.fullname?.message as string}
                {...register('fullname')}
              />
            </div>

            <div className="grid grid-cols-[128px_auto] items-center md:grid-cols-[100px_auto] lg:grid-cols-[128px_auto]">
              <label htmlFor="nickname" className="cursor-pointer text-clamp-16 font-bold">
                Nickname
              </label>

              <Input
                id="nickname"
                aria-label="Nhập nickname"
                radius="sm"
                type="text"
                placeholder="Nhập nickname"
                classNames={{
                  base: 'w-full',
                  inputWrapper:
                    'bg-transparent shadow-none border-1 border-solid border-gray-light-mid min-h-9 h-9 rounded-md',
                }}
                isInvalid={!!errors.nickname}
                errorMessage={errors.nickname?.message as string}
                {...register('nickname')}
              />
            </div>

            <div className="grid grid-cols-[128px_auto] items-center md:grid-cols-[100px_auto] lg:grid-cols-[128px_auto]">
              <label htmlFor="birthday" className="cursor-pointer text-clamp-16 font-bold">
                Ngày sinh
              </label>

              <DatePicker
                id="birthday"
                aria-label="Chọn ngày sinh"
                showMonthAndYearPickers
                classNames={{
                  selectorButton: 'rounded-md',
                  selectorIcon: 'text-orange-bright',
                }}
                value={birthday}
                onChange={setBirthday}
              />
            </div>

            <div className="grid grid-cols-[128px_auto] items-center md:grid-cols-[100px_auto] lg:grid-cols-[128px_auto]">
              <label className="text-clamp-16 font-bold">Giới tính</label>
              <RadioGroup
                orientation="horizontal"
                isInvalid={!!errors.gender}
                errorMessage={errors.gender?.message as string}
                defaultValue={profile.gender || GENDER_LIST.female.value}
              >
                {Object.values(GENDER_LIST).map((gender) => (
                  <Radio
                    aria-label={gender.label}
                    key={gender.value}
                    value={gender.value}
                    classNames={{
                      wrapper: 'group-data-[selected=true]:border-orange-bright',
                      control: 'bg-orange-bright',
                    }}
                    {...register('gender')}
                  >
                    {gender.label}
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            <Button
              type="submit"
              isDisabled={isSubmitting}
              className="h-10 w-full rounded-md bg-orange-bright text-white"
            >
              Lưu thay đổi
            </Button>
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-[128px_auto] items-center md:grid-cols-[100px_auto] lg:grid-cols-[128px_auto]">
                <label htmlFor="phone" className="cursor-pointer text-clamp-16 font-bold">
                  Số điện thoại
                </label>

                <Input
                  id="phone"
                  aria-label="Nhập số điện thoại"
                  radius="sm"
                  type="text"
                  classNames={{
                    base: 'w-full',
                    inputWrapper:
                      'bg-transparent shadow-none border-1 border-solid border-gray-light-mid min-h-9 h-9 rounded-md',
                  }}
                  placeholder="Nhập số điện thoại"
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone?.message as string}
                  {...register('phone')}
                />
              </div>

              <div className="grid grid-cols-[128px_auto] items-center md:grid-cols-[100px_auto] lg:grid-cols-[128px_auto]">
                <label htmlFor="email" className="cursor-pointer text-clamp-16 font-bold">
                  Email
                </label>

                <Input
                  id="email"
                  aria-label="Nhập email"
                  radius="sm"
                  type="text"
                  classNames={{
                    base: 'w-full',
                    inputWrapper:
                      'bg-transparent shadow-none border-1 border-solid border-gray-light-mid min-h-9 h-9 rounded-md',
                  }}
                  placeholder="Nhập email"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message as string}
                  {...register('email')}
                />
              </div>
              {/* Profile actions */}
              <div className="flex justify-between">
                <label htmlFor="" className="text-clamp-16 font-bold">
                  Đổi mật khẩu
                </label>

                <Button className="h-[calc(101px/3)] w-full max-w-32 rounded-md border-2 border-solid border-black bg-transparent data-[hover=true]:bg-orange-bright data-[hover=true]:text-white">
                  Cập nhật
                </Button>
              </div>

              <div className="flex justify-between">
                <label htmlFor="" className="text-clamp-16 font-bold">
                  Facebook
                </label>

                <Button className="h-[calc(101px/3)] w-full max-w-32 rounded-md border-2 border-solid border-black bg-transparent data-[hover=true]:bg-orange-bright data-[hover=true]:text-white">
                  Liên kết
                </Button>
              </div>

              <div className="flex justify-between">
                <label htmlFor="" className="text-clamp-16 font-bold">
                  Google
                </label>

                <Button
                  isDisabled={isSubmitting}
                  className="h-[calc(101px/3)] w-full max-w-32 rounded-md border-2 border-solid border-black bg-transparent data-[hover=true]:bg-orange-bright data-[hover=true]:text-white"
                >
                  Hủy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Xếp hạng */}
        <div>
          <h2 className="text-clamp-24 font-bold capitalize">Tổng quan thứ bậc</h2>
          <table className="border-separate border-spacing-y-4 text-clamp-16">
            <tbody>
              <tr>
                <td className="pr-16">
                  <strong>Hạng thành viên</strong>
                </td>
                <td>Sắt</td>
              </tr>
              <tr>
                <td className="pr-16">
                  <strong>Số điểm hiện tại</strong>
                </td>
                <td>{profile.score} Điểm</td>
              </tr>
              <tr>
                <td className="pr-16">
                  <strong>Số điểm cần tích lũy thêm để tăng hạng</strong>
                </td>
                <td>0 điểm nữa để thăng hạng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
}

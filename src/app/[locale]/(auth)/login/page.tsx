'use client';

import SvgLogin from '/public/images/auth/login.svg';
import Image from 'next/image';
import HeaderAuth from '@/app/[locale]/(auth)/HeaderAuth';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import { actions, useStore } from '@/components/Store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { loginSchema, ILoginFormSchema } from '@/schemas';

export default function Login({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const router = useRouter();

  const {
    state: { customers },
    dispatch,
  } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: ILoginFormSchema) => {
    const customer = customers.find((customer) => customer.phone === data.phone && customer.password === data.password);
    if (customer) {
      dispatch(actions.setProfile(customer));
      router.push(`${process.env.HOME}`);
    } else {
      // Xử lý đăng nhập không thành công
      alert('Số điện thoại hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="max-container flex flex-col items-center gap-[54px] py-12 md:flex-row lg:gap-x-[74px] xl:gap-x-[94px] 2xl:gap-x-[114px]">
      <div className="relative h-[280px] w-full sm:h-[380px] md:w-[57%] lg:h-[480px] lg:w-[60%] xl:h-[580px] 2xl:h-[680px] 2xl:w-1/2">
        <Image src={SvgLogin} alt="login" fill className="object-contain" />
      </div>

      <div className="w-full md:w-[43%] lg:w-[40%] 2xl:w-1/2">
        <HeaderAuth title="Đăng nhập" desc="Vui lòng nhập đầy đủ thông tin đăng nhập!" />

        <form className="mb-4 space-y-10" onSubmit={handleSubmit(onSubmit)}>
          <Input
            radius="none"
            type="text"
            placeholder="Số điện thoại"
            classNames={{
              inputWrapper:
                'bg-transparent shadow-none border-b-1 border-solid border-black-50 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0',
            }}
            {...register('phone')}
            isInvalid={!!errors.phone}
            errorMessage={errors.phone?.message as string}
            data-slot="input"
            aria-label="Số điện thoại"
          />

          <Input
            radius="none"
            type="password"
            placeholder="Mật khẩu"
            classNames={{
              inputWrapper:
                'bg-transparent shadow-none border-b-1 border-solid border-black-50 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0',
            }}
            {...register('password')}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as string}
            data-slot="input"
            aria-label="Mật khẩu"
          />

          <Button type="submit" radius="sm" className="h-14 w-full bg-orange-bright text-white">
            Đăng nhập
          </Button>
        </form>

        <footer className="space-y-4 text-center">
          <Link href={''} className="">
            Quên mật khẩu
          </Link>

          <p>
            Bạn chưa có tài khoản?{' '}
            <Link href={`/${locale}${process.env.REGISTER}`} className="text-orange-bright">
              Đăng ký ngay
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

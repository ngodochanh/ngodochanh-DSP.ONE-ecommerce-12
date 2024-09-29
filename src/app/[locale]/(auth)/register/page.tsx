'use client';

import SvgRegister from '/public/images/auth/register.svg';
import Image from 'next/image';
import HeaderAuth from '@/app/[locale]/(auth)/HeaderAuth';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { actions, useStore } from '@/components/Store';
import { registerSchema, IRegisterFormSchema } from '@/schemas';
import { useRouter } from 'next/navigation';
import { CUSTOMER_LIST } from '@/data';

export default function Register({
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
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IRegisterFormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  // Kiểm tra trong csdl
  const validateCustomerData = (data: IRegisterFormSchema) => {
    let hasError = false;

    if (CUSTOMER_LIST.some((item) => item.phone === data.phone)) {
      setError('phone', { type: 'manual', message: 'Số điện thoại đã tồn tại' });
      hasError = true;
    }

    return hasError;
  };

  const onSubmit = (data: IRegisterFormSchema) => {
    if (!validateCustomerData(data)) {
      const newCustomer = {
        id: 'ctm' + (customers.length + 1),
        fullname: '',
        phone: data.phone,
        password: data.password,
        address: '',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        nickname: '',
        birthday: new Date(),
        gender: '',
        email: '',
        score: 0,
      };
      dispatch(actions.addCustomer(newCustomer));
      reset();
      router.push(`/${locale}${process.env.LOGIN}`);
    }
  };
  return (
    <div className="max-container flex flex-col items-center gap-[54px] py-12 md:flex-row lg:gap-x-[74px] xl:gap-x-[94px] 2xl:gap-x-[114px]">
      <div className="relative h-[280px] w-full sm:h-[380px] md:w-[57%] lg:h-[480px] lg:w-[60%] xl:h-[580px] 2xl:h-[680px] 2xl:w-1/2">
        <Image src={SvgRegister} alt="register" fill className="object-contain" />
      </div>

      <div className="w-full md:w-[43%] lg:w-[40%] 2xl:w-1/2">
        <HeaderAuth title="Đăng ký" desc="Vui lòng nhập đầy đủ thông tin đăng nhập!" />

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

          <Input
            radius="none"
            type="password"
            placeholder="Xác nhận mật khẩu"
            classNames={{
              inputWrapper:
                'bg-transparent shadow-none border-b-1 border-solid border-black-50 data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0',
            }}
            {...register('confirmPassword')}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message as string}
            data-slot="input"
            aria-label="Xác nhận mật khẩu"
          />

          <Button
            type="submit"
            radius="sm"
            className="h-14 w-full bg-orange-bright text-white"
            isDisabled={isSubmitting}
          >
            Đăng ký ngay
          </Button>
        </form>

        <footer className="space-y-4 text-center">
          <Link href={''} className="">
            Quên mật khẩu
          </Link>

          <p>
            Bạn đã có tài khoản?{' '}
            <Link href={`/${locale}${process.env.LOGIN}`} className="text-orange-bright">
              Đăng nhập
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

import { z } from 'zod';

export const registerSchema = z
  .object({
    phone: z.string().min(10, 'Số điện thoại phải có ít nhất 10 ký tự'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirmPassword: z.string().min(6, 'Xác nhận mật khẩu phải có ít nhất 6 ký tự'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu và xác nhận mật khẩu không khớp',
    path: ['confirmPassword'],
  });

export type IRegisterFormSchema = z.infer<typeof registerSchema>;

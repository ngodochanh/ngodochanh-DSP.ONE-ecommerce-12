import { z } from 'zod';

export const loginSchema = z.object({
  phone: z.string().nonempty('Số điện thoại là bắt buộc'),
  password: z.string().nonempty('Mật khẩu là bắt buộc'),
});

export type TLoginFormSchema = z.infer<typeof loginSchema>;

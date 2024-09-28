import { z } from 'zod';

export const profileInfoSchema = z.object({
  fullname: z.string().nonempty('Họ tên không được để trống'),
  nickname: z.string(),
  image: z.string().optional(),
  gender: z.string(),
  phone: z
    .string()
    .nonempty('Số điện thoại không được để trống')
    .regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại không hợp lệ'),
  email: z
    .string()
    .nonempty('Email không được để trống')
    .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email không hợp lệ'),
});

export type TProfileInfoSchema = z.infer<typeof profileInfoSchema>;

import { z } from 'zod';

export const addressDirectorySchema = z.object({
  fullname: z.string().nonempty('Họ và tên không được để trống'),
  phone: z
    .string()
    .nonempty('Số điện thoại không được để trống')
    .regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại không hợp lệ'),
  address: z.string().nonempty('Địa chỉ không được để trống').min(10, 'Ít nhất 10 ký tự'),
});

export type IAddressDirectorySchema = z.infer<typeof addressDirectorySchema>;

import { z } from 'zod';

export const cartTransactionSchema = z.object({
  // Phương thức vận chuyển
  shipping: z.string().nonempty('Chọn phương thức vận chuyển'),
  // Phương thức thanh toán
  payment: z.string().nonempty('Chọn phương thức thanh toán'),
  // Xử lý đơn hàng
  orderProcessing: z.string().nonempty('Chọn xử lý đơn hàng'),
  // Mã giảm giá
  discountCode: z.string().optional(),
  // Ghi chú đơn hàng
  cartNotes: z.string().optional(),
});

export type ICartTransactionSchema = z.infer<typeof cartTransactionSchema>;

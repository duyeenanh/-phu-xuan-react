import { z } from 'zod';

// Định nghĩa lược đồ Zod cho một Địa danh
export const diaDanhSchema = z.object({
  id: z.number(),
  ten: z.string().min(1, 'Tên không được để trống'),
  loai: z.enum(['Di tích', 'Cảnh quan', 'Ẩm thực']),
  giaVe: z.number().nonnegative('Giá vé không được âm'),
  anh: z.string().url('Ảnh phải là đường dẫn hợp lệ'),
  moTa: z.string(),
});

// Tự động suy ra kiểu TypeScript từ lược đồ Zod
export type DiaDanh = z.infer<typeof diaDanhSchema>;
import { z } from 'zod';

export const diaDanhSchema = z.object({
  id: z.number(),
  ten: z.string().min(1, 'Tên không được để trống'),
  loai: z.enum(['Di tích', 'Cảnh quan', 'Ẩm thực']),
  giaVe: z.number().nonnegative('Giá vé không được âm'),
  anh: z.string().url('Ảnh phải là đường dẫn hợp lệ'),
  moTa: z.string(),
});

export type DiaDanh = z.infer<typeof diaDanhSchema>;

export interface AttractionsStore {
  attractions: DiaDanh[];
  addAttraction: (attraction: DiaDanh) => void;
}

// Lab 1: khai báo kiểu thủ công (sẽ thay bằng z.infer ở Lab 4)
export type LoaiDiaDanh = 'Di tích' | 'Cảnh quan' | 'Ẩm thực';

export interface DiaDanh {
  id: number;
  ten: string;
  loai: LoaiDiaDanh;
  giaVe: number; // đơn vị: đồng; 0 = miễn phí
  anh: string;
  moTa: string;
}
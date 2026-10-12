// src/utils/diaDanh-utils.ts
import type { DiaDanh } from '../types';

/**
 * Lọc danh sách địa danh theo từ khóa tìm kiếm (tên hoặc mô tả)
 */
export const locTheoTuKhoa = (danhSach: DiaDanh[], tuKhoa: string): DiaDanh[] => {
  const tuKhoaThuong = tuKhoa.toLowerCase().trim();
  if (!tuKhoaThuong) return danhSach;

  return danhSach.filter((item) =>
    item.ten.toLowerCase().includes(tuKhoaThuong) ||
    item.moTa.toLowerCase().includes(tuKhoaThuong)
  );
};
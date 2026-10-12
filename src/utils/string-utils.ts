// src/utils/string-utils.ts

/**
 * Viết hoa chữ cái đầu tiên của chuỗi
 */
export const hoaChuCaiDau = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Định dạng số tiền sang chuẩn Việt Nam Đồng (VND)
 */
export const dinhDangTien = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};
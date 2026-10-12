import { useState, useEffect } from 'react';
import { z } from 'zod';

export type TrangThaiFetch<T> =
  | { dangTai: true; duLieu: null; loi: null }
  | { dangTai: false; duLieu: T; loi: null }
  | { dangTai: false; duLieu: null; loi: string };

// Nhận thêm schema Zod tùy chọn để validate dữ liệu
export default function useFetch<T>(duongDan: string, schema?: z.ZodSchema<T>): TrangThaiFetch<T> {
  const [trangThai, setTrangThai] = useState<TrangThaiFetch<T>>({
    dangTai: true,
    duLieu: null,
    loi: null,
  });

  useEffect(() => {
    let daHuy = false;

    async function taiDuLieu() {
      try {
        setTrangThai({ dangTai: true, duLieu: null, loi: null });
        const phanHoi = await fetch(duongDan);
        if (!phanHoi.ok) {
          throw new Error(`Lỗi máy chủ: ${phanHoi.status}`);
        }
        const json = await phanHoi.json();

        // Nếu có truyền schema Zod, tiến hành parse/validate dữ liệu
        const ketQua: T = schema ? schema.parse(json) : json;

        if (!daHuy) {
          setTrangThai({ dangTai: false, duLieu: ketQua, loi: null });
        }
      } catch (e: unknown) {
        if (!daHuy) {
          const thongBaoLoi = e instanceof Error ? e.message : 'Đã xảy ra lỗi không xác định hoặc dữ liệu không hợp lệ';
          setTrangThai({ dangTai: false, duLieu: null, loi: thongBaoLoi });
        }
      }
    }

    taiDuLieu();

    return () => {
      daHuy = true;
    };
  }, [duongDan, schema]);

  return trangThai;
}
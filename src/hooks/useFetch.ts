import { useState, useEffect } from 'react';

// 1. Định nghĩa Union phân biệt cho trạng thái Fetch
export type TrangThaiFetch<T> =
  | { dangTai: true; duLieu: null; loi: null }
  | { dangTai: false; duLieu: T; loi: null }
  | { dangTai: false; duLieu: null; loi: string };

// Hàm trợ giúp kiểm tra vét cạn (exhaustive check) bằng never
function xuLyVetCan(x: never): never {
  throw new Error(`Trạng thái không hợp lệ: ${JSON.stringify(x)}`);
}

// 2. Xây dựng Custom Hook generic useFetch<T>
export default function useFetch<T>(duongDan: string): TrangThaiFetch<T> {
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
        const ketQua: T = await phanHoi.json();
        if (!daHuy) {
          setTrangThai({ dangTai: false, duLieu: ketQua, loi: null });
        }
      } catch (e: unknown) {
        if (!daHuy) {
          const thongBaoLoi = e instanceof Error ? e.message : 'Đã xảy ra lỗi không xác định';
          setTrangThai({ dangTai: false, duLieu: null, loi: thongBaoLoi });
        }
      }
    }

    taiDuLieu();

    return () => {
      daHuy = true;
    };
  }, [duongDan]);

  return trangThai;
}
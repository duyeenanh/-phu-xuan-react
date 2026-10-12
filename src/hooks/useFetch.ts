import { useEffect, useState } from "react";

export type TrangThaiFetch<T> =
  | { dangTai: true; duLieu: null; loi: null }
  | { dangTai: false; duLieu: T; loi: null }
  | { dangTai: false; duLieu: null; loi: string };

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
          const thongBaoLoi =
            e instanceof Error ? e.message : "Đã xảy ra lỗi không xác định";
          setTrangThai({ dangTai: false, duLieu: null, loi: thongBaoLoi });
        }
      }
    }

    void taiDuLieu();

    return () => {
      daHuy = true;
    };
  }, [duongDan]);

  return trangThai;
}
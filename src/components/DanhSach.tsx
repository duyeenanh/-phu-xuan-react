import type { Key, ReactNode } from "react";

type DanhSachProps<T> = {
  cacMuc: T[];
  layKhoa: (muc: T) => Key;
  hienThi: (muc: T) => ReactNode;
  khiRong?: ReactNode;
};

export default function DanhSach<T>({
  cacMuc,
  layKhoa,
  hienThi,
  khiRong = <p>Chưa có dữ liệu.</p>,
}: DanhSachProps<T>) {
  if (cacMuc.length === 0) {
    return <>{khiRong}</>;
  }

  return (
    <ul>
      {cacMuc.map((muc) => (
        <li key={layKhoa(muc)}>{hienThi(muc)}</li>
      ))}
    </ul>
  );
}
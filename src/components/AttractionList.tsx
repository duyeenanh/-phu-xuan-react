import type { DiaDanh } from "../types";
import DanhSach from "./DanhSach";
import { Card } from "./Card";

interface AttractionListProps {
  danhSachMoTa: readonly DiaDanh[];
}

export default function AttractionList({
  danhSachMoTa,
}: AttractionListProps) {
  return (
    <DanhSach
      cacMuc={[...danhSachMoTa]}
      layKhoa={(diaDanh) => diaDanh.id}
      khiRong={<p>Chưa có địa điểm du lịch nào.</p>}
      hienThi={(diaDanh) => (
        <Card
          title={diaDanh.title}
          category={diaDanh.category}
          description={diaDanh.description}
          imageUrl={diaDanh.imageUrl}
        />
      )}
    />
  );
}
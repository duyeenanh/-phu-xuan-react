import AttractionCard from './AttractionCard';
import type { DiaDanh } from '../types/diaDanh';

export default function AttractionList({ danhSachMoTa }: { danhSachMoTa: DiaDanh[] }) {
  return (
    <div className="attraction-list">
      {danhSachMoTa.map((item) => (
        <AttractionCard
          key={item.id}
          name={item.ten}
          category={item.loai}
          description={item.moTa}
          rating={4.5}
        />
      ))}
    </div>
  );
}
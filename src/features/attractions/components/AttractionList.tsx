import AttractionCard from './AttractionCard.tsx';
import type { DiaDanh } from '../types.ts';

interface AttractionListProps {
  danhSachMoTa: DiaDanh[];
}

export default function AttractionList({ danhSachMoTa }: AttractionListProps) {
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

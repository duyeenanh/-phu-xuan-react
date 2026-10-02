import AttractionCard from './AttractionCard';
import useFetch from '../hooks/useFetch';
import type { DiaDanh } from '../types/diaDanh';

export default function AttractionList() {
  const { dangTai, duLieu, loi } = useFetch<DiaDanh[]>('/data/attractions.json');

  if (dangTai) {
    return <p>Đang tải danh sách địa danh...</p>;
  }

  if (loi) {
    return <p style={{ color: 'red' }}>Lỗi: {loi}</p>;
  }

  return (
    <div className="attraction-list">
      {duLieu?.map((item) => (
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
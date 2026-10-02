import AttractionCard from './AttractionCard';
import useFetch from '../hooks/useFetch';
import type { DiaDanh } from '../types/diaDanh';

export default function AttractionList() {
  // Sử dụng custom hook useFetch<T> đã tạo
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
          attraction={item}
        />
      ))}
    </div>
  );
}
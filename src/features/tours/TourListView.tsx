import type { Tour } from '../../data/tours';
import { PriceFilter } from './PriceFilter';
import { TourGrid } from './TourGrid';

type TourListViewProps = {
  // Dữ liệu đã lọc, sẵn sàng hiển thị
  filteredTours: Tour[];
  totalCount: number;
  // Trạng thái bộ lọc
  minPrice: number;
  maxPrice: number;
  // Callback gửi ngược lên
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
};

// View chỉ có props và JSX — không state, không effect, không fetch
export function TourListView({
  filteredTours,
  totalCount,
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: TourListViewProps) {
  return (
    <main className="tour-list-page" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Khám phá Huế qua 6 hành trình</h1>
      
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={onMinChange}
        onMaxChange={onMaxChange}
      />

      <p className="filter-summary" style={{ fontWeight: 'bold' }}>
        Đang hiển thị {filteredTours.length} / {totalCount} tour
      </p>

      {filteredTours.length === 0 ? (
        <p className="empty-state" style={{ color: 'red' }}>
          Không có tour nào phù hợp với khoảng giá này. Hãy nới rộng thanh trượt.
        </p>
      ) : (
        <TourGrid tours={filteredTours} />
      )}
    </main>
  );
}
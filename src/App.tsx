import { useState } from 'react';
import { tours } from './data/tours';
import { PriceFilter } from './features/tours/PriceFilter';

export function App() {
  // Nâng state lên cha chung (App.tsx) — Single Source of Truth
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  // Lọc danh sách tour theo khoảng giá từ state
  const filteredTours = tours.filter(
    (t) => t.price >= minPrice && t.price <= maxPrice
  );

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Khám phá Huế qua 6 hành trình</h1>

      {/* Component lọc giá nhận giá trị và các hàm callback thay đổi state */}
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
      />

      <p style={{ fontWeight: 'bold' }}>
        Đang hiển thị {filteredTours.length} / {tours.length} tour
      </p>

      {/* Hiển thị danh sách tour đã lọc trực tiếp hoặc qua TourGrid nếu bạn đã có */}
      <div style={{ display: 'grid', gap: '12px', marginTop: '15px' }}>
        {filteredTours.map((tour) => (
          <div key={tour.id} style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '6px' }}>
            <h3>{tour.name}</h3>
            <p>Danh mục: {tour.category} | Thời gian: {tour.duration} giờ</p>
            <p style={{ color: 'darksalmon', fontWeight: 'bold' }}>Giá: {tour.price.toLocaleString()}đ</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
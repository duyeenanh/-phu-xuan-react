import type { Tour } from '../../data/tours';

type TourGridProps = {
  tours: Tour[];
};

// Đảm bảo phải có chữ "export" ở đầu như thế này:
export function TourGrid({ tours }: TourGridProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px', marginTop: '15px' }}>
      {tours.map((tour) => (
        <div key={tour.id} style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '8px', background: '#fff' }}>
          <h3>{tour.name}</h3>
          <p>Danh mục: {tour.category}</p>
          <p>Thời gian: {tour.duration} giờ</p>
          <p style={{ color: '#d9534f', fontWeight: 'bold' }}>Giá: {tour.price.toLocaleString()}đ</p>
        </div>
      ))}
    </div>
  );
}
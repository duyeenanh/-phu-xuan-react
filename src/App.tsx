import DanhSach from './components/DanhSach.tsx';
import { attractions } from './data/attractions.ts'; // Import trực tiếp từ file local

export default function App() {
  return (
    <div className="app" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Lab 5 - Thành phần Generic DanhSach&lt;T&gt;</h1>

      <h2>Danh Sách Địa Danh</h2>
      {/* Sử dụng component generic DanhSach<T> với mảng dữ liệu import trực tiếp */}
      <DanhSach
        cacMuc={attractions}
        layKhoa={(item) => item.id}
        hienThi={(item) => (
          <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
            <strong>{item.ten}</strong> - <em>{item.loai}</em> ({item.giaVe.toLocaleString('vi-VN')} đ)
          </div>
        )}
        khiRong={<p>Không có địa danh nào để hiển thị.</p>}
      />
    </div>
  );
}
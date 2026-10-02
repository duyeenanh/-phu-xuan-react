import { useState } from 'react';
import AttractionList from './components/AttractionList';
import AttractionForm from './components/AttractionForm';
import { attractions } from './data/attractions';
import type { DiaDanh } from './types/diaDanh';

export default function App() {
  // Quản lý state danh sách địa danh trực tiếp trên giao diện để test form thêm mới
  const [danhSach, setDanhSach] = useState<DiaDanh[]>(attractions);

  // Hàm nhận dữ liệu mới từ form và đưa vào danh sách
  const handleAddDiaDanh = (newItem: DiaDanh) => {
    setDanhSach((prev) => [newItem, ...prev]);
  };

  return (
    <div className="app" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Khám phá Huế - Lab 4 Zod Validation</h1>

      {/* Form thêm địa danh có kiểm chứng bằng Zod */}
      <AttractionForm onAdd={handleAddDiaDanh} />

      <hr style={{ margin: '20px 0' }} />

      <h2>Danh sách địa danh</h2>
      {/* Hiển thị danh sách */}
      <AttractionList danhSachMoTa={danhSach} />
    </div>
  );
}
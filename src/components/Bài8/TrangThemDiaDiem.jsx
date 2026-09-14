import { useState } from 'react';
import ThemDiaDanhForm from './ThemDiaDanhForm';
import XemTruocTheDiaDiem from './XemTruocTheDiaDiem';

export default function TrangThemDiaDiem() {
  // Trạng thái được nâng lên cấp cha để chia sẻ cho cả Form và Khung Xem Trước
  const [formData, setFormData] = useState({
    tenDiaDanh: '',
    moTa: '',
    khuVuc: 'trong thanh noi',
    loaiHinh: 'Di tích lịch sử',
    noiBat: false,
    tienIch: []
  });

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#8b0000', textAlign: 'center' }}>Lab 5 — Nâng Trạng Thái (Lifting State Up)</h2>
      
      {/* Truyền hàm cập nhật state xuống form con */}
      <ThemDiaDanhForm formData={formData} setFormData={setFormData} />

      {/* Truyền giá trị state sang khung xem trước */}
      <XemTruocTheDiaDiem values={formData} />
    </div>
  );
}
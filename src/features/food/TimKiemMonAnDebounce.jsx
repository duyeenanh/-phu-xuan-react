import { useState } from 'react';
import danhSachMonAn from '../../data/mon-an.json';
import useDebounce from '../../hooks/useDebounce';

function TimKiemMonAnDebounce() {
  const [tuKhoa, setTuKhoa] = useState('');
  
  // Dùng custom hook useDebounce trễ 300ms
  const tuKhoaDaTre = useDebounce(tuKhoa, 300);

  // Lọc danh sách dựa trên tuKhoaDaTre
  console.log('Đang lọc theo từ khoá:', tuKhoaDaTre);
  const danhSachLoc = danhSachMonAn.filter((item) =>
    item.ten.toLowerCase().includes(tuKhoaDaTre.toLowerCase())
  );

  return (
    <div>
      <h2>Tìm kiếm món ăn (có dùng useDebounce)</h2>
      <input
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Gõ nhanh tên món ăn..."
      />
      <ul>
        {danhSachLoc.map((item) => (
          <li key={item.id}>
            <strong>{item.ten}</strong> — {item.gia.toLocaleString()}đ ({item.moTa})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimKiemMonAnDebounce;
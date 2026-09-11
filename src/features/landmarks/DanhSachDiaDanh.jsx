import { useState, useMemo, useCallback } from 'react';
import danhSachGoc from '../../data/dia-danh.json';
import TheDiaDanh from './TheDiaDanh';

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('');
  const [danhSach] = useState(danhSachGoc);

  const danhSachLoc = useMemo(() => {
    console.log('Đang chạy useMemo lọc danh sách địa danh...');
    return danhSach.filter((item) =>
      item.ten.toLowerCase().includes(boLoc.toLowerCase())
    );
  }, [danhSach, boLoc]);

  const handleYeuThich = useCallback((id) => {
    console.log('Đã bấm yêu thích địa danh id:', id);
  }, []);

  return (
    <div>
      <h2>Danh sách địa danh Huế</h2>
      <input
        type="text"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="Nhập tên địa danh cần tìm..."
      />
      <div>
        {danhSachLoc.map((item) => (
          <TheDiaDanh key={item.id} diaDanh={item} onYeuThich={handleYeuThich} />
        ))}
      </div>
    </div>
  );
}

export default DanhSachDiaDanh;
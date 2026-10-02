import { useState } from 'react';
import { diaDanhSchema } from '../types/diaDanh';
import type { DiaDanh } from '../types/diaDanh';

export default function AttractionForm({ onAdd }: { onAdd: (newItem: DiaDanh) => void }) {
  const [ten, setTen] = useState('');
  const [loai, setLoai] = useState<'Di tích' | 'Cảnh quan' | 'Ẩm thực'>('Di tích');
  const [giaVe, setGiaVe] = useState('');
  const [anh, setAnh] = useState('');
  const [moTa, setMoTa] = useState('');
  const [loiForm, setLoiForm] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Chuẩn bị dữ liệu để kiểm chứng bằng Zod schema
    const duLieuMoi = {
      id: Date.now(),
      ten,
      loai,
      giaVe: Number(giaVe),
      anh,
      moTa,
    };

    // Kiểm chứng dữ liệu bằng Zod safeParse
    const ketQua = diaDanhSchema.safeParse(duLieuMoi);

    if (!ketQua.success) {
      // Nếu dữ liệu không hợp lệ, gom lỗi lại để hiển thị
      const loiChiTiet: Record<string, string> = {};
      ketQua.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        if (fieldName) {
          loiChiTiet[fieldName.toString()] = issue.message;
        }
      });
      setLoiForm(loiChiTiet);
      return;
    }

    // Nếu hợp lệ, xóa lỗi cũ và gọi hàm thêm dữ liệu
    setLoiForm({});
    onAdd(ketQua.data);

    // Reset form
    setTen('');
    setGiaVe('');
    setAnh('');
    setMoTa('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Thêm Địa Danh Mới (Validate bằng Zod)</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Tên địa danh: </label>
        <input type="text" value={ten} onChange={(e) => setTen(e.target.value)} />
        {loiForm.ten && <p style={{ color: 'red', fontSize: '12px' }}>{loiForm.ten}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Loại: </label>
        <select value={loai} onChange={(e) => setLoai(e.target.value as DiaDanh['loai'])}>
          <option value="Di tích">Di tích</option>
          <option value="Cảnh quan">Cảnh quan</option>
          <option value="Ẩm thực">Ẩm thực</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Giá vé: </label>
        <input type="number" value={giaVe} onChange={(e) => setGiaVe(e.target.value)} />
        {loiForm.giaVe && <p style={{ color: 'red', fontSize: '12px' }}>{loiForm.giaVe}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Link Ảnh: </label>
        <input type="text" value={anh} onChange={(e) => setAnh(e.target.value)} />
        {loiForm.anh && <p style={{ color: 'red', fontSize: '12px' }}>{loiForm.anh}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Mô tả: </label>
        <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)} />
      </div>

      <button type="submit">Thêm địa danh</button>
    </form>
  );
}
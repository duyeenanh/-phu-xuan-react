import { useState, type FormEvent } from 'react';
import { diaDanhSchema, type DiaDanh } from '../types.ts';

interface AttractionFormProps {
  onAdd: (newItem: DiaDanh) => void;
}

export default function AttractionForm({ onAdd }: AttractionFormProps) {
  const [ten, setTen] = useState('');
  const [loai, setLoai] = useState<DiaDanh['loai']>('Di tích');
  const [giaVe, setGiaVe] = useState('');
  const [anh, setAnh] = useState('');
  const [moTa, setMoTa] = useState('');
  const [loiForm, setLoiForm] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const duLieuMoi = {
      id: Date.now(),
      ten,
      loai,
      giaVe: Number(giaVe),
      anh,
      moTa,
    };

    const ketQua = diaDanhSchema.safeParse(duLieuMoi);

    if (!ketQua.success) {
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

    setLoiForm({});
    onAdd(ketQua.data);
    setTen('');
    setGiaVe('');
    setAnh('');
    setMoTa('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}
    >
      <h3>Thêm Địa Danh Mới (Validate bằng Zod)</h3>

      <div style={{ marginBottom: '10px' }}>
        <label>Tên địa danh: </label>
        <input type="text" value={ten} onChange={(event) => setTen(event.target.value)} />
        {loiForm.ten && <p style={{ color: 'red', fontSize: '12px' }}>{loiForm.ten}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Loại: </label>
        <select
          value={loai}
          onChange={(event) => setLoai(event.target.value as DiaDanh['loai'])}
        >
          <option value="Di tích">Di tích</option>
          <option value="Cảnh quan">Cảnh quan</option>
          <option value="Ẩm thực">Ẩm thực</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Giá vé: </label>
        <input type="number" value={giaVe} onChange={(event) => setGiaVe(event.target.value)} />
        {loiForm.giaVe && <p style={{ color: 'red', fontSize: '12px' }}>{loiForm.giaVe}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Link Ảnh: </label>
        <input type="text" value={anh} onChange={(event) => setAnh(event.target.value)} />
        {loiForm.anh && <p style={{ color: 'red', fontSize: '12px' }}>{loiForm.anh}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Mô tả: </label>
        <textarea value={moTa} onChange={(event) => setMoTa(event.target.value)} />
      </div>

      <button type="submit">Thêm địa danh</button>
    </form>
  );
}

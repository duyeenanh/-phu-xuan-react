import { useState } from 'react';

export default function ThemDiaDanhForm() {
  // 1. Khai báo State quản lý dữ liệu form (Controlled Components)
  const [formData, setFormData] = useState({
    tenDiaDanh: '',
    moTa: '',
    khuVuc: 'trong thanh noi',
    loaiHinh: 'Di tích lịch sử',
    noiBat: false,
    tienIch: []
  });

  // 2. Viết hàm xử lý sự kiện handleChange dùng chung cho mọi input
  function handleChange(e) {
    const { name, type, value, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'tienIch') {
        const danhSachHienTai = [...formData.tienIch];
        if (checked) {
          danhSachHienTai.push(value);
        } else {
          const index = danhSachHienTai.indexOf(value);
          if (index > -1) danhSachHienTai.splice(index, 1);
        }
        setFormData({ ...formData, tienIch: danhSachHienTai });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  // 3. Hàm xử lý khi submit form
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Dữ liệu form:', formData);
    alert(`Đã lưu thành công địa danh: ${formData.tenDiaDanh}!`);
  }

  // 4. Xây dựng phần giao diện Form (JSX)
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#8b0000' }}>Lab 1 & 2 — Biểu mẫu thêm địa danh Huế</h2>
      
      <form onSubmit={handleSubmit} style={{ background: '#fdfbf7', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        
        {/* Ô nhập tên địa danh */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Tên địa danh: </label>
          <input 
            type="text" 
            name="tenDiaDanh" 
            value={formData.tenDiaDanh} 
            onChange={handleChange} 
            placeholder="Nhập tên địa danh..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>

        {/* Ô nhập mô tả */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Mô tả chi tiết: </label>
          <textarea 
            name="moTa" 
            value={formData.moTa} 
            onChange={handleChange} 
            placeholder="Nhập mô tả lịch sử..."
            rows="3"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Chọn khu vực */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Khu vực: </label>
          <select 
            name="khuVuc" 
            value={formData.khuVuc} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="trong thanh noi">Trong Thành Nội</option>
            <option value="ngoai o">Ngoại ô</option>
          </select>
        </div>

        {/* Nút gửi form */}
        <button 
          type="submit" 
          style={{ background: '#8b0000', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Lưu Địa Danh
        </button>
      </form>

      {/* Xem dữ liệu state trực tiếp realtime */}
      <div style={{ background: '#f4f4f4', padding: '15px', marginTop: '20px', borderRadius: '6px' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>Dữ liệu State hiện tại:</h4>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
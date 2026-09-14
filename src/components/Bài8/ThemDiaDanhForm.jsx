import { useState } from 'react';
import { kiemChungForm } from '../../utils/kiemChung';

export default function ThemDiaDanhForm() {
  const [formData, setFormData] = useState({
    tenDiaDanh: '',
    moTa: '',
    khuVuc: 'trong thanh noi',
    loaiHinh: 'Di tích lịch sử',
    noiBat: false,
    tienIch: []
  });

  // State phục vụ Lab 3: theo dõi ô đã chạm (onBlur) và trạng thái gửi
  const [daCham, setDaCham] = useState({});
  const [trangThaiGui, setTrangThaiGui] = useState('CHO'); // 'CHO', 'DANG_GUI', 'THANH_CONG', 'LOI'

  // Gọi hàm kiểm chứng lỗi tự động
  const errors = kiemChungForm(formData);

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'tienIch') {
        const danhSach = [...formData.tienIch];
        if (checked) danhSach.push(value);
        else {
          const idx = danhSach.indexOf(value);
          if (idx > -1) danhSach.splice(idx, 1);
        }
        setFormData({ ...formData, tienIch: danhSach });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  // Sự kiện khi người dùng rời khỏi ô input (Blur)
  function handleBlur(e) {
    const { name } = e.target;
    setDaCham({ ...daCham, [name]: true });
  }

  // Xử lý khi bấm nút Submit form
  function handleSubmit(e) {
    e.preventDefault();
    setDaCham({ tenDiaDanh: true, moTa: true });

    if (Object.keys(errors).length > 0) {
      setTrangThaiGui('LOI');
      return;
    }

    setTrangThaiGui('DANG_GUI');
    setTimeout(() => {
      setTrangThaiGui('THANH_CONG');
      console.log('Dữ liệu hợp lệ:', formData);
    }, 1000);
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#8b0000' }}>Lab 3 — Kiểm chứng dữ liệu & Vòng đời gửi Form</h2>
      
      <form onSubmit={handleSubmit} style={{ background: '#fdfbf7', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        
        {/* Ô Tên Địa Danh */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Tên địa danh: </label>
          <input 
            type="text" 
            name="tenDiaDanh" 
            value={formData.tenDiaDanh} 
            onChange={handleChange} 
            onBlur={handleBlur}
            placeholder="Nhập tên địa danh..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {daCham.tenDiaDanh && errors.tenDiaDanh && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.tenDiaDanh}</span>
          )}
        </div>

        {/* Ô Mô Tả */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Mô tả chi tiết: </label>
          <textarea 
            name="moTa" 
            value={formData.moTa} 
            onChange={handleChange} 
            onBlur={handleBlur}
            placeholder="Nhập mô tả..."
            rows="3"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {daCham.moTa && errors.moTa && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.moTa}</span>
          )}
        </div>

        {/* Thông báo trạng thái giao diện */}
        {trangThaiGui === 'DANG_GUI' && <p style={{ color: 'blue' }}>Đang gửi dữ liệu...</p>}
        {trangThaiGui === 'THANH_CONG' && <p style={{ color: 'green', fontWeight: 'bold' }}>Thêm địa danh thành công!</p>}
        {trangThaiGui === 'LOI' && Object.keys(errors).length > 0 && (
          <p style={{ color: 'red' }}>Vui lòng kiểm tra lại các trường bị lỗi.</p>
        )}

        <button 
          type="submit" 
          disabled={trangThaiGui === 'DANG_GUI'}
          style={{ background: '#8b0000', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {trangThaiGui === 'DANG_GUI' ? 'Đang xử lý...' : 'Lưu Địa Danh'}
        </button>
      </form>
    </div>
  );
}
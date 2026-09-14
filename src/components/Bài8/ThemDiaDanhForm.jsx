import { useForm } from '../../hooks/useForm';
import { kiemChungForm } from '../../utils/kiemChung';

export default function ThemDiaDanhForm() {
  // Khởi tạo các giá trị ban đầu cho form
  const initialValues = {
    tenDiaDanh: '',
    moTa: '',
    khuVuc: 'trong thanh noi',
    loaiHinh: 'Di tích lịch sử',
    noiBat: false,
    tienIch: []
  };

  // Sử dụng Custom Hook useForm
  const {
    values,
    errors,
    touched,
    status,
    setStatus,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialValues, kiemChungForm);

  // Hàm xử lý sau khi submit thành công
  function onSubmitSuccess(formData) {
    setTimeout(() => {
      setStatus('THANH_CONG');
      console.log('Đã gửi dữ liệu thành công qua Custom Hook:', formData);
    }, 1000);
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#8b0000' }}>Lab 4 — Custom Hook useForm</h2>
      
      <form onSubmit={handleSubmit(onSubmitSuccess)} style={{ background: '#fdfbf7', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        
        {/* Tên địa danh */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Tên địa danh: </label>
          <input 
            type="text" 
            name="tenDiaDanh" 
            value={values.tenDiaDanh} 
            onChange={handleChange} 
            onBlur={handleBlur}
            placeholder="Nhập tên địa danh..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {touched.tenDiaDanh && errors.tenDiaDanh && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.tenDiaDanh}</span>
          )}
        </div>

        {/* Mô tả chi tiết */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Mô tả chi tiết: </label>
          <textarea 
            name="moTa" 
            value={values.moTa} 
            onChange={handleChange} 
            onBlur={handleBlur}
            placeholder="Nhập mô tả..."
            rows="3"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {touched.moTa && errors.moTa && (
            <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.moTa}</span>
          )}
        </div>

        {/* Thông báo trạng thái */}
        {status === 'DANG_GUI' && <p style={{ color: 'blue' }}>Đang xử lý dữ liệu qua Custom Hook...</p>}
        {status === 'THANH_CONG' && <p style={{ color: 'green', fontWeight: 'bold' }}>Thêm thành công bằng Custom Hook!</p>}
        {status === 'LOI' && <p style={{ color: 'red' }}>Vui lòng kiểm tra lại thông tin form.</p>}

        <button 
          type="submit" 
          disabled={status === 'DANG_GUI'}
          style={{ background: '#8b0000', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {status === 'DANG_GUI' ? 'Đang gửi...' : 'Lưu Địa Danh'}
        </button>
      </form>
    </div>
  );
}
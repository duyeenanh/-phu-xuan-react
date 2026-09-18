export default function XemTruocTheDiaDiem({ values }) {
  return (
    <div style={{ background: '#fff8dc', padding: '20px', borderRadius: '8px', border: '2px dashed #b8860b', marginTop: '20px' }}>
      <h3 style={{ color: '#8b0000', marginTop: 0 }}>Xem Trước Thẻ Địa Danh (Live Preview)</h3>
      <div style={{ background: 'white', padding: '15px', borderRadius: '6px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h4 style={{ color: '#333', margin: '0 0 10px 0' }}>
          {values.tenDiaDanh || '[Tên địa danh chưa nhập]'}
        </h4>
        <p style={{ margin: '5px 0', color: '#666' }}>
          <strong>Khu vực:</strong> {values.khuVuc === 'trong thanh noi' ? 'Trong Thành Nội' : 'Ngoại ô'}
        </p>
        <p style={{ margin: '5px 0', color: '#666' }}>
          <strong>Mô tả:</strong> {values.moTa || '[Chưa có mô tả chi tiết...]'}
        </p>
      </div>
    </div>
  );
}
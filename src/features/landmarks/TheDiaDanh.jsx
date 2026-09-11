import React from 'react';

const TheDiaDanh = React.memo(function TheDiaDanh({ diaDanh, onYeuThich }) {
  console.log('TheDiaDanh render lại:', diaDanh.ten);

  return (
    <div style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
      <h4>{diaDanh.ten}</h4>
      <p>Khu vực: {diaDanh.khuVuc}</p>
      <button onClick={() => onYeuThich(diaDanh.id)}>Yêu thích</button>
    </div>
  );
});

export default TheDiaDanh;
import { useState } from 'react';

export default function LuotThichMonAn() {
  const [luotThich, setLuotThich] = useState(0);

  // Dùng hàm cập nhật: mỗi lời gọi nhận kết quả của lời gọi trước đó
  function handleThich3() {
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
  }

  return (
    <div className="lab">
      <h2>Lab 3 (Phụ) — Xử lý cập nhật State</h2>
      <p>Bún bò Huế — {luotThich} lượt thích</p>
      <button onClick={() => setLuotThich((t) => t + 1)}>+1 lượt thích</button>
      <button onClick={handleThich3}>+3 lượt thích</button>
      <button onClick={() => setLuotThich(0)} disabled={luotThich === 0}>
        Đặt lại
      </button>
    </div>
  );
}
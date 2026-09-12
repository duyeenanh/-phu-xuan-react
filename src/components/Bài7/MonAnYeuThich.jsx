import { useState } from 'react';
import { DS_MON_AN } from '../../data/monAnHue';

export default function MonAnYeuThich() {
  const [danhSach, setDanhSach] = useState(DS_MON_AN.slice(0, 5));
  const [viTriDangKeo, setViTriDangKeo] = useState(null);
  const [viTriTha, setViTriTha] = useState(null);
  const [thongBao, setThongBao] = useState('');

  // 1. Kéo thả bằng chuột
  function handleDragStart(e, index) {
    setViTriDangKeo(index);
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleDragOver(e, index) {
    e.preventDefault();
    if (viTriDangKeo === null || viTriDangKeo === index) return;
    setViTriTha(index);
  }

  function handleDrop(index) {
    if (viTriDangKeo === null || viTriDangKeo === index) return;
    
    setDanhSach((truoc) => {
      const banSao = [...truoc];
      const [itemDuocKeo] = banSao.splice(viTriDangKeo, 1);
      banSao.splice(index, 0, itemDuocKeo);
      return banSao;
    });

    const tenItem = danhSach[viTriDangKeo].ten;
    setThongBao(`Đã chuyển ${tenItem} đến vị trí ${index + 1}`);
    setViTriDangKeo(null);
    setViTriTha(null);
  }

  function handleDragEnd() {
    setViTriDangKeo(null);
    setViTriTha(null);
  }

  // 2. Hỗ trợ bàn phím (Alt + Mũi tên lên / xuống)
  function handleKeyDown(e, index) {
    if (e.altKey && e.key === 'ArrowUp' && index > 0) {
      e.preventDefault();
      setDanhSach((truoc) => {
        const banSao = [...truoc];
        const [item] = banSao.splice(index, 1);
        banSao.splice(index - 1, 0, item);
        return banSao;
      });
      setThongBao(`Đã di chuyển ${danhSach[index].ten} lên trên`);
    } else if (e.altKey && e.key === 'ArrowDown' && index < danhSach.length - 1) {
      e.preventDefault();
      setDanhSach((truoc) => {
        const banSao = [...truoc];
        const [item] = banSao.splice(index, 1);
        banSao.splice(index + 1, 0, item);
        return banSao;
      });
      setThongBao(`Đã di chuyển ${danhSach[index].ten} xuống dưới`);
    }
  }

  return (
    <section className="lab">
      <h2>Lab 5 — Sắp xếp món yêu thích (Kéo thả & Bàn phím)</h2>
      <p className="huong-dan">
        Kéo thả từng dòng để đổi vị trí, hoặc dùng phím <strong>Tab</strong> vào dòng rồi nhấn <strong>Alt + Mũi tên lên/xuống</strong>.
      </p>

      <ul className="ds-mon-yeu-thich">
        {danhSach.map((mon, index) => (
          <li
            key={mon.id}
            draggable
            tabIndex={0}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              ${viTriDangKeo === index ? 'dang-keo' : ''}
              ${viTriTha === index ? 'vi-tri-tha' : ''}
            `}
          >
            <span>{index + 1}. {mon.ten}</span>
            <span className="gia">{mon.gia.toLocaleString('vi-VN')} đ</span>
          </li>
        ))}
      </ul>

      {/* Vùng thông báo ẩn cho trình đọc màn hình / người dùng */}
      <div className="thong-bao" aria-live="polite">
        {thongBao}
      </div>
    </section>
  );
}
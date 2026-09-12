import { useState } from 'react';

export default function TheDiaDanhMoRong({ 
  diaDanh, 
  dangMo, 
  laYeuThich, 
  onXem, 
  onYeuThich 
}) {
  const [daSaoChep, setDaSaoChep] = useState(false);

  // Chặn sự kiện nổi bọt để không làm mở/đóng thẻ khi bấm nút Yêu thích
  function handleYeuThich(e) {
    e.stopPropagation(); 
    onYeuThich(diaDanh.id);
  }

  // Chặn nổi bọt và thực hiện sao chép thông tin vào clipboard
  async function handleChiaSe(e) {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(diaDanh.ten + ' — ' + diaDanh.moTa);
      setDaSaoChep(true);
      setTimeout(() => setDaSaoChep(false), 1500); // 1.5 giây sau reset lại trạng thái nút
    } catch {
      alert('Trình duyệt không cho phép sao chép. Hãy chạy trên localhost.');
    }
  }

  return (
    <article 
      className={'the-mo-rong' + (dangMo ? ' dang-mo' : '')} 
      onClick={() => onXem(diaDanh.id)}
    >
      <header>
        <h3>{diaDanh.ten}</h3>
        <span className="loai">{diaDanh.loai}</span>
      </header>
      
      {/* Chỉ hiển thị phần mô tả nếu thẻ đang mở */}
      {dangMo && <p className="mo-ta">{diaDanh.moTa}</p>}

      <div className="hanh-dong">
        <button onClick={handleYeuThich} aria-pressed={laYeuThich}>
          {laYeuThich ? '♥ Đã thích' : '♡ Yêu thích'}
        </button>
        <button onClick={handleChiaSe}>
          {daSaoChep ? 'Đã sao chép' : 'Chia sẻ'}
        </button>
      </div>
    </article>
  );
}
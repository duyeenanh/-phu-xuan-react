import { useState, type DragEvent, type KeyboardEvent } from 'react';
import { DS_MON_AN } from '../data/monAnHue';

type MonAn = {
  id: string;
  ten: string;
  gia: number;
};

// Hàm thuần: trả về MẢNG MỚI với phần tử chuyển từ vị trí tu sang den
function diChuyen(mang: MonAn[], tu: number, den: number): MonAn[] {
  const moi = [...mang];
  const [phanTu] = moi.splice(tu, 1);
  moi.splice(den, 0, phanTu);
  return moi;
}

export default function MonAnYeuThich() {
  const [dsMon, setDsMon] = useState<MonAn[]>((DS_MON_AN as MonAn[]).slice(0, 5));
  const [idDangKeo, setIdDangKeo] = useState<string | null>(null);
  const [idViTriTha, setIdViTriTha] = useState<string | null>(null);
  const [thongBao, setThongBao] = useState('');

  function baoViTri(ds: MonAn[], id: string) {
    const viTri = ds.findIndex((m: MonAn) => m.id === id);
    const mon = ds[viTri];
    if (mon) {
      setThongBao('Đã chuyển ' + mon.ten + ' đến vị trí ' + (viTri + 1));
    }
  }

  function handleDragStart(e: DragEvent<HTMLLIElement>, id: string) {
    setIdDangKeo(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id);
  }

  function handleDragOver(e: DragEvent<HTMLLIElement>, id: string) {
    e.preventDefault();
    if (id !== idViTriTha) setIdViTriTha(id);
  }

  function handleDrop(e: DragEvent<HTMLLIElement>, idDich: string) {
    e.preventDefault();
    if (idDangKeo === null || idDangKeo === idDich) return;
    const tu = dsMon.findIndex((m: MonAn) => m.id === idDangKeo);
    const den = dsMon.findIndex((m: MonAn) => m.id === idDich);
    if (tu < 0 || den < 0) return;
    const moi = diChuyen(dsMon, tu, den);
    setDsMon(moi);
    baoViTri(moi, idDangKeo);
  }

  function handleDragEnd() {
    setIdDangKeo(null);
    setIdViTriTha(null);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLLIElement>, viTri: number) {
    if (!e.altKey) return;
    const buoc = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
    if (buoc === 0) return;
    e.preventDefault();
    const den = viTri + buoc;
    if (den < 0 || den >= dsMon.length) return;
    const moi = diChuyen(dsMon, viTri, den);
    setDsMon(moi);
    const mon = dsMon[viTri];
    if (mon) {
      baoViTri(moi, mon.id);
    }
  }

  function handleXoa(id: string) {
    const mon = dsMon.find((m: MonAn) => m.id === id);
    setDsMon((truoc: MonAn[]) => truoc.filter((m: MonAn) => m.id !== id));
    if (mon) {
      setThongBao('Đã xoá ' + mon.ten + ' khỏi danh sách');
    }
  }

  return (
    <section className="lab">
      <h2>Lab 5 — Món Huế yêu thích của tôi</h2>
      <p className="goi-y-thao-tac">
        Kéo thả để sắp xếp, hoặc chọn một món rồi nhấn Alt + mũi tên lên/xuống.
      </p>

      <ol className="ds-mon-yeu-thich">
        {dsMon.map((mon: MonAn, viTri: number) => (
          <li
            key={mon.id}
            draggable
            tabIndex={0}
            onDragStart={(e) => handleDragStart(e, mon.id)}
            onDragOver={(e) => handleDragOver(e, mon.id)}
            onDrop={(e) => handleDrop(e, mon.id)}
            onDragEnd={handleDragEnd}
            onKeyDown={(e) => handleKeyDown(e, viTri)}
            className={
              (mon.id === idDangKeo ? 'dang-keo ' : '') +
              (mon.id === idViTriTha && mon.id !== idDangKeo ? 'vi-tri-tha' : '')
            }
          >
            <span>{mon.ten}</span>
            <button
              aria-label={'Xoá ' + mon.ten}
              onClick={() => handleXoa(mon.id)}
              onKeyDown={(e) => e.stopPropagation()}
            >
              Xoá
            </button>
          </li>
        ))}
      </ol>

      {/* Vùng thông báo cho trình đọc màn hình */}
      <p className="thong-bao" aria-live="polite">{thongBao}</p>
    </section>
  );
}


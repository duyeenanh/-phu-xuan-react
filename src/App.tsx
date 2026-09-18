// src/App.jsx
import BoCucTrang from "./components/BoCucTrang";
import DanhSach from "./components/DanhSach";
import TheDiaDanh from "./components/TheDiaDanh";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import { DANH_SACH_MON_AN } from "./du-lieu/monAn";
import "./App.css";

type MonAn = (typeof DANH_SACH_MON_AN)[number];

function App() {
  return (
    <BoCucTrang
      thanhDieuHuong="Du lịch Huế — phu-xuan-react"
      chanTrang={<span>© 2026 Nhóm Sinh viên — INT.7.18 ĐH Phú Xuân</span>}
      noiDungChinh={
        <>
          <h2>Địa danh nổi bật</h2>
          <div className="luoi-dia-danh">
            {DANH_SACH_DIA_DANH.map((dd) => (
              <TheDiaDanh
                key={dd.id}
                anh={dd.anh}
                ten={dd.ten}
                moTa={dd.moTa}
              />
            ))}
          </div>

          <h2 style={{ marginTop: "32px" }}>Ẩm thực (kiểu chữ đơn giản)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon: MonAn) => (
              <strong>{mon.ten} — {mon.gia.toLocaleString()}đ</strong>
            )}
          />

          <h2 style={{ marginTop: "24px" }}>Ẩm thực (kiểu có nút bấm)</h2>
          <DanhSach
            cacMuc={DANH_SACH_MON_AN}
            hienThiMuc={(mon: MonAn) => (
              <span>
                {mon.ten} <button style={{ marginLeft: "10px" }}>Đặt món</button>
              </span>
            )}
          />
        </>
      }
    />
  );
}

export default App;
// src/App.jsx
import { useState } from "react";
import BoCucTrang from "./components/BoCucTrang";
import The from "./components/The";
import TheDiaDanh from "./components/TheDiaDanh";
import TheDiaDanhForm from "./components/TheDiaDanhForm";
import HuyHieu from "./components/HuyHieu";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import "./App.css";

function App() {
  const [danhSach, setDanhSach] = useState(DANH_SACH_DIA_DANH);

  const handleThemDiaDanh = (diaDanhMoi) => {
    setDanhSach([diaDanhMoi, ...danhSach]);
  };

  return (
    <BoCucTrang
      thanhDieuHuong="Du lịch Huế — Lab 5 (Thành phần Huy hiệu)"
      chanTrang={<span>© 2026 Nhóm Sinh viên — INT.7.18 ĐH Phú Xuân</span>}
      noiDungChinh={
        <>
          {/* Dùng thử Component HuyHieu lần 1 */}
          <div style={{ marginBottom: "16px" }}>
            <span>Trạng thái trang: </span>
            <HuyHieu mau="do">Nổi bật</HuyHieu>
            <HuyHieu mau="xanh">Cố đô Huế</HuyHieu>
            <HuyHieu mau="vang">Mới cập nhật</HuyHieu>
          </div>

          <TheDiaDanhForm khiThem={handleThemDiaDanh} />

          <The tieuDe={`Danh sách Địa danh nổi bật (${danhSach.length})`}>
            <div className="luoi-dia-danh">
              {danhSach.map((dd, index) => (
                <div key={dd.id} style={{ position: "relative" }}>
                  {/* Dùng lại HuyHieu linh hoạt cho từng địa danh khác nhau */}
                  {index === 0 && <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1 }}><HuyHieu mau="do">Đặc biệt</HuyHieu></div>}
                  
                  <TheDiaDanh
                    anh={dd.anh}
                    ten={dd.ten}
                    moTa={dd.moTa}
                  />
                </div>
              ))}
            </div>
          </The>
        </>
      }
    />
  );
}

export default App;
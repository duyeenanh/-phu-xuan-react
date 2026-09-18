// src/App.jsx
import { useState } from "react";
import BoCucTrang from "./components/BoCucTrang";
import The from "./components/The";
import TheDiaDanh from "./components/TheDiaDanh";
import TheDiaDanhForm from "./components/TheDiaDanhForm";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import "./App.css";

function App() {
  const [danhSach, setDanhSach] = useState(DANH_SACH_DIA_DANH);

  const handleThemDiaDanh = (diaDanhMoi) => {
    setDanhSach([diaDanhMoi, ...danhSach]);
  };

  return (
    <BoCucTrang
      thanhDieuHuong="Du lịch Huế — Lab 4 (State & Form)"
      chanTrang={<span>© 2026 Nhóm Sinh viên — INT.7.18 ĐH Phú Xuân</span>}
      noiDungChinh={
        <>
          <TheDiaDanhForm khiThem={handleThemDiaDanh} />

          <The tieuDe={`Danh sách Địa danh nổi bật (${danhSach.length})`}>
            <div className="luoi-dia-danh">
              {danhSach.map((dd) => (
                <TheDiaDanh
                  key={dd.id}
                  anh={dd.anh}
                  ten={dd.ten}
                  moTa={dd.moTa}
                />
              ))}
            </div>
          </The>
        </>
      }
    />
  );
}

export default App;
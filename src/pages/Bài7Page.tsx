import '../styles/Bài7.css';
import ThuSuKien from '../components/Bài7/ThuSuKien';
import DanhSachDiaDanh from '../components/Bài7/DanhSachDiaDanh';
import KhamPhaDiaDanh from '../components/Bài7/KhamPhaDiaDanh';       // Thêm dòng này
import LuotThichMonAn from '../components/Bài7/LuotThichMonAn';       // Thêm dòng này

export default function Bài7Page() {
  return (
    <main className="trang-Bài7">
      <h1>Bài 7 — Quản lý sự kiện trong React</h1>
      <ThuSuKien />
      <DanhSachDiaDanh />
      <KhamPhaDiaDanh />       {/* Thêm dòng này */}
      <LuotThichMonAn />       {/* Thêm dòng này */}
    </main>
  );
}
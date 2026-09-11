import DiaDiem1 from "./components/DiaDiem1";
import DiaDiem2 from "./components/DiaDiem2";
import DiaDiem3 from "./components/DiaDiem3";
import { NhanTrangThai, demTongSoDiaDiem } from "./components/TienIch";

export default function App() {
  const danhSachTen = ["Đại Nội Huế", "Chợ Đông Ba", "Cầu Tràng Tiền"];
  const gioHienTaiLa8Gio = true;

  return (
    <div className="trang-chu" style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Danh sách địa điểm — phu-xuan-react</h1>
      <p>
        Tổng số địa điểm: {demTongSoDiaDiem(danhSachTen)}
        {" "}— <NhanTrangThai dangMoCua={gioHienTaiLa8Gio} />
      </p>

      <DiaDiem1 />
      <DiaDiem2 />
      <DiaDiem3 />
    </div>
  );
}
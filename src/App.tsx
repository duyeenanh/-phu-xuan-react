import TheDiaDanh from "./components/TheDiaDanh";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import "./App.css";

function App() {
  return (
    <div className="trang">
      <h1>Lab 1 — Danh sách địa danh Huế</h1>
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
    </div>
  );
}

export default App;
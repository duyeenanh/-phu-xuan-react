// src/App.jsx
import The from "./components/The";
import TheDiaDanh from "./components/TheDiaDanh";
import { DANH_SACH_DIA_DANH } from "./du-lieu/diaDanh";
import "./App.css";

function App() {
  return (
    <div className="trang" style={{ padding: "20px" }}>
      <h1>Khám phá Cố đô Huế</h1>

      {/* Sử dụng component The bao bọc danh sách địa danh */}
      <The tieuDe="Danh sách Địa danh nổi bật">
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
      </The>
    </div>
  );
}

export default App;
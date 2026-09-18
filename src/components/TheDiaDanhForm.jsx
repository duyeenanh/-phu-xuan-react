// src/components/TheDiaDanhForm.jsx
import { useState } from "react";

function TheDiaDanhForm({ khiThem }) {
  const [ten, setTen] = useState("");
  const [moTa, setMoTa] = useState("");
  const [anh, setAnh] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ten.trim()) return;

    khiThem({
      id: Date.now(),
      ten,
      moTa,
      anh: anh.trim() || "/images/dai-noi-hue.jpg",
    });

    setTen("");
    setMoTa("");
    setAnh("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "#f4f6f8", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
      <h3>Thêm địa danh mới</h3>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Tên địa danh:</label>
        <input 
          type="text" 
          value={ten} 
          onChange={(e) => setTen(e.target.value)} 
          placeholder="Nhập tên địa danh..." 
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Mô tả:</label>
        <input 
          type="text" 
          value={moTa} 
          onChange={(e) => setMoTa(e.target.value)} 
          placeholder="Nhập mô tả..." 
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Đường dẫn ảnh (ví dụ: /images/dai-noi-hue.jpg):</label>
        <input 
          type="text" 
          value={anh} 
          onChange={(e) => setAnh(e.target.value)} 
          placeholder="/images/..." 
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
      <button type="submit" style={{ background: "#1b2a4a", color: "#fff", padding: "10px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Thêm mới
      </button>
    </form>
  );
}

export default TheDiaDanhForm;
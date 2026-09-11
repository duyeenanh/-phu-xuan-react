export default function App() {
  return (
    // 1. Dùng Fragment (<>...</>) để bọc nhiều phần tử gốc song song (Tránh lỗi #1)
    <>
      {/* 4. Dùng style dạng object JavaScript chuẩn camelCase (Tránh lỗi #4) */}
      <h1 style={{ color: "teal", fontSize: "28px" }}>
        Phòng thí nghiệm JSX — phu-xuan-react
      </h1>

      <p>Buổi 4: Giới thiệu JSX</p>

      {/* 2. Thẻ img phải tự đóng bằng dấu /> (Tránh lỗi #2) */}
      {/* 3. Dùng className thay vì class (Tránh lỗi #3) */}
      <img 
        src="https://placeholder.co/80x80" 
        className="avatar" 
        alt="Avatar" 
      />
    </>
  );
}
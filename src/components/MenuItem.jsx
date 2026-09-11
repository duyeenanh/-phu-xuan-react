export default function MenuItem({ id, name, price, description, isSpicy, isFavorite, onToggleFavorite }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", margin: "10px 0", borderRadius: "6px" }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Giá: {price.toLocaleString("vi-VN")}đ</p>
      
      {/* Câu 3: Kết xuất có điều kiện */}
      {isSpicy && <span style={{ color: "red" }}>🌿 Món cay</span>}
      
      {/* Câu 5: Trạng thái yêu thích */}
      <div style={{ marginTop: "8px" }}>
        <button onClick={() => onToggleFavorite(id)}>
          {isFavorite ? "❤️ Đã thích" : "🤍 Thích"}
        </button>
      </div>
    </div>
  );
}
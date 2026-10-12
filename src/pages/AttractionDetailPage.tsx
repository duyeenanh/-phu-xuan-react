import { useParams } from "react-router";
// Giả sử bạn import danh sách di tích từ file data của features attractions
// import { ATTRACTIONS } from "../features/attractions/data";

export default function AttractionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  // Tìm di tích theo numericId (Thay thế bằng mảng dữ liệu thực tế của bạn)
  // const item = ATTRACTIONS.find(a => a.id === numericId);

  // Đoạn mã mẫu xử lý hiển thị:
  const item = numericId === 1 ? { ten: "Đại Nội Huế" } : null;

  if (!item) {
    return (
      <div>
        <h1>Không tìm thấy di tích</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.ten}</h1>
      <p>Chi tiết về địa danh...</p>
    </div>
  );
}
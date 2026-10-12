import { Link, useParams } from "react-router";
import { attractions } from "../data/attractions";

export default function AttractionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);
  const item = Number.isSafeInteger(numericId) && numericId > 0
    ? attractions.find((attraction) => attraction.id === numericId)
    : undefined;

  if (!item) {
    return (
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Không tìm thấy di tích</h1>
        <p>Địa điểm này không tồn tại hoặc đường dẫn không hợp lệ.</p>
        <Link to="/">Quay lại danh sách địa điểm</Link>
      </section>
    );
  }

  return (
    <article style={{ maxWidth: "900px", margin: "0 auto", padding: "1.5rem" }}>
      <Link to="/">← Quay lại danh sách địa điểm</Link>
      <h1>{item.title}</h1>
      <p style={{ marginBottom: "1rem" }}>{item.category}</p>
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{
          display: "block",
          width: "100%",
          maxHeight: "32rem",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "0.5rem",
        }}
      />
      <p style={{ marginTop: "1rem" }}>{item.description}</p>
    </article>
  );
}
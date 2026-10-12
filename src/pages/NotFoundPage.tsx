import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section
      aria-labelledby="not-found-title"
      style={{ padding: "3rem 1.5rem", textAlign: "center" }}
    >
      <h1 id="not-found-title">404 - Không tìm thấy trang</h1>
      <p>Đường dẫn bạn truy cập không tồn tại hoặc đã được thay đổi.</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.65rem 1rem",
          borderRadius: "0.375rem",
          backgroundColor: "#1d4ed8",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Quay về trang chủ
      </Link>
    </section>
  );
}
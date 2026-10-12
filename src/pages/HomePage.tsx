import { Link } from "react-router";
import { Card } from "../components/Card";
import { attractions } from "../data/attractions";
import "./HomePage.css";

export default function HomePage() {
  return (
    <section style={{ maxWidth: "1126px", margin: "0 auto", padding: "1.5rem" }}>
      <h1>Khám phá địa điểm du lịch Huế</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Chọn một địa điểm để xem thông tin chi tiết.
      </p>
      {attractions.length === 0 ? (
        <p>Hiện chưa có địa điểm du lịch nào.</p>
      ) : (
        <div className="attraction-grid">
          {attractions.map((attraction) => (
            <Link
              key={attraction.id}
              to={`/attractions/${attraction.id}`}
              aria-label={`Xem chi tiết ${attraction.title}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Card
                title={attraction.title}
                category={attraction.category}
                description={attraction.description}
                imageUrl={attraction.imageUrl}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
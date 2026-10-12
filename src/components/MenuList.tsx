interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  isSpicy: boolean;
}

interface MenuListProps {
  items: MenuItem[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

export default function MenuList({
  items,
  favoriteIds,
  onToggleFavorite,
}: MenuListProps) {
  return (
    <div>
      {items.map((item) => {
        const isFavorite = favoriteIds.includes(item.id);

        return (
          <article
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "6px",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Giá: {item.price.toLocaleString("vi-VN")}đ</p>
            {item.isSpicy && <span style={{ color: "red" }}>🌶️ Món cay</span>}
            <div style={{ marginTop: "8px" }}>
              <button
                type="button"
                onClick={() => onToggleFavorite(item.id)}
                aria-pressed={isFavorite}
              >
                {isFavorite ? "❤️ Đã thích" : "🤍 Thích"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
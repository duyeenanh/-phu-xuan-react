import { useState } from "react";
import { menuItems } from "./data/menu";
import MenuList from "./components/MenuList";

export default function App() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // Câu 6: Nâng State lên App và xử lý callback
  const handleToggleFavorite = (id: number) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Thực đơn Ẩm thực Huế</h1>
      <p>
        <strong>Số món đã yêu thích: {favoriteIds.length}/{menuItems.length}</strong>
      </p>
      
      <MenuList 
        items={menuItems} 
        favoriteIds={favoriteIds} 
        onToggleFavorite={handleToggleFavorite} 
      />
    </div>
  );
}
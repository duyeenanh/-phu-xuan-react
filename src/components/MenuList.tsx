import MenuItem from "./MenuItem";

type MenuListProps = {
  items: {
    id: number;
    name: string;
    price: number;
    description: string;
    isSpicy: boolean;
  }[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
};

export default function MenuList({ items, favoriteIds, onToggleFavorite }: MenuListProps) {
  return (
    <div>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          isSpicy={item.isSpicy}
          isFavorite={favoriteIds.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
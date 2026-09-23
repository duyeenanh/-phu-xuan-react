import { useState } from 'react';
import { tours } from '../../data/tours';
import { TourListView } from './TourListView';

export function TourListContainer() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [query, setQuery] = useState('');

  // Lọc kết hợp: theo giá VÀ theo từ khóa tên tour (không phân biệt hoa thường)
  const normalized = query.trim().toLowerCase();
  const filteredTours = tours
    .filter((t) => t.price >= minPrice && t.price <= maxPrice)
    .filter((t) =>
      normalized === '' ? true : t.name.toLowerCase().includes(normalized)
    );

  return (
    <TourListView
      filteredTours={filteredTours}
      totalCount={tours.length}
      minPrice={minPrice}
      maxPrice={maxPrice}
      query={query}
      onMinChange={setMinPrice}
      onMaxChange={setMaxPrice}
      onQueryChange={setQuery}
    />
  );
}
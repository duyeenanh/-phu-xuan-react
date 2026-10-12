import { useState } from 'react';
import StarRating from './StarRating.tsx';
import TicketCounter from './TicketCounter.tsx';
import type { DiaDanh } from '../types.ts';

interface AttractionCardProps {
  name: string;
  category: DiaDanh['loai'];
  description: string;
  rating: number;
}

export default function AttractionCard({
  name,
  category,
  description,
  rating,
}: AttractionCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite((previousValue) => !previousValue);
  }

  return (
    <div className="attraction-card">
      <button
        className={`attraction-card__favorite ${isFavorite ? 'is-active' : ''}`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu địa điểm'}
      </button>
      <div className="attraction-card__badge">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <StarRating />
      {name === 'Đại Nội Huế' && <TicketCounter price={150000} />}
      <span className="attraction-card__rating">⭐ {rating}</span>
    </div>
  );
}

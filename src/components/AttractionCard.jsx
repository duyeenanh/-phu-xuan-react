import { useState } from 'react';
import StarRating from './StarRating';
import TicketCounter from './TicketCounter';

function AttractionCard({ name, category, description, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev);
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

export default AttractionCard;
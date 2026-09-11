import { useState } from 'react';

function TicketCounter({ price }) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function handleIncrease() {
    setQuantity((prev) => Math.min(10, prev + 1));
  }

  const totalPrice = price * quantity;

  return (
    <div className="ticket-counter">
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
      <p>Tổng tiền: {totalPrice.toLocaleString('vi-VN')} đ</p>
    </div>
  );
}

export default TicketCounter;
import { useState } from 'react';

interface TicketCounterProps {
  price: number;
}

export default function TicketCounter({ price }: TicketCounterProps) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    setQuantity((previousValue) => Math.max(1, previousValue - 1));
  }

  function handleIncrease() {
    setQuantity((previousValue) => Math.min(10, previousValue + 1));
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

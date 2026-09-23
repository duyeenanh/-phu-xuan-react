type PriceFilterProps = {
  minPrice: number;
  maxPrice: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
};

export function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange }: PriceFilterProps) {
  return (
    <div className="price-filter" style={{ padding: '15px', border: '1px solid #ccc', margin: '15px 0', borderRadius: '8px' }}>
      <h3>Bộ lọc giá Tour Huế</h3>
      <label style={{ display: 'block', margin: '10px 0' }}>
        Từ:
        <input
          type="range"
          min={0}
          max={1000000}
          step={50000}
          value={minPrice}
          onChange={(e) => onMinChange(Number(e.target.value))}
          style={{ margin: '0 10px' }}
        />
        <span>{minPrice.toLocaleString()}đ</span>
      </label>
      <label style={{ display: 'block', margin: '10px 0' }}>
        Đến:
        <input
          type="range"
          min={0}
          max={1000000}
          step={50000}
          value={maxPrice}
          onChange={(e) => onMaxChange(Number(e.target.value))}
          style={{ margin: '0 10px' }}
        />
        <span>{maxPrice.toLocaleString()}đ</span>
      </label>
    </div>
  );
}
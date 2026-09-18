// src/components/HuyHieu.jsx
import "./HuyHieu.css";

function HuyHieu({ mau = "xanh", children }) {
  // Chọn class màu tương ứng với prop nhận vào
  const classNameMau = `huy-hieu huy-hieu--${mau}`;

  return (
    <span className={classNameMau}>
      {children}
    </span>
  );
}

export default HuyHieu;
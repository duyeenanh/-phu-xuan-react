// Named export #1: component nhỏ hiển thị nhãn trạng thái
export function NhanTrangThai({ dangMoCua }: { dangMoCua: boolean }) {
  return (
    <span style={{ color: dangMoCua ? "green" : "crimson", fontWeight: "bold" }}>
      {dangMoCua ? "• Đang mở cửa" : "• Đã đóng cửa"}
    </span>
  );
}


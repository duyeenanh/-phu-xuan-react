// Named export #1: component nhỏ hiển thị nhãn trạng thái
export function NhanTrangThai({ dangMoCua }) {
  return (
    <span style={{ color: dangMoCua ? "green" : "crimson", fontWeight: "bold" }}>
      {dangMoCua ? "• Đang mở cửa" : "• Đã đóng cửa"}
    </span>
  );
}

// Named export #2: hàm JavaScript thuần đếm số lượng địa điểm
export function demTongSoDiaDiem(danhSach) {
  return danhSach.length;
}
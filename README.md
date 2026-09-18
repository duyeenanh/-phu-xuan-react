## Lab 5 — Thành phần tái sử dụng (Huy hiệu / Badge)

### 1. Giới thiệu thành phần `HuyHieu`

- **Mục đích**: Xây dựng một component huy hiệu (badge) dùng chung để gắn các nhãn trạng thái như "Nổi bật", "Cố đô Huế", "Mới cập nhật" hoặc "Đặc biệt" lên các thành phần trong ứng dụng du lịch.
- **Lý do thiết kế (Props & Children)**:
  - Sử dụng **`prop` (`mau`)**: Giúp linh hoạt thay đổi màu sắc hiển thị của huy hiệu (ví dụ: đỏ cho nổi bật, xanh cho thông tin chung, vàng cho cập nhật mới). Điều này tuân thủ sơ đồ quyết định khi thành phần cần thay đổi giao diện/hành vi bên ngoài dựa trên cấu hình.
  - Sử dụng **`children`**: Cho phép truyền nội dung văn bản nhãn tùy ý vào bên trong thẻ `<HuyHieu>` mà không bị gò bó hay cứng nhắc nội dung, giúp tái sử dụng component này ở nhiều ngữ cảnh khác nhau với các tên gọi khác nhau.

### 2. Các vị trí tái sử dụng trong dự án

- **Lần 1**: Hiển thị nhóm trạng thái tổng quan ở đầu trang (`App.jsx`).
- **Lần 2**: Gắn nhãn "Đặc biệt" trực tiếp lên các thẻ địa danh nổi bật trong danh sách.

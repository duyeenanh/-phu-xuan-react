# Đặc tả tuyến (Routes) - Lab 1

| Đường dẫn          | Trang / thành phần   | Tiêu đề h1 phải có         | Ghi chú                      |
| :----------------- | :------------------- | :------------------------- | :--------------------------- |
| `/`                | HomePage             | Di tích Huế                | Liệt kê danh sách di tích    |
| `/attractions/:id` | AttractionDetailPage | tên di tích                | Chuyển đổi ID sang kiểu số   |
| `/attractions`     | Chuyển hướng về `/`  | (không có)                 | Dùng `Navigate`              |
| `/checkout`        | CheckoutPage         | Xác nhận đặt vé            | Yêu cầu `state.attractionId` |
| `/my-bookings`     | MyBookingsPage       | Lịch sử đặt vé             | Trang tĩnh                   |
| `/admin/login`     | AdminLoginPage       | Đăng nhập Quản trị         | Đăng nhập hệ thống           |
| `*`                | NotFoundPage         | 404 - Không tìm thấy trang | Tuyến bắt lỗi 404            |

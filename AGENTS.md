# AI Agent Guidelines - Phú Xuân React Project

## Quy tắc mã nguồn
1. **Ngôn ngữ**: Đồng nhất sử dụng TypeScript (`.ts` và `.tsx`). Không tạo mới các tệp `.js` hoặc `.jsx`.
2. **Kiến trúc**: Tuân thủ Feature-based Architecture. Mọi tính năng mới phải đặt trong `src/features/<tên-feature>/`.
3. **Quản lý Tiện ích**: Các hàm dùng chung đặt tại `src/utils/` và bắt buộc export qua `src/utils/index.ts` (Barrel Export).
4. **Kiểm tra kiểu dữ liệu**: Đảm bảo chạy `npm run typecheck` hoặc `npx tsc --noEmit` không phát sinh lỗi trước khi commit.

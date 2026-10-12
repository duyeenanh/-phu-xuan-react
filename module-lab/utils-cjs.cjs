// Hàm 1: định dạng ngày tháng kiểu Việt Nam
function formatDate(date) {
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

// Hàm 2: rút ngắn chuỗi nếu quá dài
function truncate(str, maxLength = 50) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}

// Hàm 3: tạo slug từ tiêu đề bài viết
function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // thay khoảng trắng bằng dấu -
    .replace(/[^\w\-]+/g, ''); // xoá ký tự đặc biệt
}

// XUẤT: gán vào module.exports (CommonJS)
module.exports = { formatDate, truncate, toSlug };
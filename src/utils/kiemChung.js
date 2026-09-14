export function kiemChungForm(values) {
  let errors = {};

  // Kiểm tra tên địa danh: bắt buộc và tối thiểu 3 ký tự
  if (!values.tenDiaDanh.trim()) {
    errors.tenDiaDanh = 'Tên địa danh không được để trống.';
  } else if (values.tenDiaDanh.trim().length < 3) {
    errors.tenDiaDanh = 'Tên địa danh phải có ít nhất 3 ký tự.';
  }

  // Kiểm tra mô tả: tối thiểu 10 ký tự nếu có nhập
  if (values.moTa && values.moTa.trim().length < 10) {
    errors.moTa = 'Mô tả chi tiết phải có ít nhất 10 ký tự.';
  }

  return errors;
}
import { useState } from 'react';

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('CHO'); // 'CHO', 'DANG_GUI', 'THANH_CONG', 'LOI'

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'tienIch') {
        const list = [...(values.tienIch || [])];
        if (checked) list.push(value);
        else {
          const idx = list.indexOf(value);
          if (idx > -1) list.splice(idx, 1);
        }
        setValues({ ...values, tienIch: list });
      } else {
        setValues({ ...values, [name]: checked });
      }
    } else {
      setValues({ ...values, [name]: value });
    }

    // Tự động kiểm tra lỗi khi người dùng đang nhập nếu đã validate
    if (validate) {
      setErrors(validate({ ...values, [name]: type === 'checkbox' ? checked : value }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    if (validate) {
      setErrors(validate(values));
    }
  }

  function handleSubmit(callback) {
    return function(e) {
      e.preventDefault();
      
      // Đánh dấu đã chạm tất cả các trường
      const allTouched = Object.keys(initialValues).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      setTouched(allTouched);

      const validationErrors = validate ? validate(values) : {};
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        setStatus('LOI');
        return;
      }

      setStatus('DANG_GUI');
      // Gọi callback truyền vào khi submit thành công
      if (callback) callback(values);
    };
  }

  return {
    values,
    errors,
    touched,
    status,
    setStatus,
    handleChange,
    handleBlur,
    handleSubmit
  };
}
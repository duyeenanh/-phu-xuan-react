import { useRef, useEffect, useState } from 'react';

function TimMonAn() {
  const oTimKiemRef = useRef(null);
  const [tuKhoa, setTuKhoa] = useState("");
  
  const soLanRenderRef = useRef(0);
  soLanRenderRef.current = soLanRenderRef.current + 1;
  console.log('TimMonAn đã render:', soLanRenderRef.current, 'lần');

  useEffect(() => {
    oTimKiemRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={oTimKiemRef}
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Tìm bún bò, cơm hến, bánh bèo..."
      />
      <p>Đã render {soLanRenderRef.current} lần</p>
    </div>
  );
}

export default TimMonAn;
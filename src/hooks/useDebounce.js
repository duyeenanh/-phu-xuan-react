import { useState, useEffect } from 'react';

function useDebounce(giaTri, doTre) {
  const [giaTriDaTre, setGiaTriDaTre] = useState(giaTri);

  useEffect(() => {
    const handler = setTimeout(() => {
      setGiaTriDaTre(giaTri);
    }, doTre);

    return () => {
      clearTimeout(handler);
    };
  }, [giaTri, doTre]);

  return giaTriDaTre;
}

export default useDebounce;
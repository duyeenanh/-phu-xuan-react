import DanhSach from '../../../components/DanhSach.tsx';
import { formatTicketPrice } from '../../../lib/formatTicketPrice.ts';
import { useAttractionsStore } from '../store.ts';

export default function AttractionCatalog() {
  const { attractions } = useAttractionsStore();

  return (
    <DanhSach
      cacMuc={attractions}
      layKhoa={(item) => item.id}
      hienThi={(item) => (
        <div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
          <strong>{item.ten}</strong> - <em>{item.loai}</em> ({formatTicketPrice(item.giaVe)} đ)
        </div>
      )}
      khiRong={<p>Không có địa danh nào để hiển thị.</p>}
    />
  );
}

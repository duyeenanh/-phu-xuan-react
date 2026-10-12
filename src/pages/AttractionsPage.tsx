import AttractionCatalog from '../features/attractions/components/AttractionCatalog.tsx';

export default function AttractionsPage() {
  return (
    <main className="app" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Lab 5 - Thành phần Generic DanhSach&lt;T&gt;</h1>
      <h2>Danh Sách Địa Danh</h2>
      <AttractionCatalog />
    </main>
  );
}

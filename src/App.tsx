import TrangThemDiaDiem from './components/Bài8/TrangThemDiaDiem';

export default function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '15px', background: '#8b0000', color: 'white' }}>
        <h1>Cố Đô Huế — Ứng Dụng Quản Lý Du Lịch</h1>
      </header>

      <main style={{ padding: '20px' }}>
        {/* Gọi trang cha chứa toàn bộ Lab 5 (Lifting State Up & Preview) */}
        <TrangThemDiaDiem />
      </main>
    </div>
  );
}
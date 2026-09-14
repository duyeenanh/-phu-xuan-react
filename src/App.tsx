import ThemDiaDanhForm from './components/Bài8/ThemDiaDanhForm';

export default function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px', background: '#8b0000', color: 'white' }}>
        <h1>Cố Đô Huế — Quản Lý & Trải Nghiệm Du Lịch</h1>
        <p>Ứng dụng Frontend kết hợp Form có kiểm soát (Bài 8)</p>
      </header>

      <main style={{ padding: '20px' }}>
        {/* Hiển thị form Lab 1 & 2 vừa xây dựng */}
        <ThemDiaDanhForm />
      </main>
    </div>
  );
}
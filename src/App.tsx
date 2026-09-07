import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

function App() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const appTitle = import.meta.env.VITE_APP_TITLE;
  const version = import.meta.env.VITE_APP_VERSION;
  const isDev = import.meta.env.DEV; 
  const isProd = import.meta.env.PROD; 
  const mode = import.meta.env.MODE; 

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{appTitle} — v{version}</h1>
      <hr />
      <h2>Thông tin môi trường</h2>
      <table border={1} cellPadding={8}>
        <tbody>
          <tr><td>API URL</td><td><code>{apiUrl}</code></td></tr>
          <tr><td>Chế độ</td><td><code>{mode}</code></td></tr>
          <tr><td>Đang phát triển?</td><td>{isDev ? '✓ Có' : '✗ Không'}</td></tr>
          <tr><td>Đang production?</td><td>{isProd ? '✓ Có' : '✗ Không'}</td></tr>
        </tbody>
      </table>
      <hr />
      <h2>Kiểm tra bảo mật</h2>
      <p>
        DATABASE_URL (không có VITE_): {' '}
        <code>{String(import.meta.env.DATABASE_URL)}</code>
      </p>
      <p style={{ color: 'green' }}>
        Nếu thấy 'undefined' ở trên → Vite đã bảo vệ biến bí mật đúng cách ✓
      </p>

      <Header />
      <main>
        <WelcomeBanner />
        <PostCard />
      </main>
      <Footer />
    </div>
  )
}

export default App
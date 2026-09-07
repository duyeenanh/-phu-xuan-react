import { useEffect, useState } from 'react';
import { fetchPosts } from './services/post-service';
import PostCard from './components/PostCard';
import Header from './components/Header';
import Footer from './components/Footer';
import type { Post } from './types';

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Lỗi tải dữ liệu:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1, maxWidth: '800px', width: '100%', margin: '0 auto', padding: '2rem' }}>
        <h2>Danh sách bài viết</h2>
        <hr style={{ margin: '1rem 0' }} />

        {loading ? (
          <p>Đang tải dữ liệu từ API...</p>
        ) : (
          posts.map(post => <PostCard key={post.id} post={post} />)
        )}
      </main>

      <Footer />
    </div>
  );
}
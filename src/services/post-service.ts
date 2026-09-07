import type { Post } from '../types';

export async function fetchPosts(): Promise<Post[]> {
  // Giả lập độ trễ mạng khi gọi API
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      title: 'Giới thiệu React và hệ sinh thái hiện đại',
      excerpt: 'Bài viết đầu tiên của phu-xuan-react giới thiệu các khái niệm cốt lõi.',
      content: 'Nội dung chi tiết về React, Vite và TypeScript...',
      authorId: 1,
      publishedAt: new Date().toISOString(),
      tags: ['react', 'javascript', 'frontend'],
    },
    {
      id: 2,
      title: 'Làm chủ TypeScript trong dự án thực tế',
      excerpt: 'Cách tối ưu hóa kiểu dữ liệu và cấu trúc interface rõ ràng.',
      content: 'Nội dung chi tiết về Type, Interface và Utility Types...',
      authorId: 1,
      publishedAt: new Date().toISOString(),
      tags: ['typescript', 'web'],
    },
  ];
}
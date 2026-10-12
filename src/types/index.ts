 feature/studio2
export interface DiaDanh {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}
 main
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  authorId: number;
  publishedAt: string;
  tags: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
}

feature/studio2
export type LoadingState = "idle" | "loading" | "success" | "error";
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
main
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
// src/types/index.ts

export type DiaDanh = {
  id: number;
  ten: string;
  loai?: "Di tích" | "Cảnh quan" | "Ẩm thực";
  giaVe?: number;
  moTa: string;
  anh: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};
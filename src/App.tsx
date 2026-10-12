import { Card } from "./components/Card";

function App() {
  const sampleCards = [
    {
      id: 1,
      title: "Đại Nội Huế",
      category: "Di tích lịch sử",
      description: "Quần thể di tích Cố đô Huế mang đậm nét kiến trúc triều Nguyễn lâu đời và cổ kính.",
      imageUrl: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Chùa Thiên Mụ",
      category: "Tâm linh",
      description: "Ngôi chùa cổ kính nằm bên bờ sông Hương thơ mộng, biểu tượng tâm linh của xứ Huế.",
      imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Biển Thuận An",
      category: "Danh lam thắng cảnh",
      description: "Bãi biển hoang sơ tuyệt đẹp thích hợp cho các hoạt động vui chơi, nghỉ dưỡng mùa hè.",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
          Khám Phá Địa Điểm Du Lịch - Buổi 13
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Thực hành React 19: Xây dựng Reusable Components với Props & TypeScript
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCards.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
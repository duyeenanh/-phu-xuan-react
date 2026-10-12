import { Card } from "./components/Card";

function App() {
  const sampleCards = [
    {
      id: 1,
      title: "Đại Nội Huế",
      category: "Di tích lịch sử",
      description: "Quần thể di tích Cố đô Huế mang đậm nét kiến trúc triều Nguyễn lâu đời và cổ kính.",
      imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Meridian_Gate%2C_Hue_%28I%29.jpg/960px-Meridian_Gate%2C_Hue_%28I%29.jpg"
    },
    {
      id: 2,
      title: "Chùa Thiên Mụ",
      category: "Tâm linh",
      description: "Ngôi chùa cổ kính nằm bên bờ sông Hương thơ mộng, biểu tượng tâm linh của xứ Huế.",
      imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Hue_Vietnam_Thien-Mu-Temple-and-Pagoda-01.jpg/960px-Hue_Vietnam_Thien-Mu-Temple-and-Pagoda-01.jpg"
    },
    {
      id: 3,
      title: "Biển Thuận An",
      category: "Danh lam thắng cảnh",
      description: "Bãi biển hoang sơ tuyệt đẹp thích hợp cho các hoạt động vui chơi, nghỉ dưỡng mùa hè.",
      imageUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Thu%E1%BA%ADn_An_Beach%2C_Hu%E1%BA%BF%2C_Vietnam.jpg/960px-Thu%E1%BA%ADn_An_Beach%2C_Hu%E1%BA%BF%2C_Vietnam.jpg"
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
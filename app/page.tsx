export default function Home() {
  // 仮の商品データ
  const products = [
    {
      id: 1,
      name: "Leather Wallet",
      price: 12000,
      image: "/sample1.jpg",
    },
    {
      id: 2,
      name: "Handmade Bag",
      price: 28000,
      image: "/sample2.jpg",
    },
    {
      id: 3,
      name: "Small Coin Case",
      price: 6000,
      image: "/sample3.jpg",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* ブランド名 */}
      <h1 className="text-4xl font-bold mb-10 tracking-wide">Myshop</h1>

      {/* 商品一覧 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-gray-600 mt-1">¥{product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// app/page.tsx

import Link from "next/link";

export default function Home() {
  // ★ 今は仮データ。後で Supabase に置き換える。
  const products = [
    {
      id: 1,
      name: "Handmade Leather Wallet",
      price: 18000,
      image: "/sample1.jpg",
    },
    {
      id: 2,
      name: "Leather Card Case",
      price: 8000,
      image: "/sample2.jpg",
    },
    {
      id: 3,
      name: "Coin Purse",
      price: 6000,
      image: "/sample3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-8 px-6 text-center border-b border-gray-200">
        <h1 className="text-3xl font-light tracking-wide">Myshop</h1>
      </header>

      {/* Product Section */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-lg font-medium mb-6 text-gray-700 tracking-wide">
          PRODUCTS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <div className="group cursor-pointer">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3">
                  <p className="font-medium text-gray-900">{p.name}</p>
                  <p className="text-gray-600">¥{p.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

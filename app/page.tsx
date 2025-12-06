// app/page.tsx
import Link from "next/link";

export default function Home() {
  // ここは後で Supabase などに置き換え可能
  const products = [
    {
      id: "1",
      name: "Handmade Leather Wallet",
      price: 18000,
      image: "/sample1.jpg",
    },
    {
      id: "2",
      name: "Leather Card Case",
      price: 8000,
      image: "/sample2.jpg",
    },
    {
      id: "3",
      name: "Coin Purse",
      price: 6000,
      image: "/sample3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <header className="py-6 px-6 border-b border-gray-200">
        <h1 className="text-3xl font-light tracking-wide">Myshop</h1>
      </header>

      {/* Product Section */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-lg font-medium mb-6 tracking-wide">
          PRODUCTS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <div className="group cursor-pointer">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-base font-medium">{p.name}</h3>
                <p className="text-gray-500">{p.price.toLocaleString()}円</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

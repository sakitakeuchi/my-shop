// app/products/[id]/page.tsx

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

// 仮データ（後でDBに置き換え可能）
const dummyProducts: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Handmade Leather Wallet",
    price: 18000,
    description: "丁寧に手縫いされた本革財布。使うほどに深みが出ます。",
    image: "/sample1.jpg",
  },
  "2": {
    id: "2",
    name: "Leather Card Case",
    price: 8000,
    description: "ミニマルなデザインのカードケース。",
    image: "/sample2.jpg",
  },
  "3": {
    id: "3",
    name: "Coin Purse",
    price: 6000,
    description: "コンパクトで使いやすいコインパース。",
    image: "/sample3.jpg",
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = dummyProducts[params.id];

  if (!product) {
    return <div className="p-10 text-center">商品が見つかりません。</div>;
  }

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
      <p className="text-lg text-gray-600 mb-4">
        {product.price.toLocaleString()}円
      </p>

      <p className="text-base leading-relaxed">{product.description}</p>
    </main>
  );
}

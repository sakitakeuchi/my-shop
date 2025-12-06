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

export default function Page({ params }: { params: { id: string } }) {
  return <pre>{JSON.stringify(params, null, 2)}</pre>;
}

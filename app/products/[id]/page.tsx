// app/products/[id]/page.tsx

import React from "react";

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
  
  // return <div>id = {params.id}</div>;

  const product = dummyProducts[params.id];

  if (!product) {
    return <div>商品が見つかりません。ID: {params.id}</div>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h1 style={{ marginTop: "20px", fontSize: "28px" }}>{product.name}</h1>

      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        ¥{product.price.toLocaleString()}
      </p>

      <p style={{ marginTop: "20px", lineHeight: 1.8 }}>{product.description}</p>
    </div>
  );
}

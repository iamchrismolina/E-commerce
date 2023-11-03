import { useState } from "react";
import { usePurchase } from "../context/PurchaseContext.tsx";
import { useCart } from "../context/CartContext.tsx";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  fill: boolean;
};

type ProductsProps = {
  products: ProductProps[];
};

const Products = ({ products }: ProductsProps) => {
  const { setPurchase } = usePurchase();
  const { addToCart } = useCart();
  const [render, setRender] = useState(false);

  const toggleRating = (product: ProductProps) => {
    setRender(!render);
    product.fill = !product.fill;
    product.rating.rate = product.fill
      ? Math.round((product.rating.rate + 0.1) * 10) / 10
      : Math.round((product.rating.rate - 0.1) * 10) / 10;
  };

  const toggleCount = (product: ProductProps) => {
    product.rating.count -= 1;
  };

  return products.map((product) => (
    <div
      key={product.id}
      className="p-2 border-2 max-w-xs h-96 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center "
    >
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 "
              />
            )}
          </div>
          <div className="card-back text-sm">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <h2 className="underline">{product.title}</h2>
      <p>Price: ${product.price}</p>
      <span>Category: {product.category}</span>
      <div className="flex justify-around w-full">
        <span className="flex">
          Rating: {product.rating.rate}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={product.fill ? "black" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer border-2 border-black"
            onClick={() => {
              toggleRating(product);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </span>
        <span>Count: {product.rating.count}</span>
      </div>
      <span className="cursor-pointer p-2">
        <div
          className="border-4 border-red-500 rounded-lg relative w-36 h-8 flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
          onClick={() => {
            toggleCount(product);
            addToCart(product);
            setPurchase((prev) => prev + 1);
          }}
        >
          <span className="text-white font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
            Add Item
          </span>
          <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <svg
              className="svg w-8 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </div>
      </span>
    </div>
  ));
};

export default Products;

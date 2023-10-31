import { useEffect, useState } from "react";
import Banner from "../components/Banner.tsx";
import Categories from "../components/Categories.tsx";
import fakestoreAPI from "../api/fakestoreAPI.tsx";

const Home = () => {
  const [productsAll, setProductsAll] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fakestoreAPI();
        setProductsAll(data);
        console.log(productsAll);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="m-auto container">
      <Banner />
      <Categories />
      <div className="grid place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-center">
        {productsAll.map((product) => (
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
              <span>Rating: {product.rating.rate}</span>
              <span>Count: {product.rating.count}</span>
            </div>
            <span className="cursor-pointer">
              <a
                className="rounded-lg  relative w-36 h-8 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                href="{{ route('process.create') }}"
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
              </a>
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

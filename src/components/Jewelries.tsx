import { useEffect, useState } from "react";
import { getProductsJewelries } from "../api/fakestoreAPI.tsx";
import Spinner from "./spinner/Spinner.tsx";
import Products from "./Products.tsx";
import { useSearch } from "../context/SearchContext.tsx";

const Jewelries = () => {
  const cachedData = localStorage.getItem("cachedProductsJewelries");
  const [productsJewelries, setProductsJewelries] = useState(
    cachedData ? JSON.parse(cachedData) : []
  );
  const [loading, setLoading] = useState(true);
  const { search } = useSearch();

  useEffect(() => {
    localStorage.setItem(
      "cachedProductsJewelries",
      JSON.stringify(productsJewelries)
    );
  }, [productsJewelries]);

  useEffect(() => {
    if (productsJewelries.length === 0) {
      const fetchData = async () => {
        try {
          const data = await getProductsJewelries();
          setProductsJewelries(data);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();
    } else if (cachedData) {
      setLoading(false);
    }
  }, []);

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
    quantity: number;
  };

  const searchData: ProductProps[] = productsJewelries.filter(
    (product: ProductProps) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    }
  );

  return (
    <div
      className={`${
        loading ? "flex h-96" : "grid"
      } place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-center`}
    >
      {loading ? (
        <Spinner />
      ) : (
        <Products
          products={searchData}
          setProductsOneForAll={setProductsJewelries}
        />
      )}
    </div>
  );
};

export default Jewelries;

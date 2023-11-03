import { useEffect, useState } from "react";
import { getProductsAll } from "../api/fakestoreAPI.tsx";
import Spinner from "./spinner/Spinner.tsx";
import Products from "./Products.tsx";
import { useSearch } from "../context/SearchContext.tsx";

const All = () => {
  const [productsAll, setProductsAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useSearch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsAll();
        setProductsAll(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
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
  };

  const searchData: ProductProps[] | undefined = productsAll.filter(
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
      {loading ? <Spinner /> : <Products products={searchData} />}
    </div>
  );
};

export default All;

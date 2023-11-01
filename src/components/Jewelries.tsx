import { useEffect, useState } from "react";
import { getProductsJewelries } from "../api/fakestoreAPI.tsx";
import Spinner from "./spinner/spinner.tsx";
import Products from "./Products.tsx";

const Jewelries = () => {
  const [productsJewelries, setProductsJewelries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <div
      className={`${
        loading ? "flex h-96" : "grid"
      } place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-center`}
    >
      {loading ? <Spinner /> : <Products products={productsJewelries} />}
    </div>
  );
};

export default Jewelries;

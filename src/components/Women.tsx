import { useEffect, useState } from "react";
import { getProductsWomen } from "../api/fakestoreAPI.tsx";
import Spinner from "./spinner/spinner.tsx";
import Products from "./Products.tsx";

const Women = () => {
  const [productsWomen, setProductsWomen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsWomen();
        setProductsWomen(data);
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
      {loading ? <Spinner /> : <Products products={productsWomen} />}
    </div>
  );
};

export default Women;

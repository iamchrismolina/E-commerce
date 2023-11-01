import { useEffect, useState } from "react";
import { getProductsMens } from "../api/fakestoreAPI.tsx";
import Spinner from "./spinner/spinner.tsx";
import Products from "./Products.tsx";

const Mens = () => {
  const [productsMens, setProductsMens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsMens();
        setProductsMens(data);
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
      {loading ? <Spinner /> : <Products products={productsMens} />}
    </div>
  );
};

export default Mens;

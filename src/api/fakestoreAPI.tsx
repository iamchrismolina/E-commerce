const apiEndpoint = "https://fakestoreapi.com";

const getProductsAll = async () => {
  try {
    const res = await fetch(`${apiEndpoint}/products`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getProductsAll };

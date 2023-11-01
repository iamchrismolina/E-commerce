const apiEndpoint = "https://fakestoreapi.com";

const getProductsAll = async () => {
  try {
    const res = await fetch(`${apiEndpoint}/products?sort=desc`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getProductsMens = async () => {
  try {
    const res = await fetch(`${apiEndpoint}/products/category/men's clothing`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getProductsWomen = async () => {
  try {
    const res = await fetch(
      `${apiEndpoint}/products/category/women's clothing`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getProductsJewelries = async () => {
  try {
    const res = await fetch(`${apiEndpoint}/products/category/jewelery`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getProductsElectronics = async () => {
  try {
    const res = await fetch(`${apiEndpoint}/products/category/electronics`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export {
  getProductsAll,
  getProductsMens,
  getProductsWomen,
  getProductsJewelries,
  getProductsElectronics,
};

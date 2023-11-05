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

const initializeCount = (product: ProductProps, cart: ProductProps[]) => {
  if (product.rating.count == 0) {
    alert("Max item count exceeded!");
    return false;
  } else if (cart.includes(product)) {
    return false;
  } else {
    product.rating.count -= 1;
    return true;
  }
};

export { initializeCount };

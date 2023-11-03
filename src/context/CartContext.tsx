import { createContext, useContext, useState, ReactNode } from "react";

type productProps = {
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
  quantity: number;
};

type CartContextProps = {
  toggleCart: boolean;
  setToggleCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: productProps[];
  // setCart: React.Dispatch<React.SetStateAction<productProps[]>>;
  addToCart: (product: productProps) => void;
  addQuantity: (product: productProps) => boolean;
  deductQuantity: (product: productProps) => boolean;
  // confirmRemove: (answer: boolean) => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState<productProps[]>([]);
  const [render, setRender] = useState(false);

  const addToCart = (product: productProps) => {
    if (cart.includes(product)) {
      // product.quantity += 1;
      alert("Item already in cart!");
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  const addQuantity = (product: productProps) => {
    if (product.rating.count <= 0) {
      alert("Product quantity exceeded product count");
      return false;
    } else {
      // setRender is useful for realtime reflection of value
      setRender(!render);
      product.quantity += 1;
      product.rating.count -= 1;
      return true;
    }
  };

  const deductQuantity = (product: productProps) => {
    if (product.quantity <= 1) {
      // pass product reference to function for removal
      alert("Do you want to remove the item?");
      // const answer = confirmRemove();
      return false;
    } else {
      setRender(!render);
      product.quantity -= 1;
      product.rating.count += 1;
      return true;
    }
  };

  // const confirmRemove = (answer: boolean) => {};

  return (
    <CartContext.Provider
      value={{
        toggleCart,
        setToggleCart,
        cart,
        addToCart,
        addQuantity,
        deductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

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
};

type CartContextProps = {
  toggleCart: boolean;
  setToggleCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: productProps[];
  // setCart: React.Dispatch<React.SetStateAction<productProps[]>>;
  addToCart: (product: productProps) => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState<productProps[]>([]);

  const addToCart = (product: productProps) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider
      value={{ toggleCart, setToggleCart, cart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCard must be used within a CartProvider");
  }
  return context;
};

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
  fill: boolean;
};

type ProductContextProps = {
  rating: boolean;
  // setRating: React.Dispatch<React.SetStateAction<boolean>>;
  // setFill: React.Dispatch<React.SetStateAction<boolean>>;
  toggleRating: (product: productProps) => void;
};

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [rating, setRating] = useState(false);

  const toggleRating = (product: productProps) => {
    setRating(!rating);
    product.fill = rating;
  };

  return (
    <ProductContext.Provider value={{ rating, toggleRating }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a CartProvider");
  }
  return context;
};

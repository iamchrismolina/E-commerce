import { useEffect } from "react";
import { createContext, useContext, useState, ReactNode } from "react";
import { useWarning } from "../context/WarningContext.tsx";
import { useTotalAmount } from "../context/TotalAmountContext.tsx";
import { usePurchaseCount } from "../context/PurchaseCountContext.tsx";

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
  fill: boolean;
};

type CartContextProps = {
  toggleCart: boolean;
  setToggleCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: productProps[];
  // setCart: React.Dispatch<React.SetStateAction<productProps[]>>;
  addToCart: (product: productProps) => void;
  addQuantity: (product: productProps) => boolean;
  deductQuantity: (product: productProps) => boolean;
  updatedProductCount: {
    productId: number;
    productFill: boolean;
    productCount: number;
  } | null;
  setUpdatedProductCount: React.Dispatch<
    React.SetStateAction<{
      productId: number;
      productFill: boolean;
      productCount: number;
    } | null>
  >;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

interface UpdatedProductCountProps {
  productId: number;
  productFill: boolean;
  productCount: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState<productProps[]>([]);
  const [productToRemove, setProductToRemove] = useState<productProps | null>(
    null
  );
  const { setDisplayWarning, userResponse, setUserResponse } = useWarning();
  const { setTotalAmount } = useTotalAmount();
  const { setPurchaseCount } = usePurchaseCount();
  const [updatedProductCount, setUpdatedProductCount] =
    useState<UpdatedProductCountProps | null>(null);

  const addToCart = (product: productProps) => {
    if (cart.includes(product)) {
      alert("Item already in cart!");
      return false;
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
      const updatedProduct = {
        ...product,
        quantity: product.quantity + 1,
        rating: { ...product.rating, count: product.rating.count - 1 },
      };

      const updatedCart = cart.map((item) =>
        item.id === product.id ? updatedProduct : item
      );

      setCart(updatedCart);
      setUpdatedProductCount({
        productId: updatedProduct.id,
        productFill: updatedProduct.fill,
        productCount: updatedProduct.rating.count,
      });
      return true;
    }
  };

  const deductQuantity = (product: productProps) => {
    if (product.quantity <= 1) {
      setDisplayWarning(true);
      setProductToRemove(product);
      return false;
    } else {
      const updatedProduct = {
        ...product,
        quantity: product.quantity - 1,
        rating: { ...product.rating, count: product.rating.count + 1 },
      };
      const updatedCart = cart.map((item) =>
        item.id === product.id ? updatedProduct : item
      );
      setCart(updatedCart);
      setUpdatedProductCount({
        productId: updatedProduct.id,
        productFill: updatedProduct.fill,
        productCount: updatedProduct.rating.count,
      });
      return true;
    }
  };

  useEffect(() => {
    if (userResponse === true && productToRemove) {
      const updatedCart = removeProduct(productToRemove);
      setCart(updatedCart);
      setPurchaseCount((prevValue) => prevValue - 1);
      setProductToRemove(null);
    }
    setUserResponse(false);
  }, [userResponse]);

  const removeProduct = (removeProduct: productProps) => {
    const removeProductPrice: number = removeProduct.price;
    const updatedCart = cart.filter(
      (product) => product.id != removeProduct.id
    );
    setTotalAmount((prevValue) =>
      Number((prevValue - removeProductPrice).toFixed(2))
    );
    setUpdatedProductCount({
      productId: removeProduct.id,
      productFill: removeProduct.fill,
      productCount: removeProduct.rating.count + 1,
    });
    return updatedCart;
  };

  return (
    <CartContext.Provider
      value={{
        toggleCart,
        setToggleCart,
        cart,
        // setCart,
        addToCart,
        addQuantity,
        deductQuantity,
        updatedProductCount,
        setUpdatedProductCount,
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

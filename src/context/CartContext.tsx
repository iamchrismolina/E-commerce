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
  fill: boolean;
  quantity: number;
};

type CartContextProps = {
  toggleCart: boolean;
  setToggleCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: productProps[];
  setCart: React.Dispatch<React.SetStateAction<productProps[]>>;
  addToCart: (product: productProps) => boolean;
  addQuantity: (product: productProps) => boolean;
  deductQuantity: (product: productProps) => boolean;
  updatedProduct: {
    productId: number;
    productFill: boolean;
    productRate: number;
    productCount: number;
    productQuantity: number;
  } | null;
  setUpdatedProduct: React.Dispatch<
    React.SetStateAction<{
      productId: number;
      productRate: number;
      productCount: number;
      productFill: boolean;
      productQuantity: number;
    } | null>
  >;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

interface UpdatedProductProps {
  productId: number;
  productRate: number;
  productCount: number;
  productFill: boolean;
  productQuantity: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [toggleCart, setToggleCart] = useState(false);
  const cachedData = localStorage.getItem("cachedCart");
  const [cart, setCart] = useState<productProps[]>(
    cachedData ? JSON.parse(cachedData) : []
  );
  const [productToRemove, setProductToRemove] = useState<productProps | null>(
    null
  );
  const { setDisplayWarning, userResponse, setUserResponse } = useWarning();
  const { setTotalAmount } = useTotalAmount();
  const { setPurchaseCount } = usePurchaseCount();
  const [updatedProduct, setUpdatedProduct] =
    useState<UpdatedProductProps | null>(null);

  useEffect(() => {
    localStorage.setItem("cachedCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: productProps) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already in cart!");
      return false;
    } else {
      const updatedProduct = {
        ...product,
        rating: {
          ...product.rating,
          count: product.rating.count - 1,
        },
        quantity: 1,
      };

      setCart((prevCart) => {
        return [...prevCart, updatedProduct];
      });

      // To be able to access the latest data as possible
      setUpdatedProduct(() => {
        return {
          productId: updatedProduct.id,
          productRate: updatedProduct.rating.rate,
          productCount: updatedProduct.rating.count,
          productFill: updatedProduct.fill,
          productQuantity: updatedProduct.quantity,
        };
      });

      return true;
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

      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? updatedProduct : item
        );
        return updatedCart;
      });

      setUpdatedProduct(() => ({
        productId: updatedProduct.id,
        productRate: updatedProduct.rating.rate,
        productCount: updatedProduct.rating.count,
        productFill: updatedProduct.fill,
        productQuantity: updatedProduct.quantity,
      }));

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
      setUpdatedProduct({
        productId: updatedProduct.id,
        productRate: updatedProduct.rating.rate,
        productCount: updatedProduct.rating.count,
        productFill: updatedProduct.fill,
        productQuantity: updatedProduct.quantity,
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

  const removeProduct = (productToRemove: productProps) => {
    const updatedCart = cart.filter(
      (product) => product.id != productToRemove.id
    );
    setCart(updatedCart);

    const productToRemovePrice = productToRemove.price;
    setTotalAmount((prevValue) =>
      Number((prevValue - productToRemovePrice).toFixed(2))
    );

    setUpdatedProduct({
      productId: productToRemove.id,
      productRate: productToRemove.rating.rate,
      productCount: productToRemove.rating.count + 1,
      productFill: productToRemove.fill,
      productQuantity: 0,
    });

    return updatedCart;
  };

  return (
    <CartContext.Provider
      value={{
        toggleCart,
        setToggleCart,
        cart,
        setCart,
        addToCart,
        addQuantity,
        deductQuantity,
        updatedProduct,
        setUpdatedProduct,
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

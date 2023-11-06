import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type TotalAmountContextProps = {
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
  addOnTotalAmount: (productPrice: number) => void;
  deductOnTotalAmount: (productPrice: number) => void;
};

const TotalAmountContext = createContext<TotalAmountContextProps | undefined>(
  undefined
);

type TotalAmountProvider = {
  children: ReactNode;
};

export const TotalAmountProvider = ({ children }: TotalAmountProvider) => {
  const cachedData = localStorage.getItem("cachedTotalAmount");
  const [totalAmount, setTotalAmount] = useState(
    cachedData ? JSON.parse(cachedData) : 0
  );

  useEffect(() => {
    localStorage.setItem("cachedTotalAmount", JSON.stringify(totalAmount));
  }, [totalAmount]);

  const addOnTotalAmount = (productPrice: number) => {
    const currentTotalPrice = totalAmount + productPrice;
    const roundedPrice = Number(currentTotalPrice.toFixed(2));
    setTotalAmount(roundedPrice);
  };

  const deductOnTotalAmount = (productPrice: number) => {
    const currentTotalPrice = totalAmount - productPrice;
    const roundedPrice = Number(currentTotalPrice.toFixed(2));
    setTotalAmount(roundedPrice);
  };

  return (
    <TotalAmountContext.Provider
      value={{
        totalAmount,
        setTotalAmount,
        addOnTotalAmount,
        deductOnTotalAmount,
      }}
    >
      {children}
    </TotalAmountContext.Provider>
  );
};

export const useTotalAmount = () => {
  const context = useContext(TotalAmountContext);
  if (context === undefined) {
    throw new Error(
      "useTotalAmount must be used within a TotalAmountContextProvider"
    );
  }
  return context;
};

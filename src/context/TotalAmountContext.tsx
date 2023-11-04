import { createContext, useContext, useState, ReactNode } from "react";

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
  const [totalAmount, setTotalAmount] = useState(0);

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

import { createContext, useContext, useState, ReactNode } from "react";

type PurchaseContextProps = {
  purchase: number;
  setPurchase: React.Dispatch<React.SetStateAction<number>>;
};

const PurchaseContext = createContext<PurchaseContextProps | undefined>(
  undefined
);

type PurchaseProviderProps = {
  children: ReactNode;
};

export const PurchaseProvider = ({ children }: PurchaseProviderProps) => {
  const [purchase, setPurchase] = useState(0);

  return (
    <PurchaseContext.Provider value={{ purchase, setPurchase }}>
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => {
  const context = useContext(PurchaseContext);
  if (context === undefined) {
    throw new Error("usePurchase must be used within a PurchaseProvider");
  }
  return context;
};

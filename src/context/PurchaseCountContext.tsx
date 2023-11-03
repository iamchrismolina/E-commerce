import { createContext, useContext, useState, ReactNode } from "react";

type PurchaseCountContextProps = {
  purchaseCount: number;
  setPurchaseCount: React.Dispatch<React.SetStateAction<number>>;
};

const PurchaseCountContext = createContext<
  PurchaseCountContextProps | undefined
>(undefined);

type PurchaseCountProviderProps = {
  children: ReactNode;
};

export const PurchaseCountProvider = ({
  children,
}: PurchaseCountProviderProps) => {
  const [purchaseCount, setPurchaseCount] = useState(0);

  return (
    <PurchaseCountContext.Provider value={{ purchaseCount, setPurchaseCount }}>
      {children}
    </PurchaseCountContext.Provider>
  );
};

export const usePurchaseCount = () => {
  const context = useContext(PurchaseCountContext);
  if (context === undefined) {
    throw new Error(
      "usePurchase must be used within a PurchaseContextProvider"
    );
  }
  return context;
};

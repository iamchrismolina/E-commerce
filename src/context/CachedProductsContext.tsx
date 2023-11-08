import { createContext, useContext, useState, ReactNode } from "react";

type CachedProductsContextProps = {
  cachedProductsCategory: string | null;
  setCachedProductsCategory: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};

const CachedProductsContext = createContext<CachedProductsContextProps | null>(
  null
);

type CachedProductsProviderProps = {
  children: ReactNode;
};

export const CachedProductsProvider = ({
  children,
}: CachedProductsProviderProps) => {
  const [cachedProductsCategory, setCachedProductsCategory] = useState<
    string | null
  >(null);

  return (
    <CachedProductsContext.Provider
      value={{ cachedProductsCategory, setCachedProductsCategory }}
    >
      {children}
    </CachedProductsContext.Provider>
  );
};

export const useCachedProducts = () => {
  const context = useContext(CachedProductsContext);
  if (context == undefined) {
    throw new Error("useCachedProducts must be used within a CartProvider");
  }

  return context;
};

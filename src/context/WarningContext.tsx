import { createContext, useContext, useState, ReactNode } from "react";

type WarningContextProps = {
  displayWarning: boolean;
  setDisplayWarning: React.Dispatch<React.SetStateAction<boolean>>;
  userResponse: boolean;
  setUserResponse: React.Dispatch<React.SetStateAction<boolean>>;
};

const WarningContext = createContext<WarningContextProps | undefined>(
  undefined
);

type WarningProvider = {
  children: ReactNode;
};

export const WarningProvider = ({ children }: WarningProvider) => {
  const [displayWarning, setDisplayWarning] = useState(false);
  const [userResponse, setUserResponse] = useState(false);

  return (
    <WarningContext.Provider
      value={{
        displayWarning,
        setDisplayWarning,
        userResponse,
        setUserResponse,
      }}
    >
      {children}
    </WarningContext.Provider>
  );
};

export const useWarning = () => {
  const context = useContext(WarningContext);
  if (context === undefined) {
    throw new Error("useWarning must be used within a WarningProvider");
  }
  return context;
};

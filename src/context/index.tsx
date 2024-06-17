"use client";

import {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextType {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const AppContext = createContext({} as ContextType);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <AppContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

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
  cartItems: any;
  setCartItems: Dispatch<SetStateAction<any>>;
  showNavbar: boolean;
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext({} as ContextType);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<any>({});
  const [showNavbar, setShowNavbar] = useState(false)


  return (
    <AppContext.Provider
      value={{
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
        showNavbar,
        setShowNavbar
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

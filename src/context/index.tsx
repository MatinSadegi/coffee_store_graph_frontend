"use client";

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { addToCartHandler, getCart } from "../services/cartServices";
import { CartData } from "../types/types";

interface ContextType {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  cartItems: any;
  setCartItems: Dispatch<SetStateAction<any>>;
  addToCart: (formData: CartData) => Promise<void>;
  loading: boolean;
}

const AppContext = createContext({} as ContextType);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<any>({});

  const addToCart = async (formData: CartData) => {
    setLoading(true);
    await addToCartHandler(formData);
  };
  useEffect(() => {
    async function fetchCart() {
      const cartProducts = await getCart();
      setCartItems(cartProducts);
      setLoading(false);
    }
    fetchCart();
  }, [loading]);
  return (
    <AppContext.Provider
      value={{
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
        addToCart,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

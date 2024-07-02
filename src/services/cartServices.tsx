import axios from "axios";
import { FormDataProps } from "../types/types";
import { app } from "../api/axios";

export async function addToCartHandler(formData: FormDataProps) {
  const { data } = await axios.post(
    `https://coffee-store-graph-backend.onrender.com/api/cart/add-to-cart`,
    formData,
    { withCredentials: true }
  );
  return data;
}
export async function getCart() {
  const res = await fetch(
    `https://coffee-store-graph-backend.onrender.com/api/cart`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await res.json();
  return data;
}

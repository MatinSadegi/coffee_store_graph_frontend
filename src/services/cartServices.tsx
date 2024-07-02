import axios from "axios";
import { FormDataProps } from "../types/types";
import { app } from "../api/axios";

export async function addToCartHandler(formData: FormDataProps) {
  const { data } = await axios.post(
    `http://localhost:5000/api/cart/add-to-cart`,
    formData,
    { withCredentials: true }
  );
  return data;
}
export async function getCart() {
  const res = await fetch(`http://localhost:5000/api/cart`, {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

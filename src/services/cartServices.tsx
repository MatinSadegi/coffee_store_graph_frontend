import axios from "axios";
import { CartData } from "../types/types";
import { app } from "../api/axios";
// import { cookies } from "next/headers";
// const cookieStore = cookies();
// const theme = cookieStore.get("connect.sid");

export async function addToCartHandler(formData: CartData) {
  // const { data } = await app.post(
  //   `http://localhost:5000/api/cart/add-to-cart`,
  //   formData
  // );
  // return data;
  const res = await fetch(`http://localhost:5000/api/cart/add-to-cart`, { 
    method: "POST",
    credentials: "include",
    body:JSON.stringify(formData),
    headers: {
      'Content-Type':'application/json'
    },
  });
  const data = await res.json()
  return data;
}
export async function getCart() {
  const res = await fetch(`http://localhost:5000/api/cart`, {
    method: "GET",
    credentials: "include",
    // headers: {
    //   Cookie: `${theme?.name}=${theme?.value}`,
    // },
  });
  const data = await res.json()
  return data;
}
 
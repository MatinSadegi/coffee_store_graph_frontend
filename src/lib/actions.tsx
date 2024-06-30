"use server";

import { addToCartHandler } from "@/src/services/cartServices";
import { cookies } from "next/headers";
import { CartData } from "../types/types";






export async function addToCart(formData: CartData) {
  const pop = cookies().getAll();
  addToCartHandler(formData);
}




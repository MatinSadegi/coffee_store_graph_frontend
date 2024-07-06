"use server";

import { addToCartHandler } from "@/src/services/cartServices";
import { cookies } from "next/headers";
import { FormDataProps } from "../types/types";

export async function addToCart(formData: FormDataProps) {
  const pop = cookies().getAll();
  addToCartHandler(formData);
}

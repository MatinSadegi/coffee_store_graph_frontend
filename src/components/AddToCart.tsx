"use client";
import React, { useState } from "react";
import { addToCartHandler } from "../services/cartServices";
import Image from "next/image";
import DropDown from "./DropDown";
import minusIcon from "@/public/icons/minus-svgrepo-com.svg";
import plusIcon from "@/public/icons/plus-svgrepo-com.svg";
import grayMinusIcon from "@/public/icons/minus-gray.svg";
import { useAppContext } from "../context";
import ButtonSpinner from "@/src/components/spinner/index";


interface AddToCartProps {
  category: string;
  productId: string;
  inStock:number;
}

const AddToCart = ({ category, productId,inStock }: AddToCartProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart,loading } = useAppContext();
  const formData = {
    count: quantity,
    productId,
  };
 

  return (
    <div className=" flex flex-col">
      <div className=" flex items-center gap-4 mb-9">
        <div className=" shadow py-3 w-fit bg-gray-200  flex items-center h-full px-3  rounded outline-gray-500 outline-offset-1">
          <Image
            //   src={count === 1 ? grayMinusIcon : minusIcon}
            src={minusIcon}
            alt="minus-icon"
            className=" cursor-pointer"
            onClick={() => {
              if (quantity === 1) {
                setQuantity(1);
              } else {
                setQuantity(quantity - 1);
              }
            }}
          />
          <span className=" px-4 font-semibold text-base text-orange">
            {quantity}
          </span>
          <Image
            src={plusIcon}
            alt="plus-icon"
            className=" cursor-pointer"
              onClick={() => {
                if (quantity === inStock) {
                  setQuantity(inStock);
                  // toast.error("this product out of stock");
                } else {
                  setQuantity(quantity + 1);
                }
              }}
          />
        </div>
      </div>
      <button className=" w-44 h-12 px-2 primary-button relative" onClick={()=>addToCart(formData)} >
        {loading ? <ButtonSpinner/> : "افزودن به سبد خرید"}
         
      </button>
    </div>
  );
};

export default AddToCart;

'use client'
import React, { useState } from "react";
import Image from "next/image";
import DropDown from "./DropDown";
import minusIcon from "@/public/icons/minus-svgrepo-com.svg";
import plusIcon from "@/public/icons/plus-svgrepo-com.svg";
import grayMinusIcon from "@/public/icons/minus-gray.svg";

interface AddToCartProps {
  category: string;
  productId :string
}

const AddToCart = ({ category,productId }: AddToCartProps) => {
  const size = ["500گرم", "1کیلوگرم"];
  const [quantity, setQuantity] = useState(1);
  const [addToCartItems, setAddToCartItems] = useState({
    id: productId,
  });
  return (
    <div className=" flex flex-col">
      {category === "قهوه های خارجی" ? (
        <DropDown items={size} trigger="مقدار" />
      ) : category === "قهوه های خارجی" ? (
        <DropDown items={size} trigger="مقدار" />
      ) : (
        ""
      )}
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
            //   onClick={() => {
            //     if (quantity === count[state + ""]) {
            //       setQuantity(count[state + ""]);
            //       toast.error("this product out of stock");
            //     } else {
            //       setQuantity(quantity + 1);
            //     }
            //   }}
          />
        </div>
      </div>
      <button className=" w-44 px-2 primary-button">افزودن به سبد خرید</button>
    </div>
  );
};

export default AddToCart;

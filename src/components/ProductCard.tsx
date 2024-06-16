import React from "react";
import Image from "next/image";
import productImg from "@/public/images/9140d669006593.5b719df26abdb.jpg";
import { BNazaninFont } from "../utils/fronts";

interface ProductCardProps {
  title: string;
  price: number[];
  imageUrl: string;
}

const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
  console.log(imageUrl)
  return (
    <div
      className={`text-center  flex flex-col items-center border-b border-l py-6 px-3 cursor-pointer transition-all hover:shadow-xl `}
    >
      <Image
        src={`http://localhost:5000/${imageUrl}`}
        alt="product-img"
        width={160}
        height={160}
      />
      <p className=" mt-3">{title}</p>
      <p className={`text-primary-600 ${BNazaninFont.className} text-xl font-bold mt-1`}>{price[0]} تومان</p>
    </div>
  );
};

export default ProductCard;

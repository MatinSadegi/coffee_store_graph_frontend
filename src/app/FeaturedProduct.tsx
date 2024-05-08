import React from "react";
import { NastaligFont } from "../utils/fronts";
import Image from "next/image";
import product from "@/public/images/earlybird-coffee-mSjTAV7JuV4-unsplash.jpg";

const FeaturedProduct = () => {
  return (
    <div className=" flex flex-col items-center py-14 mx-auto mb-14 w-[1300px]">
      <p className=" text-primary-600">
        انتخاب ما از قهوه ها و محصولات ویژه را بررسی کنید
      </p>
      <h2 className={`${NastaligFont.className} my-10`}>قهوه های ویژه گراف</h2>
      <div className="flex gap-5">
        <div className="flex flex-col text-center">
          <Image src={product} alt="product" width={350} />
          <p className="pt-3 pb-1 text-primary-600">بلند عربیکا</p>
          <p className=" ">20.000 ت</p>
        </div>
        <div className="flex flex-col text-center">
          <Image src={product} alt="product" width={350} />
          <p className="pt-3 pb-1 text-primary-600">بلند عربیکا</p>
          <p className=" ">25.000 ت</p>
        </div>
        <div className="flex flex-col text-center">
          <Image src={product} alt="product" width={350} />
          <p className="pt-3 pb-1 text-primary-600">بلند ربوستا</p>
          <p className=" ">15.000 ت</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

import React from "react";
import Image from "next/image";
import product from "@/public/images/earlybird-coffee-mSjTAV7JuV4-unsplash.jpg";
import basket from "@/public/icons/basket-svgrepo-com.svg";

const FeaturedProduct = () => {
  return (
    <div className=" flex flex-col items-center py-16 mx-auto  max-w-[1300px] px-8">
      <p className=" text-primary-600 text-center">
        انتخاب ما از قهوه ها و محصولات ویژه را بررسی کنید
      </p>
      <h3 className={` font-BNazanin my-8`}>قهوه های ویژه گراف</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center ">
        <div className="flex flex-col text-center cursor-pointer transition-all duration-500 group hover:-translate-y-2 relative ">
          <Image
            src={basket}
            alt="basket-icon"
            className=" absolute bg-primary-600 p-2.5 rounded-sm top-3 left-3  z-10 transition-all opacity-0 group-hover:opacity-100 hover:bg-black hover:rounded-tr-xl hover:rounded-bl-xl "
          />
          <div className=" bg-[rgba(0,0,0,0.2)] rounded">
            <Image
              src={product}
              alt="product"
              width={350}
              className=" rounded transition-all group-hover:opacity-70"
            />
          </div>
          <p className="pt-3 pb-1 text-primary-600">بلند عربیکا</p>
          <p className={` font-BNazanin text-lg`}>25.000 تومان</p>
        </div>
        <div className="flex flex-col text-center cursor-pointer transition-all duration-500 group hover:-translate-y-2 relative">
          <Image
            src={basket}
            alt="basket-icon"
            className=" absolute bg-primary-600 p-2.5 rounded-sm top-3 left-3  z-10 transition-all opacity-0 group-hover:opacity-100 hover:bg-black hover:rounded-tr-xl hover:rounded-bl-xl "
          />
          <div className=" bg-[rgba(0,0,0,0.2)] rounded">
            <Image
              src={product}
              alt="product"
              width={350}
              className=" rounded transition-all group-hover:opacity-70"
            />
          </div>
          <p className="pt-3 pb-1 text-primary-600">بلند عربیکا</p>
          <p className={` font-BNazanin text-lg`}>25.000 تومان</p>
        </div>
        <div className="flex flex-col text-center cursor-pointer transition-all duration-500 group hover:-translate-y-2 relative">
          <Image
            src={basket}
            alt="basket-icon"
            className=" absolute bg-primary-600 p-2.5 rounded-sm top-3 left-3  z-10 transition-all opacity-0 group-hover:opacity-100 hover:bg-black hover:rounded-tr-xl hover:rounded-bl-xl "
          />
          <div className=" bg-[rgba(0,0,0,0.2)] rounded">
            <Image
              src={product}
              alt="product"
              width={350}
              className=" rounded transition-all group-hover:opacity-70"
            />
          </div>
          <p className="pt-3 pb-1 text-primary-600">بلند عربیکا</p>
          <p className={` font-BNazanin text-lg`}>25.000 تومان</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

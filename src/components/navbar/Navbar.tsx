"use client";
import { useState} from "react";
import Image from "next/image";
import Links from "./links/Links";
import logo from "@/public/icons/graph-png-removebg.png";
import searchIcon from "@/public/icons/search-night.svg";
import cartIcon from "@/public/icons/cart-night.svg";
import hamburgerIcon from "@/public/icons/hamburger-4-svgrepo-com.svg";
import multiplyIcon from "@/public/icons/multiply-svgrepo-com(1).svg";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/src/services/cartServices";
import { useAppContext } from "@/src/context";


const Navbar = () => {

  const {showNavbar,setShowNavbar}= useAppContext()
  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });


  const router = useRouter();
  return (
    <nav className={` py-3 absolute  w-full bg-brown-700`}>
      <div className=" max-w-[1300px]  flex justify-between items-center text-black mx-auto px-8">
        <div className=" flex items-center lg:w-1/4 w-full justify-between ">
          <Image
            src={hamburgerIcon}
            alt="hamburger-icon"
            className=" lg:hidden cursor-pointer"
            onClick={() => setShowNavbar(true)}
          />
          <div className="flex items-center">
            <Image src={logo} alt="logo" width={50} height={50} priority />
            {/* <p
              className={`${pathName === "/" ? " text-black" : " text-white"} ${
                NastaligFont.className
              } text-xl pt-3`}
            >
              گراف
            </p> */}
          </div>
        </div>
        <div
          className={` flex flex-col bg-black z-50 justify-between py-28 items-center top-0 right-0 fixed h-screen w-[350px]  lg:static lg:flex-row lg:bg-transparent ${
            showNavbar ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 transition-all duration-500 lg:static lg:h-fit lg:py-0 lg:w-full`}
        >
          <Image
            src={multiplyIcon}
            alt="multiply-icon"
            className=" lg:hidden absolute top-4 right-4 cursor-pointer"
            onClick={() => setShowNavbar(false)}
          />
          <Links />
          <div className="flex lg:justify-end gap-5 order-first lg:order-last lg:w-1/3 ">
            <Image src={searchIcon} alt="search-icon" />
            <div
              className="relative cursor-pointer flex items-center"
              onClick={() => router.push("/cart")}
            >
              {data?.products && (
                <span className=" w-5 h-4 rounded-xl bg-primary-600 absolute top-1 -right-2.5 text-white text-center text-xs">
                   {data.countTotal }
                </span>
              )}

              <Image src={cartIcon} alt="cart-icon" />
            </div>
            <button className=" primary-button">ثبت نام</button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden fixed h-screen top-0 w-screen bg-[rgba(0,0,0,0.5)] z-40 ${
          showNavbar ? "block" : "hidden"
        }`}
      ></div>
    </nav>
  );
};

export default Navbar;

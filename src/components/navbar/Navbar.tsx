"use client";
import { useState } from "react";
import Image from "next/image";
import Links from "./links/Links";
import { usePathname } from "next/navigation";
import { NastaligFont } from "@/src/utils/fronts";
import logo from "@/public/images/coffee-icon-png-13692.png";
import searchIcon from "@/public/icons/search-svgrepo-com (1).svg";
import searchIcon2 from "@/public/icons/search-night.svg";
import cartIcon from "@/public/icons/cart-1-svgrepo-com.svg";
import cartIcon2 from "@/public/icons/cart-night.svg";
import hamburgerIcon from "@/public/icons/hamburger-4-svgrepo-com.svg";
import multiplyIcon from "@/public/icons/multiply-svgrepo-com(1).svg";

const Navbar = () => {
  const pathName = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav
      className={` py-5  absolute  w-full ${
        pathName === "/" ? " bg-transparent" : " bg-brown-700"
      }`}
    >
      <div className=" max-w-[1300px]  flex justify-between items-center text-black mx-auto px-8">
        <div className=" flex items-center lg:w-1/4 w-full justify-between ">
          <Image
            src={hamburgerIcon}
            alt="hamburger-icon"
            className=" lg:hidden"
            onClick={() => setShowNavbar(true)}
          />
          <div className="flex items-center">
            <Image src={logo} alt="logo" width={50} height={30} />
            <p
              className={`${pathName === "/" ? " text-black" : " text-white"} ${
                NastaligFont.className
              } text-xl pt-3`}
            >
              گراف
            </p>
          </div>
        </div>
        <div
          className={` flex flex-col bg-white z-50 justify-between py-28 items-center top-0 right-0 fixed h-screen w-[350px]  lg:static lg:flex-row lg:bg-transparent ${
            showNavbar ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 transition-all duration-500 lg:static lg:h-fit lg:py-0 lg:w-full`}
        >
          <Image
            src={multiplyIcon}
            alt="multiply-icon"
            className=" lg:hidden absolute top-4 right-4"
            onClick={() => setShowNavbar(false)}
          />
          <Links showNavbar={showNavbar} />
          <div className="flex lg:justify-end gap-5 order-first lg:order-last lg:w-1/3 ">
            <Image
              src={pathName === "/" ? searchIcon : searchIcon2}
              alt="search-icon"
            />
            <Image
              src={pathName === "/" ? cartIcon : cartIcon2}
              alt="cart-icon"
            />
            <button className=" buttons">ثبت نام</button>
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

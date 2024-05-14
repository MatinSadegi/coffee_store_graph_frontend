"use client";
import Image from "next/image";
import logo from "@/public/images/coffee-icon-png-13692.png";
import searchIcon from "@/public/icons/search-svgrepo-com (1).svg";
import searchIcon2 from "@/public/icons/search-night.svg";
import cartIcon from "@/public/icons/cart-1-svgrepo-com.svg";
import cartIcon2 from "@/public/icons/cart-night.svg";
import Links from "./links/Links";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div
      className={`py-4 absolute  w-full ${
        pathName === "/" ? " bg-transparent" : " bg-brown-700"
      }`}
    >
      <div className=" w-[1300px] flex justify-between items-center text-black mx-auto ">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={50} height={30} />
          <h3 className={`${pathName === "/" ? " text-black" : " text-white"}`}>
            گراف
          </h3>
        </div>
        <Links />
        <div className="flex gap-5">
          <Image src={pathName === '/' ? searchIcon : searchIcon2} alt="search-icon" />
          <Image src={pathName === '/' ? cartIcon : cartIcon2} alt="cart-icon" /> 
          <button className=" buttons">ثبت نام</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

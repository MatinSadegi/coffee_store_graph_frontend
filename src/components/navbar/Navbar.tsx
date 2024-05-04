import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/coffee-icon-png-13692.png";
import searchIcon from "@/public/icons/search-svgrepo-com (1).svg";
import cartIcon from "@/public/icons/cart-1-svgrepo-com.svg";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[1300px] mx-auto pt-4">
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={50} height={30} />
        <h3>گراف</h3>
      </div>
        <Links/>
      <div className="flex gap-5">
        <Image src={searchIcon} alt="search-icon" />
        <Image src={cartIcon} alt="cart-icon" />
        <button className="  bg-primary-600 text-white py-2 px-6 rounded-sm">ثبت نام</button>
      </div>
    </div>
  );
};

export default Navbar;

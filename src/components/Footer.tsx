import React from "react";
import Image from "next/image";
import logo from "@/public/icons/graph-png-removebg.png";
import twitterIcon from "@/public/icons/twitter-svgrepo-com (1).svg";
import telegramIcon from "@/public/icons/telegram-svgrepo-com.svg";
import instagramIcon from "@/public/icons/instagram-svgrepo-com.svg";
import localFont from "next/font/local";

const BNazanin = localFont({ src: "../../public/fonts/B-NAZANIN.ttf" });


const Footer = () => {
  return (
    <footer className=" w-full bg-brown-700 py-10">
      <div className=" max-w-[1300px] px-8 flex flex-col gap-8 justify-between items-center mx-auto md:gap-0 md:flex-row">
        <div className=" order-last md:order-first flex flex-col items-center gap-5">
          <h5 className={` ${BNazanin.className}  text-primary-600`}>
            در صفحه ی مجازی مارو دنبال کنید
          </h5>
          <div className=" flex items-center gap-2">
            <Image
              src={twitterIcon}
              alt="twitter-icon"
              className=" bg-primary-600 rounded-full p-1.5"
            />
            <Image
              src={telegramIcon}
              alt="telegram-icon"
              className=" bg-primary-600 rounded-full p-1.5"
            />
            <Image
              src={instagramIcon}
              alt="instagram-icon"
              className=" bg-primary-600 rounded-full p-1.5"
            />
          </div>
        </div>

        <div className=" text-center">
          <h4 className={` ${BNazanin.className} text-primary-600`}>
            مجموعه
          </h4>
          <ul className=" pt-4 flex flex-col  space-y-2 text-white">
            <li>درباره ما</li>
            <li>قوانین و مقررات</li>
            <li>سوالات متداول</li>
          </ul>
        </div>
        <div className=" text-center">
          <h4 className={` ${BNazanin.className}  text-primary-600`}>
            سرویس ها
          </h4>
          <ul className=" pt-4 flex flex-col space-y-2 text-white">
            <li>فروشگاه گراف</li>
            <li>منوی گراف</li>
            <li>وبلاگ</li>
          </ul>
        </div>

        <div className=" text-center">
          <h4 className={` ${BNazanin.className} text-primary-600`}>
            ارتباط با ما
          </h4>
          <ul className=" pt-4 flex flex-col space-y-2 text-white">
            <li>شماره تماس : 12235878</li>
            <li>نشانی :آذربایجان غربی ، نقده ، خیابان مسافری</li>
            <li>ایمیل : grap@gmail.com</li>
            <li>اینستاگرام : coffeeStoreGraph</li>
          </ul>
        </div>
      </div>
      <div className="  flex flex-col mt-24 gap-6 items-center md:gap-0 md:items-end justify-between md:mt-8 px-10 md:flex-row">
        <span className=" text-white text-xs">
          © تمامی حقوق این وبسایت برای گراف محفوظ می‌باشد.
        </span>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="ml-0 md:ml-20 "
        />
        <span className=" text-white text-xs">prod. by Matin.Sadeghi</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import logo from "@/public/icons/graph-png-removebg.png";
import twitterIcon from '@/public/icons/twitter-svgrepo-com (1).svg'
import telegramIcon from '@/public/icons/telegram-svgrepo-com.svg'
import instagramIcon from '@/public/icons/instagram-svgrepo-com.svg'
import { NastaligFont } from "../utils/fronts";

const Footer = () => {
  return (
    <footer className=" w-full bg-brown-700 py-20">
      <div className=" max-w-[1200px] flex justify-between mx-auto">
        <div>
          <div className=" flex flex-col justify-center items-center mb-4">
            <Image src={logo} alt="logo" width={90} height={90} />
            {/* <h2 className={`${NastaligFont.className} text-white`}>گراف</h2> */}
          </div>
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
        <div>
          <h4 className={`${NastaligFont.className} text-primary-600`}>
            مجموعه
          </h4>
          <ul className=" pt-4 flex flex-col space-y-2 text-white">
            <li>درباره ما</li>
            <li>قوانین و مقررات</li>
            <li>سوالات متداول</li>
          </ul>
        </div>
        <div>
          <h4 className={`${NastaligFont.className}  text-primary-600`}>
            سرویس ها
          </h4>
          <ul className=" pt-4 flex flex-col space-y-2 text-white">
            <li>فروشگاه گراف</li>
            <li>منوی گراف</li>
            <li>وبلاگ</li>
          </ul>
        </div>
        <div>
          <h4 className={`${NastaligFont.className} text-primary-600`}>
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
    </footer>
  );
};

export default Footer;

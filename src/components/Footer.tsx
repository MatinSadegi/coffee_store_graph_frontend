import React from "react";
import Image from "next/image";
import logo from "@/public/images/coffee-icon-png-13692.png";
import twitterIcon from '@/public/icons/twitter-svgrepo-com (1).svg'
import telegramIcon from '@/public/icons/telegram-svgrepo-com.svg'
import instagramIcon from '@/public/icons/instagram-svgrepo-com.svg'
import { NastaligFont } from "../utils/fronts";

const Footer = () => {
  return (
    <footer className=" w-full bg-brown-700 py-20">
      <div className=" w-[1200px] flex justify-between mx-auto">
        <div>
          <div className=" flex items-center">
            <Image src={logo} alt="logo" width={50} height={30} />
            <h2 className={`${NastaligFont.className} text-white`}>گراف</h2>
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
          <h4 className={`${NastaligFont.className} text-white`}>مجموعه</h4>
          <ul className=" pt-4 flex flex-col space-y-2 text-primary-600">
            <li>درباره ما</li>
            <li>قوانین و مقررات</li>
            <li>سوالات متداول</li>
          </ul>
        </div>
        <div>
          <h4 className={`${NastaligFont.className} text-white`}>سرویس ها</h4>
          <ul className=" pt-4 flex flex-col space-y-2 text-primary-600">
            <li>فروشگاه</li>
            <li>منوی کافه</li>
            <li>وبلاگ</li>
          </ul>
        </div>
        <div>
          <h4 className={`${NastaligFont.className} text-white`}>
            ارتباط با ما
          </h4>
          <ul className=" pt-4 flex flex-col space-y-2 text-primary-600">
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

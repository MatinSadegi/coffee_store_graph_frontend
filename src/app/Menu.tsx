import React from "react";
import localFont from "next/font/local";

const BNazanin = localFont({ src: "../../public/fonts/B-NAZANIN.ttf" });

 
const Menu = () => {
  return ( 
    <div className=" relative z-40 hidden md:block ">
      <div className=" bg-menu-background  bg-cover  bg-center text-center py-16">
        <h2 className={` ${BNazanin.className} text-white `}>منوی گراف</h2>
        <div className="flex max-w-[1100px] px-8 mx-auto justify-between mt-16">
          <div className="flex flex-col w-44 md:w-52 space-y-8">
            <div className=" flex items-center justify-between">
              <div className=" text-right">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  اسپرسو
                </h4>
                <p className=" text-gray-500">اسپرسو و کرما</p>
              </div>
              <p
                className={`text-primary-600 text-xl  ${BNazanin.className}`}
              >
                50.000 ت
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  لاته
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  موکا
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  کاپوچینو
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
          </div>
          <div className="flex flex-col w-44 md:w-52 space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  شیک شکلات
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  شیک نوتلا
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  شیرموز
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  معجون
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
          </div>
          <div className="flex flex-col w-44 md:w-52 space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  هات چاکلت
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  هات نوتلا
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  چای ماسالا
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white   ${BNazanin.className}`}>
                  دمنوش
                </h4>
                <p
                  className={`text-primary-600 text-lg  ${BNazanin.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Menu;

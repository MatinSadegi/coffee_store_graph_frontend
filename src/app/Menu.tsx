import React from "react";
import { BNazaninFont, NastaligFont } from "../utils/fronts";

const Menu = () => {
  return (
    <div className=" relative z-40 hidden md:block ">
      <div className=" bg-menu-background  bg-cover  bg-center text-center py-16">
        <h2 className={`${BNazaninFont.className} text-white `}>منوی گراف</h2>
        <div className="flex max-w-[1100px] px-8 mx-auto justify-between mt-16">
          <div className="flex flex-col w-44 md:w-52 space-y-8">
            <div className=" flex items-center justify-between">
              <div className=" text-right">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  اسپرسو
                </h4>
                <p className=" text-gray-500">اسپرسو و کرما</p>
              </div>
              <p
                className={`text-primary-600 text-xl ${BNazaninFont.className}`}
              >
                50.000 ت
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  لاته
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  موکا
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  کاپوچینو
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
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
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  شیک شکلات
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  شیک نوتلا
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  شیرموز
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  معجون
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
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
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  هات چاکلت
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  هات نوتلا
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  چای ماسالا
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
                >
                  50.000 ت
                </p>
              </div>
              <p className=" text-gray-500 text-right">اسپرسو و کرما</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className={` text-white  ${BNazaninFont.className}`}>
                  دمنوش
                </h4>
                <p
                  className={`text-primary-600 text-lg ${BNazaninFont.className}`}
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

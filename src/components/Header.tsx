
import React from "react";
import { NastaligFont } from "../utils/fronts";

const Header = () => {

  return (
    <header className="  bg-header-background  bg-cover h-screen sm:bg-top sm:h-[80vh]">
      <div className=" max-w-[1300px] px-8 h-full  flex flex-col justify-end pt-9 pb-20 mx-auto sm:pb-0 sm:justify-center">
        <div className=" text-center sm:w-[50%] sm:text-right  ">
          <h1 className={` leading-relaxed ${NastaligFont.className}`}>
            تا زمانی که <span className=" text-primary-600">قهوه</span> در جهان
            وجود دارد <br />
            اوضاع مگر می‌شود بد باشد؟
          </h1>
          <p className=" mt-8 mb-12 text-gray-500">
            تامین کنندگان و تولیدکنندگانی که با آنها کار می کنیم در راس بازی خود
            هستند
            <br /> نقش ما این است که جادو را از دستان آنها به میز شما ببریم
          </p>
          <div className=" flex justify-center gap-4 sm:justify-start">
            <button className=" primary-button">فروشگاه گراف</button>
            <button className="white-button">منوی گراف</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

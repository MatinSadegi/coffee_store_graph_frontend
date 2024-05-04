import React from 'react'
import Navbar from './navbar/Navbar'
import localFont from "next/font/local";

const NastaligFont = localFont({
  src: "../../public/fonts/IranNastaliq.ttf",
});

const Header = () => {
  
  return (
    <header className="  bg-header-background bg-cover h-[80vh]">
      <Navbar />
      <div className="w-[1300px] mx-auto h-full flex flex-col justify-center">
        <h1 className={`text-[3rem] leading-relaxed ${NastaligFont.className}`}> 
          تا زمانی که قهوه در جهان وجود دارد <br />
          اوضاع مگر می‌شود بد باشد؟
        </h1>
        <p className=' mt-8 mb-12 text-gray-500'>
          تامین کنندگان و تولیدکنندگانی که با آنها کار می کنیم در راس بازی خود
          هستند<div className="br"></div> نقش ما این است که جادو را از دستان آنها به میز شما ببریم
        </p>
        <div className=" flex gap-4">
          <button className=" text-white bg-primary-600 rounded-sm px-5 py-2">
            فروشکاه
          </button>
          <button className=" text-primary-600 border border-primary-600 rounded-sm px-5 py-2">
            منوی گراف
          </button>
        </div>
      </div>
    </header>
  );
} 

export default Header
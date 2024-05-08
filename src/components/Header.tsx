import React from 'react'
import Navbar from './navbar/Navbar'
import { NastaligFont } from '../utils/fronts';



const Header = () => {
   
  return (
    <header className="  bg-header-background bg-cover h-[80vh]">
      <Navbar />
      <div className="w-[1300px] mx-auto h-full flex flex-col justify-center">
        <h1 className={` leading-relaxed ${NastaligFont.className}`}>
          تا زمانی که <span className=' text-primary-600'>قهوه</span> در جهان وجود دارد <br />
          اوضاع مگر می‌شود بد باشد؟
        </h1>
        <p className=" mt-8 mb-12 text-gray-500">
          تامین کنندگان و تولیدکنندگانی که با آنها کار می کنیم در راس بازی خود
          هستند
          <br /> نقش ما این است که جادو را از دستان آنها به میز شما ببریم
        </p>
        <div className=" flex gap-4">
          <button className=" buttons">فروشکاه</button>
          <button className=" text-primary-600 border border-primary-600 rounded-sm px-5 py-2">
            منوی گراف
          </button>
        </div>
      </div>
    </header>
  );
} 

export default Header
import React from "react";
import Image from "next/image";
import productImg from "@/public/images/9140d669006593.5b719df26abdb.jpg";
import DropDown from "@/src/components/DropDown";
import { BNazaninFont } from "@/src/utils/fronts";

const Product = () => {
  const size = ["500گرم", "1کیلوگرم"];
  return (
    <div className=" max-w-[1300px] px-8  mx-auto pt-44">
      <div className=" w-full gap-10 flex flex-col md:flex-row ">
        <div className="md:w-1/2">
          <Image src={productImg} alt="product-img" />
        </div>
        <div className="md:w-1/2 px-10 flex flex-col md:px-0 md:py-10">
          <h3 className={`${BNazaninFont.className} `}>
            {" "}
            قهوه کلمبیا 100% عربیکا
          </h3>
          <p className={`${BNazaninFont.className} mt-5 text-2xl`}>
            270.000 <span>تومان</span>{" "}
          </p>
          <p className=" my-6">
            قهوه کلمبیا دارک %۱۰۰عربیکا دارای برشتکاری (دارک)، اسیدیته یا ترشی
            متوسط ، غلظت متوسط و عطر بسیار زیاد و برای قهوه سازهای موکاپات،
            اسپرسو ساز مناسب است. کلمبیا سومین تولید کننده بزرگ قهوه عربیکا در
            جهان می باشد.
          </p>

          <DropDown items={size} trigger="مقدار" />
          <input
            type="number"
            className="border w-16 p-1.5 outline-none mt-6 mb-9"
            defaultValue={1}
          />
          <button className=" w-44 px-2 primary-button">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <div className=" w-full mt-32 mb-28">
        <h4 className=" text-center">اطلاعات تکمیلی</h4>
        <ul className="grid grid-cols-3 border-t mt-8 text-center">
          <li className=" flex flex-col py-8">
            <span className=" font-bold text-lg pb-1">خاستگاه</span>
            <span>کلمبیا</span>
          </li>
          <li className=" flex flex-col py-8">
            <span className=" font-bold text-lg pb-1">برشتکاری</span>
            <span>دارک</span>
          </li>
          <li className=" flex flex-col py-8">
            <span className=" font-bold text-lg pb-1">کافئین</span>
            <span>متوسط</span>
          </li>
          <li className=" flex flex-col">
            <span className=" font-bold text-lg pb-1">تلخی</span>
            <span>کم</span>
          </li>
          <li className=" flex flex-col">
            <span className=" font-bold text-lg pb-1">ترشی</span>
            <span>زیاد</span>
          </li>
          <li className=" flex flex-col">
            <span className=" font-bold text-lg pb-1">وسیله دم آوری</span>
            <span>کمکس ، V60 ، موکاپات ، دستگاه خانگی </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import Image from "next/image";
import offerImg1 from "@/public/images/alexander-schimmeck-18YAaOcqA8o-unsplash.jpg";
import offerImg2 from "@/public/images/mike-kenneally-TD4DBagg2wE-unsplash.jpg";
import localFont from "next/font/local";

const BNazanin = localFont({ src: "../public/fonts/B-NAZANIN.ttf" });


const Offer = () => {
  return (
    <div className=" flex flex-col mx-auto items-center py-16 max-w-[1300px] px-8 bg-primary-400 md:bg-white  ">
      <h3 className={` ${BNazanin.className} text-center`}>
        ما انتخاب گسترده ای از ترکیبات را برای پر کردن فنجان شما ارائه می دهیم
      </h3>
      <div className=" mt-10 flex flex-wrap sm:flex-nowrap gap-5 md:gap-10 items-center justify-center">
        <div className=" flex flex-col items-center">
          <Image
            src={offerImg1}
            alt="cofee"
            className=" w-[170px] h-[170px] md:w-[220px] md:h-[220px] rounded-full"
          />
          <p
            className={` mt-6 mb-3  ${BNazanin.className} font-bold text-lg`}
          >
            بلند عربیکا
          </p>
          <p className=" text-primary-600">برو به منو</p>
        </div>
        <div className=" flex flex-col items-center">
          <Image
            src={offerImg2}
            alt="cofee"
            className="w-[170px] h-[170px] md:w-[220px] md:h-[220px] rounded-full"
          />
          <p
            className={` mt-6 mb-3  ${BNazanin.className} font-bold text-lg`}
          >
            بلند ربوستا
          </p>
          <p className=" text-primary-600">برو به منو</p>
        </div>
        <div className=" flex flex-col items-center">
          <Image
            src={offerImg1}
            alt="cofee"
            className=" w-[170px] h-[170px] md:w-[220px] md:h-[220px] rounded-full"
          />
          <p
            className={` mt-6 mb-3  ${BNazanin.className} font-bold text-lg`}
          >
            بلند عربیکا
          </p>
          <p className=" text-primary-600">برو به منو</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
